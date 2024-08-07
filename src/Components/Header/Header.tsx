import { ButtonBlue, ButtonTransparent } from '../Buttons';

import NavigationDesktop from '../Navigation/NavigationDesktop';
import Logo from '../Logo';
import { CommonLinks } from '../Navigation/CommonLinks';
import NavigationMobile from '../Navigation/NavigationMobile';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 border-b-2 border-neutral-900 bg-neutral-950/80 shadow-md backdrop-blur-lg'>
      <div className='m-auto grid max-w-7xl items-center gap-4 px-4 py-4 lg:grid-cols-[1fr_auto_1fr]'>
        <Logo />

        <NavigationDesktop links={CommonLinks} isHeader />
        <NavigationMobile links={CommonLinks} />

        <div className='flex gap-2 justify-self-end'>
          <ButtonTransparent>Log In</ButtonTransparent>
          <ButtonBlue>Sign Up</ButtonBlue>
        </div>
      </div>
    </header>
  );
}
