import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    image: '/placeholder.svg?height=400&width=600',
    description:
      'A full-featured e-commerce platform with product management, cart functionality, and secure checkout.',
    sourceCode: 'https://github.com/synnestra/ecommerce-platform',
    liveProject: 'https://ecommerce.synnestra.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    image: '/placeholder.svg?height=400&width=600',
    description:
      'A simple task management app with user authentication, task listing, and task creation functionality.',
    sourceCode: 'https://github.com/synnestra/task-management-app',
    liveProject: 'https://task.synnestra.com',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    image: '/placeholder.svg?height=400&width=600',
    description:
      'A web app that displays a dashboard of social media metrics, including follower count, engagement rate, and most popular posts.',
    sourceCode: 'https://github.com/synnestra/social-media-dashboard',
    liveProject: 'https://social.synnestra.com',
  },
  {
    id: 4,
    title: 'IoT Analytics Platform',
    image: '/placeholder.svg?height=400&width=600',
    description:
      'An IoT analytics platform that displays real-time sensor data, including temperature, humidity, and pressure.',
    sourceCode: 'https://github.com/synnestra/iot-analytics-platform',
    liveProject: 'https://iot.synnestra.com',
  },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-lg" />
        <div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="space-x-4">
            {project.sourceCode && (
              <Link href={project.sourceCode} className="text-purple-700 hover:underline">
                Source Code
              </Link>
            )}
            {project.liveProject && (
              <Link href={project.liveProject} className="text-purple-700 hover:underline">
                Live Project
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
