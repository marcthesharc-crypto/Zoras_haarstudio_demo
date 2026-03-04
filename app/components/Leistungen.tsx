import { cn } from '@/lib/utils';
import { Scissors, Sparkles, Paintbrush, Palette, Wand as Wand2, Droplets } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Damen-Haarschnitt',
    description: 'Professioneller Schnitt für jeden Stil und jede Haarlänge',
    price: 'ab €45',
    className: 'col-span-1 md:col-span-4 border-b md:border-r',
  },
  {
    icon: Sparkles,
    title: 'Herren-Haarschnitt',
    description: 'Klassisch oder modern – für den perfekten Look',
    price: 'ab €35',
    className: 'col-span-1 md:col-span-2 border-b',
  },
  {
    icon: Paintbrush,
    title: 'Färben',
    description: 'Natürliche oder kreative Farben mit Premium-Produkten',
    price: 'ab €65',
    className: 'col-span-1 md:col-span-2 border-b md:border-r',
  },
  {
    icon: Palette,
    title: 'Strähnen',
    description: 'Highlights und Lowlights für mehr Tiefe und Dimension',
    price: 'ab €75',
    className: 'col-span-1 md:col-span-4 border-b',
  },
  {
    icon: Wand2,
    title: 'Styling',
    description: 'Festliches Styling für besondere Anlässe',
    price: 'ab €50',
    className: 'col-span-1 md:col-span-3 md:border-r',
  },
  {
    icon: Droplets,
    title: 'Haarpflege',
    description: 'Intensive Pflege-Behandlungen für gesundes Haar',
    price: 'ab €30',
    className: 'col-span-1 md:col-span-3',
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 px-2 text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Unsere Leistungen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground lg:text-base">
            Entdecken Sie unser umfangreiches Angebot an professionellen Friseurdienstleistungen
          </p>
        </div>

        <div className="relative grid grid-cols-1 rounded-md md:grid-cols-6 xl:border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={cn('relative overflow-hidden p-6 sm:p-8', service.className)}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="mb-4 max-w-sm text-sm text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-primary">{service.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
