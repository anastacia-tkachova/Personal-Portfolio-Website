import type { Project, Language } from '@/types/project';

export interface ProjectApiService {
  fetchProjectById: (id: string, lang?: Language) => Promise<Project>;
}