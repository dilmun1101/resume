import styles from './about-me-section.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface Props {
  className?: string;
}

function AboutMeSection({ className }: Props) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.text}>{t('about-me')}</p>
    </div>
  );
}

export default AboutMeSection;
