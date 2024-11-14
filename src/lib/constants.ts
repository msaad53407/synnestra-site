import { TimelineEntry } from '@/components/ui/timeline';
import { Company, Industry, Perk, Project, ProjectShowcase, Review, Service, Solution, TechnologyCard } from '@/types';
import { Brain, CircleDotDashed, Cog, Presentation } from 'lucide-react';
import { transformSlug } from '@/lib/utils';

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
      'Our agile development approach and scalable solutions ensure that you get the most value for your investment. We prioritize cost-optimization without compromising on quality or functionality.',
    image: '/icons/streamline_business-idea-money.svg',
  },
  {
    title: 'Innovative Technology',
    description:
      'We leverage the latest advancements in software engineering to deliver cutting-edge solutions that adapt to your evolving needs. Our focus on innovation helps you stay ahead of the curve.',
    image: '/icons/innovative_idea.svg',
  },
  {
    title: 'Industry Expertise',
    description:
      'With decades of experience serving diverse industries, we understand the unique challenges you face. Our tailored solutions are crafted to address your specific pain points and unlock your full potential.',
    image: '/icons/fluent_design-ideas-24-regular.svg',
  },
  {
    title: 'Quality',
    description:
      'Quality is at the heart of everything we do. We adhere to rigorous standards and implement robust testing procedures to ensure the reliability and performance of our products. Your satisfaction is our top priority.',
    image: '/icons/gis_cube-3d.svg',
  },
];

export const projectsShowcase: ProjectShowcase[] = [
  {
    id: '01',
    name: 'Success Loop',
    description: 'At Synnestra, we empower businesses to achieve sustainable growth through our innovative software solutions. Our "Success Loop" methodology ensures that we consistently deliver tangible results and drive continuous improvement for our clients.',
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
    description: 'As part of our commitment to knowledge-sharing, we have developed the Swappin\' Numbers Academy - an educational platform that equips professionals with the skills and strategies needed to navigate the dynamic world of financial data analysis and decision-making.',
    color: 'bg-custom-purple',
    textColor: 'text-white',
    headingColor: 'text-white',
    image: '/company_logos/swapping_numbers_academy.png',
  },
];

export const solutions: Solution[] = [
  {
    title: 'Manage Services',
    description: 'Our comprehensive managed services suite ensures the smooth and efficient operation of your business-critical systems, allowing you to focus on core competencies and achieve your strategic objectives.',
    icon: '/icons/grommet-icons_services.svg',
  },
  {
    title: 'IT Consulting & Advisory',
    description: 'Leverage our industry-leading expertise to navigate the complex IT landscape. Our consultative approach helps you align technology with your business goals, optimize performance, and drive innovation.',
    icon: '/icons/fluent_people-team-24-regular.svg',
  },
  {
    title: 'Cyber Security',
    description: 'Protect your organization\'s sensitive data and digital assets with our robust cybersecurity solutions. We implement multi-layered security measures to safeguard your operations and maintain business continuity.',
    icon: '/icons/carbon_cloud-services.svg',
  },
  {
    title: 'Web Development',
    description: 'Our web development services empower you to create engaging, user-centric digital experiences that showcase your brand, enhance customer interactions, and drive business growth.',
    icon: '/icons/mdi_web-asset.svg',
  },
  {
    title: 'Mobile Development',
    description: 'Stay ahead of the mobile-first revolution with our custom mobile applications. We develop intuitive, feature-rich solutions that seamlessly integrate with your existing systems and processes.',
    icon: '/icons/healthicons_mobile.svg',
  },
  {
    title: 'Cloud Services',
    description: 'Unlock the power of cloud computing with our comprehensive suite of cloud-based services. From infrastructure to software-as-a-service, we help you harness the flexibility, scalability, and cost-efficiency of the cloud.',
    icon: '/icons/hugeicons_ai-security-01.svg',
  },
];

