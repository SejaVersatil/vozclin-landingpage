import { useState } from 'react';
import {
  HiArrowRight,
  HiBadgeCheck,
  HiCheckCircle,
  HiClipboardCheck,
  HiDocumentText,
  HiMenu,
  HiMicrophone,
  HiShieldCheck,
  HiX,
} from 'react-icons/hi';

const navItems = [
  { label: 'Produto', href: '#produto' },
  { label: 'Fluxo', href: '#fluxo' },
  { label: 'Planos', href: '#planos' },
  { label: 'Perguntas', href: '#perguntas' },
];

const proofPoints = [
  'Apoio a documentação, não decisão clínica',
  'Revisão humana antes de copiar ou exportar',
  'Sessões temporárias para demos e pilotos',
];

const workflow = [
  {
    icon: HiMicrophone,
    label: '01',
    title: 'Capture a conversa',
    copy: 'Grave no navegador com contexto opcional da consulta, sem transformar a landing page em prontuário.',
  },
  {
    icon: HiDocumentText,
    label: '02',
    title: 'Estruture a ficha',
    copy: 'A transcrição vira campos clínicos organizados, documentos derivados e pendências para revisar.',
  },
  {
    icon: HiClipboardCheck,
    label: '03',
    title: 'Revise com evidências',
    copy: 'O profissional confirma, ajusta ou marca insuficiência antes de usar qualquer conteúdo.',
  },
  {
    icon: HiBadgeCheck,
    label: '04',
    title: 'Copie o que foi validado',
    copy: 'Exportação e cópia ficam condicionadas à revisão humana, com linguagem conservadora.',
  },
];

const guardrails = [
  ['Não diagnostica', 'O produto não prescreve, não decide conduta e não substitui julgamento profissional.'],
  ['Sem promessa de prontuário', 'A proposta é apoiar documentação clínica, com ambiente seguro antes de uso real.'],
  ['Sem dado clínico real em demo', 'Pilotos iniciais devem começar com dados fictícios e validação supervisionada.'],
];

const plans = [
  {
    name: 'Essencial 1',
    profile: 'Profissional individual',
    price: 'R$ 149,90',
    detail: '1 chave mensal',
    highlight: false,
    features: ['Nova sessão por voz', 'Ficha revisável', 'Documentos derivados', 'Exportação após revisão'],
  },
  {
    name: 'Essencial 3',
    profile: 'Clínica pequena',
    price: 'R$ 399,90',
    detail: '3 chaves mensais',
    highlight: true,
    features: ['Uso por equipe enxuta', 'Mesmo fluxo seguro', 'Planos por chave', 'Portal de assinatura Stripe'],
  },
  {
    name: 'Essencial 5',
    profile: 'Equipe em crescimento',
    price: 'R$ 649,90',
    detail: '5 chaves mensais',
    highlight: false,
    features: ['Mais acessos', 'Padronização de documentação', 'Fluxo de revisão', 'Base para piloto ampliado'],
  },
];

const faqs = [
  {
    q: 'O VozClin substitui o profissional de saúde?',
    a: 'Não. Ele apoia documentação clínica e mantém revisão humana obrigatória antes de copiar ou exportar qualquer conteúdo.',
  },
  {
    q: 'Posso usar com pacientes reais hoje?',
    a: 'Para uso real, antes é preciso ambiente seguro, HTTPS, governança LGPD, consentimento, revisão jurídica e validação clínica supervisionada.',
  },
  {
    q: 'A landing page promete IA médica autônoma?',
    a: 'Não. A proposta pública é clara: captar voz, estruturar documentos e reduzir burocracia com revisão profissional.',
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="VozClin início">
        <span className="brand-mark">V</span>
        <span>VozClin</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="https://voxialaw.com/login">
        Acessar
        <HiArrowRight aria-hidden="true" />
      </a>

      <button className="mobile-menu-button" type="button" onClick={() => setOpen((value) => !value)}>
        {open ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
        <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
      </button>

      {open && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="https://voxialaw.com/login" onClick={() => setOpen(false)}>
            Acessar plataforma
          </a>
        </nav>
      )}
    </header>
  );
}

