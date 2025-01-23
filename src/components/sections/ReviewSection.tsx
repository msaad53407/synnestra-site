'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { reviews } from '@/lib/constants';
import Image from 'next/image';
import ReviewCard from '../cards/ReviewCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function ReviewSection() {
  return (
    <AnimatedSection direction={'up'} className="px-4 py-6 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-5xl leading-relaxed font-bold mb-20">
        What Our Clients Say
        <br />
        Voices of <span className="text-custom-purple">Success</span>
      </h2>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" className={'absolute md:size-10 -left-2 top-1/2 -translate-y-1/2 z-10'} />
          <CarouselNext variant="ghost" className={'absolute md:size-10 -right-2 top-1/2 -translate-y-1/2 z-10'} />
        </Carousel>
        <Image
          src="/illustrations/Praise.svg"
          width={100}
          height={100}
          alt="Background Image of Review Section saying Praise"
          className="absolute -top-5 left-0 w-full h-full object-contain"
        />
      </div>
    </AnimatedSection>
  );
}