export const reviews: Review[] = [
  {
    name: 'Emily Sutherland',
    role: 'Marketing Director at AVD',
    review:
      'Synnestra\'s solutions have been a game-changer for our marketing team. The intuitive web tools and mobile apps have streamlined our workflows and enabled us to deliver more effective campaigns.',
    avatar: '/people_images/reviewer_1.png',
  },
  {
    name: 'John Nordstrom',
    role: 'CFO',
    review:
      'As the CFO, I\'ve been extremely impressed with Synnestra\'s financial management tools. The real-time reporting and cross-border transaction capabilities have been invaluable in optimizing our global operations.',
    avatar: '/people_images/reviewer_2.png',
  },
  {
    name: 'Michael Brown',
    role: 'CTO',
    review:
      'Synnestra\'s IT consulting and cybersecurity services have been instrumental in modernizing our technology infrastructure. Their expert guidance has helped us enhance our digital resilience and drive innovation.',
    avatar: '/people_images/reviewer_3.png',
  },
  {
    name: 'Sarah Smith',
    role: 'CIO',
    review:
      'Synnestra\'s cloud-based solutions have transformed the way we manage our IT resources. The scalability and cost-efficiency of their platform have allowed us to focus on our core business objectives.',
    avatar: '/people_images/reviewer_4.png',
  },
  {
    name: 'Gavy Gruzansky',
    role: 'CEO A Govarda',
    review:
      'Synnestra\'s mobile development expertise has been integral to the success of our new product launch. The intuitive app they created has revolutionized the way our customers interact with our brand.',
    avatar: '/people_images/reviewer_5.png',
  },
  {
    name: 'Omri Pelad',
    role: 'CEO B',
    review:
      'Synnestra\'s managed services have been a lifesaver for our business. The seamless operation of our critical systems and the proactive support from their team have allowed us to concentrate on strategic initiatives.',
    avatar: '/people_images/reviewer_6.png',
  },
];

