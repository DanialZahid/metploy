import Logo from '../Header/Logo';

export default function Footer() {
  return (
    <footer className='border-t-2 border-neutral-900 bg-neutral-950'>
      <div className='m-auto max-w-screen-xl px-4 py-12'>
        <Logo />
      </div>
    </footer>
  );
}
