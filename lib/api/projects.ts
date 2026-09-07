import { serverProjectApi } from './serverApi';
import { fileProjectApi } from './fileApi';

const isFileMode = process.env.USE_FILE_DATA === 'true';

const currentApi = isFileMode ? fileProjectApi : serverProjectApi;

export const fetchProjectById = currentApi.fetchProjectById;