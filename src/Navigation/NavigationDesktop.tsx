interface Item {
  name: string;
  link: string;
}

interface NavigationDesktopProps {
  items: Item[];
}

export function NavigationDesktop({ items }: NavigationDesktopProps) {
  const item = items.map((item) => (
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
      <ul className='flex items-center gap-8 font-semibold'>{item}</ul>
    </nav>
  );
}
