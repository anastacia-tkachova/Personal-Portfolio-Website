import 'server-only';
import type { Language } from '@/types/project';

import type enDict from '@/data/dictionaries/en.json';

export type Dictionary = typeof enDict;

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
  ua: () => import('@/data/dictionaries/ua.json').then((module) => module.default),
  en: () => import('@/data/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (lang: Language): Promise<Dictionary> => { 
  return dictionaries[lang] ? dictionaries[lang]() : dictionaries.en();
};
