import classNames from 'classnames';
import styles from './button.module.scss';
import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ text, className, type = 'button', ...rest }: Props) {
  return (
    <button
      {...rest}
      type={type}
      className={classNames(styles.button, className)}
    >
      {text}
    </button>
  );
}

export default Button;
