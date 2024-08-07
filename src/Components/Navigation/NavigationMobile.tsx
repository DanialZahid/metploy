import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface NavigationLinksProps {
  name: string;
  link: string;
}

interface NavigationMobileProps {
  links: NavigationLinksProps[];
}

export default function NavigationMobile({ links }: NavigationMobileProps) {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const menuVariants = {
    visible: {
      opacity: 1,
      visibility: 'visible' as const,
    },

    hidden: {
      opacity: 0,
      visibility: 'hidden' as const,
    },
  };

  function handleClick() {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isVisible]);

  const items = links.map((item) => (
    <li key={item.name}>
      <a
        href={item.link}
        className='flex rounded-md p-2 transition-colors hover:bg-neutral-800'
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav className='relative grid items-center lg:hidden'>
      <FontAwesomeIcon
        icon={faBars}
        size='xl'
        className='lg:hidden'
        onClick={handleClick}
      />

      <motion.ul
        ref={menuRef}
        variants={menuVariants}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
        className='absolute top-10 grid w-max -translate-x-[5rem] gap-2 rounded-md bg-neutral-900 p-2 text-sm font-medium'
      >
        {items}
      </motion.ul>
    </nav>
  );
}
