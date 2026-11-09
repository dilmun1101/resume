import classNames from 'classnames';
import HeaderLinks from './components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from './components/LanguagesSwitcher/LanguagesSwitcher';
import styles from './header.module.scss';

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  return (
    <div className={styles.container}>
      <header className={classNames(styles.header, className)}>
        <HeaderLinks />
        <LanguageSwitcher />
      </header>
    </div>
  );
}

export default Header;
