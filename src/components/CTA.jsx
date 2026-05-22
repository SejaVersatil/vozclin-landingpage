import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="absolute inset-0 grid-pattern -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/6 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-6">
            Pronto para <span className="gradient-text">revolucionar</span>
            <br />
            sua documentação clínica?
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Junte-se a mais de 2.000 profissionais de saúde que já eliminam a papelada
            e dedicam mais tempo aos seus pacientes. Comece gratuitamente hoje.
          </p>

          <motion.div
            className="glass-card rounded-2xl p-8 max-w-lg mx-auto glow-brand"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 bg-dark-800 border border-border-subtle rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-brand-500/50 transition-colors"
              />
              <button
                type="submit"
                className="group gradient-brand text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 text-sm shrink-0"
              >
                Criar conta grátis
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="text-text-muted text-xs mt-3">
              Sem compromisso. Teste grátis por 14 dias.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}