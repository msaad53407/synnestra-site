import { TimelineEntry } from '@/components/ui/timeline';
import { Company, Perk, Project, ProjectShowcase, Review, Solution, TechnologyCard } from '@/types';
import { Brain, CircleDotDashed, Cog, Presentation } from 'lucide-react';

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

export const products: Project[] = [
  {
    slug: 'moonbeam',
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    slug: 'cursor',
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    slug: 'rogue',
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },
  {
    slug: 'editorially',
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    slug: 'editrix-ai',
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    slug: 'pixel-perfect',
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
  },
  {
    slug: 'algochurn',
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
  },
  {
    slug: 'aceternity-ui',
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
  },
  {
    slug: 'tailwind-master-kit',
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
  },
  {
    slug: 'smartbridge',
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    slug: 'renderwork-studio',
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },
  {
    slug: 'creme-digital',
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    slug: 'golden-bells-academy',
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    slug: 'invoker-labs',
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    slug: 'e-free-invoice',
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

export const timelineItems: TimelineEntry[] = [
  {
    title: '2016',
    content: [
      {
        heading: 'Synnestra Begin its Journey',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2017',
    content: [
      {
        heading: 'We are Transparent',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2018',
    content: [
      {
        heading: 'Assent',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2019',
    content: [
      {
        heading: 'Synnestra signed a $30 Million contract',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2020',
    content: [
      {
        heading: 'We are Transparent',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2021',
    content: [
      {
        heading: 'Highest Value contract signing in Synnestra’s History',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2022',
    content: [
      {
        heading: 'Artificial Intelligence',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
      {
        heading: 'Synnestra announced first North American go live for NFS Ascent',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2023',
    content: [
      {
        heading: 'Most Innovative Company in the Equipment Finance Ecosystem',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
  {
    title: '2024',
    content: [
      {
        heading: 'Otoz 2.0 Launched',
        description:
          'Lorem ipsum dolor sit amet consectetur. Commodo fermentum diam cursus est fames arcu sed auctor. Eulismod habitant turpis pellentesque.',
      },
    ],
  },
];

export const servicesProvided = [
  {
    slug: 'managed-services',
    imageSrc: '/managed_services_section.png',
    benefits: [
      {
        icon: CircleDotDashed,
        title: 'Quiet Quitting',
        description: 'Professional managed services to keep your technology running smoothly without disruptions.',
      },
      {
        icon: Presentation,
        title: 'Training Disparity',
        description: 'Ensure your team is equipped with the right skills and support to handle tech issues.',
      },
      {
        icon: Cog,
        title: 'Management Failure',
        description: 'Reduce management overhead by letting us handle your IT needs with efficiency.',
      },
      {
        icon: Brain,
        title: 'Intensive Impact',
        description: 'Drive impactful results with technology managed by our skilled professionals.',
      },
    ],
    offers: {
      mainHeading: 'Cutting Edge Tools that Drive Performance',
      subtitle: 'Is your tech holding you back? We provide the edge you need with IT that supports your goals.',
      offerings: [
        {
          title: 'A Personalized Path to Success',
          description: 'Align your IT strategy with your core business goals for maximum impact.',
        },
        {
          title: 'Customer Demand Creation',
          description: 'Enhance your customer experience through optimized, managed IT services.',
        },
        {
          title: "Embrace Tomorrow's Possibilities",
          description: 'Future-proof your business with innovative technology solutions.',
        },
      ],
    },
  },
  {
    slug: 'it-consultancy-and-advisory',
    imageSrc: '/managed_services_section.png',
    benefits: [
      {
        icon: CircleDotDashed,
        title: 'Strategic Planning',
        description: 'Our advisory services help you craft a tailored IT roadmap aligned with your business vision.',
      },
      {
        icon: Presentation,
        title: 'Risk Mitigation',
        description: 'Identify and manage IT risks proactively to safeguard your business operations.',
      },
      {
        icon: Cog,
        title: 'Operational Efficiency',
        description: 'Streamline processes and improve efficiency with expert IT consultancy.',
      },
      {
        icon: Brain,
        title: 'Scalable Growth',
        description: 'Achieve sustainable growth with technology solutions designed to scale.',
      },
    ],
    offers: {
      mainHeading: 'Expert Guidance for Optimal IT Decisions',
      subtitle: 'Maximize your tech investments with insightful IT advisory and consultancy services.',
      offerings: [
        {
          title: 'Customized IT Strategy',
          description: 'Get a roadmap designed to meet your business’s unique needs and goals.',
        },
        {
          title: 'Tech Risk Assessment',
          description: 'Understand and mitigate risks through expert assessment and planning.',
        },
        {
          title: 'Growth-Ready Solutions',
          description: 'Prepare your infrastructure for future growth with scalable IT solutions.',
        },
      ],
    },
  },
  {
    slug: 'cyber-security',
    imageSrc: '/managed_services_section.png',
    benefits: [
      {
        icon: CircleDotDashed,
        title: 'Threat Protection',
        description: 'Comprehensive protection against cyber threats to keep your data secure.',
      },
      {
        icon: Presentation,
        title: 'Data Privacy',
        description: 'Ensure compliance and secure sensitive data with cutting-edge security protocols.',
      },
      {
        icon: Cog,
        title: 'Proactive Monitoring',
        description: 'Real-time monitoring and incident response to minimize security risks.',
      },
      {
        icon: Brain,
        title: 'Vulnerability Management',
        description: 'Identify and fix vulnerabilities before they become threats to your business.',
      },
    ],
    offers: {
      mainHeading: 'Advanced Cybersecurity for a Safer Future',
      subtitle: 'Stay ahead of evolving threats with robust, managed cybersecurity solutions.',
      offerings: [
        {
          title: 'Comprehensive Protection Plans',
          description: 'Secure your network with industry-leading cybersecurity measures.',
        },
        {
          title: 'Real-Time Monitoring',
          description: 'Detect and respond to threats with proactive monitoring and alerts.',
        },
        {
          title: 'Data Compliance & Privacy',
          description: 'Ensure data privacy and regulatory compliance in your business.',
        },
      ],
    },
  },
  {
    slug: 'web-development',
    imageSrc: '/managed_services_section.png',
    benefits: [
      {
        icon: CircleDotDashed,
        title: 'User-Centric Design',
        description: 'Craft intuitive and engaging user experiences that elevate your brand online.',
      },
      {
        icon: Presentation,
        title: 'Scalability',
        description: 'Build scalable web applications designed to grow with your business.',
      },
      {
        icon: Cog,
        title: 'Performance Optimization',
        description: 'Ensure fast load times and smooth performance for an optimal user experience.',
      },
      {
        icon: Brain,
        title: 'SEO & Accessibility',
        description: 'Increase visibility and reach with SEO-optimized and accessible web designs.',
      },
    ],
    offers: {
      mainHeading: 'Creative and Robust Web Solutions',
      subtitle: 'Bring your digital vision to life with modern, custom-built websites.',
      offerings: [
        {
          title: 'Responsive Designs',
          description: 'Create websites that look and perform beautifully on any device.',
        },
        {
          title: 'SEO-Optimized Development',
          description: 'Boost online visibility with built-in SEO practices.',
        },
        {
          title: 'Custom Solutions for Your Brand',
          description: 'Develop websites tailored to your unique business needs.',
        },
      ],
    },
  },
  {
    slug: 'mobile-development',
    imageSrc: '/managed_services_section.png',
    benefits: [
      {
        icon: CircleDotDashed,
        title: 'Cross-Platform Compatibility',
        description: 'Reach users across platforms with mobile solutions that work everywhere.',
      },
      {
        icon: Presentation,
        title: 'Enhanced User Experience',
        description: 'Deliver seamless mobile experiences that keep users engaged and satisfied.',
      },
      {
        icon: Cog,
        title: 'High Performance',
        description: 'Build fast, reliable mobile apps that run smoothly under heavy load.',
      },
      {
        icon: Brain,
        title: 'Security & Privacy',
        description: 'Protect user data and maintain privacy with secure mobile app development practices.',
      },
    ],
    offers: {
      mainHeading: 'Innovative Mobile Solutions',
      subtitle: 'Empower your business with mobile applications that enhance accessibility.',
      offerings: [
        {
          title: 'Native & Cross-Platform Apps',
          description: 'Develop apps tailored for both iOS and Android users.',
        },
        {
          title: 'User-Centric Interfaces',
          description: 'Create interfaces that prioritize user engagement and satisfaction.',
        },
        {
          title: 'Performance-Driven Development',
          description: 'Deliver high-quality mobile experiences that meet modern standards.',
        },
      ],
    },
  },
  {
    slug: 'cloud-services',
    imageSrc: '/managed_services_section.png',
    benefits: [
      {
        icon: CircleDotDashed,
        title: 'Cost Efficiency',
        description: 'Reduce operational costs with cloud solutions that optimize resource use.',
      },
      {
        icon: Presentation,
        title: 'Scalability on Demand',
        description: 'Easily scale resources up or down based on your business needs.',
      },
      {
        icon: Cog,
        title: 'Enhanced Collaboration',
        description: 'Improve collaboration and productivity with cloud-based tools.',
      },
      {
        icon: Brain,
        title: 'Data Security',
        description: 'Ensure data security and compliance with industry-leading cloud services.',
      },
    ],
    offers: {
      mainHeading: 'Flexible and Secure Cloud Solutions',
      subtitle: 'Unlock new possibilities with scalable, secure, and flexible cloud services.',
      offerings: [
        {
          title: 'Hybrid & Multi-Cloud Options',
          description: 'Choose the cloud infrastructure that fits your business best.',
        },
        {
          title: 'Disaster Recovery & Backup',
          description: 'Keep your data safe with built-in recovery and backup solutions.',
        },
        {
          title: 'Collaboration & Efficiency',
          description: 'Enhance team collaboration with flexible, cloud-based solutions.',
        },
      ],
    },
  },
];
