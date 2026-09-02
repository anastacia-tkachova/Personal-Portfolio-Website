export default interface Project {
  id: string;
  title: {
    en: string;
    ua: string;
  };
  description: {
    en: string;
    ua: string;
  };
  article: {
    en: string;
    ua: string;
  };
  tags: string[];
  image: string;
  demo: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}
