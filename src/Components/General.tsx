import { motion } from 'framer-motion';

interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

interface LinkProps {
  to: string;
  text: string;
  title?: string;
  isExternal?: boolean;
}

interface PlaceholderVideoProps {
  hasShadow: boolean;
}

interface InputProps {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'color';
  name?: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  isTextArea?: boolean;
}

export function TextBlock({ children, className }: TextBlockProps) {
  return (
    <div className={`grid gap-10 ${className ?? ''}`.trim()}>{children}</div>
  );
}

export function MotionLink({ to, text, title, isExternal }: LinkProps) {
  return (
    <motion.a
      href={to}
      title={title ?? text}
      initial={{
        textDecoration: 'none #3b82f6',
        textUnderlineOffset: 0,
      }}
      whileHover={{
        textDecoration: 'underline #3b82f6',
        textUnderlineOffset: '8px',
      }}
      transition={{ duration: 0.1 }}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {text}
    </motion.a>
  );
}

export function PlaceholderVideo({ hasShadow }: PlaceholderVideoProps) {
  return (
    <iframe
      loading='lazy'
      className={`rounded-xl ${hasShadow ? 'shadow-2xl shadow-blue-600/40' : ''}`.trim()}
      width='100%'
      height='500'
      src='https://www.youtube-nocookie.com/embed/LXb3EKWsInQ'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      title='YouTube Video'
      allowFullScreen
    ></iframe>
  );
}

export function Input({
  type,
  name,
  label,
  isRequired = true,
  placeholder,
  isTextArea = false,
}: InputProps) {
  const commonProps = {
    type: type,
    name: name,
    required: isRequired,
    placeholder: placeholder,
    className:
      'grid rounded-lg bg-neutral-800 px-5 py-3 outline-none ring-blue-600 placeholder:text-sm placeholder:text-gray-200 focus:ring-1 w-full',
  };

  return (
    <label className={label ? 'grid gap-2' : undefined}>
      {label && <span>{label}</span>}
      {isTextArea ? (
        <textarea {...commonProps} />
      ) : (
        <input {...commonProps} autoComplete='on' />
      )}
    </label>
  );
}
