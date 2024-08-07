import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonCommonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonIconProps extends ButtonCommonProps {
  icon: IconDefinition;
}

const baseClasses = `rounded-full px-6 md:px-10 py-3 transition-all font-medium`;
const btnIconClasses = `bg-transparent hover:bg-white/20`;

export function ButtonBlue({
  type = 'button',
  children,
  className,
  onClick,
}: ButtonCommonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} bg-blue-600 hover:bg-blue-700 ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  );
}

export function ButtonTransparent({
  type = 'button',
  children,
  className,
  onClick,
}: ButtonCommonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${btnIconClasses} ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  );
}

export function ButtonIcon({
  type = 'button',
  children,
  icon,
  className,
  onClick,
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${btnIconClasses} flex items-center gap-3 ${className ? className : ''}`.trim()}
    >
      <FontAwesomeIcon icon={icon} size='lg' />
      {children}
    </button>
  );
}
