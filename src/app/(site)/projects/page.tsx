import { InfiniteScrollingProjects } from '@/components/InifiniteScrollingProjects';
import { products } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <InfiniteScrollingProjects products={products} />
    </div>
  );
}
