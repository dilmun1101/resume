import type { Project } from '@/data/projects';
import FilterProjects from './components/FilterProjects/FilterProjects';
import ProjectList from './components/ProjectList/ProjectList';
import { getTags } from '@/utils/getTags';
import { useState } from 'react';
import { ALL_TAGS } from '@/data/filters';
import classNames from 'classnames';
import styles from './projects-section.module.scss';

interface Props {
  projects: Project[];
  isFilterActive?: boolean;
  className?: string;
}

function ProjectsSection({
  projects,
  isFilterActive = false,
  className,
}: Props) {
  const [selectedTag, setSelectedTag] = useState(ALL_TAGS);
  const tags = getTags(projects);

  const visibleProjects =
    selectedTag === ALL_TAGS
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section className={classNames(styles.container, className)}>
      {isFilterActive && (
        <FilterProjects
          tags={tags}
          selectedTag={selectedTag}
          onSelect={setSelectedTag}
        />
      )}
      <ProjectList projects={visibleProjects} />
    </section>
  );
}

export default ProjectsSection;
