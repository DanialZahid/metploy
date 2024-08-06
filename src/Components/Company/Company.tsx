import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlaceholderVideo, TextBlock } from '../General';

export default function Company() {
  return (
    <section className='grid gap-28' id='company'>
      <div className='grid gap-24'>
        <TextBlock className='text-center'>
          <h2>
            Manage an Efficient Schedule System
            <br />
            for All Your People and Your Company
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            similique reprehenderit quod minima unde
            <br /> molestiae, quia porro tempore illum a aut ratione nam aperiam
            dicta cupiditate voluptate quaerat, ea vel.
          </p>
        </TextBlock>

        <PlaceholderVideo hasShadow />
      </div>

      <section className='grid grid-cols-2 gap-8 p-0'>
        <div className='flex flex-col justify-between gap-16'>
          <TextBlock>
            <h2>
              2700+ Customers Shared
              <br />
              their Love for Metploy
            </h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              est cupiditate officiis dignissimos exercitationem repellat!
            </p>
          </TextBlock>

          <div className='grid gap-4'>
            <div className='flex items-center gap-2 text-yellow-600'>
              <FontAwesomeIcon icon={faStar} size='xl' />
              <FontAwesomeIcon icon={faStar} size='xl' />
              <FontAwesomeIcon icon={faStar} size='xl' />
              <FontAwesomeIcon icon={faStar} size='xl' />
              <FontAwesomeIcon icon={faStarHalfStroke} size='xl' />
            </div>

            <p>
              <strong>4.8 stars out of 5 stars</strong> from 2.7K reviews.
            </p>
          </div>
        </div>

        <div className='grid min-h-[600px] items-end rounded-xl bg-[url(/assets/img/hero.jpg)] p-8'>
          <TextBlock className='rounded-xl bg-black/50 p-8 backdrop-blur-sm'>
            <p className='text-xl italic text-white'>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              libero. Laborum aliquam recusandae dolores placeat rerum eos ullam
              minus numquam!&quot;
            </p>

            <div className='grid gap-2'>
              <span className='text-xl font-bold'>John Doe</span>
              <span className='text-gray-300'>
                Head of Human Resources at ABC Company
              </span>
            </div>
          </TextBlock>
        </div>
      </section>
    </section>
  );
}
