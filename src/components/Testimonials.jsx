import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    quote:
      'O Vozclin transformou minha prática clínica. Agora saio do consultório no horário, sem pilhas de papelada para fazer em casa.',
    author: 'Dra. Ana Beatriz',
    role: 'Otorrinolaringologista',
    city: 'São Paulo, SP',
  },
  {
    quote:
      'A precisão da transcrição para termos médicos é impressionante. Melhor que qualquer solução que já testei em 15 anos de carreira.',
    author: 'Dr. Ricardo Mendes',
    role: 'Cardiologista',
    city: 'Rio de Janeiro, RJ',
  },
  {
    quote:
      'Economizo em média 2 horas por dia. Isso representa mais tempo com meus pacientes e menos estresse com burocracia.',
    author: 'Dra. Juliana Costa',
    role: 'Clínica Geral',
    city: 'Belo Horizonte, MG',
  },
  {
    quote:
      'A integração com o PEP da clínica foi imediata. Em uma semana toda a equipe já estava usando sem dificuldade.',
    author: 'Dr. Felipe Andrade',
    role: 'Diretor Clínico',
    city: 'Curitiba, PR',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 bg-dark-950/50">
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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Quem usa,
            <span className="gradient-text"> aprova</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Profissionais de saúde de diversas especialidades já transformaram sua rotina
            com o Vozclin.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={item}
              className="glass-card rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-amber-400 text-lg" />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6 italic text-base">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold text-white text-sm">{t.author}</div>
                <div className="text-text-muted text-xs">{t.role}</div>
                <div className="text-text-muted text-xs">{t.city}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}