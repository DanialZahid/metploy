import { Logo } from './Logo';
import { NavCta } from './NavCta';
import { NavDesktop } from './NavDesktop';

const navItems = [
  {
    name: 'Home',
    link: '/',
  },

  {
    name: 'About Us',
    link: '/#about-us',
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

const navCtas = [
  {
    name: 'Sign Up',
    link: '#',
  },

  {
    name: 'Log In',
    link: '#',
  },
];

export function Header() {
  return (
    <header className='m-auto max-w-screen-xl flex items-center justify-between gap-4 p-4'>
      <Logo />

      <NavDesktop items={navItems} />

      <NavCta items={navCtas} />
    </header>
  );
}
