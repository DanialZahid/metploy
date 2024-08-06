import { ButtonBlue } from '../Buttons';
import { Input } from '../General';

export default function NewsletterForm() {
  return (
    <form className='flex flex-wrap gap-2'>
      <Input type='email' placeholder='Enter your email address' />

      <ButtonBlue className='rounded-lg'>Subscribe</ButtonBlue>
    </form>
  );
}
