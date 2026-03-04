"use client";

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const items = [
  {
    id: '1',
    title: 'Damenschnitt',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Haarstyling',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Colorierung',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Strähnen',
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Herrenschnitt',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Pflege-Behandlung',
    image:
      'https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=800&auto=format&fit=crop',
  },
];

export default function Galerie() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="galerie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">Galerie</h2>
            <p className="max-w-lg text-muted-foreground">
              Ein Einblick in unsere Arbeit und zufriedene Kunden
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-4 md:ml-8 lg:ml-16">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 h-full bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-xl font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
