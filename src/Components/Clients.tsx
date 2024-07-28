import { ClientLogo1 } from './ClientLogos/ClientLogo1';
import { ClientLogo2 } from './ClientLogos/ClientLogo2';
import { ClientLogo3 } from './ClientLogos/ClientLogo3';
import { ClientLogo4 } from './ClientLogos/ClientLogo4';
import { ClientLogo5 } from './ClientLogos/ClientLogo5';

export function Clients() {
  return (
    <section className='grid gap-16'>
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
