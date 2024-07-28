const navItems = [
  {
    name: 'Home',
    link: '/#hero',
  },

  {
    name: 'Clients',
    link: '/#clients',
  },

  {
    name: 'Product',
    link: '/#product',
  },

  {
    name: 'Company',
    link: '/#company',
  },

  {
    name: 'Contact Us',
    link: '/#contact-us',
  },
];

export function NavigationDesktop() {
  const item = navItems.map((item) => (
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
      <ul className='flex items-center gap-10 font-semibold'>{item}</ul>
    </nav>
  );
}