function ProductConsole() {
  return (
    <div className="product-console" aria-label="Prévia da interface VozClin">
      <div className="console-topbar">
        <span />
        <span />
        <span />
        <strong>sessão temporária</strong>
      </div>
      <div className="capture-panel">
        <div className="capture-status">
          <span className="mic-button">
            <HiMicrophone aria-hidden="true" />
          </span>
          <div>
            <strong>Consulta em captação</strong>
            <small>áudio local protegido na aba</small>
          </div>
        </div>
        <div className="waveform" aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => (
            <span key={i} style={{ '--bar': `${22 + ((i * 13) % 58)}%` }} />
          ))}
        </div>
      </div>
      <div className="review-grid">
        <section>
          <span className="section-kicker">Ficha estruturada</span>
          <h3>Evolução clínica</h3>
          <p>Queixa principal, história, conduta e pendências aparecem separados para revisão.</p>
        </section>
        <section>
          <span className="section-kicker">Evidências</span>
          <h3>3 campos confirmados</h3>
          <p>Cada trecho precisa ser validado antes de entrar no texto final.</p>
        </section>
      </div>
      <div className="console-footer">
        <span><HiCheckCircle aria-hidden="true" /> Revisão obrigatória</span>
        <span><HiShieldCheck aria-hidden="true" /> Sem decisão clínica</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell" id="top">
      <Navbar />

      <main>
        <section className="hero-section" id="produto">
          <div className="hero-copy">
            <span className="eyebrow">VozClin</span>
            <h1>
              Documentação clínica
              <span className="voice-gradient">pelo poder da voz</span>
            </h1>
            <p className="hero-lede">
              Transforme áudio em documentação clínica estruturada com apoio de inteligência artificial,
              evidências por campo e revisão humana. Reduza o tempo gasto com papelada e dedique-se ao que
              realmente importa: seus pacientes.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="https://voxialaw.com/login">
                Acessar plataforma
                <HiArrowRight aria-hidden="true" />
              </a>
              <a className="secondary-button" href="#planos">
                Ver planos
              </a>
            </div>
            <div className="proof-strip">
              {proofPoints.map((point) => (
                <span key={point}>
                  <HiCheckCircle aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <ProductConsole />
        </section>

        <section className="positioning-band">
          <div>
            <span>Para clínicas que querem documentação mais leve</span>
            <strong>sem vender automação clínica irresponsável.</strong>
          </div>
          <p>
            A página agora comunica o produto como apoio operacional: captação de voz, estruturação de ficha,
            revisão profissional e exportação apenas do que foi validado.
          </p>
        </section>

        <section className="workflow-section" id="fluxo">
          <div className="section-heading">
            <span className="eyebrow">Fluxo seguro</span>
            <h2>Da fala ao documento, sem pular a revisão.</h2>
          </div>
          <div className="workflow-grid">
            {workflow.map((step) => {
              const Icon = step.icon;
              return (
                <article className="workflow-card" key={step.title}>
                  <div className="card-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="guardrails-section">
          <div className="section-heading narrow">
            <span className="eyebrow">Postura clínica</span>
            <h2>Clareza comercial também é segurança.</h2>
          </div>
          <div className="guardrail-list">
            {guardrails.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="planos">
          <div className="section-heading pricing-heading">
            <span className="eyebrow">VozClin Essencial</span>
            <h2>Escolha o plano ideal para sua rotina clínica.</h2>
            <p>
              Sem taxas ocultas. Cancele quando quiser. Todos os planos mantêm revisão humana, sessões
              temporárias e cuidado LGPD desde a demonstração.
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={plan.highlight ? 'price-card highlighted' : 'price-card'} key={plan.name}>
                {plan.highlight && <span className="recommended">Recomendado</span>}
                <span className="plan-profile">{plan.profile}</span>
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  <small>/mês</small>
                </div>
                <p>{plan.detail}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <HiCheckCircle aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="perguntas">
          <div className="section-heading narrow">
            <span className="eyebrow">Perguntas diretas</span>
            <h2>Sem fumaça, sem promessa excessiva.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div>
            <span className="eyebrow">Próximo passo</span>
            <h2>
              Pronto para <span className="inline-gradient">revolucionar</span> sua documentação clínica?
            </h2>
          </div>
          <a className="primary-button light" href="https://voxialaw.com/login">
            Abrir plataforma
            <HiArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>VozClin</span>
        <p>Apoio a documentação clínica. Revisão humana obrigatória.</p>
      </footer>
    </div>
  );
}

export default App;
