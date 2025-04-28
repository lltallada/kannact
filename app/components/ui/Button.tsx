import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const DEFAULT_BUTTON_STYLES = 'px-4 py-1 rounded-lg cursor-pointer';

const BUTTON_TYPE_STYLES = {
  default: 'bg-primary text-white hover:bg-primary500 hover:text-white',
  delete: 'bg-red-500 text-white hover:bg-red-600 hover:text-white',
  edit: 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white',
};

const Button = ({
  href,
  style = 'default',
  type,
  className = '',
  onClick,
  children,
}: {
  href?: string | undefined;
  style?: 'default' | 'delete' | 'edit';
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const ButtonElement = href ? 'a' : 'button';

  return (
    <ButtonElement
      {...(href && { href })}
      {...(type && { type })}
      {...(onClick && { onClick })}
      className={twMerge(
        `${BUTTON_TYPE_STYLES[style]} ${DEFAULT_BUTTON_STYLES} ${className}`
      )}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
