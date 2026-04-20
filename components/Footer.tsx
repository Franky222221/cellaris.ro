import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <div className="footer__logo">
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', fontFamily: 'var(--font-sans)' }}>CELLARIS</span>
            </div>
            <p className="footer__tagline">
              Producător și montator de izolații premium din fibre de celuloză reciclată.
              Eficiență energetică reală, sustenabilitate certificată.
            </p>
            <div className="footer__socials">
              {[
                { href: 'https://www.facebook.com/cellaris.ro', label: 'Facebook', short: 'Fb' },
                { href: 'https://www.instagram.com/cellaris.ro', label: 'Instagram', short: 'In' },
                { href: 'https://www.linkedin.com/company/cellaris', label: 'LinkedIn', short: 'Li' },
                { href: 'https://www.youtube.com/@cellaris', label: 'YouTube', short: 'Yt' },
              ].map(s => (
                <a key={s.label} href={s.href} className="footer__social" aria-label={s.label} rel="noopener noreferrer" target="_blank">
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer__col-title">Companie</h3>
            <ul className="footer__links">
              {['Despre noi', 'Portofoliu', 'Blog', 'Parteneri', 'Cariere'].map(l => (
                <li key={l}><Link href={`/${l.toLowerCase().replace(' ', '-')}`} className="footer__link">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Servicii</h3>
            <ul className="footer__links">
              <li><Link href="/servicii#acoperis" className="footer__link">Izolație acoperiș</Link></li>
              <li><Link href="/servicii#perete" className="footer__link">Izolație pereți</Link></li>
              <li><Link href="/servicii#podea" className="footer__link">Izolație pardoseală</Link></li>
              <li><Link href="/servicii#renovare" className="footer__link">Renovare energetică</Link></li>
              <li><Link href="/calculator" className="footer__link">Calculator preț</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__links">
              <li><a href="tel:+40721000000" className="footer__link">+40 721 000 000</a></li>
              <li><a href="mailto:contact@cellaris.ro" className="footer__link">contact@cellaris.ro</a></li>
              <li><span className="footer__link">București · Ilfov · Prahova</span></li>
              <li><Link href="/contact" className="footer__link">Formular contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2025 CELLARIS SRL · CUI RO12345678 · J40/1234/2020</span>
          <nav className="footer__bottom-links">
            <Link href="/politica-confidentialitate">Confidențialitate</Link>
            <Link href="/termeni-si-conditii">Termeni</Link>
            <Link href="/politica-cookie">Cookies</Link>
            <Link href="/anpc">ANPC</Link>
          </nav>
        </div>
      </div>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/40721000000?text=Bun%C4%83%20ziua%2C%20vreau%20o%20ofert%C4%83%20pentru%20izola%C8%9Bie%20celuloz%C4%83."
        className="wa-float"
        aria-label="Chat WhatsApp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
