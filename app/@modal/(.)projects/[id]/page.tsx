import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { getCurrentLang } from '@/lib/i18n/server';
import { clientProjectApi } from '@/lib/api/clientApi';
import ProjectPreviewClient from './ProjectPreview.client';
import { getDictionary } from '@/lib/i18n/getDictionary';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectModalPage({ params }: Props) {
  const { id } = await params;
  const lang = await getCurrentLang();
  const dict = await getDictionary(lang);

  if (!id) {
    notFound();
  }

  const queryClient = new QueryClient();

  const project = await queryClient.fetchQuery({
    queryKey: ['project', id, lang],
    queryFn: () => clientProjectApi.fetchProjectById(id, lang),
    staleTime: 1000 * 60 * 5,
  });

  if (!project) {
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectPreviewClient id={id} lang={lang} dict={dict} />
    </HydrationBoundary>
  );
}
