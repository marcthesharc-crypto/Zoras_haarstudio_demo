import Link from 'next/link';
import { Scissors, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { title: 'Leistungen', href: '#leistungen' },
  { title: 'Galerie', href: '#galerie' },
  { title: 'Über uns', href: '#ueber-uns' },
  { title: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Desktop */}
        <nav className="hidden h-16 items-center justify-between lg:flex">
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <Scissors className="h-5 w-5" />
            <span>Salon Schönheit</span>
          </Link>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Button asChild size="sm">
            <Link href="#kontakt">Termin vereinbaren</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="flex h-16 items-center justify-between lg:hidden">
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <Scissors className="h-5 w-5" />
            <span>Salon Schönheit</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Scissors className="h-5 w-5" />
                    <span>Salon Schönheit</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="border-t pt-4">
                  <Button asChild className="w-full">
                    <Link href="#kontakt">Termin vereinbaren</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
