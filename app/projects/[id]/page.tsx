import { notFound } from 'next/navigation';
import { getCurrentLang } from '@/lib/i18n/server';
import { serverProjectApi } from '@/lib/api/serverApi';
import { getDictionary } from '@/lib/i18n/getDictionary';
import css from '@/app/components/projects/ProjectCard/ProjectCard.module.css';
import ProjectDetails from '@/app/components/projects/ProjectDetails/ProjectDetails';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const lang = await getCurrentLang();
  const project = await serverProjectApi.fetchProjectById(id, lang);

  return {
    title: project?.title ?? 'Project Details',
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  if (!id) notFound();

  const lang = await getCurrentLang();
  const [dict, project] = await Promise.all([
    getDictionary(lang),
    serverProjectApi.fetchProjectById(id, lang),
  ]);

  if (!project) notFound();

  return (
    <main className={css.main} suppressHydrationWarning>
      <ProjectDetails project={project} dict={dict} isModal={false} />
    </main>
  );
}
