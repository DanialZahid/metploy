import {
  faBolt,
  faMagnifyingGlass,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const values = [
  {
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size='3x' />,
    title: 'Improve Productivity',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio vitae ipsa alias dolores nisi illo, itaque voluptates dignissimos quam non aperiam, repellat dolore. Odit, accusantium. Minima voluptates earum sint!',
  },

  {
    icon: <FontAwesomeIcon icon={faUserCheck} size='3x' />,
    title: 'Hire Top Talent',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio vitae ipsa alias dolores nisi illo, itaque voluptates dignissimos quam non aperiam, repellat dolore. Odit, accusantium. Minima voluptates earum sint!',
  },

  {
    icon: <FontAwesomeIcon icon={faBolt} size='3x' />,
    title: 'Stay Compliant',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio vitae ipsa alias dolores nisi illo, itaque voluptates dignissimos quam non aperiam, repellat dolore. Odit, accusantium. Minima voluptates earum sint!',
  },
];

export default function Values() {
  const value = values.map((item) => (
    <div
      key={item.title}
      className='grid gap-6 rounded-2xl border-2 border-slate-800/80 p-16 transition-colors hover:bg-slate-800/40'
    >
      <span className='text-blue-600'>{item.icon}</span>

      <h3 className='text-2xl font-bold'>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ));

  return (
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8'>
      {value}
    </div>
  );
}
