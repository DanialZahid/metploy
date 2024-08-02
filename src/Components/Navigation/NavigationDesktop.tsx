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
      <a
        href={item.link}
        title={item.name}
        className='decoration-blue-500 hover:underline hover:underline-offset-8'
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul
        className={
          section === 'header'
            ? 'flex items-center gap-10 font-semibold'
            : 'grid gap-5 text-sm'.trim()
        }
      >
        {item}
      </ul>
    </nav>
  );
}
