import { ButtonBlue } from '../Buttons';
import { Input } from '../General';

export default function SignUpForm() {
  return (
    <form className='grid gap-4'>
      <div className='grid grid-cols-2 gap-4'>
        <Input placeholder='Enter your full name' type='text' />
        <Input placeholder='Enter your email address' type='email' />
        <Input placeholder='Enter your company name' type='text' />
        <Input placeholder='Enter your phone number' type='tel' />
      </div>

      <Input isTextArea placeholder='Enter your message' />

      <ButtonBlue className='rounded-lg'>Sign Up</ButtonBlue>
    </form>
  );
}
