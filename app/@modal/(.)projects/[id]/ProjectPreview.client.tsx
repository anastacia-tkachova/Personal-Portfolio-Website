'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Modal from '@/components/ui/Modal/Modal';
import type { Language } from '@/types/project';
import css from '@/components/ProjectCard/ProjectCard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchProjectById } from '@/lib/api/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { Loader } from '@/components/ui/Loader';
import { Dictionary } from '@/lib/i18n/getDictionary';

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

  useEffect(() => {
    const originalTitle = document.title;
    if (project?.title) {
      document.title = project.title;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [project?.title]);

  const handleClose = () => {
    router.back();
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

        <ProjectCard project={project} isModal={true} isList={false} />
      </div>
    </Modal>
  );
}
