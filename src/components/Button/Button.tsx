import classNames from 'classnames';
import styles from './button.module.scss';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  active?: boolean;
}

function Button({
  text,
  className,
  type = 'button',
  variant = 'primary',
  active = false,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        styles.button,
        styles[variant],
        active && styles.active,
        className
      )}
    >
      {text}
    </button>
  );
}

export default Button;
