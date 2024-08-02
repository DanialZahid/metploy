import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonCommonProps {
  content: string;
}

interface ButtonIconProps extends ButtonCommonProps {
  icon: IconDefinition;
}

const baseClasses = `rounded-full px-10 py-3 transition-all`;
const btnIconClasses = `bg-transparent hover:bg-white/20`;

export function ButtonBlue({ content }: ButtonCommonProps) {
  return (
    <button
      title={content}
      type='button'
      className={`${baseClasses} bg-blue-600 hover:bg-blue-700`}
    >
      {content}
    </button>
  );
}

export function ButtonTransparent({ content }: ButtonCommonProps) {
  return (
    <button title={content} className={`${baseClasses} ${btnIconClasses}`}>
      {content}
    </button>
  );
}

export function ButtonIcon({ content, icon }: ButtonIconProps) {
  return (
    <button
      title={content}
      type='button'
      className={`${baseClasses} ${btnIconClasses} flex items-center gap-3`}
    >
      <FontAwesomeIcon icon={icon} size='lg' />
      {content}
    </button>
  );
}
