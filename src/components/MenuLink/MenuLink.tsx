import {
  NavLink,
  type NavLinkProps,
  type NavLinkRenderProps,
} from 'react-router';
import styles from './menu-link.module.scss';
import classNames from 'classnames';

interface Props extends NavLinkProps {
  text: string;
  className?: string;
}

function MenuLink({ to, text, className, ...rest }: Props) {
  function getLinkClass({ isActive }: NavLinkRenderProps) {
    return classNames(styles.link, className, isActive && styles.active);
  }

  return (
    <NavLink {...rest} to={to} className={getLinkClass}>
      {text}
    </NavLink>
  );
}

export default MenuLink;
