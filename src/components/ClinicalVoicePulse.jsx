const particles = [
  [178, 164, 1.6, 'teal', 0.35],
  [206, 145, 2.4, 'sage', 0.42],
  [234, 171, 1.8, 'teal', 0.32],
  [258, 132, 1.5, 'gold', 0.46],
  [278, 222, 2.2, 'teal', 0.34],
  [300, 148, 1.4, 'sage', 0.38],
  [320, 238, 2.8, 'gold', 0.42],
  [342, 134, 2.1, 'teal', 0.36],
  [362, 220, 1.5, 'sage', 0.34],
  [386, 156, 2.8, 'teal', 0.38],
  [410, 228, 1.6, 'sage', 0.36],
  [436, 142, 1.9, 'gold', 0.4],
  [462, 178, 3.1, 'teal', 0.32],
  [486, 210, 1.5, 'sage', 0.34],
  [510, 152, 2.3, 'teal', 0.3],
  [532, 196, 1.4, 'gold', 0.38],
  [154, 206, 1.3, 'sage', 0.28],
  [202, 226, 1.9, 'teal', 0.28],
  [244, 248, 1.4, 'sage', 0.26],
  [290, 116, 1.2, 'teal', 0.28],
  [348, 104, 1.6, 'sage', 0.3],
  [396, 112, 1.3, 'teal', 0.28],
  [446, 246, 1.8, 'sage', 0.3],
  [494, 250, 1.4, 'teal', 0.26],
  [540, 230, 1.2, 'sage', 0.24],
  [226, 202, 3.4, 'teal', 0.22],
  [374, 186, 3.8, 'sage', 0.2],
  [430, 196, 2.9, 'teal', 0.22],
  [330, 174, 1.6, 'gold', 0.44],
  [474, 134, 1.2, 'gold', 0.34],
  [252, 266, 1.1, 'gold', 0.3],
  [566, 172, 1.4, 'teal', 0.24],
];

const particleColor = {
  teal: '#2f7478',
  sage: '#6f8e7f',
  gold: '#b18445',
};

export default function ClinicalVoicePulse() {
  return (
    <figure className="clinical-voice-pulse" aria-hidden="true">
      <svg
        className="clinical-voice-pulse-svg"
        viewBox="0 70 680 270"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="voicePulseGlow" cx="50%" cy="52%" r="46%">
            <stop offset="0%" stopColor="#6f8e7f" stopOpacity="0.16" />
            <stop offset="46%" stopColor="#2f7478" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f7f2ea" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="signalStroke" x1="70" x2="610" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08282b" stopOpacity="0" />
            <stop offset="14%" stopColor="#08282b" stopOpacity="0.76" />
            <stop offset="50%" stopColor="#2f7478" stopOpacity="0.9" />
            <stop offset="86%" stopColor="#08282b" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#08282b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="signalEcho" x1="80" x2="600" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6f8e7f" stopOpacity="0" />
            <stop offset="20%" stopColor="#6f8e7f" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#2f7478" stopOpacity="0.24" />
            <stop offset="80%" stopColor="#6f8e7f" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6f8e7f" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="goldField" x1="126" x2="560" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b18445" stopOpacity="0" />
            <stop offset="50%" stopColor="#b18445" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#b18445" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect y="70" width="680" height="270" fill="transparent" />
        <ellipse cx="340" cy="194" rx="260" ry="92" fill="url(#voicePulseGlow)" />

        <g className="pulse-fields" fill="none" strokeLinecap="round">
          <path d="M144 158 C226 122 382 116 506 150" stroke="url(#goldField)" strokeWidth="1.2" />
          <path d="M188 236 C284 274 428 262 532 218" stroke="#2f7478" strokeOpacity="0.12" strokeWidth="1.2" />
          <path d="M292 126 C364 104 462 118 536 158" stroke="#b18445" strokeOpacity="0.1" strokeWidth="1" />
        </g>

        <g className="pulse-particles">
          {particles.map(([cx, cy, r, tone, opacity]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={particleColor[tone]} opacity={opacity} />
          ))}
        </g>

        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            className="signal-echo upper"
            d="M84 175 C126 161 158 162 194 180 C226 196 252 193 278 178 C310 158 344 158 378 178 C410 196 438 196 468 181 C506 163 548 164 598 177"
            stroke="url(#signalEcho)"
            strokeWidth="1.35"
          />
          <path
            className="signal-echo lower"
            d="M88 208 C134 224 168 222 204 204 C236 188 260 191 284 206 C316 225 348 224 382 205 C412 188 442 188 474 204 C514 224 554 223 592 207"
            stroke="url(#signalEcho)"
            strokeWidth="1.15"
          />
          <path
            className="signal-main"
            d="M72 193 C116 174 150 176 188 194 C220 209 248 207 274 192 C292 181 302 178 312 188 L326 188 L338 166 L352 218 L366 190 C398 169 432 171 464 191 C484 202 500 201 518 190 L532 190 L542 176 L554 206 L568 191 C592 178 616 180 636 191"
            stroke="url(#signalStroke)"
            strokeWidth="2.15"
          />
        </g>
      </svg>
    </figure>
  );
}
