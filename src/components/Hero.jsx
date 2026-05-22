import { motion } from 'framer-motion';
import { HiMicrophone, HiArrowRight, HiCheckCircle } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern -z-10" />
      <div className="absolute inset-0 radial-glow-top -z-10" />
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-brand-500/6 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                IA para Documentação Clínica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
            >
              Documentação clínica
              <br />
              <span className="gradient-text">pelo poder da voz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed mb-8"
            >
              Transforme áudio em documentação clínica precisa e estruturada com
              inteligência artificial. Reduza em até <strong className="text-white">80%</strong> o tempo
              gasto com papelada e dedique-se ao que realmente importa: seus pacientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#cta"
                className="group gradient-brand text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all duration-200 glow-brand text-base"
              >
                Teste gratuitamente
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="glass-card text-white font-medium px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all duration-200 text-base"
              >
                Ver demonstração
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6 text-sm text-text-muted"
            >
              {['CFM compliant', 'Dados criptografados', 'LGPD'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <HiCheckCircle className="text-success text-base" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Floating card UI mock */}
              <div className="relative w-[420px] h-[480px] glass-card rounded-2xl p-6 glow-brand">
                {/* Mock waveform */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <HiMicrophone className="text-red-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Gravando consulta...</div>
                    <div className="text-xs text-success">00:12:34</div>
                  </div>
                </div>

                <div className="flex items-end gap-0.5 h-16 mb-8">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-full bg-gradient-to-t from-brand-500 to-accent-400"
                      animate={{ height: [Math.random() * 40 + 20, Math.random() * 60 + 10, Math.random() * 40 + 20] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.04, ease: 'easeInOut' }}
                    />
                  ))}
                </div>

                {/* Auto-generated doc preview */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Documento gerado automaticamente</div>
                  <div className="glass-card rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-success" />
                      Relatório de Consulta
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 bg-white/10 rounded-full w-full" />
                      <div className="h-2.5 bg-white/10 rounded-full w-4/5" />
                      <div className="h-2.5 bg-white/10 rounded-full w-3/5" />
                      <div className="h-2.5 bg-brand-400/30 rounded-full w-2/5" />
                    </div>
                    <div className="flex gap-2 pt-1">
                      <span className="text-[10px] bg-success/20 text-success px-2 py-0.5 rounded-full font-medium">CID-10</span>
                      <span className="text-[10px] bg-accent-500/20 text-accent-400 px-2 py-0.5 rounded-full font-medium">Receita</span>
                      <span className="text-[10px] bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full font-medium">Evolução</span>
                    </div>
                  </div>
                </div>

                {/* Floating pill stats */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 bg-dark-800 border border-border-subtle rounded-xl px-4 py-3 shadow-2xl"
                >
                  <div className="text-xs text-text-muted">Precisão</div>
                  <div className="text-xl font-extrabold gradient-text">99.2%</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -left-6 bg-dark-800 border border-border-subtle rounded-xl px-4 py-3 shadow-2xl"
                >
                  <div className="text-xs text-text-muted">Tempo economizado</div>
                  <div className="text-xl font-extrabold text-success">-80%</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}