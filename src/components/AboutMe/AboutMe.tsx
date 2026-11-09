import styles from './about-me.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface AboutItem {
  type: string;
  text: string;
}

interface Props {
  className?: string;
}

function AboutMe({ className }: Props) {
  const { t } = useTranslation();

  const items = t('aboutMe.items', { returnObjects: true }) as AboutItem[];

  return (
    <ul className={classNames(styles.list, className)}>
      {items.map((item) => (
        <li key={item.text} className={styles.text}>
          <span className={styles.type}>{item.type}:</span> {item.text}
        </li>
      ))}
    </ul>
  );
}

export default AboutMe;
