import { TimelineEntry } from '@/components/ui/timeline';
import { transformSlug } from '@/lib/utils';
import {
  Company,
  Industry,
  Office,
  Perk,
  ProjectCatalog,
  ProjectShowcase,
  Review,
  Service,
  Solution,
  TechnologyCard,
} from '@/types';
import { CircleDotDashed } from 'lucide-react';

export const companies: Company[] = [
  {
    title: 'Gec CO2',
    thumbnail: '/company_logos/brand-logo.png',
  },
  {
    title: 'C',
    thumbnail: '/company_logos/c.png',
  },
  {
    title: 'Calmomind',
    thumbnail: '/company_logos/Calmomind.png',
  },
  {
    title: 'Fazewide',
    thumbnail: '/company_logos/fazewide 1.png',
  },
  {
    title: 'Fairdeal Electrical',
    thumbnail: '/company_logos/Frame 48095775.png',
  },
  {
    title: 'Fuze Traders',
    thumbnail: '/company_logos/FUZE TRADERS.png',
  },
  {
    title: 'Tanfos',
    thumbnail: '/company_logos/Group 1.png',
  },
  {
    title: 'Silent Moon',
    thumbnail: '/company_logos/Group 17.png',
  },
  {
    title: 'Fit Quest',
    thumbnail: '/company_logos/Group 1000003130.png',
  },
  {
    title: 'MEBEL',
    thumbnail: '/company_logos/Group 1000004081.png',
  },
  {
    title: 'Pro Connect Hub',
    thumbnail: '/company_logos/Group 1000005694.png',
  },
  {
    title: 'Success Loop',
    thumbnail: '/company_logos/logo 1.png',
  },
  {
    title: 'Arcadia Developers',
    thumbnail: '/company_logos/logo 2.png',
  },
  {
    title: 'Global Currency',
    thumbnail: '/company_logos/logo app 1.png',
  },
  {
    title: 'VAR',
    thumbnail: '/company_logos/logo.png',
  },
  {
    title: 'CF4 Academy',
    thumbnail: '/company_logos/ProjectImages.png',
  },
  {
    title: 'TIRBUL',
    thumbnail: '/company_logos/TIRBUL.png',
  },
  {
    title: 'Zapta Technologies',
    thumbnail: '/company_logos/Zapta logo.png',
  },
  {
    title: 'volksbank',
    thumbnail: '/company_logos/images.png',
  },
  {
    title: 'My Car',
    thumbnail: '/company_logos/my car.png',
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
    description:
      'At Synnestra, we empower businesses to achieve sustainable growth through our innovative software solutions. Our "Success Loop" methodology ensures that we consistently deliver tangible results and drive continuous improvement for our clients.',
    color: 'bg-custom-purple-light',
    textColor: 'text-black',
    headingColor: 'text-custom-purple',
    image: '/company_logos/logo 1.png',
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
    description:
      "As part of our commitment to knowledge-sharing, we have developed the Swappin' Numbers Academy - an educational platform that equips professionals with the skills and strategies needed to navigate the dynamic world of financial data analysis and decision-making.",
    color: 'bg-custom-purple',
    textColor: 'text-white',
    headingColor: 'text-white',
    image: '/company_logos/swapping_numbers_academy.png',
  },
];

export const solutions: Solution[] = [
  {
    title: 'Manage Services',
    description:
      'Our comprehensive managed services suite ensures the smooth and efficient operation of your business-critical systems, allowing you to focus on core competencies and achieve your strategic objectives.',
    icon: '/icons/grommet-icons_services.svg',
    link: '/services/managed-services',
  },
  {
    title: 'IT Consulting & Advisory',
    description:
      'Leverage our industry-leading expertise to navigate the complex IT landscape. Our consultative approach helps you align technology with your business goals, optimize performance, and drive innovation.',
    icon: '/icons/fluent_people-team-24-regular.svg',
    link: '/services/it-consultancy-and-advisory',
  },
  {
    title: 'Cyber Security',
    description:
      "Protect your organization's sensitive data and digital assets with our robust cybersecurity solutions. We implement multi-layered security measures to safeguard your operations and maintain business continuity.",
    icon: '/icons/carbon_cloud-services.svg',
    link: '/services/cyber-security',
  },
  {
    title: 'Web Development',
    description:
      'Our web development services empower you to create engaging, user-centric digital experiences that showcase your brand, enhance customer interactions, and drive business growth.',
    icon: '/icons/mdi_web-asset.svg',
    link: '/services/web-development',
  },
  {
    title: 'Mobile Development',
    description:
      'Stay ahead of the mobile-first revolution with our custom mobile applications. We develop intuitive, feature-rich solutions that seamlessly integrate with your existing systems and processes.',
    icon: '/icons/healthicons_mobile.svg',
    link: '/services/mobile-development',
  },
  {
    title: 'Cloud Services',
    description:
      'Unlock the power of cloud computing with our comprehensive suite of cloud-based services. From infrastructure to software-as-a-service, we help you harness the flexibility, scalability, and cost-efficiency of the cloud.',
    icon: '/icons/hugeicons_ai-security-01.svg',
    link: '/services/cloud-services',
  },
];

