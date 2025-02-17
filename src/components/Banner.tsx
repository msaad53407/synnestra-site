import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type Props = {
  children: React.ReactNode;
  image: string;
  className?: string;
  minHeight?: string;
};

const Banner = ({ image, children, className, minHeight = 'min-h-[450px]' }: Props) => {
  return (
    <div className={`relative w-full h-auto ${minHeight}`}>
      <div className="absolute inset-0">
        <Image placeholder="blur"
        blurDataURL="/placeholder.jpg"
          src={image}
          width={1000}
          height={1000}
          quality={100}
          alt="BannerImage"
          className="object-cover size-full  rounded-2xl"
          priority
        />
      </div>
      <div className={cn('absolute flex flex-col gap-4 left-10 bottom-10 max-w-screen-2xl', className)}>{children}</div>
    </div>
  );
};

export default Banner;
