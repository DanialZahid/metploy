import Card from './Card';
import Values from './Values';

export default function AboutUs() {
  return (
    <section className='grid gap-20' id='about-us'>
      <div className='grid gap-10 text-center'>
        <h2>All-in-One HR Efficient System for All Your HR Needs</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id,
          quia perferendis quibusdam sapiente beatae dolorem expedita a
          voluptate eveniet nesciunt soluta assumenda maxime quod exercitationem
          similique, laudantium nobis ullam?
        </p>
      </div>

      <Card />
      <Values />
    </section>
  );
}
