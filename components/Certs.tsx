const certs = [
  { name: 'ETA', sub: 'European Technical Assessment' },
  { name: 'ISO 9001', sub: 'Quality Management' },
  { name: 'EPD', sub: 'Environmental Product Declaration' },
  { name: 'nZEB', sub: 'EN 15026 Compliant' },
  { name: 'CE', sub: 'Marquage CE' },
  { name: 'ANRE', sub: 'Autorizat România' },
];

export default function Certs() {
  return (
    <div className="certs">
      <div className="container">
        <p className="certs__label">Certificări &amp; Standarde</p>
        <div className="certs__logos">
          {certs.map(c => (
            <div className="cert-item" key={c.name}>
              <div className="cert-item__name">{c.name}</div>
              <div className="cert-item__sub">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
