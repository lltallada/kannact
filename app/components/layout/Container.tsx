import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({
  className = '',
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={twMerge(`w-full px-4 mx-auto max-w-xl ${className}`)}
      {...(id && { id })}
    >
      {children}
    </div>
  );
};

export default Container;
