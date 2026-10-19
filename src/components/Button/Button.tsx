import classNames from 'classnames';
import styles from './button.module.scss';

interface Props {
  text: string;
  className?: string;
}

function Button({ text, className }: Props) {
  return (
    <button className={classNames(styles.button, className)}>{text}</button>
  );
}

export default Button;
