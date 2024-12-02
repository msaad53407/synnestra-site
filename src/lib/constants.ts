import { TimelineEntry } from '@/components/ui/timeline';
import {
  Company,
  Industry,
  Perk,
  ProjectCatalog,
  ProjectShowcase,
  Review,
  Service,
  Solution,
  TechnologyCard,
} from '@/types';
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
    link: '/services/managed-services',
  },
  {
    title: 'IT Consulting & Advisory',
    description: 'Leverage our industry-leading expertise to navigate the complex IT landscape. Our consultative approach helps you align technology with your business goals, optimize performance, and drive innovation.',
    icon: '/icons/fluent_people-team-24-regular.svg',
    link: '/services/it-consultancy-and-advisory',
  },
  {
    title: 'Cyber Security',
    description: 'Protect your organization\'s sensitive data and digital assets with our robust cybersecurity solutions. We implement multi-layered security measures to safeguard your operations and maintain business continuity.',
    icon: '/icons/carbon_cloud-services.svg',
    link: '/services/cyber-security',
  },
  {
    title: 'Web Development',
    description: 'Our web development services empower you to create engaging, user-centric digital experiences that showcase your brand, enhance customer interactions, and drive business growth.',
    icon: '/icons/mdi_web-asset.svg',
    link: '/services/web-development',
  },
  {
    title: 'Mobile Development',
    description: 'Stay ahead of the mobile-first revolution with our custom mobile applications. We develop intuitive, feature-rich solutions that seamlessly integrate with your existing systems and processes.',
    icon: '/icons/healthicons_mobile.svg',
    link: '/services/mobile-development',
  },
  {
    title: 'Cloud Services',
    description: 'Unlock the power of cloud computing with our comprehensive suite of cloud-based services. From infrastructure to software-as-a-service, we help you harness the flexibility, scalability, and cost-efficiency of the cloud.',
    icon: '/icons/hugeicons_ai-security-01.svg',
    link: '/services/cloud-services',
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

export const products: ProjectCatalog = {
  websites: [
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
      slug: 'fairdeal-electrical',
      title: 'Fairdeal Electrical',
      thumbnail: '/projects/fairdeal-electrical/thumbnail.png',
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
          src: '/projects/fairdeal-electrical/image-1.webp',
          alt: 'image-1',
        }, {
          src: '/projects/fairdeal-electrical/image-2.webp',
          alt: 'image-2',
        }, {
          src: '/projects/fairdeal-electrical/image-3.webp',
          alt: 'image-3',
        }, {
          src: '/projects/fairdeal-electrical/image-4.webp',
          alt: 'image-4',
        }, {
          src: '/projects/fairdeal-electrical/image-5.webp',
          alt: 'image-5',
        },
      ],
    },
    {
      slug: 'dex-booster',
      title: 'Dex Booster: Your Cryptocurrency Navigator',
      thumbnail: '/projects/dex-booster/thumbnail.webp',
      features: [
        'Real-time cryptocurrency price tracking',
        'Personalized coin recommendations',
        'Comprehensive market trend insights',
        'Multi-exchange data integration',
        'Advanced machine learning-powered analysis',
        'Intuitive and user-friendly interface',
        'Secure data encryption and privacy protection',
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
      description: `A cutting-edge cryptocurrency analysis platform that simplifies market navigation through advanced data integration, personalized insights, and robust security measures. DexBooster leverages machine learning and comprehensive exchange data to provide users with intelligent cryptocurrency recommendations and real-time market intelligence.`,
      images: [
        {
          src: '/projects/dex-booster/image-1.webp',
          alt: 'image-1',
        },
      ],
    },
    {
      slug: 'arcadia-developers',
      title: 'Arcadia Developers Premier Construction Solutions',
      thumbnail: '/projects/arcadia-developers-premier-construction-solutions/thumbnail.png',
      features: [
        'Comprehensive showcase of construction services',
        'Detailed project categories (domestic, commercial, industrial)',
        'Interactive consultation booking system',
        'Client testimonials and portfolio display',
        'Intuitive navigation across service offerings',
        'High-quality visual presentation of projects',
        'Easy-to-use contact and inquiry forms',
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
      description: `A sophisticated digital platform designed to showcase Arcadia Developers' 17-year legacy in luxury construction solutions. The website strategically highlights the company's expertise across residential, commercial, and industrial sectors, featuring a modern, intuitive design that emphasizes quality, professionalism, and comprehensive service offerings.`,
      images: [
        {
          src: '/projects/arcadia-developers-premier-construction-solutions/image-1.webp',
          alt: 'Arcadia Developers Project Showcase',
        }, {
          src: '/projects/arcadia-developers-premier-construction-solutions/image-2.webp',
          alt: 'Construction Services Overview',
        },
      ],
    },
    {
      slug: 'fuze-traders',
      title: 'FuzeTraders: Integrated Trading Solutions',
      thumbnail: '/projects/fuze-traders/thumbnail.webp',
      features: [
        'Advanced trader funding platform',
        'Technology-driven capital allocation',
        'Proprietary trading support system',
        'Cutting-edge trading technologies',
        'Performance-based trader selection',
        'Comprehensive trading support',
        'Exclusive trader network access',
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
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      description: `An innovative digital platform designed to empower exceptionally skilled traders by providing proprietary capital, cutting-edge trading technologies, and top-tier support. Fuze Traders bridges the gap for talented traders facing capital limitations, creating an exclusive ecosystem of high-performance trading professionals.`,
      images: [
        {
          src: '/projects/fuze-traders/image-1.webp',
          alt: 'Trader Performance Dashboard',
        },
        {
          src: '/projects/fuze-traders/image-2.webp',
          alt: 'Trading Technology Interface',
        },
        {
          src: '/projects/fuze-traders/image-3.webp',
          alt: 'Trader Funding Allocation System',
        },
      ],
    },
    {
      slug: 'tanafos',
      title: 'Tanafos: Seamless Football Ground Booking App',
      thumbnail: '/projects/tanafos/thumbnail.webp',
      features: [
        'Multilingual platform (Arabic and English)',
        'Intuitive football ground booking system',
        'Real-time field availability and selection',
        'Match scheduling and team coordination',
        'Multilingual community chat',
        'User-friendly interface for all skill levels',
        'Seamless connection for soccer enthusiasts',
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
      description: `A revolutionary soccer platform that bridges language barriers and connects players through innovative technology. Tanafos provides a comprehensive solution for football enthusiasts, offering seamless ground booking, match scheduling, and a vibrant multilingual community. The app simplifies the process of finding and booking football grounds while creating opportunities for players of all skill levels to connect, play, and share their passion for the beautiful game.`,
      images: [
        {
          src: '/projects/tanafos/image-1.webp',
          alt: 'Tanafos Ground Booking Interface',
        }, {
          src: '/projects/tanafos/image-2.webp',
          alt: 'Match Scheduling Screen',
        }, {
          src: '/projects/tanafos/image-3.webp',
          alt: 'Multilingual Community Chat',
        }, {
          src: '/projects/tanafos/image-4.webp',
          alt: 'Player Connection Features',
        },
      ],
    },
    {
      slug: 'daisy-chat',
      title: 'DaisyChat: Your Wedding Connection',
      thumbnail: '/projects/daisy-chat/thumbnail.webp',
      features: [
        'Secure wedding invitation management',
        'Guest communication platform',
        'Wedding details sharing',
        'Intuitive invitation tracking',
        'Comprehensive guest coordination',
        'Privacy-focused communication',
        'Customizable wedding information hub',
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
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      description: `A comprehensive desktop application designed to revolutionize wedding planning and guest communication. DaisyChat provides couples with a secure, user-friendly platform to manage wedding invitations, share event details, and facilitate seamless guest interactions. The app addresses the complex challenges of wedding communication through innovative technology and user-centric design.`,
      images: [
        {
          src: '/projects/daisy-chat/image-1.webp',
          alt: 'Wedding Invitation Management Interface',
        },
        {
          src: '/projects/daisy-chat/image-2.webp',
          alt: 'Guest Communication Dashboard',
        },
        {
          src: '/projects/daisy-chat/image-3.webp',
          alt: 'Wedding Details and Agenda Sharing',
        },
      ],
    },
  ],
  mobileApps: [
    {
      'slug': 'poem-maker',
      'title': 'Poem Maker',
      'features': [
        'Inspiring poetry prompts to spark creativity',
        'Versatile poetic structure templates',
        'Advanced poem editing tools',
        'Easy poem composition and sharing',
        'Supportive platform for poets of all skill levels',
        'Intuitive user interface for seamless writing experience',
        'Secure authentication powered by Clerk',
      ],
      'link': 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      'thumbnail': '/projects/poem-maker/thumbnail.webp',
      'description': 'PoemMaker is a delightful native app crafted with FlutterFlow, designed to unleash the creativity of users through the art of poetry. With a range of inspiring prompts, versatile poetic structures, and editing tools, the app serves as a pocket-sized companion for individuals to effortlessly compose and share beautiful poems. Whether you\'re an experienced poet or a beginner, "PoemMaker" provides a seamless platform to express your unique poetic voice and ignite your passion for the written word.',
      'technologies': [
        {
          'name': 'Flutter',
          'imageSrc': '/technology_logos/flutter.svg',
        },
        {
          'name': 'Nodejs',
          'imageSrc': '/technology_logos/nodejs.svg',
        },
      ],
      'images': [
        {
          'src': '/projects/poem-maker/image-1.webp',
          'alt': 'image-1',
        },
        {
          'src': '/projects/poem-maker/image-2.webp',
          'alt': 'image-2',
        },
        {
          'src': '/projects/poem-maker/image-3.webp',
          'alt': 'image-3',
        },
        {
          'src': '/projects/poem-maker/image-4.webp',
          'alt': 'image-4',
        },
      ],
    },
    {
      'slug': 'pure',
      'title': 'Pure: More than Hair',
      'features': [
        'Performance tracking for salon workers',
        'Data-driven decision-making dashboard',
        'Secure and compliant data management',
        'Real-time performance metrics synchronization',
        'Scalable infrastructure for salon businesses',
        'Comprehensive performance analysis tools',
        'Secure authentication powered by Clerk',
      ],
      'link': 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      'thumbnail': '/projects/pure/thumbnail.webp',
      'description': 'SalonTech Solutions introduced Pure, a revolutionary app designed to enhance performance management in the beauty and wellness industry. This case study outlines Pure\'s goals, challenges, strategic approach, and outcomes.',
      'technologies': [
        {
          'name': 'Flutter',
          'imageSrc': '/technology_logos/flutter.svg',
        },
        {
          'name': 'Nodejs',
          'imageSrc': '/technology_logos/nodejs.svg',
        },
      ],
      'images': [
        {
          'src': '/projects/pure/image-1.webp',
          'alt': 'image-1',
        },
        {
          'src': '/projects/pure/image-2.webp',
          'alt': 'image-2',
        },
        {
          'src': '/projects/pure/image-3.webp',
          'alt': 'image-3',
        },
      ],
    },
    {
      'slug': 'flick-skills',
      'title': 'FlickSkills: Your Ultimate Football Trick Tutorial',
      'features': [
        'Comprehensive football trick tutorial videos',
        'Skill enhancement for players of all levels',
        'Interactive quizzes and challenges',
        'Community forums for football enthusiasts',
        'High-quality content from experienced coaches',
        'Cross-platform accessibility',
        'Secure authentication powered by Clerk',
      ],
      'link': 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      'thumbnail': '/projects/flick-skills/thumbnail.webp',
      'description': 'Flick Skills is a sports-focused software company committed to providing innovative solutions, particularly in football, to empower enthusiasts and improve their skills.',
      'technologies': [
        {
          'name': 'Flutter',
          'imageSrc': '/technology_logos/flutter.svg',
        },
        {
          'name': 'Nodejs',
          'imageSrc': '/technology_logos/nodejs.svg',
        },
      ],
      'images': [
        {
          'src': '/projects/flick-skills/image-1.webp',
          'alt': 'image-1',
        },
        {
          'src': '/projects/flick-skills/image-2.webp',
          'alt': 'image-2',
        },
        {
          'src': '/projects/flick-skills/image-3.webp',
          'alt': 'image-3',
        },
        {
          'src': '/projects/flick-skills/image-4.webp',
          'alt': 'image-4',
        },
      ],
    },
    {
      'slug': 'var',
      'title': 'Var: Animated Book Reading Experience',
      'features': [
        'Synchronized animated visuals with text',
        'Immersive reading experience',
        'Dynamic content integration with publishers',
        'Precise text-animation synchronization',
        'Intuitive and user-friendly interface',
        'Engaging visual storytelling',
        'Secure authentication powered by Clerk',
      ],
      'link': 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      'thumbnail': '/projects/var/thumbnail.webp',
      'description': 'Var is an app that facilitates easy book reading by providing animated visuals synchronized with highlighted text, allowing users to immerse themselves in the story and enjoy a more engaging reading experience.',
      'technologies': [
        {
          'name': 'Flutter',
          'imageSrc': '/technology_logos/flutter.svg',
        },
        {
          'name': 'Nodejs',
          'imageSrc': '/technology_logos/nodejs.svg',
        },
      ],
      'images': [
        {
          'src': '/projects/var/image-1.webp',
          'alt': 'image-1',
        },
        {
          'src': '/projects/var/image-2.webp',
          'alt': 'image-2',
        },
        {
          'src': '/projects/var/image-3.webp',
          'alt': 'image-3',
        },
      ],
    },
    {
      'slug': 'barber-b',
      'title': 'Barber b: Streamlined Barber Appointment Booking',
      'features': [
        'Efficient appointment scheduling',
        'Mobile-friendly booking platform',
        'Automated appointment reminders',
        'Customizable barber profiles and services',
        'Seamless calendar integration',
        'Reduced no-show rates',
        'Secure authentication powered by Clerk',
      ],
      'link': 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      'thumbnail': '/projects/barber-b/thumbnail.webp',
      'description': 'Barber B is a software company aiming to modernize the barber industry by simplifying appointment booking processes for both barbers and clients.',
      'technologies': [
        {
          'name': 'Flutter',
          'imageSrc': '/technology_logos/flutter.svg',
        },
        {
          'name': 'Nodejs',
          'imageSrc': '/technology_logos/nodejs.svg',
        },
      ],
      'images': [
        {
          'src': '/projects/barber-b/image-1.webp',
          'alt': 'image-1',
        },
        {
          'src': '/projects/barber-b/image-2.webp',
          'alt': 'image-2',
        },
        {
          'src': '/projects/barber-b/image-3.webp',
          'alt': 'image-3',
        },
      ],
    },
    {
      'slug': 'calmomind',
      'title': 'Calmomind: Comprehensive Mental Wellness Solutions',
      'features': [
        'Guided meditations by experienced instructors',
        'Personalized mindfulness techniques',
        'Meditation timer and daily reminders',
        'Variety of meditation styles (mindfulness, breathing, body scans)',
        'Soothing sounds and nature scenes',
        'Progress tracking and wellness insights',
        'Secure authentication powered by Clerk',
      ],
      'link': 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      'thumbnail': '/projects/calmomind/thumbnail.jpg',
      'description': 'Discover serenity on the go with our meditation app. Whether you\'re seeking stress relief, improved focus, or simply a moment of tranquility, our app offers a personalized journey to inner peace.\n\nEmbark on guided meditations led by experienced instructors, tailored to your schedule and preferences. Explore a variety of techniques, from mindfulness and breathing exercises to body scans and visualization.\n\nTrack your progress and cultivate mindfulness with our meditation timer and daily reminders. With a range of soothing sounds and nature scenes, create your ideal meditation environment anytime, anywhere.',
      'technologies': [
        {
          'name': 'Flutter',
          'imageSrc': '/technology_logos/flutter.svg',
        },
        {
          'name': 'Nodejs',
          'imageSrc': '/technology_logos/nodejs.svg',
        },
      ],
      'images': [],
    },
  ],

};

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
    subitems: [
      {
        name: 'IT Solutions',
        items: servicesProvided.map((service) => ({
          name: transformSlug(service.slug),
          href: `/services/${service.slug}`,
        })),
      },
      {
        name: 'E Commerce',
        items: servicesProvided.map((service) => ({
          name: transformSlug(service.slug),
          href: `/services/${service.slug}`,
        })),
      },
      {
        name: 'LLC/LTD',
        items: servicesProvided.map((service) => ({
          name: transformSlug(service.slug),
          href: `/services/${service.slug}`,
        })),
      },
    ],
  },
  // {
  //   name: 'Industries',
  //   href: '/industries',
  //   subitems: industries.map((industry) => ({
  //     name: transformSlug(industry.slug),
  //     href: `/industries/${industry.slug}`,
  //   })),
  // },
  { name: 'Projects', href: '/projects' },
  { name: 'About Company', href: '/about' },
];