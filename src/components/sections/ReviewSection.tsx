'use client';

import { reviews } from '@/lib/constants';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReviewCard from '../cards/ReviewCard';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function ReviewSection() {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveSection(index);
    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth;
      const viewportWidth = scrollRef.current.clientWidth;
      const maxScroll = totalWidth - viewportWidth;
      const scrollPosition = (index / 2) * maxScroll;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const totalWidth = scrollRef.current.scrollWidth;
      const viewportWidth = scrollRef.current.clientWidth;
      const maxScroll = totalWidth - viewportWidth;

      const scrollPercentage = scrollPosition / maxScroll;
      const newActiveSection = Math.round(scrollPercentage * 2);

      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', handleScroll);
      return () => {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-12">
      <h2 className="text-3xl md:text-5xl leading-relaxed font-bold mb-20">
        What Our Clients Say
        <br />
        Voices of <span className="text-custom-purple">Success</span>
      </h2>
      <div className="relative">
        <div className="overflow-x-auto flex snap-x snap-mandatory gap-10 no-scrollbar" ref={scrollRef}>
          {reviews.map((review, index) => (
            <div key={index} className="snap-center">
              <ReviewCard review={review} />
            </div>
          ))}
          <Image
            src="/illustrations/Praise.svg"
            width={100}
            height={100}
            alt="Background Image of Review Section saying Praise"
            className="absolute -top-5 left-0 w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-10">
        <Button
          variant={'secondary'}
          className="bg-transparent hover:bg-transparent h-auto w-fit p-1 rounded-full"
          onClick={() => handleButtonClick(activeSection - 1)}
        >
          <ArrowLeftCircle className="size-10 text-black" />
        </Button>
        <Button
          variant={'secondary'}
          className="bg-transparent hover:bg-transparent h-auto w-fit p-1 rounded-full"
          onClick={() => handleButtonClick(activeSection + 1)}
        >
          <ArrowRightCircle className="size-10" />
        </Button>
      </div>
    </section>
  );
}
