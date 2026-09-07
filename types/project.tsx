export type Language = 'en' | 'ua';

export type LocalizedField = {
  en: string;
  ua: string;
};

export interface RawProject {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
  article: LocalizedField;
  tags: string[];
  image: string;
  imageAlt: LocalizedField;
  demo: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  article: string;
  tags: string[];
  image: string;
  imageAlt: string;
  demo: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};
