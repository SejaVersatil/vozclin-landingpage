import { motion } from 'framer-motion';
import { HiMicrophone, HiDocumentText, HiClipboardCheck, HiBadgeCheck } from 'react-icons/hi';

const steps = [
  {
    step: '01',
    icon: HiMicrophone,
    title: 'Grave ou faça upload do áudio',
    desc: 'Grave a consulta diretamente pelo app ou faça upload de arquivos de áudio. Formatos MP3, WAV, M4A e outros suportados.',
    color: 'from-brand-500 to-brand-400',
    bg: 'bg-brand-500/10',
  },
  {
    step: '02',
    icon: HiDocumentText,
    title: 'IA processa e estrutura',
    desc: 'Nossa IA proprietária transcreve, identifica entidades clínicas, classifica patologias e estrutura o conteúdo automaticamente.',
    color: 'from-accent-500 to-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    step: '03',
    icon: HiClipboardCheck,
    title: 'Revise e personalize',
    desc: 'Visualize o documento gerado, faça ajustes pontuais e adicione observações. O template se adapta ao seu estilo.',
    color: 'from-brand-600 to-brand-500',
    bg: 'bg-brand-500/10',
  },
  {
    step: '04',
    icon: HiBadgeCheck,
    title: 'Assine e exporte',
    desc: 'Assinatura digital com validade jurídica. Exporte em PDF, integre ao PEP ou imprima — tudo com um clique.',
    color: 'from-success to-accent-500',
    bg: 'bg-success/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-28 bg-dark-950/50">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 mb-4 inline-block">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Do áudio ao documento
            <br />
            <span className="gradient-text">em menos de 2 minutos</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Um fluxo simples e intuitivo que se encaixa naturalmente na sua rotina clínica,
            sem curvas de aprendizado.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-brand-500/40 via-accent-500/40 to-success/40" />

          {steps.map((s) => (
            <motion.div key={s.step} variants={item} className="relative text-center">
              {/* Step circle */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-dark-700 border border-border-subtle flex items-center justify-center">
                <s.icon className={`text-2xl bg-gradient-to-br ${s.color} bg-clip-text text-transparent`} />
              </div>

              <div className="text-xs font-extrabold tracking-widest text-text-muted mb-3">
                PASSO {s.step}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}