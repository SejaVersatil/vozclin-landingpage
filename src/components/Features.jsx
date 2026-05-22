import { motion } from 'framer-motion';
import {
  HiDocumentText,
  HiShieldCheck,
  HiLightningBolt,
  HiMicrophone,
  HiPrinter,
  HiChartBar,
} from 'react-icons/hi';

const features = [
  {
    icon: HiMicrophone,
    title: 'Transcrição por Voz em Tempo Real',
    desc: 'Capture conversas clínicas com precisão de 99.2% usando IA de última geração. Suporte a múltiplos sotaques e terminologia médica especializada.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
  },
  {
    icon: HiDocumentText,
    title: 'Geração Automática de Documentos',
    desc: 'Relatórios, receitas, atestados, evoluções e laudos gerados instantaneamente com formatação profissional e classificação CID-10.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    icon: HiShieldCheck,
    title: 'Segurança e Conformidade',
    desc: 'Criptografia ponta a ponta, certificação LGPD e CFM compliant. Seus dados clínicos permanecem seguros e confidenciais sempre.',
    color: 'text-success',
    bg: 'bg-success/10',
  },
  {
    icon: HiLightningBolt,
    title: 'Integração com Sistemas',
    desc: 'Integração nativa com os principais prontuários eletrônicos (PEP) e sistemas de gestão hospitalar via APIs RESTful.',
    color: 'text-brand-300',
    bg: 'bg-brand-500/10',
  },
  {
    icon: HiPrinter,
    title: 'Templates Personalizáveis',
    desc: 'Modele seus documentos exatamente como sua clínica precisa. Templates flexíveis que se adaptam a qualquer especialidade médica.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    icon: HiChartBar,
    title: 'Analytics e Insights',
    desc: 'Dashboard com métricas de produtividade, volume de documentos e economia de tempo. Tome decisões baseadas em dados reais.',
    color: 'text-success',
    bg: 'bg-success/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Features() {
  return (
    <section id="funcionalidades" className="relative py-28">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-4 inline-block">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Tudo que você precisa
            <br />
            <span className="gradient-text">em um só lugar</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Da captura de áudio à assinatura digital do documento final. O Vozclin automatiza
            cada etapa da sua documentação clínica.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="glass-card rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <f.icon className={`text-2xl ${f.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}