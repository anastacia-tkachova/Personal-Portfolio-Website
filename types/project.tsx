export type Language = 'en' | 'ua';

export type LocalizedField = {
  en: string;
  ua: string;
};

export type LocalizedArticle = {
  en: {
    summary: string;
    featuresTitle: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  ua: {
    summary: string;
    featuresTitle: string;
    features: {
      title: string;
      description: string;
    }[];
  };
};

export interface RawProject {
  id: string;
  title: LocalizedField;
  description: LocalizedField;
  article: LocalizedArticle;
  tags: string[];
  image: string;
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
  demo: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};
