import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      visibility: 'visible' as const,
      marginTop: '2rem',
    },

    closed: {
      opacity: 0,
      height: 0,
      visibility: 'hidden' as const,
    },
  };

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer border-b-2 border-neutral-800 py-8 first-of-type:pt-0'
    >
      <div className='flex items-center justify-between gap-4'>
        <h3 className='text-lg'>{question}</h3>

        <FontAwesomeIcon
          icon={faPlus}
          className={`rounded-full border-2 border-neutral-800 bg-neutral-900 p-2 transition-transform ${
            isOpen ? 'rotate-45' : ''
          }`.trim()}
        />
      </div>

      <motion.p
        initial={'closed'}
        variants={toggleVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        {answer}
      </motion.p>
    </div>
  );
}