export const products: Project[] = [
  {
    slug: 'success-loop',
    title: 'Successloop',
    thumbnail: '/projects/success-loop/thumbnail.png',
    description: 'SuccessLoop is a powerful platform designed to help businesses create, manage, and optimize referral programs. Our mission is to bring the human touch to a digital world by leveraging the power of word-of-mouth marketing to build communities and brands.',
    features: [
      'Customizable Referral Programs',
      'Real-Time Analytics',
      'Incentive Structures',
      'Gamification Elements',
      'Automated Tracking and Reporting',
      'Seamless Integration',
    ],
    technologies: [
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'Node.js',
        imageSrc: '/technology_logos/nodejs.svg',
      },
      {
        name: 'AWS',
        imageSrc: '/technology_logos/aws.svg',
      }, {
        name: 'MySQL',
        imageSrc: '/technology_logos/mysql.svg',
      },
    ],
    images: [
      {
        src: '/projects/success-loop/image-1.png',
        alt: 'image-1',
      }, {
        src: '/projects/success-loop/image-2.png',
        alt: 'image-2',
      }, {
        src: '/projects/success-loop/image-3.png',
        alt: 'image-3',
      }, {
        src: '/projects/success-loop/image-4.png',
        alt: 'image-4',
      }, {
        src: '/projects/success-loop/image-5.png',
        alt: 'image-5',
      },
    ],
  },
  {
    slug: 'management-system',
    title: 'Management System',
    thumbnail: '/projects/management-system/thumbnail.png',
    features: [
      'Centralized dashboard for tracking key metrics',
      'Comprehensive chapter and district rosters',
      'Customizable chapter and district settings',
      'Role-based access control for secure collaboration',
      'Manage chapter finances and track transactions',
      'Schedule and document meetings with ease',
      'Secure authentication powered by Clerk',
    ],
    technologies: [
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'Figma',
        imageSrc: '/technology_logos/figma.svg',
      },
      {
        name: 'AWS',
        imageSrc: '/technology_logos/aws.svg',
      }, {
        name: 'Nodejs',
        imageSrc: '/technology_logos/nodejs.svg',
      },
    ],
    description: `A cutting-edge solution that leverages the power of modern technologies to deliver a robust set of capabilities, including advanced data analysis, streamlined workflows, and scalable infrastructure. This application is designed to provide a seamless user experience and drive business success.`,
    images: [
      {
        src: '/projects/management-system/image-1.png',
        alt: 'image-1',
      }, {
        src: '/projects/management-system/image-2.png',
        alt: 'image-2',
      }, {
        src: '/projects/management-system/image-3.png',
        alt: 'image-3',
      }, {
        src: '/projects/management-system/image-4.png',
        alt: 'image-4',
      }, {
        src: '/projects/management-system/image-5.png',
        alt: 'image-5',
      },
    ],
  },
  {
    slug: 'rogue',
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    description: 'A cutting-edge design and prototyping platform for creating stunning user interfaces and experiences.',
    features: [
      'Visual design tools',
      'Interactive prototyping',
      'Design system management',
      'Collaboration features',
      'Export to multiple formats',
    ],
    technologies: [
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'Figma',
        imageSrc: '/technology_logos/figma.svg',
      },
      {
        name: 'Adobe Illustrator',
        imageSrc: '/technology_logos/illustrator.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'editorially',
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    description: 'A collaborative writing and editing platform designed for teams to create, review, and publish content efficiently.',
    features: [
      'Document collaboration',
      'Version control',
      'Editorial workflow',
      'Content organization',
      'Publishing tools',
    ],
    technologies: [
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'Node.js',
        imageSrc: '/technology_logos/nodejs.svg',
      },
      {
        name: 'MySQL',
        imageSrc: '/technology_logos/mysql.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'editrix-ai',
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    description: 'An AI-powered editing assistant that helps writers and editors improve their content with intelligent suggestions.',
    features: [
      'AI grammar checking',
      'Style recommendations',
      'Content enhancement',
      'Plagiarism detection',
      'Writing analytics',
    ],
    technologies: [
      {
        name: 'Python',
        imageSrc: '/technology_logos/python.svg',
      },
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'AWS',
        imageSrc: '/technology_logos/aws.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'pixel-perfect',
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    description: 'A comprehensive design quality assurance tool that helps designers and developers ensure pixel-perfect implementations.',
    features: [
      'Design comparison tools',
      'Responsive testing',
      'Cross-browser validation',
      'Collaboration features',
      'Issue tracking',
    ],
    technologies: [
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'HTML',
        imageSrc: '/technology_logos/html.svg',
      },
      {
        name: 'CSS',
        imageSrc: '/technology_logos/css.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'algochurn',
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
    description: 'An interactive platform for learning and practicing algorithmic problem-solving with hands-on coding challenges.',
    features: [
      'Coding challenges',
      'Interactive tutorials',
      'Performance analytics',
      'Progress tracking',
      'Community features',
    ],
    technologies: [
      {
        name: 'Python',
        imageSrc: '/technology_logos/python.svg',
      },
      {
        name: 'Java',
        imageSrc: '/technology_logos/java.svg',
      },
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'aceternity-ui',
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
    description: 'A modern UI component library for building beautiful and responsive web applications with ease.',
    features: [
      'Responsive components',
      'Custom themes',
      'Interactive documentation',
      'Accessibility support',
      'Performance optimized',
    ],
    technologies: [
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'HTML',
        imageSrc: '/technology_logos/html.svg',
      },
      {
        name: 'CSS',
        imageSrc: '/technology_logos/css.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'tailwind-master-kit',
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    description: 'A comprehensive collection of Tailwind CSS components and templates for rapid web development.',
    features: [
      'Pre-built components',
      'Responsive layouts',
      'Dark mode support',
      'Custom utilities',
      'Interactive previews',
    ],
    technologies: [
      {
        name: 'HTML',
        imageSrc: '/technology_logos/html.svg',
      },
      {
        name: 'CSS',
        imageSrc: '/technology_logos/css.svg',
      },
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'smartbridge',
    title: 'Smart Bridge',
    link: 'https://smartbridgetech.com',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    description: 'An intelligent IoT platform that connects and manages smart devices for homes and businesses.',
    features: [
      'Device management',
      'Real-time monitoring',
      'Automated workflows',
      'Data analytics',
      'Security features',
    ],
    technologies: [
      {
        name: 'Python',
        imageSrc: '/technology_logos/python.svg',
      },
      {
        name: 'Node.js',
        imageSrc: '/technology_logos/nodejs.svg',
      },
      {
        name: 'AWS',
        imageSrc: '/technology_logos/aws.svg',
      },
    ],
    images: [],
  },
  {
    slug: 'renderwork-studio',
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    description: 'A professional-grade 3D rendering and visualization studio for architects and designers.',
    features: [
      '3D rendering tools',
      'Material library',
      'Lighting effects',
      'Scene management',
      'Export options',
    ],
    technologies: [
      {
        name: 'Python',
        imageSrc: '/technology_logos/python.svg',
      },
      {
        name: 'React',
        imageSrc: '/technology_logos/react.svg',
      },
      {
        name: 'AWS',
        imageSrc: '/technology_logos/aws.svg',
      },
    ],
    images: [],
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
        heading: 'Synnestra Established',
        description:
          'Synnestra was founded with a mission to simplify complex IT challenges for businesses across diverse industries. Our journey began with a commitment to delivering innovative software solutions and exceptional customer service.',
      },
    ],
  },
  {
    title: '2017',
    content: [
      {
        heading: 'Embracing Transparency',
        description:
          'We made a strategic decision to prioritize transparency in all our operations, ensuring our clients have full visibility into our processes and the progress of their projects. This commitment has been a cornerstone of our growth and client satisfaction.',
      },
    ],
  },
  {
    title: '2018',
    content: [
      {
        heading: 'Achieving Operational Excellence',
        description:
          'Through rigorous process improvement and the implementation of best practices, Synnestra solidified its position as a trusted partner for businesses seeking to streamline their operations and enhance their competitiveness.',
      },
    ],
  },
  {
    title: '2019',
    content: [
      {
        heading: 'Landmark $30 Million Contract',
        description:
          'Synnestra reached a significant milestone by securing a $30 million contract, further validating our expertise and the value we deliver to our clients. This achievement was a testament to our team\'s hard work, innovative solutions, and unwavering commitment to client success.',
      },
    ],
  },

  {
    title: '2020',
    content: [
      {
        heading: 'Navigating Unprecedented Challenges',
        description:
          'The global pandemic presented unprecedented challenges, but Synnestra\'s resilience and adaptability allowed us to continue supporting our clients without interruption. We leveraged our digital capabilities to ensure seamless service delivery and help our clients navigate the turbulent landscape.',
      },
    ],
  },
  {
    title: '2021',
    content: [
      {
        heading: 'Securing the Highest-Value Contract',
        description:
          'Synnestra reached another major milestone by securing the highest-value contract in the company\'s history. This accomplishment solidified our reputation as a leading provider of transformative software solutions and underscored our ability to deliver exceptional value to our clients.',
      },
    ],

  },
  {
    title: '2022',
    content: [
      {
        heading: 'Embracing Artificial Intelligence',
        description:
          'Recognizing the transformative potential of AI, Synnestra invested heavily in developing cutting-edge AI-powered solutions to enhance our clients\' competitive edge. This strategic move positioned us at the forefront of the industry and enabled us to deliver even more intelligent and efficient services.',
      },
      {
        heading: 'Expanding to North America',
        description:
          'Synnestra announced the successful go-live of our NFS Ascent product in North America, marking a significant milestone in our global expansion strategy. This achievement solidified our position as a trusted provider of enterprise-grade software solutions in the international market.',
      },
    ],
  },
  {
    title: '2023',
    content: [
      {
        heading:
          'Recognized as the Most Innovative Company',
        description:
          'Synnestra was honored with the prestigious "Most Innovative Company in the Equipment Finance Ecosystem" award, recognizing our commitment to driving innovation and delivering transformative solutions to our clients. This accolade further strengthened our reputation as an industry leader.',
      },
    ],
  },
  {
    title: '2024',
    content: [
      {
        heading: 'Launching Otoz 2.0',
        description:
          'Synnestra unveiled the highly anticipated Otoz 2.0, a groundbreaking platform that revolutionizes the way businesses manage their transportation and logistics operations. This innovative solution solidified our position as a trailblazer in the rapidly evolving mobility ecosystem.',
      },
    ],
  },
];

export const servicesProvided: Service[] = [
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
          title: 'Embrace Tomorrow\'s Possibilities',
          description: 'Future-proof your business with innovative technology solutions.',
        },
        {
          title: 'Embrace Tomorrow\'s Possibilities',
          description: 'Future-proof your business with innovative technology solutions.',
        },
        {
          title: 'Embrace Tomorrow\'s Possibilities',
          description: 'Future-proof your business with innovative technology solutions.',
        },
      ],
    },
  },
  {
    slug: 'it-consultancy-and-advisory',
    imageSrc: '/it_consultantancy.jpg',
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
    imageSrc: '/cybersecurity.jpg',
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
    imageSrc: '/web_development.jpg',
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
    imageSrc: '/mobile-application-development.webp',
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
    imageSrc: '/cloud_services.jpeg',
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

export const industries: Industry[] = [
  {
    slug: 'telecommunications',
    imageSrc: '/industries/telecommunications_thumbnail.jpg',
    bannerImage: '/industries/telecommunications_banner.jpg',
    offers: {
      mainHeading: 'Empowering Connectivity Solutions',
      subtitle:
        'In the fast-paced world of telecommunications, we provide advanced solutions to enhance connectivity, drive efficiency, and boost innovation.',
      offerings: [
        {
          title: 'Optimized Network Management',
          description:
            'Streamline network operations with cutting-edge tools and analytics to ensure uninterrupted service.',
        },
        {
          title: 'Scalable Communication Solutions',
          description:
            'Leverage scalable systems that grow with demand, providing seamless communication for customers.',
        },
        {
          title: 'Customer-Centric Support',
          description: 'Enhance customer satisfaction with tailored support solutions that respond to dynamic needs.',
        },
      ],
    },
    relatedArticles: [
      {
        slug: 'telecom-5g-future',
        title: 'The Future of 5G in Telecommunications',
        thumbnail: '/industries/banking_and_finance_thumbnail.jpg',
      },
      {
        slug: 'telecom-customer-experience',
        title: 'Improving Customer Experience in Telecom',
        thumbnail: '/industries/healthcare_thumbnail.webp',
      },
    ],
  },
  {
    slug: 'banking-finance',
    imageSrc: '/industries/banking_and_finance_thumbnail.jpg',
    bannerImage: '/industries/banking_and_finance_banner.jpg',
    offers: {
      mainHeading: 'Transforming Financial Services with Technology',
      subtitle:
        'Enhancing security, efficiency, and accessibility in the banking and finance industry through robust digital solutions.',
      offerings: [
        {
          title: 'Advanced Data Security',
          description: 'Protect financial data with top-notch security systems tailored for financial institutions.',
        },
        {
          title: 'Automated Financial Processes',
          description:
            'Improve efficiency by automating routine tasks, allowing your team to focus on high-value activities.',
        },
        {
          title: 'Enhanced Customer Analytics',
          description:
            'Gain valuable insights into customer behaviors to better tailor services and improve satisfaction.',
        },
      ],
    },
    relatedArticles: [
      {
        slug: 'fintech-trends-2024',
        title: 'Emerging Trends in Fintech for 2024',
        thumbnail: '/industries/retail_and_cpg_thumbnail.png',
      },
      {
        slug: 'cybersecurity-finance',
        title: 'Cybersecurity Best Practices in Banking',
        thumbnail: '/industries/healthcare_thumbnail.webp',
      },
    ],
  },
  {
    slug: 'public-sector',
    imageSrc: '/industries/public_sector_thumbnail.png',
    bannerImage: '/industries/public_sector_banner.jpg',
    offers: {
      mainHeading: 'Driving Digital Transformation in Public Sector',
      subtitle:
        'We help government agencies leverage technology to improve public services, increase transparency, and foster citizen engagement.',
      offerings: [
        {
          title: 'Citizen-Centric Services',
          description: 'Develop digital solutions that make public services more accessible and user-friendly.',
        },
        {
          title: 'Secure and Compliant Solutions',
          description: 'Implement secure systems that meet regulatory requirements and safeguard public data.',
        },
        {
          title: 'Data-Driven Decision Making',
          description: 'Utilize analytics to make informed decisions and enhance government operations.',
        },
      ],
    },
    relatedArticles: [
      {
        slug: 'digital-transformation-public-sector',
        title: 'Digital Transformation in Government Services',
        thumbnail: '/industries/telecommunications_thumbnail.jpg',
      },
      {
        slug: 'public-sector-automation',
        title: 'How Automation is Reshaping the Public Sector',
        thumbnail: '/industries/banking_and_finance_thumbnail.jpg',
      },
    ],
  },
  {
    slug: 'healthcare-pharmaceutical',
    imageSrc: '/industries/healthcare_thumbnail.webp',
    bannerImage: '/industries/healthcare_banner.png',
    offers: {
      mainHeading: 'Innovative Solutions for Healthcare and Pharmaceuticals',
      subtitle:
        'Supporting healthcare providers and pharmaceutical companies with digital tools to enhance patient care and streamline operations.',
      offerings: [
        {
          title: 'Patient Data Management',
          description: 'Optimize patient data storage and access, ensuring security and compliance.',
        },
        {
          title: 'Telemedicine Platforms',
          description: 'Develop solutions for remote consultations, increasing accessibility for patients.',
        },
        {
          title: 'Supply Chain Optimization',
          description: 'Streamline pharmaceutical supply chains for efficiency and reliability.',
        },
      ],
    },
    relatedArticles: [
      {
        slug: 'telemedicine-trends',
        title: 'Top Trends in Telemedicine for 2024',
        thumbnail: '/industries/retail_and_cpg_thumbnail.png',
      },
      {
        slug: 'ai-in-pharma',
        title: 'The Role of AI in Pharmaceutical Development',
        thumbnail: '/industries/banking_and_finance_thumbnail.jpg',
      },
    ],
  },
  {
    slug: 'retail-cpg',
    imageSrc: '/industries/retail_and_cpg_thumbnail.png',
    bannerImage: '/industries/retail_and_cpg_banner.jpg',
    offers: {
      mainHeading: 'Empowering Retail & CPG with Technology',
      subtitle:
        'Providing the retail and consumer packaged goods industries with tools to improve customer engagement and optimize operations.',
      offerings: [
        {
          title: 'Personalized Customer Experiences',
          description: 'Use data-driven insights to deliver personalized shopping experiences for customers.',
        },
        {
          title: 'Inventory Management Solutions',
          description: 'Optimize stock levels with real-time tracking and predictive analytics.',
        },
        {
          title: 'Omnichannel Retail Strategies',
          description: 'Seamlessly integrate online and offline channels for a cohesive shopping experience.',
        },
      ],
    },
    relatedArticles: [
      {
        slug: 'omnichannel-strategies',
        title: 'Successful Omnichannel Strategies for Retail',
        thumbnail: '/industries/telecommunications_thumbnail.jpg',
      },
      {
        slug: 'retail-analytics',
        title: 'How Analytics is Transforming Retail',
        thumbnail: '/industries/healthcare_thumbnail.webp',
      },
    ],
  },
];

export const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    subitems: servicesProvided.map((service) => ({
      name: transformSlug(service.slug),
      href: `/services/${service.slug}`,
    })),
  },
  {
    name: 'Industries',
    href: '/industries',
    subitems: industries.map((industry) => ({
      name: transformSlug(industry.slug),
      href: `/industries/${industry.slug}`,
    })),
  },
  { name: 'Projects', href: '/projects' },
  { name: 'About Company', href: '/about' },
];