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
