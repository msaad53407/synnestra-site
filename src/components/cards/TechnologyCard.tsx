import { type TechnologyCard } from '@/types';
import Image from 'next/image';
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Props = {
  technology: TechnologyCard;
};

const TechnologyCard = ({ technology }: Props) => {
  return (
    <AnimatedSection direction={'up'} className="w-16 h-16 p-2 flex items-center justify-center bg-gray-300 rounded-xl">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger className="cursor-default">
            <Image
              src={technology.imageSrc}
              alt={technology.name}
              width={100}
              height={100}
              className="object-contain size-full"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{technology.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </AnimatedSection>
  );
};

export default TechnologyCard;
