import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './card.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  id: string;
  name: string;
  githubURL: string;
  deployURL: string;
  image?: string;
  alt?: string;
  className?: string;
}

function Card({
  id,
  name,
  className,
  image,
  githubURL,
  deployURL,
  alt,
}: Props) {
  const { t } = useTranslation();

  return (
    <div id={id} className={classNames(styles.container, className)}>
      <h3>{name}</h3>
      <img className={styles.image} src={image} alt={alt} />
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href={githubURL}>
            {t('card.github')}
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href={deployURL}>
            {t('card.liveDemo')}
          </a>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to={`/projects/${id}`}>
            {t('card.description')}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Card;
