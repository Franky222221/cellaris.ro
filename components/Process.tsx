const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const processSteps = [
  {
    num: '01', title: 'Consultare gratuită', desc: 'Analizăm planurile și îți explicăm opțiunile disponibile.',
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /></>,
  },
  {
    num: '02', title: 'Audit energetic', desc: 'Evaluare prin termoviziune și calcule de transfer termic.',
    icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M8 11a3 3 0 0 1 3-3" /></>,
  },
  {
    num: '03', title: 'Ofertă fixă', desc: 'Deviz detaliat, preț garantat. Fără costuri ascunse.',
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><path d="M9 9.5a1 1 0 0 0 1 1h4" /></>,
  },
  {
    num: '04', title: 'Montaj profesional', desc: 'Echipă proprie, execuție în 1–3 zile pentru o casă standard.',
    icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  },
  {
    num: '05', title: 'Predare & certificat', desc: 'Certificat de garanție, buletin termic și suport post-montaj.',
    icon: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><path d="m9 8 2 2 4-4" /></>,
  },
];

export default function Process() {
  return (
    <section className="process section" id="proces">
      <div className="container">
        <div className="section__header" data-reveal>
          <p className="section__overline">Cum lucrăm</p>
          <h2 className="section__title">5 pași. De la ofertă la predare.</h2>
          <p className="section__sub">Proces transparent, fără surprize. Urmărești fiecare etapă în timp real.</p>
        </div>

        <div className="process__steps">
          {processSteps.map((step, i) => (
            <div className="process__step" data-reveal data-delay={i * 100} key={step.num}>
              <div className="process__step-num">{step.num}</div>
              <div className="process__step-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {step.icon}
                </svg>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < processSteps.length - 1 && (
                <div className="process__step-arrow" aria-hidden="true">
                  <ChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
