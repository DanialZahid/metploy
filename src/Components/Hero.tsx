import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonBlue, ButtonIcon } from './Buttons';

export default function Hero() {
  return (
    <section className='grid gap-16 text-center' id='hero'>
      <div className='grid gap-10'>
        <h1 className='text-6xl font-bold'>
          Increase Productivity with
          <br />
          Advanced HR Management
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Ratione iste minima vel eveniet corrupti fuga deserunt totam atque
          voluptatibus
        </p>

        <div className='flex flex-wrap items-center justify-center gap-2'>
          <ButtonBlue content='Get Started for Free' />
          <ButtonIcon content='See Video' icon={faPlayCircle} />
        </div>
      </div>

      <img
        className='justify-self-center shadow-2xl shadow-blue-600/40'
        width={900}
        src='/assets/img/hero.jpg'
        alt=''
        loading='lazy'
        decoding='async'
      />
    </section>
  );
}
