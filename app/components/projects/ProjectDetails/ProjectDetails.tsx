'use client';

import { useEffect } from 'react';
import type { Project } from '@/types/project';
import ProjectCard from '@/app/components/projects/ProjectCard/ProjectCard';
import { Dictionary } from '@/lib/i18n/getDictionary';

interface Props {
  project: Project;
  dict: Dictionary;
  isModal?: boolean;
}

export default function ProjectDetails({
  project,
  dict,
  isModal = false,
}: Props) {
  useEffect(() => {
    if (!isModal) return;

    const originalTitle = document.title;
    if (project?.title) {
      document.title = project.title;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [project?.title, isModal]);

  return (
    <ProjectCard
      project={project}
      dict={dict}
      isModal={isModal}
      isList={false}
    />
  );
}
