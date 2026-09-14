'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/app/components/ui/Modal/Modal';
import type { Language } from '@/types/project';
import css from '@/components/ProjectCard/ProjectCard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchProjectById } from '@/lib/api/projects';
import { Loader } from '@/app/components/ui/Loader';
import { Dictionary } from '@/lib/i18n/getDictionary';
import ProjectDetails from '@/app/components/projects/ProjectDetails/ProjectDetails';

interface Props {
  id: string;
  lang: Language;
  dict: Dictionary;
}

export default function ProjectPreviewClient({ id, lang, dict }: Props) {
  const router = useRouter();

  const {
    data: project,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['project', id, lang],
    queryFn: () => fetchProjectById(id, lang),
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5,
  });

  const handleClose = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/projects');
    }
  };

  if (isLoading) {
    return (
      <Modal onClose={handleClose}>
        <Loader />
      </Modal>
    );
  }

  if (isError || !project) {
    return (
      <Modal onClose={handleClose}>
        <div className={css.container}>
          <p>{dict.projects.modalError}</p>
          <button className={css.backBtn} onClick={handleClose}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={handleClose}>
          Close
        </button>

        <ProjectDetails project={project} dict={dict} isModal={true} />
      </div>
    </Modal>
  );
}