export const reviews: Review[] = [
  {
    name: 'Muhammad Usama',
    role: 'CTO Synnestra',
    review:
      "At Synnestra, we are dedicated to driving innovation and delivering exceptional solutions to our clients. As the CTO, I've witnessed firsthand the transformative impact our team creates through our cutting-edge technology and unwavering commitment to quality. It's truly fulfilling to lead a team that is shaping the future of technology for our clients and partners.",
    avatar: '/people_images/usama.webp',
  },
  {
    name: 'Dave Nelson',
    role: '',
    review:
      "Synnestra's tools have completely reshaped how we manage campaigns. Their intuitive web applications and streamlined processes have allowed us to execute marketing strategies more efficiently while delivering measurable results. Their support has made a noticeable difference to our team's productivity.",
    avatar: '/people_images/reviewer_1.webp',
  },
  {
    name: 'Scott Foster',
    role: '',
    review:
      "Synnestra's financial tools have been a cornerstone of our global operations. Their real-time reporting and seamless cross-border transaction features have simplified financial oversight and decision-making. Their solutions save us time and give us confidence in managing complex financial scenarios.",
    avatar: '/people_images/reviewer_2.webp',
  },
  {
    name: 'Michael Brown',
    role: '',
    review:
      "Modernizing our IT infrastructure was a daunting task until we collaborated with Synnestra. Their IT consulting and cybersecurity solutions have fortified our systems while paving the way for technological innovation. Their team's depth of knowledge has been a critical asset for us.",
    avatar: '/people_images/reviewer_3.webp',
  },
  {
    name: 'Karl Bennett',
    role: '',
    review:
      "Switching to Synnestra's cloud platform has revolutionized our IT operations. The flexibility and cost savings have allowed us to reallocate resources toward our core business goals. Their team's focus on reliability and support has been exceptional throughout.",
    avatar: '/people_images/reviewer_4.webp',
  },
  {
    name: 'Gavy Gruzansky',
    role: '',
    review:
      "Launching our latest product would not have been as successful without Synnestra's expertise in mobile app development. The app they delivered has transformed the way our customers interact with our brand, offering a seamless and engaging experience.",
    avatar: '/people_images/reviewer_5.webp',
  },
  {
    name: 'Emily Sutherland',
    role: '',
    review:
      "Synnestra's e-commerce platform exceeded our expectations. It's reliable, user-friendly, and scalable—perfect for handling our growing customer base. Their team's meticulous attention to detail ensured a smooth deployment, making them a top recommendation for anyone looking to elevate their online business.",
    avatar: '/people_images/reviewer_4.png',
  },
  {
    name: 'Sarah Johnson',
    role: '',
    review:
      "Synnestra's team consistently demonstrated professionalism and clarity throughout the project. The video updates and clear communication made it easy to track progress, and their prompt responses to questions were invaluable. I'm looking forward to collaborating with them on upcoming features for my application.",
    avatar: '/people_images/reviewer_1.png',
  },
  {
    name: 'Nasser Al-Khelaifi',
    role: '',
    review:
      "Synnestra's Corporate Compliance services have been instrumental in helping us meet regulatory requirements. Their expertise in compliance frameworks and proactive approach to risk management has strengthened our organization's operational integrity. They've proven to be a trusted partner in navigating complex regulations.",
    avatar: '/people_images/placeholder.jpg',
  },
  {
    name: 'Chris Thompson',
    role: '',
    review:
      "With Synnestra's Data Science & AI services, we've unlocked actionable insights that are transforming our decision-making process. Their predictive models have optimized our workflows, allowing us to stay ahead in a competitive market. Synnestra's ability to tailor solutions to our unique challenges makes them a standout partner for innovation-driven businesses.",
    avatar: '/people_images/placeholder.jpg',
  },
];

