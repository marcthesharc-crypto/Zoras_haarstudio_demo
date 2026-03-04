import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="overflow-hidden bg-background px-4 py-24 md:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="animate-appear bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-5xl font-semibold leading-tight text-transparent drop-shadow-2xl md:text-7xl md:leading-tight">
          Zoras Haarstudio
        </h1>

        <p className="animate-appear max-w-[480px] text-lg font-medium text-muted-foreground opacity-0 [animation-delay:150ms] md:text-xl">
          Landwehrstraße 27, 80336 Munich
        </p>

        <div className="animate-appear flex flex-col items-center gap-4 opacity-0 [animation-delay:300ms] sm:flex-row">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="#kontakt">Termin vereinbaren</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[200px]">
            <Link href="#leistungen">Leistungen erkunden</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
