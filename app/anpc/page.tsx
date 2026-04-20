import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Informații ANPC | CELLARIS',
  description:
    'Drepturile consumatorilor, soluționarea alternativă a litigiilor (SAL) și platforma ODR — informații ANPC pentru clienții CELLARIS.',
  alternates: { canonical: '/anpc' },
};

export default function Anpc() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--green-900)', padding: '7rem 0 4rem', color: '#fff' }}>
        <div className="container">
          <p className="section__overline">Protecția consumatorilor</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', marginTop: '0.5rem' }}>
            Informații ANPC
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', fontSize: '1.05rem' }}>
            Autoritatea Națională pentru Protecția Consumatorilor — drepturile dvs. ca și client
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container container--sm">
          <div style={{ maxWidth: '72ch', lineHeight: 1.8, color: 'var(--gray-700)' }}>

            {/* Angajament */}
            <div style={{ marginBottom: '2.5rem', padding: '1.25rem 1.5rem', background: 'var(--green-50)', borderLeft: '4px solid var(--accent)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
              <p style={{ fontSize: '1.05rem' }}>
                CELLARIS S.R.L. respectă legislația română și europeană privind protecția consumatorilor și se
                angajează să soluționeze orice nemulțumire a clienților săi cu promptitudine și bună-credință.
                Vă informăm cu privire la drepturile dvs. și la căile disponibile de soluționare a eventualelor
                litigii.
              </p>
            </div>

            {/* Drepturile consumatorului */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                Drepturile Dvs. ca Consumator
              </h2>
              <p>
                Conform OG nr. 21/1992 privind protecția consumatorilor (republicată) și Legii nr. 449/2003
                privind vânzarea produselor și garanțiile asociate, aveți dreptul la:
              </p>
              <div style={{ marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                {[
                  {
                    icon: '✓',
                    titlu: 'Produse și servicii de calitate',
                    desc: 'Dreptul de a beneficia de servicii conforme cu specificațiile tehnice agreate și cu standardele aplicabile.',
                  },
                  {
                    icon: '✓',
                    titlu: 'Informare corectă și completă',
                    desc: 'Dreptul de a fi informat corect și complet cu privire la caracteristicile esențiale ale produselor și serviciilor, prețuri și condiții contractuale.',
                  },
                  {
                    icon: '✓',
                    titlu: 'Garanție legală',
                    desc: 'Garanție legală de conformitate de 2 ani de la recepția lucrărilor. CELLARIS oferă suplimentar garanție comercială de 30 de ani.',
                  },
                  {
                    icon: '✓',
                    titlu: 'Remediere sau înlocuire',
                    desc: 'În cazul neconformității, aveți dreptul la remediere gratuită, înlocuire sau, dacă acestea nu sunt posibile, la reducerea prețului sau rezilierea contractului.',
                  },
                  {
                    icon: '✓',
                    titlu: 'Soluționarea reclamațiilor',
                    desc: 'Orice reclamație adresată CELLARIS va fi soluționată în maximum 30 de zile calendaristice de la primire.',
                  },
                ].map(({ icon, titlu, desc }) => (
                  <div key={titlu} style={{ display: 'flex', gap: '1rem', padding: '0.875rem 1rem', background: 'var(--green-50)', border: '1px solid var(--green-100)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0, marginTop: '0.1rem' }}>{icon}</span>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--green-800)', marginBottom: '0.25rem' }}>{titlu}</p>
                      <p style={{ fontSize: '0.95rem' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reclamatie */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                Cum Depuneți o Reclamație la CELLARIS
              </h2>
              <p>
                Vă recomandăm ca primul pas să fie contactarea directă a CELLARIS pentru rezolvarea
                amiabilă a oricărei nemulțumiri:
              </p>
              <ol style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyle: 'decimal' }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@cellaris.ro" style={{ color: 'var(--accent-dim)' }}>contact@cellaris.ro</a>
                  {' '}— descrieți problema, atașați fotografii și documentele relevante;
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong>Telefon:</strong>{' '}
                  <a href="tel:+40721000000" style={{ color: 'var(--accent-dim)' }}>+40 721 000 000</a>
                  {' '}— L-V, 8:00–18:00;
                </li>
                <li>
                  <strong>Adresă poștală:</strong> CELLARIS S.R.L., București, România — reclamație scrisă cu confirmare de primire.
                </li>
              </ol>
              <p style={{ marginTop: '1rem' }}>
                CELLARIS va confirma primirea reclamației în maximum 3 zile lucrătoare și va oferi un
                răspuns complet în maximum 30 de zile.
              </p>
            </div>

            {/* SAL */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                Soluționarea Alternativă a Litigiilor (SAL)
              </h2>
              <p>
                Dacă nu ați obținut o soluție satisfăcătoare prin contactarea directă a CELLARIS, puteți
                apela la procedurile de Soluționare Alternativă a Litigiilor (SAL), conform Legii
                nr. 158/2015 privind alternativa la soluționarea litigiilor dintre consumatori și
                comercianți.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Entitatea SAL competentă pentru litigiile cu comercianții din România este:
              </p>
              <div style={{ marginTop: '1rem', padding: '1.25rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-300)' }}>
                <p style={{ fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.5rem' }}>
                  Autoritatea Națională pentru Protecția Consumatorilor (ANPC)
                </p>
                <p>Bd. Aviatorilor nr. 72, Sector 1, 011865 București</p>
                <p style={{ marginTop: '0.25rem' }}>
                  Telefon: <a href="tel:+40212075500" style={{ color: 'var(--accent-dim)' }}>+40 21 207 55 00</a>
                </p>
                <p>
                  Fax: +40 21 207 55 20
                </p>
                <p style={{ marginTop: '0.25rem' }}>
                  Website:{' '}
                  <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>
                    anpc.ro
                  </a>
                </p>
                <p>
                  Depunere online SAL:{' '}
                  <a href="https://anpc.ro/ce-facem/sal/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>
                    anpc.ro/ce-facem/sal/
                  </a>
                </p>
              </div>
            </div>

            {/* ODR */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                Platforma Europeană ODR (Online Dispute Resolution)
              </h2>
              <p>
                Consumatorii din Uniunea Europeană pot utiliza platforma europeană de soluționare online
                a litigiilor (ODR), conform Regulamentului (UE) nr. 524/2013. Platforma permite
                consumatorilor și comercianților să soluționeze litigiile online, fără a se prezenta în
                instanță.
              </p>
              <div style={{ marginTop: '1.25rem', textAlign: 'center' as const }}>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--accent"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Accesați Platforma ODR</span>
                  <span style={{ fontSize: '0.85rem' }}>→</span>
                </a>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                  ec.europa.eu/consumers/odr
                </p>
              </div>
            </div>

            {/* Contact ANPC */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--green-900)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--green-100)' }}>
                Date de Contact ANPC
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {[
                  { label: 'Sediu central', value: 'Bd. Aviatorilor nr. 72\nSector 1, 011865 București' },
                  { label: 'Telefon InfoCons', value: '0800 080 999\n(gratuit, L-V 8-20)' },
                  { label: 'Sesizări online', value: 'anpc.ro/sesizari' },
                  { label: 'Email', value: 'office@anpc.ro' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ padding: '1rem', background: 'var(--green-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--green-100)' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--green-600)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{label}</p>
                    <p style={{ whiteSpace: 'pre-line', fontWeight: 500 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '1rem 1.25rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '0.95rem' }}>
                Pentru detalii suplimentare despre drepturile dvs. sau pentru a ne contacta direct,
                vizitați pagina noastră de{' '}
                <Link href="/contact" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>Contact</Link>
                {' '}sau consultați{' '}
                <Link href="/termeni-si-conditii" style={{ color: 'var(--accent-dim)', fontWeight: 500 }}>Termenii și Condițiile</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
