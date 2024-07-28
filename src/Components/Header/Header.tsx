import { NavigationButtons } from '../Navigation/NavigationButtons';
import { NavigationDesktop } from '../Navigation/NavigationDesktop';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className='m-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-8'>
      <Logo />

      <NavigationDesktop />

      <NavigationButtons />
    </header>
  );
}
