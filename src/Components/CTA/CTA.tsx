import { ButtonBlue } from '../Buttons';
import { TextBlock } from '../General';

export default function CTA() {
  return (
    <section id='contact-us'>
      <TextBlock className='justify-items-center rounded-xl border-2 border-slate-800/40 bg-gradient-to-tr from-slate-800/20 to-slate-800/40 p-12 text-center'>
        <h2>
          Let&apos;s Join and Embark on
          <br />
          Your Journey with Metploy
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          aperiam quae
          <br /> nulla repellat quibusdam similique impedit, dolorem at,
          repellendus numquam
        </p>

        <ButtonBlue content='Get Started for Free' />
      </TextBlock>
    </section>
  );
}
