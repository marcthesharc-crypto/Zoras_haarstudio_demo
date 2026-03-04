import Link from 'next/link';
import { Scissors, Instagram, Facebook, Phone, Mail } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Leistungen',
    items: [
      { name: 'Damen-Haarschnitt', href: '#leistungen' },
      { name: 'Herren-Haarschnitt', href: '#leistungen' },
      { name: 'Färben & Strähnen', href: '#leistungen' },
      { name: 'Haarpflege', href: '#leistungen' },
    ],
  },
  {
    heading: 'Salon',
    items: [
      { name: 'Über uns', href: '#ueber-uns' },
      { name: 'Galerie', href: '#galerie' },
      { name: 'Öffnungszeiten', href: '#oeffnungszeiten' },
    ],
  },
  {
    heading: 'Rechtliches',
    items: [
      { name: 'Impressum', href: '#' },
      { name: 'Datenschutz', href: '#' },
    ],
  },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Telefon', href: 'tel:+498912345678', icon: Phone },
  { label: 'E-Mail', href: 'mailto:info@salon-schoenheit.de', icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-b border-t">
      {/* Brand + description */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Scissors className="h-6 w-6" />
          <span className="text-lg font-semibold">Salon Schönheit</span>
        </Link>
        <p className="max-w-sm text-center text-xs leading-5 text-muted-foreground md:text-left">
          Seit über 15 Jahren Ihr vertrauensvoller Friseur im Herzen von Schwabing. Wir verbinden
          traditionelles Handwerk mit modernen Trends – für den perfekten Look.
        </p>
      </div>

      {/* Dotted divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-b border-dotted" />
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="mb-3 text-sm font-semibold">{section.heading}</h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Dotted divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-b border-dotted" />
      </div>

      {/* Social icons + copyright */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex -translate-y-0 items-center justify-center rounded-xl border border-dotted p-2.5 transition-transform hover:-translate-y-1"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {currentYear} Salon Schönheit. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
