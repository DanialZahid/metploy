import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonBlue, ButtonIcon } from '../Buttons';
import { PlaceholderVideo, TextBlock } from '../General';
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(null);

  function handleClick() {
    setModalTitle('Watch Our HR Management Platform Tour');
    setModalChildren(<PlaceholderVideo />);
    setShowModal(true);
  }

  return (
    <section className='grid gap-24 text-center' id='hero'>
      <TextBlock>
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

          <ButtonIcon
            content='See Video'
            icon={faPlayCircle}
            onClick={handleClick}
          />

          <Modal
            title={modalTitle}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            {modalChildren}
          </Modal>
        </div>
      </TextBlock>

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
