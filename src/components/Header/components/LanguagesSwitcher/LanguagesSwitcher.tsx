import Button from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './languages-switcher.module.scss';
import classNames from 'classnames';
import { supportedLanguages } from '@/i18n/i18n';

interface Props {
  className?: string;
}

function LanguageSwitcher({ className }: Props) {
  const { i18n } = useTranslation();

  const switchLanguage = (language: string) =>
    void i18n.changeLanguage(language);

  return (
    <div className={classNames(styles.container, className)}>
      {supportedLanguages.map((language) => (
        <Button
          key={language}
          text={language}
          lang={language}
          onClick={() => switchLanguage(language)}
          variant="secondary"
          active={i18n.language === language}
        />
      ))}
    </div>
  );
}

export default LanguageSwitcher;
