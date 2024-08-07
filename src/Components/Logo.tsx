export default function Logo() {
  return (
    <a
      href='/#hero'
      className='flex items-center gap-4 justify-self-start text-blue-100'
      title='Metploy'
    >
      <svg
        viewBox='0 0 50 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='40'
      >
        <path
          d='m25 0 25 15.01v9.976L25 40 0 24.986V15.01L25 0z'
          fill='#dbeafe'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 15.01 25 0l25 15.01v9.976L25 40 0 24.986V15.01zM25 33.63l19.697-11.829v-3.607h-.001L25 30.02 5.304 18.195v3.607L25 33.631zm0-9.126 15.102-9.067-3.68-2.208L25 20.088 13.577 13.23l-3.679 2.208L25 24.505zm0-9.932 6.829-4.1L25 6.375l-6.829 4.098 6.829 4.1z'
          fill='#2563eb'
        />
        <path d='M25 0 0 15.01v9.976L25 40V0z' />
      </svg>

      <span className='text-2xl font-bold text-white'>Metploy</span>
    </a>
  );
}
