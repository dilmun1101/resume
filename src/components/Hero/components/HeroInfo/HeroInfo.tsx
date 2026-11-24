import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './hero-info.module.scss';

interface Props {
  className?: string;
}

function HeroInfo({ className }: Props) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.container, className)}>
      <h1 className={styles.title}>{t('hero.title')}</h1>
      <p className={styles.description}>{t('hero.description')}</p>
    </div>
  );
}

export default HeroInfo;
