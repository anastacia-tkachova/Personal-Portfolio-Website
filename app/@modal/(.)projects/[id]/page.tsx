import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { getCurrentLang } from '@/lib/i18n/server';
import { fetchProjectById } from '@/lib/api/projects';
import ProjectPreviewClient from './ProjectPreview.client';

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
      <ProjectPreviewClient id={id} lang={lang} />
    </HydrationBoundary>
  );
}
