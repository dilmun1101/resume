import MenuLink from '@/components/MenuLink/MenuLink';
import { paths } from '@/router/paths';
import { useTranslation } from 'react-i18next';

const menuLinks = [
  { name: 'projects', to: paths.projects },
  { name: 'cv', to: paths.cv },
];

function HeaderLinks() {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        {menuLinks.map(({ name, to }) => (
          <li key={name}>
            <MenuLink to={to} text={t(`header.${name}`)} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderLinks;
