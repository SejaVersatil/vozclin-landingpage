import { motion } from 'framer-motion';

const stats = [
  { value: '80%', label: 'Redução no tempo de documentação' },
  { value: '99.2%', label: 'Precisão na transcrição clínica' },
  { value: '+15K', label: 'Documentos gerados por mês' },
  { value: '3min', label: 'Tempo médio por documento' },
];

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-10 lg:p-16 glow-brand overflow-hidden relative">
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-3 tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm text-text-secondary leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}