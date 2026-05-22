import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    q: 'Como funciona a transcrição de áudio?',
    a: 'Nosso sistema utiliza inteligência artificial de última geração treinada especificamente para terminologia médica em português. Basta gravar a consulta pelo app ou fazer upload do arquivo de áudio. Em segundos, a IA transcreve, identifica entidades clínicas (sintomas, diagnósticos, medicamentos) e estrutura tudo automaticamente.',
  },
  {
    q: 'Os dados dos pacientes estão seguros?',
    a: 'Sim. Utilizamos criptografia AES-256 em trânsito e em repouso. Todos os dados são armazenados em servidores certificados no Brasil, em conformidade com a LGPD. O Vozclin também está em conformidade com as diretrizes do CFM sobre documentação clínica digital.',
  },
  {
    q: 'Preciso instalar algo no computador?',
    a: 'Não. O Vozclin é 100% baseado na web e funciona em qualquer navegador moderno. Também oferecemos app para iOS e Android. Não há necessidade de instalação de software adicional.',
  },
  {
    q: 'Quais especialidades médicas são suportadas?',
    a: 'O Vozclin é especialidade-agnóstico. Nossa IA é treinada em um vasto corpus de terminologia médica que cobre virtualmente todas as especialidades: clínica geral, cardiologia, pediatria, psiquiatria, ortopedia, otorrinolaringologia e muitas outras.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Todos os planos podem ser cancelados a qualquer momento, sem multa ou taxa adicional. Seu acesso continua até o final do período já pago.',
  },
  {
    q: 'O Vozclin integra com meu sistema de prontuário eletrônico?',
    a: 'Muito provavelmente sim. Oferecemos integração via API RESTful com os principais PEPs do mercado brasileiro. Caso seu sistema não esteja na nossa lista de integrações nativas, nossa equipe pode desenvolver um conector personalizado.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative py-28 bg-dark-950/50">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 mb-4 inline-block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white text-base pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <HiChevronDown className="text-text-muted text-xl" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}