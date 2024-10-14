import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4 flex-col">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild className="px-8 py-4 bg-custom-purple text-white">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
