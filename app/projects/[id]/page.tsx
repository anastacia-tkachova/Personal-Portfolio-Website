import { notFound } from 'next/navigation';
import { getCurrentLang } from '@/lib/i18n/server';
import { fetchProjectById } from '@/lib/api/projects';
import { getDictionary } from '@/lib/i18n/getDictionary';
import css from '@/components/ProjectCard/ProjectCard.module.css';
import ProjectDetails from '@/app/components/projects/ProjectDetails/ProjectDetails';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const lang = await getCurrentLang();
  const project = await fetchProjectById(id, lang);

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
    fetchProjectById(id, lang),
  ]);

  if (!project) notFound();

  return (
    <main className={css.main}>
      <ProjectDetails project={project} dict={dict} isModal={false} />
    </main>
  );
}
