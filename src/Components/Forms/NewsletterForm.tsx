import { ButtonBlue } from '../Buttons';
import { Input } from '../General';

export default function NewsletterForm() {
  return (
    <form className='grid gap-2 md:flex'>
      <Input type='email' name='email' placeholder='Enter your email address' />

      <ButtonBlue className='rounded-lg'>Subscribe</ButtonBlue>
    </form>
  );
}
