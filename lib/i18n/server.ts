import { cookies } from 'next/headers';
import type { Language } from '@/types/project';

export async function getCurrentLang(): Promise<Language> {
  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value;

  return lang === 'ua' ? 'ua' : 'en';
}