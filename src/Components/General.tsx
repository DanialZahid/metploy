interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function TextBlock({ children, className }: TextBlockProps) {
  return (
    <div className={`grid gap-10 ${className ?? ''}`.trim()}>{children}</div>
  );
}
