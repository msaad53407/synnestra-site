import { Company, Perk, ProjectShowcase, Review, Solution, TechnologyCard } from '@/types';

export const companies: Company[] = [
  {
    title: 'Company 1',
    thumbnail: '/company_logos/company_1.png',
  },
  {
    title: 'Company 2',
    thumbnail: '/company_logos/company_2.png',
  },
  {
    title: 'Company 3',
    thumbnail: '/company_logos/company_3.png',
  },
  {
    title: 'Company 4',
    thumbnail: '/company_logos/company_4.png',
  },
  {
    title: 'Company 5',
    thumbnail: '/company_logos/company_5.png',
  },
];

export const perks: Perk[] = [
  {
    title: 'Cost-Effectiveness',
    description:
      'lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus sed fames arcu sed aliquor. Euismod habitant turpis pellentesque posuere et amet sagittis velit. Diam tortor sed.',
    image: '/icons/streamline_business-idea-money.svg',
  },
  {
    title: 'Innovative Technology',
    description:
      'lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus sed fames arcu sed aliquor. Euismod habitant turpis pellentesque posuere et amet sagittis velit. Diam tortor sed.',
    image: '/icons/innovative_idea.svg',
  },
  {
    title: 'Industry Expertise',
    description:
      'lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus sed fames arcu sed aliquor. Euismod habitant turpis pellentesque posuere et amet sagittis velit. Diam tortor sed.',
    image: '/icons/fluent_design-ideas-24-regular.svg',
  },
  {
    title: 'Quality',
    description:
      'lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus sed fames arcu sed aliquor. Euismod habitant turpis pellentesque posuere et amet sagittis velit. Diam tortor sed.',
    image: '/icons/gis_cube-3d.svg',
  },
];

export const projectsShowcase: ProjectShowcase[] = [
  {
    id: '01',
    name: 'Success Loop',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    color: 'bg-custom-purple-light',
    textColor: 'text-black',
    headingColor: 'text-custom-purple',
    image: '/company_logos/successloop_logo.png',
  },
  {
    id: '02',
    name: 'Global Currency',
    description: '',
    color: 'bg-custom-cream',
    textColor: 'text-black',
    headingColor: 'text-custom-purple',
    image: '/company_logos/growth_app_logo.png',
  },
  {
    id: '03',
    name: 'Swappin Numbers Academy',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    color: 'bg-custom-purple',
    textColor: 'text-white',
    headingColor: 'text-white',
    image: '/company_logos/swapping_numbers_academy.png',
  },
];

export const solutions: Solution[] = [
  {
    title: 'Manage Services',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    icon: '/icons/grommet-icons_services.svg',
  },
  {
    title: 'IT Consulting & Advisory',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    icon: '/icons/fluent_people-team-24-regular.svg',
  },
  {
    title: 'Cyber Security',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    icon: '/icons/carbon_cloud-services.svg',
  },
  {
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    icon: '/icons/mdi_web-asset.svg',
  },
  {
    title: 'Mobile Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    icon: '/icons/healthicons_mobile.svg',
  },
  {
    title: 'Cloud Services',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor.',
    icon: '/icons/hugeicons_ai-security-01.svg',
  },
];

export const reviews: Review[] = [
  {
    name: 'Emily Sutherland',
    role: 'Marketing Director at AVD',
    review:
      'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Euismod habitant turpis pellentesque posuere id amet sagittis velit. ',
    avatar: '/people_images/reviewer_1.png',
  },
  {
    name: 'John Nordstrom',
    role: 'CFO',
    review:
      'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Euismod habitant turpis pellentesque posuere id amet sagittis velit. ',
    avatar: '/people_images/reviewer_2.png',
  },
  {
    name: 'Michael Brown',
    role: 'CTO',
    review:
      'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Euismod habitant turpis pellentesque posuere id amet sagittis velit. ',
    avatar: '/people_images/reviewer_3.png',
  },
  {
    name: 'Sarah Smith',
    role: 'CIO',
    review:
      'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Euismod habitant turpis pellentesque posuere id amet sagittis velit. ',
    avatar: '/people_images/reviewer_4.png',
  },
  {
    name: 'Gavy Gruzansky',
    role: 'CEO A Govarda',
    review:
      'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Euismod habitant turpis pellentesque posuere id amet sagittis velit. ',
    avatar: '/people_images/reviewer_5.png',
  },
  {
    name: 'Omri Pelad',
    role: 'CEO B',
    review:
      'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Euismod habitant turpis pellentesque posuere id amet sagittis velit. ',
    avatar: '/people_images/reviewer_6.png',
  },
];

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
];

export const technologyCards: TechnologyCard[] = [
  {
    name: 'HTML',
    imageSrc: '/technology_logos/html.svg',
  },
  {
    name: 'MySQL',
    imageSrc: '/technology_logos/mysql.svg',
  },
  {
    name: 'React',
    imageSrc: '/technology_logos/react.svg',
  },
  {
    name: 'Python',
    imageSrc: '/technology_logos/python.svg',
  },
  {
    name: 'Figma',
    imageSrc: '/technology_logos/figma.svg',
  },
  {
    name: 'Node.js',
    imageSrc: '/technology_logos/nodejs.svg',
  },
  {
    name: 'Java',
    imageSrc: '/technology_logos/java.svg',
  },
  {
    name: 'Django',
    imageSrc: '/technology_logos/django.svg',
  },
  {
    name: 'Flutter',
    imageSrc: '/technology_logos/flutter.svg',
  },
  {
    name: 'Adobe Illustrator',
    imageSrc: '/technology_logos/illustrator.svg',
  },
  {
    name: 'AWS',
    imageSrc: '/technology_logos/aws.svg',
  },
  {
    name: 'CSS',
    imageSrc: '/technology_logos/css.svg',
  },
];
