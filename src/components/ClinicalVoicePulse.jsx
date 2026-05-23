import { useEffect, useRef, useState } from 'react';

const PARTICLE_COUNT = 76;
const MAX_DPR = 2;

const colors = {
  ink: 'rgba(8, 40, 43, 1)',
  inkSoft: 'rgba(18, 54, 56, 0.58)',
  sea: 'rgba(47, 116, 120, 0.7)',
  sage: 'rgba(111, 142, 127, 0.72)',
  gold: 'rgba(177, 132, 69, 0.62)',
  goldSoft: 'rgba(234, 216, 183, 0.48)',
};

function seeded(index, salt) {
  const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const layer = seeded(index, 7) > 0.82 ? 1 : 0;
    return {
      angle: seeded(index, 1) * Math.PI * 2,
      radius: 0.24 + seeded(index, 2) * 0.42 + layer * 0.1,
      speed: 0.035 + seeded(index, 3) * 0.05,
      size: 1.1 + seeded(index, 4) * 2.1,
      phase: seeded(index, 5) * Math.PI * 2,
      tone: seeded(index, 6),
      layer,
    };
  });
}

function ecgSignal(phase) {
  if (phase < 0.035) return -0.32 * (phase / 0.035);
  if (phase < 0.055) return -0.32 + 1.28 * ((phase - 0.035) / 0.02);
  if (phase < 0.08) return 0.96 - 1.54 * ((phase - 0.055) / 0.025);
  if (phase < 0.125) return -0.58 + 0.58 * ((phase - 0.08) / 0.045);
  return 0;
}

