export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Company = {
  title: string;
  thumbnail: string;
};

export type Office = {
  id: string;
  name: string;
  embedUrl: string;
};

export type Perk = {
  title: string;
  description: string;
  image: string;
};

export type ProjectShowcase = {
  name: string;
  description: string;
  color: string;
  textColor: string;
  headingColor: string;
  image: string;
  link: string;
};

export type Solution = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export type Review = {
  name: string;
  avatar: string;
  role: string;
  review: string;
};

export type TechnologyCard = {
  name: string;
  imageSrc: string;
};

export type Project = {
  slug: string;
  title: string;
  link?: string;
  thumbnail: string;
  description: string;
  features: string[];
  technologies: TechnologyCard[];
  type: 'web' | 'mobile';
  images: {
    src: string;
    alt: string;
  }[];
};

export type ProjectCatalog = {
  websites: Project[];
  mobileApps: Project[];
};

export type Service = {
  title: string;
  slug: string;
  imageSrc: string;
  introSection: {
    title: string;
    description: string;
  };
  techStack: {
    frameworks: string[];
    tools: string[];
  };
  ourApproach: {
    title: string;
    description: string;
  }[];
};

export type ArticlePreview = {
  slug: string;
  title: string;
  thumbnail: string;
};

export type Industry = Prettify<
  Omit<Service, 'benefits'> & {
    bannerImage: string;
    relatedArticles: ArticlePreview[];
  }
>;
