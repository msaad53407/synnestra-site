import { type TechnologyCard } from '@/types';
import Image from 'next/image';
import React from 'react';

type Props = {
  technology: TechnologyCard;
};

const TechnologyCard = ({ technology }: Props) => {
  return (
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-gray-300 rounded-xl">
      <Image
        src={technology.imageSrc}
        alt={technology.name}
        width={100}
        height={100}
        className="object-contain size-full"
      />
    </div>
  );
};

export default TechnologyCard;
