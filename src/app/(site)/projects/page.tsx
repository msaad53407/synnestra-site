import { InfiniteScrollingProjects } from '@/components/InifiniteScrollingProjects';
import { products } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-custom-purple mb-8">Our Projects</h1>
      <InfiniteScrollingProjects products={products} />
    </div>
  );
}
