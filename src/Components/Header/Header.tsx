import { ButtonBlue, ButtonTransparent } from '../Buttons';

import NavigationDesktop from '../Navigation/NavigationDesktop';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='m-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-8'>
      <Logo />

      <NavigationDesktop />

      <div className='flex gap-2 justify-self-end'>
        <ButtonTransparent content='Sign Up' />
        <ButtonBlue content='Log In' />
      </div>
    </header>
  );
}
