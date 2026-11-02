import HeaderLinks from './components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from './components/LangugesSwitcher/LangugesSwitcher';

function Header() {
  return (
    <header>
      <HeaderLinks />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
