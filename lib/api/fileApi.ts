import fs from 'fs/promises';
import path from 'path';
import type { ProjectApiService } from './types';
import type { RawProject, Project, Language } from '@/types/project';
import { formatProject } from './formatters';

async function readProjectsFile(): Promise<RawProject[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileData);
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