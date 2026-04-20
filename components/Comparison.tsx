const rows = [
  { prop: 'Conductivitate termică λ', cellaris: '0,038 W/mK', vata: '0,035–0,040', eps: '0,031–0,038', mono: true },
  { prop: 'Punți termice', cellaris: '✓ Eliminate', vata: '~ Parțial', eps: '~ Parțial', yes: [true, false, false] },
  { prop: 'Reglare umiditate', cellaris: '✓ Naturală', vata: '✗ Nu', eps: '✗ Nu', yes: [true, false, false] },
  { prop: 'Izolare fonică', cellaris: '✓ Excelentă', vata: '✓ Bună', eps: '✗ Slabă', yes: [true, true, false] },
  { prop: 'Material reciclat', cellaris: '✓ 85–92%', vata: '~ 20–30%', eps: '✗ Petrochimic', yes: [true, false, false] },
  { prop: 'Amprenta CO₂', cellaris: '~0.5 kg CO₂/m²', vata: '~2.5 kg CO₂/m²', eps: '~4.0 kg CO₂/m²', mono: true },
  { prop: 'Rezistență la foc', cellaris: '✓ Euroclass E', vata: '✓ Euroclass A1', eps: '✗ Clasa F', yes: [true, true, false] },
  { prop: 'Garanție standard', cellaris: '30 ani', vata: '10 ani', eps: '10 ani', mono: true },
];

function cls(val: string) {
  if (val.startsWith('✓')) return 'check-yes';
  if (val.startsWith('✗')) return 'check-no';
  if (val.startsWith('~')) return 'check-mid';
  return '';
}

export default function Comparison() {
  return (
    <section className="comparison section" id="comparatie" aria-labelledby="compTitle">
      <div className="container">
        <div className="section__header section__header--center" data-reveal>
          <p className="section__overline">Comparație tehnică</p>
          <h2 className="section__title" id="compTitle">CELLARIS vs. alternativele</h2>
          <p className="section__sub">Date tehnice certificate, nu promisiuni de marketing.</p>
        </div>

        <div className="comparison__table-wrap" data-reveal>
          <table className="comparison__table" role="table">
            <thead>
              <tr>
                <th scope="col">Proprietate</th>
                <th scope="col" className="col-cellaris">CELLARIS Celuloză</th>
                <th scope="col">Vată minerală</th>
                <th scope="col">Polistiren EPS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.prop}>
                  <td>{row.prop}</td>
                  <td className="col-cellaris" style={row.mono ? { fontFamily: 'var(--mono)', fontWeight: 800 } : {}}>
                    <span className={cls(row.cellaris)}>{row.cellaris}</span>
                  </td>
                  <td style={row.mono ? { fontFamily: 'var(--mono)' } : {}}>
                    <span className={cls(row.vata)}>{row.vata}</span>
                  </td>
                  <td style={row.mono ? { fontFamily: 'var(--mono)' } : {}}>
                    <span className={cls(row.eps)}>{row.eps}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
