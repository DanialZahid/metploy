import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Hero() {
  return (
    <section className='grid gap-16' id='hero'>
      <div className='grid gap-8'>
        <h1>
          Increase Productivity with
          <br />
          Advanced HR Management
        </h1>

        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste
          minima vel eveniet corrupti fuga deserunt totam atque voluptatibus
        </p>

        <div className='flex flex-wrap items-center justify-center gap-2'>
          <button>Get Started for Free</button>

          <button className='flex items-center gap-3 bg-transparent hover:bg-white/20'>
            <FontAwesomeIcon icon={faPlayCircle} size='lg' />
            See Video
          </button>
        </div>
      </div>

      <img
        className='justify-self-center'
        width={900}
        src='/assets/img/hero.jpg'
        alt=''
        loading='lazy'
        decoding='async'
      />
    </section>
  );
}
