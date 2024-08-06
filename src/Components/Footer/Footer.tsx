import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo';
import { CommonLinks } from '../Navigation/CommonLinks';
import NavigationDesktop from '../Navigation/NavigationDesktop';
import { NavigationFooterItems } from '../Navigation/ProductLinks';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { MotionLink } from '../General';
import NewsletterForm from '../Forms/NewsletterForm';

export default function Footer() {
  return (
    <footer className='border-t-2 border-neutral-900 bg-neutral-950'>
      <div className='m-auto grid max-w-screen-xl grid-cols-2 items-start gap-16 px-4 py-12'>
        <div className='grid gap-12'>
          <div className='grid gap-8'>
            <Logo />

            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              voluptates cum itaque, debitis nisi eius at architecto delectus
              commodi hic voluptatibus in neque aperiam pariatur fuga accusamus
              reiciendis! Nobis, eius.
            </p>
          </div>

          <div className='grid gap-4'>
            <h2 className='text-base'>Subscribe to the Newsletter</h2>

            <NewsletterForm />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-8'>
          <div className='grid gap-8'>
            <h2 className='text-base'>Explore</h2>

            <NavigationDesktop links={CommonLinks} />
          </div>

          <div className='grid gap-8'>
            <h2 className='text-base'>Product</h2>

            <NavigationDesktop links={NavigationFooterItems} />
          </div>
        </div>
      </div>

      <div className='bg-black text-center text-sm'>
        <div className='m-auto flex max-w-screen-xl justify-between p-4'>
          <span>
            &copy; {new Date().getFullYear()}{' '}
            <MotionLink
              to='https://github.com/DanialZahid'
              text='Danial Zahid'
              title='Danial Zahid on GitHub'
              isExternal
            />
          </span>

          <motion.a
            href='https://github.com/DanialZahid/metploy'
            title='Metploy on GitHub'
            whileHover={{ scale: 1.25 }}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} size='xl' />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
