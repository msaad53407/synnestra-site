'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';

type ImageViewerProps = {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

export function ImageViewer({ src, alt, isOpen, onClose }: ImageViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-2 bg-white border-none size-[90%] max-w-full">
        <div className="relative size-full">
          <div className="relative size-full">
            <Image
              src={src || '/placeholder.svg'}
              alt={alt}
              className="rounded-xl object-contain"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