function drawWave(ctx, width, height, time, pointer) {
  const cx = width * 0.5;
  const cy = height * 0.52;
  const influence = pointer.strength;
  const amplitude = height * (0.035 + influence * 0.012);
  const ecgHeight = height * (0.07 + influence * 0.018);

  const layers = [
    { offset: -height * 0.028, alpha: 0.22, width: 1.1, color: colors.goldSoft, speed: 0.86 },
    { offset: 0, alpha: 0.62, width: 2.2, color: colors.inkSoft, speed: 1 },
    { offset: height * 0.03, alpha: 0.28, width: 1.4, color: colors.sage, speed: 1.12 },
  ];

  layers.forEach((layer) => {
    ctx.beginPath();
    for (let x = width * 0.08; x <= width * 0.92; x += 3) {
      const local = (x - cx) / (width * 0.42);
      const envelope = Math.max(0.18, 1 - local * local * 0.64);
      const phase = ((x / width) * 2.4 - time * 0.09 * layer.speed + 1) % 1;
      const wave =
        Math.sin(x * 0.026 + time * 1.08 * layer.speed) * amplitude * envelope +
        Math.sin(x * 0.011 - time * 0.62) * amplitude * 0.38;
      const ecg = ecgSignal(phase) * ecgHeight * envelope;
      const pointerLift = -Math.max(0, 1 - Math.abs(x - pointer.x) / (width * 0.28)) * influence * height * 0.014;
      const y = cy + layer.offset + wave + ecg + pointerLift;

      if (x === width * 0.08) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = layer.color.replace(/[\d.]+\)$/u, `${layer.alpha})`);
    ctx.lineWidth = layer.width;
    ctx.shadowColor = layer.color;
    ctx.shadowBlur = 14;
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
}

function drawScene(ctx, width, height, particles, pulses, pointer, now, reducedMotion) {
  const time = reducedMotion ? 0 : now * 0.001;
  const cx = width * 0.5;
  const cy = height * 0.52;
  const radiusX = width * 0.34;
  const radiusY = height * 0.28;

  ctx.clearRect(0, 0, width, height);

  const ambient = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.58);
  ambient.addColorStop(0, 'rgba(234, 216, 183, 0.28)');
  ambient.addColorStop(0.34, 'rgba(111, 142, 127, 0.16)');
  ambient.addColorStop(0.72, 'rgba(47, 116, 120, 0.055)');
  ambient.addColorStop(1, 'rgba(247, 242, 234, 0)');
  ctx.fillStyle = ambient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1.2, 0.46);
  ctx.strokeStyle = 'rgba(177, 132, 69, 0.16)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, 0, Math.min(width, height) * 0.45, 0, Math.PI * 2);
  ctx.stroke();
  ctx.rotate(-0.18);
  ctx.strokeStyle = 'rgba(111, 142, 127, 0.16)';
  ctx.beginPath();
  ctx.arc(0, 0, Math.min(width, height) * 0.34, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  particles.forEach((particle, index) => {
    const angle = particle.angle + time * particle.speed * (particle.layer ? -1 : 1);
    const drift = Math.sin(time * 0.6 + particle.phase) * 8;
    let x = cx + Math.cos(angle) * radiusX * particle.radius;
    let y = cy + Math.sin(angle * 1.18 + particle.phase * 0.12) * radiusY * particle.radius + drift;

    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const distance = Math.max(1, Math.hypot(dx, dy));
    const force = Math.max(0, 1 - distance / 190) * pointer.strength;
    const polarity = index % 3 === 0 ? -1 : 1;
    x += (dx / distance) * force * 22 * polarity;
    y += (dy / distance) * force * 14 * polarity;

    const alpha = 0.16 + seeded(index, 9) * 0.34 + force * 0.2;
    const color = particle.tone > 0.88 ? colors.gold : particle.tone > 0.48 ? colors.sage : colors.sea;
    ctx.beginPath();
    ctx.fillStyle = color.replace(/[\d.]+\)$/u, `${alpha})`);
    ctx.arc(x, y, particle.size * (1 + force * 0.55), 0, Math.PI * 2);
    ctx.fill();
  });

  drawWave(ctx, width, height, time, pointer);

  pulses.forEach((pulse) => {
    const progress = Math.min(1, Math.max(0, (now - pulse.startedAt) / 920));
    const opacity = (1 - progress) * 0.22;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(177, 132, 69, ${opacity})`;
    ctx.lineWidth = 1.2;
    ctx.arc(pulse.x, pulse.y, 24 + progress * Math.min(width, height) * 0.34, 0, Math.PI * 2);
    ctx.stroke();
  });

  const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.16);
  core.addColorStop(0, 'rgba(255, 253, 248, 0.92)');
  core.addColorStop(0.34, 'rgba(234, 216, 183, 0.42)');
  core.addColorStop(0.68, 'rgba(47, 116, 120, 0.18)');
  core.addColorStop(1, 'rgba(47, 116, 120, 0)');
  ctx.fillStyle = core;
  ctx.beginPath();
  ctx.arc(cx, cy, Math.min(width, height) * 0.15, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(8, 40, 43, 0.34)';
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(cx, cy, Math.min(width, height) * 0.062, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = 'rgba(8, 40, 43, 0.88)';
  ctx.beginPath();
  ctx.arc(cx, cy, Math.min(width, height) * 0.018, 0, Math.PI * 2);
  ctx.fill();
}

export default function ClinicalVoicePulse() {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext?.('2d', { alpha: true });

    if (!host || !canvas || !ctx) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const particles = createParticles();
    const pulses = [];
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, strength: 0, active: false };
    let width = 0;
    let height = 0;
    let frameId = 0;
    let isVisible = false;
    let reducedMotion = mediaQuery.matches;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = Math.max(320, rect.width);
      height = Math.max(260, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pointer.x = pointer.targetX || width * 0.5;
      pointer.y = pointer.targetY || height * 0.52;
      canvas.dataset.motion = reducedMotion ? 'reduced' : 'animated';
      drawScene(ctx, width, height, particles, pulses, pointer, 0, reducedMotion);
      setCanvasReady(true);
    };

    const stop = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const render = (now) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.09;
      pointer.y += (pointer.targetY - pointer.y) * 0.09;
      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.08;

      for (let index = pulses.length - 1; index >= 0; index -= 1) {
        if (now - pulses[index].startedAt > 960) {
          pulses.splice(index, 1);
        }
      }

      drawScene(ctx, width, height, particles, pulses, pointer, now, reducedMotion);

      if (isVisible && !reducedMotion) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const start = () => {
      stop();
      if (reducedMotion) {
        drawScene(ctx, width, height, particles, pulses, pointer, 0, true);
        return;
      }
      frameId = window.requestAnimationFrame(render);
    };

    const syncPointer = (event) => {
      const rect = host.getBoundingClientRect();
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;
      pointer.active = true;
    };

    const leavePointer = () => {
      pointer.active = false;
      pointer.targetX = width * 0.5;
      pointer.targetY = height * 0.52;
    };

    const addPulse = (event) => {
      const rect = host.getBoundingClientRect();
      pulses.push({
        x: event ? event.clientX - rect.left : width * 0.5,
        y: event ? event.clientY - rect.top : height * 0.52,
        startedAt: performance.now(),
      });
      if (reducedMotion) {
        drawScene(ctx, width, height, particles, pulses, pointer, 0, true);
      }
    };

    const handleMotionChange = (event) => {
      reducedMotion = event.matches;
      canvas.dataset.motion = reducedMotion ? 'reduced' : 'animated';
      if (isVisible) start();
    };

    resize();

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            ([entry]) => {
              isVisible = entry.isIntersecting;
              canvas.dataset.visibility = isVisible ? 'visible' : 'hidden';
              if (isVisible) {
                start();
              } else {
                stop();
              }
            },
            { threshold: 0.12 },
          )
        : null;

    if (observer) {
      observer.observe(host);
    } else {
      isVisible = true;
      canvas.dataset.visibility = 'visible';
      start();
    }

    window.addEventListener('resize', resize);
    host.addEventListener('pointermove', syncPointer);
    host.addEventListener('pointerenter', addPulse);
    host.addEventListener('pointerleave', leavePointer);
    host.addEventListener('pointerdown', addPulse);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      stop();
      observer?.disconnect();
      window.removeEventListener('resize', resize);
      host.removeEventListener('pointermove', syncPointer);
      host.removeEventListener('pointerenter', addPulse);
      host.removeEventListener('pointerleave', leavePointer);
      host.removeEventListener('pointerdown', addPulse);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  return (
    <div ref={hostRef} className={canvasReady ? 'clinical-voice-pulse is-canvas-ready' : 'clinical-voice-pulse'}>
      <svg className="pulse-static-fallback" viewBox="0 0 640 420" aria-hidden="true">
        <defs>
          <radialGradient id="pulseCore" cx="50%" cy="52%" r="42%">
            <stop offset="0%" stopColor="#fffdf8" />
            <stop offset="48%" stopColor="#ead8b7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2f7478" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="320" cy="220" rx="250" ry="104" fill="url(#pulseCore)" />
        <path
          d="M76 218 C128 188 170 252 216 220 C247 199 263 213 286 220 L304 220 L318 181 L334 258 L354 220 C407 181 446 248 500 218 C532 200 555 205 588 218"
          fill="none"
          stroke="rgba(8, 40, 43, 0.34)"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <circle cx="320" cy="220" r="44" fill="none" stroke="rgba(177, 132, 69, 0.32)" />
        <circle cx="320" cy="220" r="10" fill="rgba(8, 40, 43, 0.82)" />
      </svg>
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
