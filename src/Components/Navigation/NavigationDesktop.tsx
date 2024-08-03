import { MotionLink } from '../General';

interface NavigationLinksProps {
  name: string;
  link: string;
}

interface NavigationDesktopProps {
  links: NavigationLinksProps[];
  section?: string;
}

export default function NavigationDesktop({
  section,
  links,
}: NavigationDesktopProps) {
  const item = links.map((item) => (
    <li key={item.name}>
      <MotionLink to={item.link} text={item.name} />
    </li>
  ));

  return (
    <nav>
      <ul
        className={
          section === 'header'
            ? 'flex items-center gap-10 font-medium'
            : 'grid gap-5 text-sm'.trim()
        }
      >
        {item}
      </ul>
    </nav>
  );
}
