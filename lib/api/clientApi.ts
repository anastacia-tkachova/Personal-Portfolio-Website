import { api } from './api';
import type { ProjectApiService } from './types';
import type { Project, Language } from '@/types/project';

export const clientProjectApi: ProjectApiService = {
  async fetchProjectById(id: string, lang: Language = 'en'): Promise<Project> {
    const response = await api.get<Project>(`/projects/${id}`, {
      params: { lang },
      headers: {
        'Accept-Language': lang,
      },
    });

    return response.data;
  },

  async fetchAllProjects(lang: Language = 'en'): Promise<Project[]> {
    const response = await api.get<Project[]>('/projects', {
      params: { lang },
      headers: {
        'Accept-Language': lang,
      },
    });

    return response.data;
  },
};