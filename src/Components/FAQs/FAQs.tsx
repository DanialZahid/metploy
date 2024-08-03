import { TextBlock } from '../General';
import { FAQsList } from './FAQsList';
import FAQItem from './FAQItem';

export default function FAQs() {
  const faq = FAQsList.map((item) => (
    <FAQItem
      key={item.id}
      question={item.question}
      answer={item.answer}
    ></FAQItem>
  ));

  return (
    <section className='grid gap-24' id='faqs'>
      <TextBlock className='text-center'>
        <h2>Frequently Asked Questions</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          consectetur esse libero! Debitis nulla similique <br />
          rem atque quibusdam necessitatibus officiis impedit deleniti laborum
          ad, quia est dolore corporis unde tempora!
        </p>
      </TextBlock>

      <div>{faq}</div>
    </section>
  );
}
