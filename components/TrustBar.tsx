export default function TrustBar() {
  const items = [
    {
      label: 'Clasa foc B s1 d0',
      icon: <><path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/><path d="M12 12c0 2-2 3-2 5a2 2 0 0 0 4 0c0-2-2-3-2-5z"/></>,
    },
    {
      label: 'Agrement tehnic',
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
    },
    {
      label: 'ISO 9001 : 2015',
      icon: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><path d="m9 8 2 2 4-4" /></>,
    },
    {
      label: 'nZEB / EN 15026 Compliant',
      icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    },
    {
      label: 'Instalatori autorizați ANRE',
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    },
    {
      label: 'Garanție 30 ani',
      icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
    },
  ];

  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar__inner">
          {items.map((item, i) => (
            <>
              <div className="trust-bar__item" key={item.label}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {item.icon}
                </svg>
                {item.label}
              </div>
              {i < items.length - 1 && <div className="trust-bar__sep" aria-hidden="true" key={`sep-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
