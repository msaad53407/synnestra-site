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
  link: string;
  thumbnail: string;
};
