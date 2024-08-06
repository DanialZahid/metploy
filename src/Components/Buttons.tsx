import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonCommonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonIconProps extends ButtonCommonProps {
  icon: IconDefinition;
}

const baseClasses = `rounded-full px-10 py-3 transition-all font-medium`;
const btnIconClasses = `bg-transparent hover:bg-white/20`;

export function ButtonBlue({
  children,
  className,
  onClick,
}: ButtonCommonProps) {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`${baseClasses} bg-blue-600 hover:bg-blue-700 ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  );
}

export function ButtonTransparent({
  children,
  className,
  onClick,
}: ButtonCommonProps) {
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${btnIconClasses} ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  );
}

export function ButtonIcon({
  children,
  icon,
  className,
  onClick,
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`${baseClasses} ${btnIconClasses} flex items-center gap-3 ${className ? className : ''}`.trim()}
    >
      <FontAwesomeIcon icon={icon} size='lg' />
      {children}
    </button>
  );
}
