import type { RawProject, Project, Language } from '@/types/project';

export function formatProject(raw: RawProject, lang: Language = 'en'): Project {
  const currentLang = raw.title[lang] ? lang : 'en';

  return {
    ...raw,
    title: raw.title[currentLang] || '',
    description: raw.description[currentLang] || '',
    article: raw.article[currentLang] || '',
  };
}