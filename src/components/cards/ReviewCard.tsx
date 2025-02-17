import { Review } from '@/types';
import Image from 'next/image';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-transparent p-6 relative rounded-lg max-w-[500px] mx-auto flex gap-1">
      <div className="min-w-10 mr-4 mb-10">
        <Image placeholder="blur"
        blurDataURL="/placeholder.jpg" src="/icons/carbon_quotes.svg" alt="quote-icon" width={180} height={180} className="aspect-square" />
      </div>
      <div className="flex flex-col min-h-[230px] justify-between gap-4">
        <p className="">{review.review}</p>
        <div className="flex items-center gap-2">
          <Image placeholder="blur"
        blurDataURL="/placeholder.jpg" src={review.avatar} alt={review.name} width={60} height={60} className="rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
