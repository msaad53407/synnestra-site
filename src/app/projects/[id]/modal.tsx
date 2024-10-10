import { AnimatedModal } from '@/components/modals/AnimatedModal';
import ProjectPage from './page';

export default function ProjectModal({ params }: { params: { id: string } }) {
  return (
    <AnimatedModal>
      <ProjectPage params={params} />
    </AnimatedModal>
  );
}
