import AboutMeSection from '@/components/AboutMe/AboutMe';
import Hero from '@/components/Hero/Hero';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import { projects } from '@/data/projects';
import classNames from 'classnames';
import styles from './project-page.module.scss';

interface Props {
  className?: string;
}

function ProjectPage({ className }: Props) {
  return (
    <div className={classNames(styles.container, className)}>
      <Hero />
      <AboutMeSection />
      <ProjectsSection projects={projects} isFilterActive />
    </div>
  );
}

export default ProjectPage;
