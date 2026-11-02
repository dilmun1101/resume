import styles from './project-list.module.scss';
import { projects } from '@/data/projects';
import Card from '../Card/Card';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface Props {
  className?: string;
}

function ProjectList({ className }: Props) {
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage === 'ru' ? 'ru' : 'en';

  return (
    <div className={classNames(styles.container, className)}>
      {projects.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          image={item['image-path']}
          alt={item.name}
          githubURL={item.githubURL.url}
          deployURL={item.deployURL[language] ?? item.deployURL.en}
        />
      ))}
    </div>
  );
}

export default ProjectList;
