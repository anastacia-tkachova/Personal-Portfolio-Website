import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchProjectById } from '@/lib/api/projects.js';
import ProjectPreviewClient from './ProjectPreview.client.tsx';
import { notFound } from 'next/navigation';
import { getCurrentLang } from '@/lib/i18n/server.js';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectModalPage({ params }: Props) {
  const { id } = await params;
  const lang = await getCurrentLang();

  if (!id) {
    notFound();
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['project', id, lang],
    queryFn: () => fetchProjectById(id, lang),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectPreviewClient />
    </HydrationBoundary>
  );
}
