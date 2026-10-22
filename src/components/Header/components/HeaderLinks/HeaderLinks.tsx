import MenuLink from '@/components/MenuLink/MenuLink';
import { paths } from '@/router/paths';

const menuLinks = [
  { name: 'projects', to: paths.projects },
  { name: 'cv', to: paths.cv },
];

function HeaderLinks() {
  return (
    <nav>
      <ul>
        {menuLinks.map(({ name, to }) => (
          <li key={name}>
            <MenuLink to={to} text={name} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderLinks;
