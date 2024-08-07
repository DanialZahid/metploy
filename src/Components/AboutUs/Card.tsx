import { motion } from 'framer-motion';
import { ButtonBlue } from '../Buttons';

export default function Card() {
  const gradientVariants = {
    initial: {
      background:
        'linear-gradient(to bottom right, rgba(31, 41, 55, 0.4), rgba(31, 41, 55, 0.3))',
    },
    hover: {
      background:
        'linear-gradient(to bottom right, rgba(31, 41, 55, 0.6), rgba(31, 41, 55, 0.5))',
    },
  };

  return (
    <>
      <motion.div
        variants={gradientVariants}
        whileHover='hover'
        initial='initial'
        className='grid grid-cols-1 items-center gap-16 rounded-2xl border-2 border-gray-800/40 p-8 md:grid-cols-2 md:p-16'
      >
        <div className='grid content-start justify-items-start gap-8'>
          <h3>
            Elevate Workplace Satisfaction and Performance with Metploy
            Management
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, facere explicabo maxime iusto qui ipsam fugiat nostrum
            similique repellat quia sed? Fuga amet pariatur necessitatibus,
            laboriosam eligendi eaque maxime ab.
          </p>

          <ButtonBlue>Level Up Your HR Management</ButtonBlue>
        </div>

        <img
          className='justify-self-center'
          width={600}
          src='/assets/img/about.jpg'
          alt=''
          loading='lazy'
          decoding='async'
        />
      </motion.div>
    </>
  );
}
