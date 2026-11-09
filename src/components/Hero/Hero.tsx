import classNames from 'classnames';
import styles from './hero.module.scss';
import HeroInfo from './components/HeroInfo/HeroInfo';

interface Props {
  className?: string;
}

function Hero({ className }: Props) {
  return (
    <div className={classNames(styles.container, className)}>
      <HeroInfo />
    </div>
  );
}

export default Hero;
