import { cn } from '@/lib/utils';
import { ProjectShowcase } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

type Props = {
  index: number;
  project: ProjectShowcase;
};

const AppShowcaseCard = ({
  index,
  project: { color, description, headingColor, id, image, name, textColor },
}: Props) => {
  return (
    <AnimatedSection
      direction={index === 2 ? 'up' : index === 0 ? 'left' : 'right'}
      key={id}
      className={cn(
        `rounded-2xl bg-custom-cream p-6 flex flex-col min-h-80`,
        index === 0 ? 'col-span-6 md:col-span-4' : index === 1 ? 'col-span-6 md:col-span-2' : 'col-span-6',
        color,
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-sm font-semibold ${textColor}`}>{id}</span>
        <span className={`text-sm font-semibold ${textColor}`}>Showcase</span>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between h-full">
        <div className="w-full md:w-[70%]">
          <h3 className={`text-3xl font-medium mb-2 ${headingColor}`}>{name}</h3>
          {description && <p className={`mb-4 ${textColor} opacity-80`}>{description}</p>}
        </div>
        <div
          className={cn('flex flex-col items-end gap-2 w-full', index !== 2 ? 'justify-end md:w-[30%]' : 'justify-center')}
        >
          <Image
            src={image}
            alt={`${name} preview`}
            width={index === 2 ? 800 : 200}
            height={index === 2 ? 600 : 100}
            className={cn('rounded-lg object-contain w-full', index === 2 ? 'md:w-[70%] self-start' : 'md:w-full')}
            quality={100}
          />
          <Link href="#">
            <ArrowUpRight className={`${textColor} w-8 h-8`} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AppShowcaseCard;
