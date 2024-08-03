import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  showModal,
  setShowModal,
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal, setShowModal]);

  return createPortal(
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className='fixed top-0 z-10 flex h-full w-full items-center justify-center bg-black/75 backdrop-blur-sm'
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className='grid content-start gap-8 overflow-auto rounded-2xl border-2 border-neutral-900 bg-neutral-950 p-8 shadow-lg lg:max-h-screen lg:w-[900px]'
          >
            <div className='flex items-center justify-between gap-8'>
              <h2>{title}</h2>

              <FontAwesomeIcon
                icon={faXmark}
                className='h-5 w-5 cursor-pointer rounded-full border-2 border-neutral-800 bg-neutral-900 p-2 transition-colors hover:border-red-800 hover:bg-red-800'
                onClick={() => {
                  setShowModal(false);
                }}
                title='Close Modal'
              />
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
