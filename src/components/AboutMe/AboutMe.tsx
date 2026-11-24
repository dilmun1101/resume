import styles from './about-me.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useReveal } from '@/utils/hooks/useReveal';

interface AboutItem {
  id: string;
  type: string;
  text: string;
}

interface Props {
  className?: string;
}

function AboutLine({ type, text }: AboutItem) {
  const { ref, isVisible } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={classNames(styles.text, isVisible && styles.visible)}
    >
      <span className={styles.type}>{type}:</span> {text}
    </li>
  );
}

function AboutMe({ className }: Props) {
  const { t } = useTranslation();

  const items = t('aboutMe.items', { returnObjects: true }) as AboutItem[];

  return (
    <ul className={classNames(styles.list, className)}>
      {items.map((item) => (
        <AboutLine key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default AboutMe;
