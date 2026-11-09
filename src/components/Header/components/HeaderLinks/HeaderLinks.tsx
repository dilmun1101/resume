import MenuLink from '@/components/MenuLink/MenuLink';
import { paths } from '@/router/paths';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './header-links.module.scss';

const menuLinks = [
  { name: 'projects', to: paths.projects },
  { name: 'cv', to: paths.cv },
];

interface Props {
  className?: string;
}

function HeaderLinks({ className }: Props) {
  const { t } = useTranslation();

  return (
    <nav className={classNames(styles.container, className)}>
      <ul className={styles.list}>
        {menuLinks.map(({ name, to }) => (
          <li key={name} className={styles.item}>
            <MenuLink to={to} text={t(`header.${name}`)} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderLinks;
