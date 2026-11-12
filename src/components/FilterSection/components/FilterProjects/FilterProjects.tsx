import classNames from 'classnames';
import Button from '@/components/Button/Button';
import styles from './filter-projects.module.scss';
import { ALL_TAGS } from '@/data/filters';

interface Props {
  tags: string[];
  onSelect: (tag: string) => void;
  className?: string;
}

function ProjectsFilter({ tags, onSelect, className }: Props) {
  const options = [ALL_TAGS, ...tags];

  return (
    <div className={classNames(styles.container, className)}>
      {options.map((tag) => (
        <Button key={tag} text={tag} onClick={() => onSelect(tag)} />
      ))}
    </div>
  );
}

export default ProjectsFilter;
