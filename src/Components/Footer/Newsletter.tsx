import { ButtonBlue } from '../Buttons';

export default function Newsletter() {
  return (
    <div className='grid gap-4'>
      <h2 className='text-base'>Subscribe to the Newsletter</h2>

      <div className='flex flex-wrap items-center gap-2'>
        <label>
          <input
            className='rounded-lg bg-neutral-800 px-5 py-3 outline-none ring-blue-600 placeholder:text-sm placeholder:text-gray-200 focus:ring-1'
            type='email'
            placeholder='Enter your email address'
          />
        </label>

        <ButtonBlue className='rounded-lg'>Subscribe</ButtonBlue>
      </div>
    </div>
  );
}