export const products: ProjectCatalog = {
  websites: [
    {
      slug: 'success-loop',
      title: 'Successloop',
      thumbnail: '/projects/success-loop/thumbnail.png',
      description:
        'SuccessLoop is a powerful platform designed to help businesses create, manage, and optimize referral programs. Our mission is to bring the human touch to a digital world by leveraging the power of word-of-mouth marketing to build communities and brands.',
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
        },
        {
          name: 'MySQL',
          imageSrc: '/technology_logos/mysql.svg',
        },
      ],
      images: [
        {
          src: '/projects/success-loop/image-1.png',
          alt: 'image-1',
        },
        {
          src: '/projects/success-loop/image-2.png',
          alt: 'image-2',
        },
        {
          src: '/projects/success-loop/image-3.png',
          alt: 'image-3',
        },
        {
          src: '/projects/success-loop/image-4.png',
          alt: 'image-4',
        },
        {
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
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      description: `A cutting-edge solution that leverages the power of modern technologies to deliver a robust set of capabilities, including advanced data analysis, streamlined workflows, and scalable infrastructure. This application is designed to provide a seamless user experience and drive business success.`,
      images: [
        {
          src: '/projects/management-system/image-1.png',
          alt: 'image-1',
        },
        {
          src: '/projects/management-system/image-2.png',
          alt: 'image-2',
        },
        {
          src: '/projects/management-system/image-3.png',
          alt: 'image-3',
        },
        {
          src: '/projects/management-system/image-4.png',
          alt: 'image-4',
        },
        {
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
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      description: `A cutting-edge solution that leverages the power of modern technologies to deliver a robust set of capabilities, including advanced data analysis, streamlined workflows, and scalable infrastructure. This application is designed to provide a seamless user experience and drive business success.`,
      images: [
        {
          src: '/projects/fairdeal-electrical/image-1.webp',
          alt: 'image-1',
        },
        {
          src: '/projects/fairdeal-electrical/image-2.webp',
          alt: 'image-2',
        },
        {
          src: '/projects/fairdeal-electrical/image-3.webp',
          alt: 'image-3',
        },
        {
          src: '/projects/fairdeal-electrical/image-4.webp',
          alt: 'image-4',
        },
        {
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
        },
        {
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
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      description: `A sophisticated digital platform designed to showcase Arcadia Developers' 17-year legacy in luxury construction solutions. The website strategically highlights the company's expertise across residential, commercial, and industrial sectors, featuring a modern, intuitive design that emphasizes quality, professionalism, and comprehensive service offerings.`,
      images: [
        {
          src: '/projects/arcadia-developers-premier-construction-solutions/image-1.webp',
          alt: 'Arcadia Developers Project Showcase',
        },
        {
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
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      description: `A revolutionary soccer platform that bridges language barriers and connects players through innovative technology. Tanafos provides a comprehensive solution for football enthusiasts, offering seamless ground booking, match scheduling, and a vibrant multilingual community. The app simplifies the process of finding and booking football grounds while creating opportunities for players of all skill levels to connect, play, and share their passion for the beautiful game.`,
      images: [
        {
          src: '/projects/tanafos/image-1.webp',
          alt: 'Tanafos Ground Booking Interface',
        },
        {
          src: '/projects/tanafos/image-2.webp',
          alt: 'Match Scheduling Screen',
        },
        {
          src: '/projects/tanafos/image-3.webp',
          alt: 'Multilingual Community Chat',
        },
        {
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
      slug: 'poem-maker',
      title: 'Poem Maker',
      features: [
        'Inspiring poetry prompts to spark creativity',
        'Versatile poetic structure templates',
        'Advanced poem editing tools',
        'Easy poem composition and sharing',
        'Supportive platform for poets of all skill levels',
        'Intuitive user interface for seamless writing experience',
        'Secure authentication powered by Clerk',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      thumbnail: '/projects/poem-maker/thumbnail.webp',
      description:
        'PoemMaker is a delightful native app crafted with FlutterFlow, designed to unleash the creativity of users through the art of poetry. With a range of inspiring prompts, versatile poetic structures, and editing tools, the app serves as a pocket-sized companion for individuals to effortlessly compose and share beautiful poems. Whether you\'re an experienced poet or a beginner, "PoemMaker" provides a seamless platform to express your unique poetic voice and ignite your passion for the written word.',
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      images: [
        {
          src: '/projects/poem-maker/image-1.webp',
          alt: 'image-1',
        },
        {
          src: '/projects/poem-maker/image-2.webp',
          alt: 'image-2',
        },
        {
          src: '/projects/poem-maker/image-3.webp',
          alt: 'image-3',
        },
        {
          src: '/projects/poem-maker/image-4.webp',
          alt: 'image-4',
        },
      ],
    },
    {
      slug: 'pure',
      title: 'Pure: More than Hair',
      features: [
        'Performance tracking for salon workers',
        'Data-driven decision-making dashboard',
        'Secure and compliant data management',
        'Real-time performance metrics synchronization',
        'Scalable infrastructure for salon businesses',
        'Comprehensive performance analysis tools',
        'Secure authentication powered by Clerk',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      thumbnail: '/projects/pure/thumbnail.webp',
      description:
        "SalonTech Solutions introduced Pure, a revolutionary app designed to enhance performance management in the beauty and wellness industry. This case study outlines Pure's goals, challenges, strategic approach, and outcomes.",
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      images: [
        {
          src: '/projects/pure/image-1.webp',
          alt: 'image-1',
        },
        {
          src: '/projects/pure/image-2.webp',
          alt: 'image-2',
        },
        {
          src: '/projects/pure/image-3.webp',
          alt: 'image-3',
        },
      ],
    },
    {
      slug: 'flick-skills',
      title: 'FlickSkills: Your Ultimate Football Trick Tutorial',
      features: [
        'Comprehensive football trick tutorial videos',
        'Skill enhancement for players of all levels',
        'Interactive quizzes and challenges',
        'Community forums for football enthusiasts',
        'High-quality content from experienced coaches',
        'Cross-platform accessibility',
        'Secure authentication powered by Clerk',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      thumbnail: '/projects/flick-skills/thumbnail.webp',
      description:
        'Flick Skills is a sports-focused software company committed to providing innovative solutions, particularly in football, to empower enthusiasts and improve their skills.',
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      images: [
        {
          src: '/projects/flick-skills/image-1.webp',
          alt: 'image-1',
        },
        {
          src: '/projects/flick-skills/image-2.webp',
          alt: 'image-2',
        },
        {
          src: '/projects/flick-skills/image-3.webp',
          alt: 'image-3',
        },
        {
          src: '/projects/flick-skills/image-4.webp',
          alt: 'image-4',
        },
      ],
    },
    {
      slug: 'var',
      title: 'Var: Animated Book Reading Experience',
      features: [
        'Synchronized animated visuals with text',
        'Immersive reading experience',
        'Dynamic content integration with publishers',
        'Precise text-animation synchronization',
        'Intuitive and user-friendly interface',
        'Engaging visual storytelling',
        'Secure authentication powered by Clerk',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      thumbnail: '/projects/var/thumbnail.webp',
      description:
        'Var is an app that facilitates easy book reading by providing animated visuals synchronized with highlighted text, allowing users to immerse themselves in the story and enjoy a more engaging reading experience.',
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      images: [
        {
          src: '/projects/var/image-1.webp',
          alt: 'image-1',
        },
        {
          src: '/projects/var/image-2.webp',
          alt: 'image-2',
        },
        {
          src: '/projects/var/image-3.webp',
          alt: 'image-3',
        },
      ],
    },
    {
      slug: 'barber-b',
      title: 'Barber b: Streamlined Barber Appointment Booking',
      features: [
        'Efficient appointment scheduling',
        'Mobile-friendly booking platform',
        'Automated appointment reminders',
        'Customizable barber profiles and services',
        'Seamless calendar integration',
        'Reduced no-show rates',
        'Secure authentication powered by Clerk',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      thumbnail: '/projects/barber-b/thumbnail.webp',
      description:
        'Barber B is a software company aiming to modernize the barber industry by simplifying appointment booking processes for both barbers and clients.',
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      images: [
        {
          src: '/projects/barber-b/image-1.webp',
          alt: 'image-1',
        },
        {
          src: '/projects/barber-b/image-2.webp',
          alt: 'image-2',
        },
        {
          src: '/projects/barber-b/image-3.webp',
          alt: 'image-3',
        },
      ],
    },
    {
      slug: 'calmomind',
      title: 'Calmomind: Comprehensive Mental Wellness Solutions',
      features: [
        'Guided meditations by experienced instructors',
        'Personalized mindfulness techniques',
        'Meditation timer and daily reminders',
        'Variety of meditation styles (mindfulness, breathing, body scans)',
        'Soothing sounds and nature scenes',
        'Progress tracking and wellness insights',
        'Secure authentication powered by Clerk',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.poemmaker.poemmaker&hl=en_US&gl=US',
      thumbnail: '/projects/calmomind/thumbnail.jpg',
      description:
        "Discover serenity on the go with our meditation app. Whether you're seeking stress relief, improved focus, or simply a moment of tranquility, our app offers a personalized journey to inner peace.\n\nEmbark on guided meditations led by experienced instructors, tailored to your schedule and preferences. Explore a variety of techniques, from mindfulness and breathing exercises to body scans and visualization.\n\nTrack your progress and cultivate mindfulness with our meditation timer and daily reminders. With a range of soothing sounds and nature scenes, create your ideal meditation environment anytime, anywhere.",
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
      ],
      images: [],
    },
  ],
};

export const technologyCards: TechnologyCard[] = [
  {
    name: 'Angular.js',
    imageSrc: '/technology_logos/angular.svg',
  },
  {
    name: 'React.js',
    imageSrc: '/technology_logos/react.svg',
  },
  {
    name: 'React Native',
    imageSrc: '/technology_logos/react.svg',
  },
  {
    name: 'Node.js',
    imageSrc: '/technology_logos/nodejs.svg',
  },
  {
    name: 'Next.js',
    imageSrc: '/technology_logos/nextjs-fill.svg',
  },
  {
    name: 'Nest.js',
    imageSrc: '/technology_logos/nestjs.svg',
  },
  {
    name: 'Docker',
    imageSrc: '/technology_logos/docker.svg',
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
    name: 'Java',
    imageSrc: '/technology_logos/java.svg',
  },
  {
    name: 'Flutter',
    imageSrc: '/technology_logos/flutter.svg',
  },
  {
    name: '.NET',
    imageSrc: '/technology_logos/dotnet.svg',
  },
  {
    name: 'Kotlin',
    imageSrc: '/technology_logos/kotlin.svg',
  },
  {
    name: 'MongoDB',
    imageSrc: '/technology_logos/mongo.svg',
  },
  {
    name: 'SQL',
    imageSrc: '/technology_logos/sql-database-generic.svg',
  },
  {
    name: 'AI/ML',
    imageSrc: '/technology_logos/ai.svg',
  },
  {
    name: 'AWS',
    imageSrc: '/technology_logos/aws.svg',
  },
  {
    name: 'CI/CD',
    imageSrc: '/technology_logos/ci-cd.svg',
  },
  {
    name: 'Jenkins',
    imageSrc: '/technology_logos/jenkins.svg',
  },
  {
    name: 'Shopify',
    imageSrc: '/technology_logos/shopify-color.svg',
  },
  {
    name: 'Amazon',
    imageSrc: '/technology_logos/amazon-color.svg',
  },
];

export const timelineItems: TimelineEntry[] = [
  {
    title: '2022',
    content: [
      {
        heading: 'Synnestra Established',
        description:
          'Synnestra was founded with a mission to simplify complex IT challenges for businesses across diverse industries. Our goal was to provide innovative solutions that drive growth and efficiency, setting the stage for a new era of technological advancement.',
      },
    ],
  },
  {
    title: '2023',
    content: [
      {
        heading: 'Navigating Unprecedented Challenges and Achieving Operational Excellence',
        description:
          'We faced and overcame unprecedented challenges, achieving operational excellence through strategic planning and execution. Our team demonstrated resilience and adaptability, ensuring that we continued to deliver exceptional value to our clients despite the obstacles.',
      },
    ],
  },
  {
    title: '2024',
    content: [
      {
        heading: 'Securing Highest-Value Contract and Recognized as Innovative Company',
        description:
          'Synnestra secured its highest-value contract to date and was recognized as an innovative company. This milestone underscored our commitment to excellence and our ability to deliver cutting-edge solutions that meet the evolving needs of our clients.',
      },
    ],
  },
  {
    title: '2025',
    content: [
      {
        heading: 'Expanding Horizons',
        description:
          'Synnestra continues to grow and expand its reach, serving a larger customer base across various industries. Our commitment to innovation and customer satisfaction drives us to explore new markets and deliver exceptional value to our clients.',
      },
    ],
  },
];

const ITServices: Service[] = [
  {
    benefits: [
      {
        description: 'Build responsive and high-performance websites tailored to your needs.',
        icon: CircleDotDashed,
        title: 'Modern Websites',
      },
      {
        description: 'Ensure cross-browser compatibility and a seamless user experience.',
        icon: CircleDotDashed,
        title: 'Cross-Browser Compatibility',
      },
    ],
    imageSrc: '/web_development.jpg',
    offers: {
      mainHeading: 'Web Development Services',
      offerings: [
        {
          description: 'We develop fast, secure, and scalable web solutions for businesses.',
          title: 'Custom Web Solutions',
        },
        {
          description: 'Our team specializes in creating responsive designs for all devices.',
          title: 'Responsive Design',
        },
      ],
      subtitle: 'Tailored solutions for web development.',
    },
    slug: 'web-development',
  },
  {
    benefits: [
      {
        description: 'Design and build robust APIs for seamless data exchange.',
        icon: CircleDotDashed,
        title: 'Secure APIs',
      },
      {
        description: 'Integrate your applications with external services effortlessly.',
        icon: CircleDotDashed,
        title: 'Third-Party Integrations',
      },
    ],
    imageSrc: '/managed_services_section.png',
    offers: {
      mainHeading: 'API Development Services',
      offerings: [
        {
          description: 'Developing RESTful and GraphQL APIs to power your applications.',
          title: 'Custom API Development',
        },
        {
          description: 'Ensuring APIs are secure, scalable, and maintainable.',
          title: 'API Security & Maintenance',
        },
      ],
      subtitle: 'Efficient API solutions for your applications.',
    },
    slug: 'api-development',
  },
  {
    benefits: [
      {
        description: 'Leverage cloud infrastructure for scalable solutions.',
        icon: CircleDotDashed,
        title: 'Scalability',
      },
      {
        description: 'Ensure data availability and disaster recovery with the cloud.',
        icon: CircleDotDashed,
        title: 'High Availability',
      },
    ],
    imageSrc: '/cloud_services.jpeg',
    offers: {
      mainHeading: 'Cloud Computing Services',
      offerings: [
        {
          description: 'Deploy applications with the power of AWS, Azure, and GCP.',
          title: 'Cloud Deployment',
        },
        {
          description: 'Optimize cloud infrastructure for better performance and cost-efficiency.',
          title: 'Cloud Optimization',
        },
      ],
      subtitle: 'Empowering businesses with cloud solutions.',
    },
    slug: 'cloud-computing',
  },
  {
    benefits: [
      {
        description: 'Build cross-platform and native mobile applications.',
        icon: CircleDotDashed,
        title: 'Cross-Platform Development',
      },
      {
        description: 'Deliver engaging mobile experiences for Android and iOS.',
        icon: CircleDotDashed,
        title: 'User-Centric Design',
      },
    ],
    imageSrc: '/mobile-application-development.webp',
    offers: {
      mainHeading: 'Mobile Application Development Services',
      offerings: [
        {
          description: 'Creating user-friendly and scalable mobile apps.',
          title: 'Native App Development',
        },
        {
          description: 'Leveraging frameworks like React Native and Flutter for cost-effective solutions.',
          title: 'Hybrid App Development',
        },
      ],
      subtitle: 'Custom mobile applications for your needs.',
    },
    slug: 'mobile-application-development',
  },
  {
    benefits: [
      {
        description: 'Manage structured and unstructured data efficiently.',
        icon: CircleDotDashed,
        title: 'Data Management',
      },
      {
        description: 'Ensure data security and availability across your systems.',
        icon: CircleDotDashed,
        title: 'Secure Data Solutions',
      },
    ],
    imageSrc: '/databases.jpg',
    offers: {
      mainHeading: 'Database Management Services',
      offerings: [
        {
          description: 'Designing and maintaining SQL and NoSQL databases.',
          title: 'Database Design',
        },
        {
          description: 'Optimizing database performance for seamless operations.',
          title: 'Performance Tuning',
        },
      ],
      subtitle: 'Reliable database solutions for your business.',
    },
    slug: 'database-management',
  },
  {
    benefits: [
      {
        description: 'Automate your development and deployment workflows.',
        icon: CircleDotDashed,
        title: 'Faster Delivery',
      },
      {
        description: 'Improve code quality with continuous integration.',
        icon: CircleDotDashed,
        title: 'Quality Assurance',
      },
    ],
    imageSrc: '/ci-cd.png',
    offers: {
      mainHeading: 'CI/CD Services',
      offerings: [
        {
          description: 'Implementing Jenkins, GitHub Actions, and other CI/CD tools.',
          title: 'Pipeline Setup',
        },
        {
          description: 'Automating deployment processes for faster releases.',
          title: 'Deployment Automation',
        },
      ],
      subtitle: 'Streamline your development cycle.',
    },
    slug: 'ci-cd',
  },
  {
    benefits: [
      {
        description: 'Integrate development and operations for seamless workflows.',
        icon: CircleDotDashed,
        title: 'Improved Collaboration',
      },
      {
        description: 'Enhance system reliability and scalability.',
        icon: CircleDotDashed,
        title: 'Efficient Operations',
      },
    ],
    imageSrc: '/devops.jpg',
    offers: {
      mainHeading: 'DevOps Services',
      offerings: [
        {
          description: 'Setting up CI/CD pipelines and monitoring solutions.',
          title: 'Pipeline Implementation',
        },
        {
          description: 'Implementing containerization and orchestration with Docker and Kubernetes.',
          title: 'Containerization',
        },
      ],
      subtitle: 'Efficient collaboration between dev and ops teams.',
    },
    slug: 'devops',
  },
  {
    benefits: [
      {
        description: 'Leverage machine learning for data-driven insights.',
        icon: CircleDotDashed,
        title: 'AI Solutions',
      },
      {
        description: 'Use data science to solve complex business problems.',
        icon: CircleDotDashed,
        title: 'Data Insights',
      },
    ],
    imageSrc: '/data-science-ai.png',
    offers: {
      mainHeading: 'Data Science & AI Services',
      offerings: [
        {
          description: 'Building predictive models using AI and ML techniques.',
          title: 'Predictive Analytics',
        },
        {
          description: 'Providing end-to-end data science solutions for businesses.',
          title: 'Custom AI Models',
        },
      ],
      subtitle: 'Empowering businesses with intelligent solutions.',
    },
    slug: 'data-science-ai',
  },
];

const e_commerceServices: Service[] = [
  {
    benefits: [
      {
        description: 'Identify trending products with high profit margins.',
        icon: CircleDotDashed,
        title: 'Market Research',
      },
      {
        description: 'Find reliable suppliers to source high-quality products.',
        icon: CircleDotDashed,
        title: 'Supplier Connections',
      },
    ],
    imageSrc: '/images/product-hunting.png',
    offers: {
      mainHeading: 'Product Hunting & Sourcing',
      offerings: [
        {
          description: 'Conduct in-depth research to identify top-selling products.',
          title: 'Product Hunting',
        },
        {
          description: 'Source products directly from verified suppliers.',
          title: 'Product Sourcing',
        },
      ],
      subtitle: 'Find and source winning products for your business.',
    },
    slug: 'product-hunting-sourcing',
  },
  {
    benefits: [
      {
        description: 'Optimize your product listings to rank higher and attract customers.',
        icon: CircleDotDashed,
        title: 'SEO-Optimized Listings',
      },
      {
        description: 'Craft compelling product descriptions to boost conversions.',
        icon: CircleDotDashed,
        title: 'Conversion Optimization',
      },
    ],
    imageSrc: '/images/listing-optimization.png',
    offers: {
      mainHeading: 'Listing Optimization Services',
      offerings: [
        {
          description: 'Enhance product titles, descriptions, and keywords.',
          title: 'Keyword Optimization',
        },
        {
          description: 'Create visually appealing product images and A+ content.',
          title: 'Content Creation',
        },
      ],
      subtitle: 'Maximize visibility and sales with optimized listings.',
    },
    slug: 'listing-optimization',
  },
  {
    benefits: [
      {
        description: 'Build a unique brand with private-label products.',
        icon: CircleDotDashed,
        title: 'Custom Branding',
      },
      {
        description: 'Control your product quality and branding completely.',
        icon: CircleDotDashed,
        title: 'Ownership and Control',
      },
    ],
    imageSrc: '/images/private-label.png',
    offers: {
      mainHeading: 'Private Label Services',
      offerings: [
        {
          description: 'Develop unique products tailored to your brand.',
          title: 'Product Development',
        },
        {
          description: 'Create a strong brand identity with custom packaging.',
          title: 'Custom Packaging',
        },
      ],
      subtitle: 'Establish your brand with private-label products.',
    },
    slug: 'private-label',
  },
  {
    benefits: [
      {
        description: 'Buy products in bulk to enjoy wholesale pricing benefits.',
        icon: CircleDotDashed,
        title: 'Bulk Purchasing',
      },
      {
        description: 'Diversify your portfolio with proven products.',
        icon: CircleDotDashed,
        title: 'Product Variety',
      },
    ],
    imageSrc: '/images/wholesaling.png',
    offers: {
      mainHeading: 'Wholesaling Services',
      offerings: [
        {
          description: 'Source and manage bulk inventory for your business.',
          title: 'Bulk Inventory Management',
        },
        {
          description: 'Find high-demand products with a strong sales track record.',
          title: 'Market-Ready Products',
        },
      ],
      subtitle: 'Scale your business with wholesale opportunities.',
    },
    slug: 'wholesaling',
  },
  {
    benefits: [
      {
        description: 'Run an e-commerce business without maintaining inventory.',
        icon: CircleDotDashed,
        title: 'No Inventory Needed',
      },
      {
        description: 'Automate order fulfillment with dropshipping partners.',
        icon: CircleDotDashed,
        title: 'Automated Fulfillment',
      },
    ],
    imageSrc: '/images/dropshipping.png',
    offers: {
      mainHeading: 'Dropshipping Services',
      offerings: [
        {
          description: 'Identify top suppliers for efficient dropshipping operations.',
          title: 'Supplier Selection',
        },
        {
          description: 'Set up automated order and shipping workflows.',
          title: 'Workflow Automation',
        },
      ],
      subtitle: 'Start your business without inventory constraints.',
    },
    slug: 'dropshipping',
  },
  {
    benefits: [
      {
        description: 'Launch and scale your e-commerce store effectively.',
        icon: CircleDotDashed,
        title: 'Store Setup',
      },
      {
        description: 'Leverage platform-specific strategies for Amazon and Shopify.',
        icon: CircleDotDashed,
        title: 'Platform Expertise',
      },
    ],
    imageSrc: '/images/amazon-shopify.png',
    offers: {
      mainHeading: 'Amazon & Shopify Services',
      offerings: [
        {
          description: 'Set up and optimize your Amazon or Shopify store.',
          title: 'Store Optimization',
        },
        {
          description: 'Develop strategies for sales growth on both platforms.',
          title: 'Sales Growth Strategies',
        },
      ],
      subtitle: 'Grow your business on Amazon and Shopify.',
    },
    slug: 'amazon-shopify',
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

export const servicesProvided = [...ITServices, ...e_commerceServices];

export const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    subitems: [
      {
        name: 'IT Solutions',
        items: ITServices.map((service) => ({
          name: transformSlug(service.slug),
          href: `/services/${service.slug}`,
        })),
      },
      {
        name: 'E Commerce',
        items: e_commerceServices.map((service) => ({
          name: transformSlug(service.slug),
          href: `/services/${service.slug}`,
        })),
      },
      {
        name: 'Corporate Compliance',
        items: e_commerceServices.map((service) => ({
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

export const offices: Office[] = [
  {
    id: 'us',
    name: 'Texas Office',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5055455426937!2d-97.75495459999999!3d30.3415589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2f96fffff%3A0x893fa7795b7d5f91!2s5900%20Balcones%20Dr%20Suit%20100%2C%20Austin%2C%20TX%2078731%2C%20USA!5e1!3m2!1sen!2s!4v1737197915472!5m2!1sen!2s',
  },
  {
    id: 'uk',
    name: 'London Office',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.1737530777214!2d0.05204810000000001!3d51.538702300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64bcd464441%3A0x2064cc8ac070bab3!2s5965%2C%20182%20High%20St%20N%2C%20London%20E6%202JA%2C%20UK!5e1!3m2!1sen!2s!4v1737197790113!5m2!1sen!2s',
  },
  {
    id: 'pk',
    name: 'Lahore Office',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7249.710395256045!2d74.30515766578155!3d31.46128949653439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190152e23d4693%3A0xf3085f7be2ade3c6!2sSector%20B-1%20Sector%20B%201%20Township%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1737198048521!5m2!1sen!2s',
  },
];

// export const countriesWithPhoneNumberCodes = async () => {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   if (!response.ok) {
//     throw new Error('Failed to fetch countries');
//   }
//   const data = await response.json();

//   return data?.map((country: any) => ({
//     name: country.name?.common,
//     code: country.idd?.root,
//     flag: country.flag,
//   }));
// };
