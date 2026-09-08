import type { ProjectApiService } from './types';

const isFileMode = process.env.USE_FILE_DATA === 'true';

export const fetchProjectById: ProjectApiService['fetchProjectById'] = async (id, lang) => {
  if (isFileMode) {
    const { fileProjectApi } = await import('./fileApi');
    return fileProjectApi.fetchProjectById(id, lang);
  }

  const { serverProjectApi } = await import('./serverApi');
  return serverProjectApi.fetchProjectById(id, lang);
};