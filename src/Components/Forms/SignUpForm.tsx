import { ButtonBlue } from '../Buttons';
import { Input } from '../General';

export default function SignUpForm() {
  return (
    <form className='grid gap-x-4 gap-y-8'>
      <div className='grid gap-x-4 gap-y-8 md:grid-cols-2'>
        <Input
          type='text'
          name='name'
          label='Full name'
          placeholder='Enter your full name'
        />

        <Input
          type='email'
          name='email'
          label='Email address'
          placeholder='Enter your email address'
        />

        <Input
          type='text'
          name='company-name'
          label='Company name'
          placeholder='Enter your company name'
        />

        <Input
          type='tel'
          name='tel'
          label='Phone number'
          placeholder='Enter your phone number'
        />
      </div>

      <Input
        isTextArea
        name='message'
        label='Message'
        placeholder='Enter your message'
      />

      <ButtonBlue className='rounded-lg'>Sign Up</ButtonBlue>
    </form>
  );
}
