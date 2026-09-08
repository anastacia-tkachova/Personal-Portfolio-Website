import fs from 'fs/promises';
import path from 'path';
import type { ProjectApiService } from './types';
import type { RawProject, Project, Language } from '@/types/project';
import { formatProject } from './formatters';

let cachedProjects: RawProject[] | null = null;

async function readProjectsFile(): Promise<RawProject[]> {
  if (cachedProjects) {
    return cachedProjects;
  }

  const filePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  cachedProjects = JSON.parse(fileData);
  return cachedProjects!;
}

export const fileProjectApi: ProjectApiService = {
  async fetchProjectById(id: string, lang: Language = 'en'): Promise<Project> {
    const projects = await readProjectsFile();
    const rawProject = projects.find((p) => p.id === id);

    if (!rawProject) {
      throw new Error(`Project with id ${id} not found`);
    }

    return formatProject(rawProject, lang);
  },
};