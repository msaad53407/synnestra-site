import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Company = {
  title: string;
  thumbnail: string;
};

export type Perk = {
  title: string;
  description: string;
  image: string;
};

export type ProjectShowcase = {
  id: string;
  name: string;
  description: string;
  color: string;
  textColor: string;
  headingColor: string;
  image: string;
};

export type Solution = {
  title: string;
  description: string;
  icon: string;
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
  slug: string;
  imageSrc: string;
  benefits: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
  }[];
  offers: {
    mainHeading: string;
    subtitle: string;
    offerings: {
      title: string;
      description: string;
    }[];
  };
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
