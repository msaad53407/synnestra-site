import { TimelineEntry } from '@/components/ui/timeline';
import {
  Company,
  Office,
  Perk,
  ProjectCatalog,
  ProjectShowcase,
  Review,
  Service,
  Solution,
  TechnologyCard,
} from '@/types';

export const companies: Company[] = [
  {
    title: 'Gec CO2',
    thumbnail: '/company_logos/brand-logo.png',
  },
  // {
  //   title: 'C',
  //   thumbnail: '/company_logos/c.png',
  // },
  // {
  //   title: 'Calmomind',
  //   thumbnail: '/company_logos/Calmomind.png',
  // },
  // {
  //   title: 'Fazewide',
  //   thumbnail: '/company_logos/fazewide 1.png',
  // },
  {
    title: 'Fairdeal Electrical',
    thumbnail: '/company_logos/Frame 48095775.png',
  },
  {
    title: 'Fuze Traders',
    thumbnail: '/company_logos/FUZE TRADERS.png',
  },
  // {
  //   title: 'Tanfos',
  //   thumbnail: '/company_logos/Group 1.png',
  // },
  {
    title: 'Silent Moon',
    thumbnail: '/company_logos/Group 17.png',
  },
  // {
  //   title: 'Fit Quest',
  //   thumbnail: '/company_logos/Group 1000003130.png',
  // },
  // {
  //   title: 'MEBEL',
  //   thumbnail: '/company_logos/Group 1000004081.png',
  // },
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
  // {
  //   title: 'Global Currency',
  //   thumbnail: '/company_logos/logo app 1.png',
  // },
  // {
  //   title: 'VAR',
  //   thumbnail: '/company_logos/logo.png',
  // },
  {
    title: 'CF4 Academy',
    thumbnail: '/company_logos/ProjectImages.png',
  },
  // {
  //   title: 'TIRBUL',
  //   thumbnail: '/company_logos/TIRBUL.png',
  // },
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
          name: '.NET',
          imageSrc: '/technology_logos/dotnet.svg',
        },
        {
          name: 'AWS',
          imageSrc: '/technology_logos/aws.svg',
        },
        {
          name: 'MySQL',
          imageSrc: '/technology_logos/database.svg',
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
      type: 'web',
    },
    // {
    //   slug: 'management-system',
    //   title: 'Management System',
    //   thumbnail: '/projects/demo-website-design.jpg',
    //   features: [
    //     'Centralized dashboard for tracking key metrics',
    //     'Comprehensive chapter and district rosters',
    //     'Customizable chapter and district settings',
    //     'Role-based access control for secure collaboration',
    //     'Manage chapter finances and track transactions',
    //     'Schedule and document meetings with ease',
    //     'Secure authentication powered by Clerk',
    //   ],
    //   technologies: [
    //     {
    //       name: 'React',
    //       imageSrc: '/technology_logos/react.svg',
    //     },
    //     {
    //       name: 'Figma',
    //       imageSrc: '/technology_logos/figma.svg',
    //     },
    //     {
    //       name: 'AWS',
    //       imageSrc: '/technology_logos/aws.svg',
    //     },
    //     {
    //       name: 'Nodejs',
    //       imageSrc: '/technology_logos/nodejs.svg',
    //     },
    //   ],
    //   description: `A cutting-edge solution that leverages the power of modern technologies to deliver a robust set of capabilities, including advanced data analysis, streamlined workflows, and scalable infrastructure. This application is designed to provide a seamless user experience and drive business success.`,
    //   images: [
    //     {
    //       src: '/projects/management-system/image-1.png',
    //       alt: 'image-1',
    //     },
    //     {
    //       src: '/projects/management-system/image-2.png',
    //       alt: 'image-2',
    //     },
    //     {
    //       src: '/projects/management-system/image-3.png',
    //       alt: 'image-3',
    //     },
    //     {
    //       src: '/projects/management-system/image-4.png',
    //       alt: 'image-4',
    //     },
    //     {
    //       src: '/projects/management-system/image-5.png',
    //       alt: 'image-5',
    //     },
    //   ],
    //   type: 'web',
    // },
    {
      slug: 'fairdeal-electrical',
      title: 'Fairdeal Electrical',
      thumbnail: '/projects/fairdeal-electrical/thumbnail.png',
      features: [
        'Online booking and scheduling for electrical services',
        'Real-time tracking of service requests and status',
        'Customer management and communication tools',
        'Customizable service offerings and pricing',
        'Secure payment processing and invoicing',
        'Integrations with popular calendar and communication tools',
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
      type: 'web',
    },
    {
      slug: 'swift-cargo',
      title: 'Swift Cargo',
      type: 'web',
      description:
        'A cargo management system that streamlines operations with role-based access, data visualization, and invoice management.',
      features: [
        'Manage Dashboard',
        'Payments',
        'Add Employees',
        'Role-based Access (Employees and Admin)',
        'Data Visualization with Charts and Trends',
        'Notifications System',
        'Manage Employee Data-Tables',
        'Manage Accounts',
        'Manage Invoices',
      ],
      technologies: [
        { name: 'Next.js', imageSrc: '/technology_logos/nextjs-fill.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
        { name: 'Jenkins', imageSrc: '/technology_logos/jenkins.svg' },
      ],
      thumbnail: '/projects/ummah-cargo/thumbnail.png',
      images: [...Array(5).keys()].map((i) => ({
        src: `/projects/ummah-cargo/image-${i + 1}.png`,
        alt: 'Swift Cargo',
      })),
    },
    {
      slug: 'c4f-academy',
      title: 'C4F Academy',
      type: 'web',
      description:
        'A crypto trading academy where users can enroll in courses, practice in a virtual environment, and manage their profiles.',
      features: [
        'Discover and Buy Packages',
        'Enroll in Courses and Track Progress',
        'Take Video Lectures',
        'Discover Course Contents',
        'Practical Playground for Demo Practice',
        'Virtual Environment for Crypto Trading Skills',
        'Manage User Profiles',
      ],
      technologies: [
        { name: 'Angular', imageSrc: '/technology_logos/angular.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'Nest.js', imageSrc: '/technology_logos/nestjs.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
        { name: 'docker', imageSrc: '/technology_logos/docker.svg' },
      ],
      thumbnail: '/projects/c4f/thumbnail.png',
      images: [...Array(6).keys()].map((i) => ({
        src: `/projects/c4f/image-${i + 1}.png`,
        alt: 'C4F Academy',
      })),
    },
    {
      slug: 'my-car',
      title: 'My CAR',
      description:
        'My CAR is a comprehensive car rental platform that streamlines the vehicle rental experience through an intuitive online booking system. With features like flexible payment options, advanced filtering capabilities, and seamless scheduling, customers can easily rent vehicles that match their specific needs and preferences while managing their bookings through a personalized dashboard.',
      features: [
        'Real-time car availability tracking',
        'Flexible booking management system',
        'Advanced car filtering options',
        'Multiple payment methods and timing',
        'Interactive booking calendar',
        'Personalized user dashboard',
        'Scheduled pickup and drop-off service',
        'Detailed vehicle specifications and images',
        'Future availability notifications',
        'Booking history and rental analytics',
        'Internalization and localization',
      ],
      technologies: [
        {
          name: 'Next,js',
          imageSrc: '/technology_logos/nextjs-fill.svg',
        },
        {
          name: 'Node.js',
          imageSrc: '/technology_logos/nodejs.svg',
        },
        {
          name: 'PostgreSQL',
          imageSrc: '/technology_logos/database.svg',
        },
        {
          name: 'Nestjs',
          imageSrc: '/technology_logos/nestjs.svg',
        },
        {
          name: 'AWS',
          imageSrc: '/technology_logos/aws.svg',
        },
        {
          name: 'Jenkins',
          imageSrc: '/technology_logos/jenkins.svg',
        },
      ],
      images: [...Array(6).keys()].map((i) => ({
        src: `/projects/my-car/image-${i + 1}.png`,
        alt: 'My CAR',
      })),
      thumbnail: '/projects/my-car/thumbnail.png',
      type: 'web',
    },
    {
      slug: 'faisal-burger',
      title: 'Faisal Burger',
      type: 'web',
      description:
        'An online fast food delivery site with account management, order tracking, and a feature-rich admin dashboard.',
      features: [
        'Browse Items from Categories and Search',
        'Apply Filters',
        'Manage Accounts and Addresses',
        'Payments (Cards and Other Means)',
        'Checkout Feature',
        'Manage Special Discounts for Occasions',
        'Admin Dashboard for Data and Analytics',
        'Interactive Charts and Graphs',
        'Monthly and Weekly Sales Overviews',
      ],
      technologies: [
        { name: 'React', imageSrc: '/technology_logos/react.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'MongoDB', imageSrc: '/technology_logos/database.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
      ],
      thumbnail: '/projects/faisal-burger/thumbnail.png',
      images: [...Array(5).keys()].map((i) => ({
        src: `/projects/faisal-burger/image-${i + 1}.png`,
        alt: 'Faisal Burger',
      })),
    },
    {
      slug: 'pro-connect-hub',
      title: 'Pro Connect Hub',
      type: 'web',
      description:
        'Pro Connect Hub is a comprehensive social networking platform that combines community building, content creation, and wellness support. The platform offers a unique blend of social interaction, knowledge sharing, and personal development through its integrated features including community management, blogging, event organization, AI-powered health support, and professional networking capabilities.',
      features: [
        'Dynamic community creation and management',
        'Public and private community spaces',
        'Integrated blogging platform with rich media support',
        'Advanced event management system',
        'AI-powered 24/7 health consultation chatbot',
        'Live customer support during business hours',
        'Comprehensive self-care resources and tools',
        'Tiered subscription plans with exclusive benefits',
        'Interactive analytics dashboard',
        'Customizable content templates',
        'Real-time community engagement metrics',
        'Multi-channel communication tools',
      ],
      technologies: [
        {
          name: 'Next.js',
          imageSrc: '/technology_logos/nextjs-fill.svg',
        },
        {
          name: 'Node.js',
          imageSrc: '/technology_logos/nodejs.svg',
        },
        {
          name: 'PostgreSQL',
          imageSrc: '/technology_logos/database.svg',
        },
        {
          name: 'OpenAI',
          imageSrc: '/technology_logos/ai.svg',
        },
        {
          name: 'AWS',
          imageSrc: '/technology_logos/aws.svg',
        },
        {
          name: 'Docker',
          imageSrc: '/technology_logos/docker.svg',
        },
      ],
      thumbnail: '/projects/pro-connect-hub/thumbnail.png',
      images: [...Array(8).keys()].map((i) => ({
        src: `/projects/pro-connect-hub/image-${i + 1}.png`,
        alt: 'Pro Connect Hub',
      })),
    },

    // {
    //   slug: 'dex-booster',
    //   title: 'Dex Booster: Your Cryptocurrency Navigator',
    //   thumbnail: '/projects/demo-website-design.jpg',
    //   features: [
    //     'Real-time cryptocurrency price tracking',
    //     'Personalized coin recommendations',
    //     'Comprehensive market trend insights',
    //     'Multi-exchange data integration',
    //     'Advanced machine learning-powered analysis',
    //     'Intuitive and user-friendly interface',
    //     'Secure data encryption and privacy protection',
    //   ],
    //   technologies: [
    //     {
    //       name: 'React',
    //       imageSrc: '/technology_logos/react.svg',
    //     },
    //     {
    //       name: 'Figma',
    //       imageSrc: '/technology_logos/figma.svg',
    //     },
    //     {
    //       name: 'AWS',
    //       imageSrc: '/technology_logos/aws.svg',
    //     },
    //     {
    //       name: 'Nodejs',
    //       imageSrc: '/technology_logos/nodejs.svg',
    //     },
    //   ],
    //   description: `A cutting-edge cryptocurrency analysis platform that simplifies market navigation through advanced data integration, personalized insights, and robust security measures. DexBooster leverages machine learning and comprehensive exchange data to provide users with intelligent cryptocurrency recommendations and real-time market intelligence.`,
    //   images: [
    //     {
    //       src: '/projects/dex-booster/image-1.webp',
    //       alt: 'image-1',
    //     },
    //   ],
    //   type: 'web',
    // },
    {
      slug: 'arcadia-developers',
      title: 'Arcadia Developers Premier Construction Solutions',
      thumbnail: '/projects/arcadia-developers-premier-construction-solutions/thumbnail.jpeg',
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
      type: 'web',
    },
    {
      slug: 'fuze-traders',
      title: 'FuzeTraders: Integrated Trading Solutions',
      thumbnail: '/projects/fuze-traders/thumbnail.png',
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
          name: 'Angular',
          imageSrc: '/technology_logos/angular.svg',
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
          name: 'Python',
          imageSrc: '/technology_logos/python.svg',
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
      type: 'web',
    },

    {
      slug: 'daisy-chat',
      title: 'DaisyChat: Your Wedding Connection',
      thumbnail: '/projects/daisy-chat/thumbnail.png',
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
          src: '/projects/daisy-chat/image-1.png',
          alt: 'Wedding Invitation Management Interface',
        },
        {
          src: '/projects/daisy-chat/image-2.png',
          alt: 'Guest Communication Dashboard',
        },
        {
          src: '/projects/daisy-chat/image-3.png',
          alt: 'Wedding Details and Agenda Sharing',
        },
        {
          src: '/projects/daisy-chat/image-4.png',
          alt: 'Wedding Details and Agenda Sharing',
        },
        {
          src: '/projects/daisy-chat/image-5.png',
          alt: 'Wedding Details and Agenda Sharing',
        },
      ],
      type: 'web',
    },
  ],
  mobileApps: [
    {
      slug: 'swapping-numbers-academy',
      title: 'Swapping Numbers Academy',
      type: 'mobile',
      description:
        'An interactive learning platform focused on personal finance and investment strategies, featuring gamified progression, AI assistance, and a community-driven learning experience.',
      features: [
        'Auditorium-style learning environment',
        'Credit monitoring and improvement system',
        "Dean's Office for administrative support",
        'AI Buddy for personalized assistance',
        'Frat House community feature',
        'Point-based progression system',
        'Achievement rewards',
        'Progress tracking with graphs and analytics',
        'Dark mode UI',
        'Mobile-first design',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'Artificial Intelligence', imageSrc: '/technology_logos/ai.svg' },
        { name: 'Machine Learning', imageSrc: '/technology_logos/machine-learning.svg' },
        { name: 'Figma', imageSrc: '/technology_logos/figma.svg' },
      ],
      thumbnail: '/projects/swapping-numbers-academy/thumbnail.png',
      images: [...Array(6).keys()].map((i) => ({
        src: `/projects/swapping-numbers-academy/image-${i + 1}.png`,
        alt: 'Swapping Numbers Academy',
      })),
    },
    {
      slug: 'global-currency',
      title: 'Global Currency',
      type: 'mobile',
      description:
        'A crypto-based platform with an integrated wallet, AI chatbot, and an article discovery section for users to read and engage with financial content.',
      features: [
        'Secure crypto wallet',
        'AI-powered chatbot',
        'Article discovery and engagement',
        'Like and save articles',
        'Real-time crypto price tracking',
        'User-friendly transaction history',
        'Dark mode UI',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'Artificial Intelligence', imageSrc: '/technology_logos/ai.svg' },
        { name: 'Machine Learning', imageSrc: '/technology_logos/machine-learning.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
      ],
      thumbnail: '/projects/global-currency/thumbnail.png',
      images: [...Array(7).keys()].map((i) => ({
        src: `/projects/global-currency/image-${i + 1}.png`,
        alt: 'Global Currency',
      })),
    },
    {
      slug: 'mebel',
      title: 'Mebel',
      type: 'mobile',
      description:
        'A healthcare app providing doctor listings, appointment bookings, a reviews system, invoice management, and a medical reports system.',
      features: [
        'Doctor listings with profiles',
        'Appointment booking system',
        'User reviews and ratings',
        'Invoice management',
        'Medical reports storage and retrieval',
        'Secure patient data handling',
        'Intuitive UI with dark mode support',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
      ],
      thumbnail: '/projects/mebel/thumbnail.png',
      images: [...Array(6).keys()].map((i) => ({
        src: `/projects/mebel/image-${i + 1}.png`,
        alt: 'Mebel',
      })),
    },
    {
      slug: 'soul-pills',
      title: 'Soul Pills',
      type: 'mobile',
      description:
        'A meditation and wellness app that offers guided meditation, soothing music, stopwatch and timers, and playlist management for a calming experience.',
      features: [
        'User authentication and profiles',
        'Guided meditation sessions',
        'Soothing built-in music',
        'Stopwatch and timer functionality',
        'Playlist management',
        'Dark mode UI for a relaxing experience',
      ],
      technologies: [
        { imageSrc: '/technology_logos/flutter.svg', name: 'Flutter' },
        { imageSrc: '/technology_logos/nodejs.svg', name: 'Node.js' },
        { imageSrc: '/technology_logos/aws.svg', name: 'AWS' },
        { imageSrc: '/technology_logos/database.svg', name: 'PostgreSQL' },
      ],
      thumbnail: '/projects/soul-pills/thumbnail.png',
      images: [...Array(5).keys()].map((i) => ({
        src: `/projects/soul-pills/image-${i + 1}.png`,
        alt: 'Soul Pills',
      })),
    },
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
        {
          name: 'MongoDB',
          imageSrc: '/technology_logos/database.svg',
        },
        {
          name: 'Jenkins',
          imageSrc: '/technology_logos/jenkins.svg',
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
      type: 'mobile',
    },
    {
      slug: 'bane',
      title: 'Bane',
      type: 'mobile',
      description:
        'A health tracking and workout app featuring leaderboards, dashboards, social media integration, progress tracking, a shop, daily and monthly challenges, and a story mode for workouts.',
      features: [
        'Health tracking and workout management',
        'Leaderboards functionality',
        'Comprehensive dashboard',
        'Integrated social media service',
        'Progress tracking',
        'Online shop',
        'Daily and monthly challenges',
        'Story mode for workouts',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
      ],
      thumbnail: '/projects/bane/thumbnail.png',
      images: [...Array(6).keys()].map((i) => ({
        src: `/projects/bane/image-${i + 1}.png`,
        alt: 'Bane',
      })),
    },
    {
      slug: 'fitquest',
      title: 'FitQuest',
      type: 'mobile',
      description:
        'A fitness app similar to Bane but with additional gamification, premium subscriptions, history tracking, calorie and food intake monitoring, and quest-based challenges with deadlines and points.',
      features: [
        'Gamified fitness experience',
        'Premium subscriptions',
        'Track history',
        'Calorie and food intake tracking',
        'Quest-based challenges with deadlines and points',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
        { name: 'Machine Learning', imageSrc: '/technology_logos/machine-learning.svg' },
      ],
      thumbnail: '/projects/fitquest/thumbnail.png',
      images: [...Array(6).keys()].map((i) => ({
        src: `/projects/fitquest/image-${i + 1}.png`,
        alt: 'FitQuest',
      })),
    },
    {
      slug: 'tanafos',
      title: 'Tanafos: Seamless Football Ground Booking App',
      thumbnail: '/projects/tanafos/thumbnail.png',
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
          src: '/projects/tanafos/image-1.png',
          alt: 'Tanafos Ground Booking Interface',
        },
        {
          src: '/projects/tanafos/image-2.png',
          alt: 'Match Scheduling Screen',
        },
        {
          src: '/projects/tanafos/image-3.png',
          alt: 'Multilingual Community Chat',
        },
        {
          src: '/projects/tanafos/image-4.png',
          alt: 'Player Connection Features',
        },
        {
          src: '/projects/tanafos/image-5.png',
          alt: 'Player Connection Features',
        },
        {
          src: '/projects/tanafos/image-6.png',
          alt: 'Player Connection Features',
        },
      ],
      type: 'mobile',
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
      thumbnail: '/projects/demo-mobile-design-1.jpg',
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
        {
          name: 'AWS',
          imageSrc: '/technology_logos/aws.svg',
        },
        {
          name: 'PostgreSQL',
          imageSrc: '/technology_logos/database.svg',
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
      type: 'mobile',
    },
    {
      slug: 'health-app',
      title: 'Health App',
      type: 'mobile',
      description:
        'A personal health tracking app designed to help users monitor their health activities, analyze data trends, and achieve fitness goals together with their crew.',
      features: [
        'Track health activities and fitness progress',
        'Analyze data trends for better insights',
        'Create and join crews to achieve goals together',
        'Chat and communicate with crew members',
        'Import existing health data into the app',
        'Export health records and reports',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
      ],
      thumbnail: '/projects/health-app/thumbnail.png',
      images: [
        { src: '/projects/health-app/image-1.png', alt: 'Health App' },
        { src: '/projects/health-app/image-2.png', alt: 'Health App' },
        { src: '/projects/health-app/image-3.png', alt: 'Health App' },
        { src: '/projects/health-app/image-4.png', alt: 'Health App' },
        { src: '/projects/health-app/image-5.png', alt: 'Health App' },
        { src: '/projects/health-app/image-6.png', alt: 'Health App' },
        { src: '/projects/health-app/image-7.png', alt: 'Health App' },
      ],
    },
    {
      slug: 'hiya-cleaners',
      title: 'Hiya Cleaners: Professional Home Cleaning Services',
      features: [
        'Dual registration for homeowners and cleaners',
        'Real-time booking management system',
        'Integrated chat communication platform',
        'Categorized cleaning service listings',
        'Multi-shift scheduling system',
        'Secure payment processing',
        'Comprehensive review and rating system',
        'Role-specific customized dashboards',
        'Service categorization and filtering',
        'Detailed cleaning history tracking',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.hiyacleaners.app',
      thumbnail: '/projects/hiya-cleaners/thumbnail.jpeg',
      description:
        'Hiya Cleaners is a comprehensive cleaning service platform that connects professional cleaners with homeowners, offering a streamlined booking system, secure communication channels, and detailed service management tools for both service providers and clients.',
      technologies: [
        {
          name: 'React Native',
          imageSrc: '/technology_logos/react.svg',
        },
        {
          name: 'Express.js',
          imageSrc: '/technology_logos/nodejs.svg',
        },
        {
          name: 'MongoDB',
          imageSrc: '/technology_logos/database.svg',
        },
        {
          name: 'AWS',
          imageSrc: '/technology_logos/aws.svg',
        },
        {
          name: 'Jenkins',
          imageSrc: '/technology_logos/jenkins.svg',
        },
      ],
      images: [...Array(9).keys()].map((i) => ({
        src: `/projects/hiya-cleaners/image-${i + 1}.png`,
        alt: 'Hiya Cleaners',
      })),
      type: 'mobile',
    },
    {
      slug: 'oyo-ecommerce',
      title: 'OYO Ecommerce',
      type: 'mobile',
      description:
        'An e-commerce platform featuring a seamless shopping experience with product browsing, a secure checkout process, and real-time inventory management.',
      features: [
        'Product browsing and filtering',
        'Secure payment gateway',
        'Real-time inventory updates',
        'User authentication and profiles',
        'Order tracking system',
        'Wishlist and favorites',
        'Discount and coupon management',
        'Admin dashboard for analytics',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'MySQL', imageSrc: '/technology_logos/database.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
      ],
      thumbnail: '/projects/oyo/thumbnail.png',
      images: [...Array(4).keys()].map((i) => ({
        src: `/projects/oyo/image-${i + 1}.png`,
        alt: 'OYO Ecommerce',
      })),
    },
    {
      slug: 'trucker-application',
      title: 'Trucker Application',
      type: 'mobile',
      description:
        'A logistics and trucking management app that provides route optimization, live tracking, and automated dispatch solutions for fleet owners and drivers.',
      features: [
        'Live GPS tracking',
        'Automated dispatch and scheduling',
        'Route optimization',
        'Driver and fleet management',
        'Expense and fuel tracking',
        'In-app messaging system',
        'Digital invoicing and payments',
      ],
      technologies: [
        { name: 'Flutter', imageSrc: '/technology_logos/flutter.svg' },
        { name: 'Node.js', imageSrc: '/technology_logos/nodejs.svg' },
        { name: 'PostgreSQL', imageSrc: '/technology_logos/database.svg' },
        { name: 'AWS', imageSrc: '/technology_logos/aws.svg' },
      ],
      thumbnail: '/projects/trucker-application/thumbnail.jpeg',
      images: [...Array(7).keys()].map((i) => ({
        src: `/projects/trucker-application/image-${i + 1}.png`,
        alt: 'Trucker Application',
      })),
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
      thumbnail: '/projects/var/thubnail.png',
      description:
        'Var is an app that facilitates easy book reading by providing animated visuals synchronized with highlighted text, allowing users to immerse themselves in the story and enjoy a more engaging reading experience.',
      technologies: [
        {
          name: 'Kotlin',
          imageSrc: '/technology_logos/kotlin.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
        {
          name: 'Nest.js',
          imageSrc: '/technology_logos/nestjs.svg',
        },
        {
          name: 'Jenkins',
          imageSrc: '/technology_logos/jenkins.svg',
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
      type: 'mobile',
    },
    {
      slug: 'red-stripe',
      title: 'Red Stripe: Recycling Rewards Platform',
      features: [
        'Instant and scheduled pickup requests',
        'Real-time tracking of nearby recyclable items',
        'In-app earnings management',
        'Interactive recycling maps',
        'Reward point system',
        'Community impact metrics',
        'Seamless digital payments',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.redstripe.recycling',
      thumbnail: '/projects/red-stripe/thumbnail.png',
      description:
        'Red Stripe is an innovative recycling platform in Jamaica that incentivizes environmental consciousness by rewarding users for returning recyclable items, contributing to a cleaner, more sustainable community while providing economic opportunities.',
      technologies: [
        {
          name: 'React Native',
          imageSrc: '/technology_logos/react.svg',
        },
        {
          name: 'AWS',
          imageSrc: '/technology_logos/aws.svg',
        },
        {
          name: 'MongoDB',
          imageSrc: '/technology_logos/database.svg',
        },
        {
          name: 'Jenkins',
          imageSrc: '/technology_logos/jenkins.svg',
        },
      ],
      images: [
        {
          src: '/projects/red-stripe/image-1.png',
          alt: 'Red Stripe Dashboard',
        },
        {
          src: '/projects/red-stripe/image-2.png',
          alt: 'Pickup Schedule Interface',
        },
        {
          src: '/projects/red-stripe/image-3.png',
          alt: 'Earnings Management Screen',
        },
        {
          src: '/projects/red-stripe/image-4.png',
          alt: 'Earnings Management Screen',
        },
      ],
      type: 'mobile',
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
      thumbnail: '/projects/calmomind/thumbnail.png',
      description:
        "Discover serenity on the go with our meditation app. Whether you're seeking stress relief, improved focus, or simply a moment of tranquility, our app offers a personalized journey to inner peace.\n\nEmbark on guided meditations led by experienced instructors, tailored to your schedule and preferences. Explore a variety of techniques, from mindfulness and breathing exercises to body scans and visualization.\n\nTrack your progress and cultivate mindfulness with our meditation timer and daily reminders. With a range of soothing sounds and nature scenes, create your ideal meditation environment anytime, anywhere.",
      technologies: [
        {
          name: 'Flutter',
          imageSrc: '/technology_logos/flutter.svg',
        },
        {
          name: 'Figma',
          imageSrc: '/technology_logos/figma.svg',
        },
        {
          name: 'Nodejs',
          imageSrc: '/technology_logos/nodejs.svg',
        },
        {
          name: 'MongoDB',
          imageSrc: '/technology_logos/database.svg',
        },
      ],
      images: [
        {
          src: '/projects/calmomind/image-1.png',
          alt: 'image-1',
        },
        {
          src: '/projects/calmomind/image-2.png',
          alt: 'image-2',
        },
        {
          src: '/projects/calmomind/image-3.png',
          alt: 'image-3',
        },
        {
          src: '/projects/calmomind/image-4.png',
          alt: 'image-4',
        },
        {
          src: '/projects/calmomind/image-5.png',
          alt: 'image-5',
        },
      ],
      type: 'mobile',
    },
  ],
};

export const projectsShowcase: ProjectShowcase[] = [
  {
    name: 'Success Loop',
    description: products.websites.find((website) => website.slug === 'success-loop')?.description || '',
    color: 'bg-custom-purple-light',
    textColor: 'text-black',
    headingColor: 'text-custom-purple',
    image: '/company_logos/logo 1.png',
    link: `/project/${products.websites.find((website) => website.slug === 'success-loop')?.slug || ''}`,
  },
  {
    name: 'Global Currency',
    description: products.mobileApps.find((app) => app.slug === 'global-currency')?.description || '',
    color: 'bg-custom-cream',
    textColor: 'text-black',
    headingColor: 'text-custom-purple',
    image: '/company_logos/growth_app_logo.png',
    link: `/project/${products.mobileApps.find((app) => app.slug === 'global-currency')?.slug || ''}`,
  },
  {
    name: 'Swapping Numbers Academy',
    description:
      products.mobileApps.find((app) => app.slug === 'swapping-numbers-academy')?.description ||
      "As part of our commitment to knowledge-sharing, we have developed the Swappin' Numbers Academy - an educational platform that equips professionals with the skills and strategies needed to navigate the dynamic world of financial data analysis and decision-making.",
    color: 'bg-custom-purple',
    textColor: 'text-white',
    headingColor: 'text-white',
    image: '/company_logos/swapping_numbers_academy.png',
    link: `/project/${products.mobileApps.find((app) => app.slug === 'swapping-numbers-academy')?.slug || ''}`,
  },
];

export const technologyCards: TechnologyCard[] = [
  {
    name: 'Node.js',
    imageSrc: '/technology_logos/nodejs.svg',
  },
  {
    name: 'Nest.js',
    imageSrc: '/technology_logos/nestjs.svg',
  },
  {
    name: 'Python',
    imageSrc: '/technology_logos/python.svg',
  },
  {
    name: 'Java',
    imageSrc: '/technology_logos/java.svg',
  },
  {
    name: '.NET',
    imageSrc: '/technology_logos/dotnet.svg',
  },
  {
    name: 'Angular.js',
    imageSrc: '/technology_logos/angular.svg',
  },
  {
    name: 'React.js',
    imageSrc: '/technology_logos/react.svg',
  },
  {
    name: 'Next.js',
    imageSrc: '/technology_logos/nextjs-fill.svg',
  },
  {
    name: 'Figma',
    imageSrc: '/technology_logos/figma.svg',
  },
  {
    name: 'Flutter',
    imageSrc: '/technology_logos/flutter.svg',
  },
  {
    name: 'Kotlin',
    imageSrc: '/technology_logos/kotlin.svg',
  },
  {
    name: 'Artificial Intelligence',
    imageSrc: '/technology_logos/ai.svg',
  },
  {
    name: 'Machine Learning',
    imageSrc: '/technology_logos/machine-learning.svg',
  },
  {
    name: 'Shopify',
    imageSrc: '/technology_logos/shopify-color.svg',
  },
  {
    name: 'Amazon',
    imageSrc: '/technology_logos/amazon-color.svg',
  },
  {
    name: 'Docker',
    imageSrc: '/technology_logos/docker.svg',
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
    name: 'Databases',
    imageSrc: '/technology_logos/database.svg',
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

export const ITServices: Service[] = [
  {
    title: 'Web Development',
    slug: 'web-development',
    imageSrc: '/web-development.jpg',
    introSection: {
      title: 'Engineering Digital Excellence',
      description:
        "Transform your digital presence with our cutting-edge web development solutions. We craft sophisticated, scalable web applications that combine stunning front-end experiences with robust backend architectures. Our expert team leverages the latest technologies and best practices to deliver high-performance solutions that drive business growth, enhance user engagement, and ensure your competitive edge in today's digital landscape. Choose Synnestra for unparalleled technical expertise, agile development processes, and a commitment to turning your web vision into reality.",
    },
    techStack: {
      frameworks: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'Django', 'Laravel'],
      tools: ['Webpack', 'Git', 'Docker', 'Jest', 'Cypress', 'AWS', 'Vercel'],
    },
    ourApproach: [
      {
        title: 'User-Centric Development',
        description:
          'We prioritize user experience by implementing responsive designs, optimizing load times, and ensuring cross-browser compatibility. Our development process includes continuous user feedback and iterative improvements.',
      },
      {
        title: 'Agile Methodology',
        description:
          'Using Agile practices, we maintain transparency and flexibility throughout the development cycle, allowing for quick adaptations to changing requirements while maintaining project momentum.',
      },
      {
        title: 'Performance Optimization',
        description:
          'We implement advanced caching strategies, optimize asset delivery, and utilize modern build tools to ensure your web application performs at its peak, providing seamless user experiences.',
      },
    ],
  },
  {
    title: 'Mobile Development',
    slug: 'mobile-development',
    imageSrc: '/app-development.jpg',
    introSection: {
      title: 'Mobilizing Your Digital Future',
      description:
        "Elevate your mobile presence with our exceptional development expertise. At Synnestra, we specialize in creating powerful, intuitive mobile applications that captivate users and drive business growth. Our team masterfully blends native and cross-platform development approaches to deliver high-performance solutions that seamlessly integrate with your existing systems. From concept to deployment, we ensure your mobile application stands out in today's competitive marketplace with superior functionality, stunning design, and flawless user experience.",
    },
    techStack: {
      frameworks: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose'],
      tools: ['Firebase', 'Xcode', 'Android Studio', 'Fastlane', 'App Center', 'Google Analytics'],
    },
    ourApproach: [
      {
        title: 'Platform-Specific Excellence',
        description:
          'We follow platform-specific design guidelines and best practices to ensure your app feels native and intuitive on each operating system while maintaining consistent functionality.',
      },
      {
        title: 'Offline-First Architecture',
        description:
          'Our mobile applications are designed to work seamlessly offline, implementing robust data synchronization and local storage strategies to ensure uninterrupted user experiences.',
      },
      {
        title: 'Continuous Integration/Deployment',
        description:
          'We implement automated testing and deployment pipelines to ensure rapid development cycles and consistent app quality across all supported platforms and devices.',
      },
    ],
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    slug: 'artificial-intelligence-ml',
    imageSrc: '/ai.jpg',
    introSection: {
      title: "Unleashing AI's Transformative Power",
      description:
        "Harness the revolutionary potential of AI with Synnestra's advanced machine learning solutions. We develop sophisticated AI systems that transform complex data into actionable intelligence, automate critical processes, and unlock predictive insights for your business. Our expert team creates custom AI models that adapt to your specific needs, whether in natural language processing, computer vision, or predictive analytics. Partner with us to leverage cutting-edge AI technology that drives innovation and creates sustainable competitive advantages for your organization.",
    },
    techStack: {
      frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Transformers'],
      tools: ['Jupyter Notebooks', 'Google Cloud AI', 'AWS SageMaker', 'CUDA', 'MLflow', 'DVC'],
    },
    ourApproach: [
      {
        title: 'Data-Driven Development',
        description:
          'We begin with thorough data analysis and preprocessing to ensure your AI models are built on clean, relevant data that accurately represents your business context.',
      },
      {
        title: 'Iterative Model Improvement',
        description:
          'Our process includes continuous model evaluation and refinement, implementing feedback loops to improve accuracy and performance over time.',
      },
      {
        title: 'Scalable AI Infrastructure',
        description:
          'We design and implement scalable AI infrastructure that can handle growing data volumes and computational demands while maintaining performance and cost-effectiveness.',
      },
    ],
  },
  {
    title: 'Blockchain Technology',
    slug: 'blockchain-technology',
    imageSrc: '/blockchain.jpg',
    introSection: {
      title: 'Architecting Trust in the Digital Age',
      description:
        "Step into the future of secure, transparent transactions with Synnestra's blockchain expertise. We develop robust decentralized solutions that revolutionize how businesses handle digital assets, manage supply chains, and process transactions. Our blockchain implementations combine cutting-edge distributed ledger technology with enterprise-grade security and scalability. Choose Synnestra to build trust-driven systems that optimize operations, reduce costs, and create new opportunities in the decentralized economy.",
    },
    techStack: {
      frameworks: ['Ethereum', 'Solidity', 'Hyperledger Fabric', 'Web3.js', 'Truffle', 'Hardhat'],
      tools: ['MetaMask', 'Ganache', 'IPFS', 'OpenZeppelin', 'Ethers.js', 'Remix IDE'],
    },
    ourApproach: [
      {
        title: 'Security-First Development',
        description:
          'We implement rigorous security measures and best practices in smart contract development, including formal verification and comprehensive security audits.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Our blockchain solutions are designed with scalability in mind, implementing layer-2 solutions and optimal consensus mechanisms to handle high transaction volumes.',
      },
      {
        title: 'Interoperability Focus',
        description:
          'We ensure our blockchain implementations can interact seamlessly with existing systems and other blockchain networks, maximizing their utility and adoption potential.',
      },
    ],
  },
  {
    title: 'API Development',
    slug: 'api-development',
    imageSrc: '/api-development.jpg',
    introSection: {
      title: 'Connecting Digital Ecosystems',
      description:
        "Power your digital infrastructure with Synnestra's sophisticated API solutions. We design and develop robust, scalable APIs that seamlessly connect your systems, applications, and services. Our expertise in RESTful and GraphQL architectures, combined with modern microservices design, ensures your APIs deliver optimal performance, security, and reliability. Partner with us to create APIs that not only meet your current integration needs but scale effortlessly with your growing business demands.",
    },
    techStack: {
      frameworks: ['Express.js', 'NestJS', 'FastAPI', 'Spring Boot', 'Apollo GraphQL', 'gRPC'],
      tools: ['Swagger', 'Postman', 'Kong', 'Redis', 'RabbitMQ', 'Elasticsearch'],
    },
    ourApproach: [
      {
        title: 'API-First Design',
        description:
          'We follow an API-first approach, carefully planning and documenting endpoints, data models, and integration patterns before implementation begins.',
      },
      {
        title: 'Comprehensive Testing',
        description:
          'Our development process includes thorough testing at all levels, from unit tests to integration tests and performance testing, ensuring reliable and stable APIs.',
      },
      {
        title: 'Security & Authentication',
        description:
          'We implement robust security measures including OAuth2, JWT, rate limiting, and input validation to protect your APIs from common vulnerabilities and attacks.',
      },
    ],
  },
  {
    title: 'DevOps & Cloud Computing',
    slug: 'devops-cloud-computing',
    imageSrc: '/cloud_services.jpeg',
    introSection: {
      title: 'Empowering Cloud Innovation',
      description:
        "Accelerate your digital transformation with Synnestra's comprehensive DevOps and cloud computing solutions. We architect and implement scalable cloud infrastructures that optimize performance, enhance reliability, and drive cost efficiency. Our DevOps expertise streamlines your development workflows through advanced automation, continuous integration/deployment, and infrastructure as code. Trust Synnestra to build and maintain cloud environments that grow with your business while maintaining peak operational excellence.",
    },
    techStack: {
      frameworks: ['Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Ansible', 'GitHub Actions'],
      tools: ['AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana', 'ELK Stack'],
    },
    ourApproach: [
      {
        title: 'Infrastructure as Code',
        description:
          'We implement infrastructure as code practices to ensure consistent, version-controlled, and repeatable deployment processes across all environments.',
      },
      {
        title: 'Monitoring & Observability',
        description:
          'Our solutions include comprehensive monitoring and logging systems to provide real-time insights into system health, performance metrics, and potential issues.',
      },
      {
        title: 'Cost Optimization',
        description:
          'We implement cloud cost optimization strategies, including auto-scaling, resource right-sizing, and usage analysis to maintain optimal performance within budget constraints.',
      },
    ],
  },
  {
    title: 'Data Analytics',
    slug: 'data-analytics',
    imageSrc: '/data-analytics.jpg',
    introSection: {
      title: 'Transforming Data into Strategic Assets',
      description:
        "Unlock the full potential of your data with Synnestra's advanced analytics solutions. We transform raw data into actionable insights through sophisticated analysis, visualization, and reporting tools that drive informed decision-making. Our expertise in big data processing and business intelligence enables organizations to discover hidden patterns, predict trends, and optimize operations. Partner with us to harness the power of your data and gain a competitive edge in today's data-driven business landscape.",
    },
    techStack: {
      frameworks: ['Apache Spark', 'Hadoop', 'Pandas', 'Power BI', 'Tableau', 'Apache Airflow'],
      tools: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks', 'Looker', 'Alteryx'],
    },
    ourApproach: [
      {
        title: 'Data Strategy Development',
        description:
          'We begin by understanding your business objectives and developing a comprehensive data strategy that aligns analytics initiatives with organizational goals.',
      },
      {
        title: 'Data Quality & Governance',
        description:
          'Our solutions implement robust data quality checks and governance frameworks to ensure accuracy, consistency, and compliance in all analytics processes.',
      },
      {
        title: 'Automated Reporting',
        description:
          'We create automated reporting systems with customizable dashboards that provide real-time insights and facilitate data-driven decision making across your organization.',
      },
    ],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    imageSrc: '/ui-ux.jpg',
    introSection: {
      title: 'Crafting Digital Experiences that Inspire',
      description:
        "Elevate your digital presence with Synnestra's human-centered design approach. We create intuitive, engaging user interfaces that captivate your audience and drive meaningful interactions. Our comprehensive design process combines deep user research, innovative interaction design, and meticulous attention to detail. Choose Synnestra to transform your digital vision into seamless, memorable experiences that delight users and achieve your business objectives.",
    },
    techStack: {
      frameworks: ['Material-UI', 'Tailwind CSS', 'Framer Motion', 'Styled Components', 'Bootstrap', 'Chakra UI'],
      tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Principle'],
    },
    ourApproach: [
      {
        title: 'Research & Discovery',
        description:
          'We conduct thorough user research, competitive analysis, and stakeholder interviews to understand user needs and business requirements before beginning design work.',
      },
      {
        title: 'Iterative Design Process',
        description:
          'Our design process involves multiple iterations and feedback loops, ensuring that each design decision is validated through user testing and stakeholder input.',
      },
      {
        title: 'Design System Development',
        description:
          'We create comprehensive design systems that ensure consistency across all user interfaces while maintaining flexibility for future growth and adaptation.',
      },
    ],
  },
  {
    title: 'Custom Software Development',
    slug: 'custom-software',
    imageSrc: '/custom-software.jpg',
    introSection: {
      title: "Building Tomorrow's Solutions Today",
      description:
        "Transform your business challenges into opportunities with Synnestra's custom software solutions. We develop tailored applications that perfectly align with your unique business processes and objectives. Whether you need enterprise resource planning systems, specialized industry applications, or legacy system modernization, our expert team delivers scalable, future-proof solutions. Partner with Synnestra to create custom software that drives efficiency, innovation, and sustainable growth for your organization.",
    },
    techStack: {
      frameworks: ['.NET Core', 'Java Spring', 'Python Django', 'Ruby on Rails', 'Angular', 'Vue.js'],
      tools: ['Visual Studio', 'IntelliJ IDEA', 'GitLab CI/CD', 'Jenkins', 'SonarQube', 'New Relic'],
    },
    ourApproach: [
      {
        title: 'Requirements Engineering',
        description:
          'We conduct thorough requirements gathering and analysis to ensure our custom solutions precisely match your business needs and processes.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Our custom software solutions are built on scalable, modular architectures that can grow and adapt to changing business requirements over time.',
      },
      {
        title: 'Continuous Support',
        description:
          'We provide ongoing maintenance, support, and enhancement services to ensure your custom software continues to meet your evolving business needs.',
      },
    ],
  },
];

const e_commerceServices: Service[] = [
  {
    slug: 'product-hunting-sourcing',
    title: 'Product Hunting & Sourcing',
    imageSrc: '/images/services/product-hunting-sourcing.jpg',
    introSection: {
      title: 'Discover Your Next Best-Seller',
      description:
        'At Synnestra, we specialize in identifying profitable products and connecting you with reliable suppliers to elevate your e-commerce business. Our expert team conducts thorough market research to ensure you stay ahead of the competition.',
    },
    techStack: {
      frameworks: [],
      tools: ['Jungle Scout', 'Helium 10', 'Alibaba'],
    },
    ourApproach: [
      {
        title: 'Market Analysis',
        description: 'Conduct comprehensive research to identify trending products with high demand.',
      },
      {
        title: 'Supplier Vetting',
        description: 'Evaluate and connect with trustworthy suppliers to ensure product quality.',
      },
      {
        title: 'Negotiation & Procurement',
        description: 'Handle negotiations to secure the best terms and manage the procurement process.',
      },
    ],
  },
  {
    slug: 'listing-optimization',
    title: 'Listing Optimization',
    imageSrc: '/images/services/listing-optimization.jpg',
    introSection: {
      title: 'Maximize Your Product Visibility',
      description:
        'Synnestra enhances your product listings to improve visibility and boost sales. Our team integrates effective SEO strategies and compelling content to ensure your products stand out in the marketplace.',
    },
    techStack: {
      frameworks: [],
      tools: ['Keyword Tool', 'Canva', 'Adobe Photoshop'],
    },
    ourApproach: [
      {
        title: 'SEO Optimization',
        description: 'Integrate relevant keywords to improve search rankings.',
      },
      {
        title: 'Compelling Copywriting',
        description: 'Craft persuasive product descriptions that highlight key features and benefits.',
      },
      {
        title: 'Visual Enhancement',
        description: 'Design high-quality images and graphics to attract potential buyers.',
      },
    ],
  },
  {
    slug: 'private-label',
    title: 'Private Label',
    imageSrc: '/images/services/private-label.jpg',
    introSection: {
      title: 'Build Your Unique Brand Identity',
      description:
        'With Synnestra’s Private Label services, create and launch your own branded products to establish a unique market presence. We assist in product development, branding strategy, and quality assurance to reflect your brand identity.',
    },
    techStack: {
      frameworks: [],
      tools: ['Brand Registry', 'Packaging Design Software'],
    },
    ourApproach: [
      {
        title: 'Product Development',
        description: 'Collaborate to design and develop products that reflect your brand identity.',
      },
      {
        title: 'Branding Strategy',
        description: 'Formulate a comprehensive branding strategy, including logo and packaging design.',
      },
      {
        title: 'Quality Assurance',
        description: 'Implement strict quality control measures to maintain product standards.',
      },
    ],
  },
  {
    slug: 'wholesaling',
    title: 'Wholesaling',
    imageSrc: '/images/services/wholesaling.jpg',
    introSection: {
      title: 'Scale with Bulk Purchasing Power',
      description:
        'Synnestra’s Wholesaling services enable you to purchase products in bulk, benefiting from wholesale pricing and expanding your inventory. We manage bulk procurement, inventory, and distribution planning to help scale your business.',
    },
    techStack: {
      frameworks: [],
      tools: ['Inventory Management Systems', 'Bulk Order Platforms'],
    },
    ourApproach: [
      {
        title: 'Bulk Procurement',
        description: 'Source and purchase large quantities of high-demand products.',
      },
      {
        title: 'Inventory Management',
        description: 'Efficiently manage and track inventory levels to prevent stockouts.',
      },
      {
        title: 'Distribution Planning',
        description: 'Develop strategies for distributing products across various sales channels.',
      },
    ],
  },
  {
    slug: 'dropshipping',
    title: 'Dropshipping',
    imageSrc: '/images/services/dropshipping.jpg',
    introSection: {
      title: 'Launch Without Inventory Hassles',
      description:
        'Start an online store without the hassle of inventory management through Synnestra’s Dropshipping services. We connect you with reliable suppliers and automate order processing to streamline your operations.',
    },
    techStack: {
      frameworks: [],
      tools: ['Oberlo', 'DSers', 'Shopify'],
    },
    ourApproach: [
      {
        title: 'Supplier Integration',
        description: 'Connect with reliable dropshipping suppliers to offer a wide range of products.',
      },
      {
        title: 'Automated Order Processing',
        description: 'Set up systems to automate order placement and fulfillment.',
      },
      {
        title: 'Customer Service Management',
        description: 'Provide support to handle customer inquiries and returns efficiently.',
      },
    ],
  },
  {
    slug: 'amazon-shopify',
    title: 'Amazon & Shopify',
    imageSrc: '/images/services/amazon-shopify.jpg',
    introSection: {
      title: 'Dominate Leading E-Commerce Platforms',
      description:
        'Synnestra helps you launch and optimize your online store on leading e-commerce platforms like Amazon and Shopify. Our experts handle store setup, platform optimization, and marketing strategies to drive traffic and increase sales.',
    },
    techStack: {
      frameworks: [],
      tools: ['Amazon Seller Central', 'Shopify Admin', 'Google Analytics'],
    },
    ourApproach: [
      {
        title: 'Store Setup',
        description: 'Create and configure your online store tailored to your brand.',
      },
      {
        title: 'Platform Optimization',
        description: 'Optimize store settings and listings to enhance performance and user experience.',
      },
      {
        title: 'Marketing Strategies',
        description: 'Develop and implement marketing campaigns to drive traffic and increase sales.',
      },
    ],
  },
];

export const solutions: Solution[] = [
  {
    title: 'Web Development',
    description: ITServices.find((service) => service.slug === 'web-development')?.introSection.description || '',
    icon: '/icons/mdi_web-asset.svg',
    link: '/services/web-development',
  },
  {
    title: 'Mobile Development',
    description: ITServices.find((service) => service.slug === 'mobile-development')?.introSection.description || '',
    icon: '/icons/healthicons_mobile.svg',
    link: '/services/mobile-development',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description:
      ITServices.find((service) => service.slug === 'artificial-intelligence-ml')?.introSection.description || '',
    icon: '/icons/hugeicons_ai-security-01.svg',
    link: '/services/artificial-intelligence-ml',
  },
  {
    title: 'Blockchain Technology',
    description: ITServices.find((service) => service.slug === 'blockchain-technology')?.introSection.description || '',
    icon: '/icons/blockchain.svg',
    link: '/services/blockchain-technology',
  },
  {
    title: 'DevOps & Cloud Computing',
    description:
      ITServices.find((service) => service.slug === 'devops-cloud-computing')?.introSection.description || '',
    icon: '/icons/carbon_cloud-services.svg',
    link: '/services/devops-cloud-computing',
  },
  {
    title: 'Amazon & Shopify',
    description:
      e_commerceServices.find((service) => service.slug === 'amazon-shopify')?.introSection.description || '',
    icon: '/icons/fluent_people-team-24-regular.svg',
    link: '/services/amazon-shopify',
  },
];

export const industries = [
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

const corporateComplianceServices: Service[] = [
  {
    slug: 'llc-ltd-formation',
    title: 'LLC & LTD Formation',
    imageSrc: '/images/services/llc-ltd-formation.jpg',
    introSection: {
      title: 'Start Your Business Journey Right',
      description:
        'Our comprehensive business formation services guide you through establishing your LLC or LTD. We handle all necessary paperwork, compliance requirements, and state filings to ensure your business starts on solid legal ground.',
    },
    techStack: {
      frameworks: ['DocuSign', 'Adobe Sign', 'LegalZoom API'],
      tools: ['State Filing Systems', 'Legal Document Management', 'Business Formation Software'],
    },
    ourApproach: [
      {
        title: 'Entity Selection',
        description: 'Guide you through choosing the right business structure based on your needs and goals.',
      },
      {
        title: 'Document Preparation',
        description: 'Prepare and file all necessary formation documents with state authorities.',
      },
      {
        title: 'Compliance Setup',
        description: 'Establish initial compliance procedures and requirements for your new business.',
      },
    ],
  },
  {
    slug: 'registered-agent',
    title: 'Registered Agent Services',
    imageSrc: '/images/services/registered-agent.jpg',
    introSection: {
      title: 'Professional Representation for Your Business',
      description:
        'Maintain your business compliance with our registered agent services. We receive and manage legal documents, state correspondence, and official notices while maintaining your privacy and ensuring timely responses.',
    },
    techStack: {
      frameworks: ['CT Corporation API', 'InCorp API', 'CSC Platform'],
      tools: ['Document Management System', 'Compliance Calendar', 'Secure Communication Platform'],
    },
    ourApproach: [
      {
        title: 'Document Reception',
        description: 'Receive and process all official correspondence and legal documents.',
      },
      {
        title: 'Compliance Monitoring',
        description: 'Track and alert you of important deadlines and filing requirements.',
      },
      {
        title: 'Secure Documentation',
        description: 'Maintain secure records of all received documents and communications.',
      },
    ],
  },
  {
    slug: 'sales-tax',
    title: 'Sales Tax Filing and Registration',
    imageSrc: '/images/services/sales-tax.jpg',
    introSection: {
      title: 'Streamline Your Tax Compliance',
      description:
        'Navigate complex sales tax requirements with our comprehensive registration and filing services. We ensure accurate compliance across multiple jurisdictions while keeping your business tax-efficient.',
    },
    techStack: {
      frameworks: ['Avalara', 'TaxJar', 'Vertex'],
      tools: ['Tax Filing Software', 'Multi-State Compliance Tools', 'Tax Rate Calculator'],
    },
    ourApproach: [
      {
        title: 'Registration Process',
        description: 'Handle sales tax registration in all required jurisdictions.',
      },
      {
        title: 'Tax Calculation',
        description: 'Implement accurate tax calculation systems for your business operations.',
      },
      {
        title: 'Filing Management',
        description: 'Manage regular filing requirements and maintain compliance records.',
      },
    ],
  },
  {
    slug: 'virtual-services',
    title: 'Virtual Address/Number Services',
    imageSrc: '/images/services/virtual-services.jpg',
    introSection: {
      title: 'Professional Business Presence',
      description:
        'Establish a professional business presence with our virtual address and phone services. Maintain privacy while ensuring reliable communication channels for your business operations.',
    },
    techStack: {
      frameworks: ['Earth Class Mail API', 'Twilio', 'VirtualPostMail'],
      tools: ['Virtual Mail Management', 'Call Forwarding Systems', 'Digital Mail Processing'],
    },
    ourApproach: [
      {
        title: 'Address Setup',
        description: 'Establish a professional business address with mail handling services.',
      },
      {
        title: 'Communication Management',
        description: 'Set up and manage virtual phone systems with professional handling.',
      },
      {
        title: 'Mail Processing',
        description: 'Process and forward important correspondence to your preferred location.',
      },
    ],
  },
  {
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    imageSrc: '/images/services/trademark-registration.jpg',
    introSection: {
      title: 'Protect Your Brand Identity',
      description:
        'Secure your business brand with our comprehensive trademark registration services. We handle the entire process from search to registration, ensuring your intellectual property is protected.',
    },
    techStack: {
      frameworks: ['USPTO API', 'TMview API', 'CompuMark'],
      tools: ['Trademark Database', 'Search Tools', 'USPTO Filing System'],
    },
    ourApproach: [
      {
        title: 'Trademark Search',
        description: 'Conduct comprehensive searches to ensure trademark availability.',
      },
      {
        title: 'Application Filing',
        description: 'Prepare and submit trademark applications with required documentation.',
      },
      {
        title: 'Registration Monitoring',
        description: 'Monitor the registration process and respond to office actions.',
      },
    ],
  },
  {
    slug: 'ein-itin-services',
    title: 'EIN, ITIN Services',
    imageSrc: '/images/services/ein-itin-services.jpg',
    introSection: {
      title: 'Essential Tax ID Solutions',
      description:
        'Obtain necessary tax identification numbers for your business and personnel. We streamline the application process for EIN and ITIN, ensuring compliance with IRS requirements.',
    },
    techStack: {
      frameworks: ['IRS e-File API', 'ID.me', 'Login.gov'],
      tools: ['IRS Filing Systems', 'Document Verification Tools', 'Application Tracking Software'],
    },
    ourApproach: [
      {
        title: 'Application Preparation',
        description: 'Prepare accurate applications for EIN or ITIN based on your needs.',
      },
      {
        title: 'Document Verification',
        description: 'Review and verify all required supporting documentation.',
      },
      {
        title: 'Status Monitoring',
        description: 'Track application status and ensure successful processing.',
      },
    ],
  },
  {
    slug: 'confirmation-statements',
    title: 'Confirmation & Accounts Statement',
    imageSrc: '/images/services/confirmation-statements.jpg',
    introSection: {
      title: 'Maintain Your Company Records',
      description:
        'Keep your business compliant with timely confirmation statement filings and account management. We ensure accurate reporting of company information and financial statements.',
    },
    techStack: {
      frameworks: ['Companies House API', 'Xero API', 'QuickBooks API'],
      tools: ['Financial Reporting Software', 'Companies House Filing System', 'Document Management'],
    },
    ourApproach: [
      {
        title: 'Information Review',
        description: 'Review and verify company information for accuracy and completeness.',
      },
      {
        title: 'Statement Preparation',
        description: 'Prepare required statements and documentation for filing.',
      },
      {
        title: 'Compliance Filing',
        description: 'Submit filings and maintain records of compliance requirements.',
      },
    ],
  },
  {
    slug: 'bank-creation',
    title: 'Bank Creation Services',
    imageSrc: '/images/services/bank-creation.jpg',
    introSection: {
      title: 'Establish Your Business Banking',
      description:
        'Streamline your business banking setup with our comprehensive account creation services. We assist in selecting the right bank, preparing documentation, and establishing your business financial presence.',
    },
    techStack: {
      frameworks: ['Plaid', 'Stripe Connect', 'Mercury API'],
      tools: ['Banking Documentation Systems', 'Identity Verification Tools', 'Account Management Software'],
    },
    ourApproach: [
      {
        title: 'Bank Selection',
        description: 'Guide you through choosing the right banking partner for your business needs.',
      },
      {
        title: 'Documentation Support',
        description: 'Prepare and organize required documentation for account opening.',
      },
      {
        title: 'Account Setup',
        description: 'Facilitate the account opening process and initial banking setup.',
      },
    ],
  },
];

export const servicesProvided = [...ITServices, ...e_commerceServices, ...corporateComplianceServices];

export const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    subitems: [
      {
        name: 'IT Solutions',
        items: ITServices.map((service) => ({
          name: service.title,
          href: `/services/${service.slug}`,
        })),
      },
      {
        name: 'E Commerce',
        items: e_commerceServices.map((service) => ({
          name: service.title,
          href: `/services/${service.slug}`,
        })),
      },
      {
        name: 'Corporate Compliance',
        items: corporateComplianceServices.map((service) => ({
          name: service.title,
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
