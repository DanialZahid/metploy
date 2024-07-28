import { Logo } from './Logo';
import { NavCTA } from '../Navigation/NavigationCTA';
import { NavigationDesktop } from '../Navigation/NavigationDesktop';

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
    <header className='flex items-center justify-between gap-4'>
      <Logo />

      <NavigationDesktop items={navItems} />

      <NavCTA items={navCtas} />
    </header>
  );
}
