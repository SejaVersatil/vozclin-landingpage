import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const plans = [
  {
    name: 'Starter',
    price: 'Grátis',
    period: '',
    desc: 'Para começar a usar e testar a tecnologia.',
    color: 'border-border-subtle',
    cta: 'Começar Grátis',
    highlighted: false,
    features: [
      'Até 20 documentos/mês',
      'Transcrição com IA',
      'Templates básicos',
      'Exportação em PDF',
      'Suporte por email',
    ],
  },
  {
    name: 'Profissional',
    price: 'R$ 197',
    period: '/mês',
    desc: 'Para clínicos que querem eliminar a papelada.',
    color: 'border-brand-500/40',
    cta: 'Assinar Agora',
    highlighted: true,
    features: [
      'Documentos ilimitados',
      'Transcrição avançada com IA',
      'Templates personalizáveis',
      'Assinatura digital integrada',
      'Integração com PEP',
      'Suporte prioritário 24/7',
      'Dashboard de analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    desc: 'Para clínicas e hospitais com múltiplos profissionais.',
    color: 'border-border-subtle',
    cta: 'Falar com Vendas',
    highlighted: false,
    features: [
      'Tudo do plano Profissional',
      'Múltiplos usuários',
      'Admin centralizado',
      'API dedicada',
      'SLA garantido',
      'Treinamento da equipe',
      'White label disponível',
    ],
  },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <section id="planos" className="relative py-28">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-success bg-success/10 border border-success/20 rounded-full px-4 py-1.5 mb-4 inline-block">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Escolha o plano
            <br />
            <span className="gradient-text">ideal para você</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sem taxas ocultas. Cancele quando quiser. Todos os planos incluem
            garantia de segurança e conformidade LGPD.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card rounded-2xl p-8 border ${plan.color} flex flex-col ${
                plan.highlighted ? 'glow-brand' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-brand text-white text-xs font-bold px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-text-muted text-sm">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-text-muted text-sm">{plan.period}</span>
              </div>

              <a
                href="#cta"
                className={`block text-center py-3 rounded-xl font-semibold text-sm mb-8 transition-all duration-200 ${
                  plan.highlighted
                    ? 'gradient-brand text-white glow-brand hover:opacity-90'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                    <HiCheckCircle className="text-success mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}