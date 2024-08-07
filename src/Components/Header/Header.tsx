import { ButtonBlue, ButtonTransparent } from '../Buttons';
import NavigationDesktop from '../Navigation/NavigationDesktop';
import NavigationMobile from '../Navigation/NavigationMobile';
import Logo from '../Logo';
import { CommonLinks } from '../Navigation/CommonLinks';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 border-b-2 border-neutral-900 bg-neutral-950/80 shadow-md backdrop-blur-lg'>
      <div className='m-auto flex max-w-7xl justify-between gap-4 px-4 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center'>
        <Logo />

        <NavigationDesktop links={CommonLinks} isHeader />
        <NavigationMobile links={CommonLinks} />

        <div className='hidden gap-2 justify-self-end lg:flex'>
          <ButtonTransparent>Log In</ButtonTransparent>
          <ButtonBlue>Sign Up</ButtonBlue>
        </div>
      </div>
    </header>
  );
}
