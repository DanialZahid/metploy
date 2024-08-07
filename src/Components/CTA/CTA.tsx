import { useState } from 'react';
import { ButtonBlue } from '../Buttons';
import { TextBlock } from '../General';
import Modal from '../Modal/Modal';
import SignUpForm from '../Forms/SignUpForm';

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalChildren, setModalChildren] = useState<React.ReactNode>(null);

  function handleClick() {
    setModalTitle('Sign Up to Get Started');
    setModalChildren(<SignUpForm />);
    setShowModal(true);
  }

  return (
    <section id='contact-us'>
      <TextBlock className='justify-items-center rounded-xl border-2 border-slate-800/40 bg-gradient-to-tr from-slate-800/20 to-slate-800/40 p-8 text-center md:p-12'>
        <h2>Let&apos;s Join and Embark on Your Journey with Metploy</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          aperiam quae
          <br /> nulla repellat quibusdam similique impedit, dolorem at,
          repellendus numquam
        </p>

        <ButtonBlue onClick={handleClick}>Get Started for Free</ButtonBlue>

        <Modal
          title={modalTitle}
          showModal={showModal}
          setShowModal={setShowModal}
        >
          {modalChildren}
        </Modal>
      </TextBlock>
    </section>
  );
}
