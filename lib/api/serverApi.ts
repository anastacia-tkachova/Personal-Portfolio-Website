import { api } from './api';
import { cookies } from 'next/headers';
import type { ProjectApiService } from './types';
import type { Project, Language } from '@/types/project';

export const serverProjectApi: ProjectApiService = {
  async fetchProjectById(id: string, lang: Language = 'en'): Promise<Project> {
    const cookieStore = await cookies();

    const response = await api.get<Project>(`/projects/${id}`, {
      params: { lang },
      headers: {
        Cookie: cookieStore.toString(),
        'Accept-Language': lang,
      },
    });

    return response.data;
  },
};