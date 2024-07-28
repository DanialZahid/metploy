import { ClientLogo1 } from './ClientLogo1';
import { ClientLogo2 } from './ClientLogo2';
import { ClientLogo3 } from './ClientLogo3';
import { ClientLogo4 } from './ClientLogo4';
import { ClientLogo5 } from './ClientLogo5';

export default function Clients() {
  return (
    <section className='grid gap-16' id='clients'>
      <h2 className='text-center'>Trusted and Loved by the Teams at</h2>

      <div className='flex flex-wrap items-center justify-center gap-16 text-gray-400'>
        {ClientLogo1}
        {ClientLogo2}
        {ClientLogo3}
        {ClientLogo4}
        {ClientLogo5}
      </div>
    </section>
  );
}
