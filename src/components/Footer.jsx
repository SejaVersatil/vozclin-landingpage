import {
  HiMail,
  HiPhone,
} from 'react-icons/hi';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const footerLinks = {
  Produto: ['Funcionalidades', 'Planos', 'Segurança', 'Integrações', 'Roadmap'],
  Empresa: ['Sobre', 'Carreiras', 'Blog', 'Imprensa'],
  Legal: ['Privacidade', 'Termos de Uso', 'LGPD'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle">
      <div className="absolute inset-0 grid-pattern -z-10" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white mb-4">
              <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center text-white font-extrabold text-sm">
                V
              </div>
              Vozclin
            </a>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed mb-6">
              Documentação clínica inteligente pelo poder da voz.
              Tecnologia de ponta para profissionais de saúde que valorizam seu tempo.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-text-muted text-sm hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Vozclin Tecnologia Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-text-muted text-xs">
            <a href="mailto:contato@vozclin.com.br" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <HiMail />
              contato@vozclin.com.br
            </a>
            <a href="tel:+" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <HiPhone />
              0800 123 4567
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}