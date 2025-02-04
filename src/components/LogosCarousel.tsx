'use client';

import type React from 'react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Carousel, CarouselContent, type CarouselApi } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

type Props = {
  speed?: number;
} & PropsWithChildren;

export default function LogosCarousel({ children, speed = 1 }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [autoScrollPlugin, setAutoScrollPlugin] = useState<ReturnType<typeof AutoScroll> | null>(null);

  useEffect(() => {
    if (!autoScrollPlugin) {
      setAutoScrollPlugin(
        AutoScroll({
          playOnInit: true,
          stopOnInteraction: false,
          speed, // Adjust this value to control the speed
        }),
      );
    }
  }, [autoScrollPlugin, speed]);

  useEffect(() => {
    if (!api || !autoScrollPlugin) return;

    // Start autoscroll when the API is available
    const autoScroll = api.plugins().autoScroll;
    if (autoScroll) {
      autoScroll.play();
    }

    return () => {
      if (autoScroll) {
        autoScroll.stop();
      }
    };
  }, [api, autoScrollPlugin]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto overflow-hidden gradient-3">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
          skipSnaps: true,
          dragFree: true,
        }}
        plugins={autoScrollPlugin ? [autoScrollPlugin] : []}
        className="w-full py-4"
        style={{
          background: 'linear-gradient(180deg, rgba(224,226,255,1) 0%, rgba(255,255,255,1) 100%)',
          backgroundColor: 'rgb(224,226,255)',
        }}
      >
        <CarouselContent className="-ml-1 gap-4 items-center">{children}</CarouselContent>
      </Carousel>
    </div>
  );
}
