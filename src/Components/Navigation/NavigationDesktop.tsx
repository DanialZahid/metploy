import { MotionLink } from '../General';

interface NavigationLinksProps {
  name: string;
  link: string;
}

interface NavigationDesktopProps {
  links: NavigationLinksProps[];
  isHeader?: boolean;
}

export default function NavigationDesktop({
  links,
  isHeader = false,
}: NavigationDesktopProps) {
  const item = links.map((item) => (
    <li key={item.name}>
      <MotionLink to={item.link}>{item.name}</MotionLink>
    </li>
  ));

  return (
    <nav>
      <ul
        className={
          isHeader
            ? 'flex items-center gap-10 font-medium'
            : 'grid gap-5 text-sm'.trim()
        }
      >
        {item}
      </ul>
    </nav>
  );
}
