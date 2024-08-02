import { ButtonBlue } from '../Buttons';

export default function Card() {
  return (
    <>
      <div className='grid grid-cols-2 items-center gap-16 rounded-2xl border-2 border-gray-800/40 bg-gradient-to-br from-gray-800/30 to-gray-800/40 p-16'>
        <div className='grid content-start justify-items-start gap-8'>
          <h3>
            Elevate Workplace Satisfaction and
            <br />
            Performance with Metploy Management
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, facere explicabo maxime iusto qui ipsam fugiat nostrum
            similique repellat quia sed? Fuga amet pariatur necessitatibus,
            laboriosam eligendi eaque maxime ab.
          </p>

          <ButtonBlue content='Level Up Your HR Management' />
        </div>

        <img
          className='justify-self-center'
          width={600}
          src='/assets/img/hero.jpg'
          alt=''
          loading='lazy'
          decoding='async'
        />
      </div>
    </>
  );
}
