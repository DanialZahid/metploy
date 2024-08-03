export default function Logo() {
  return (
    <a
      href='/#hero'
      className='flex items-center gap-4 justify-self-start text-blue-100'
      title='Metploy'
    >
      <svg
        id='logo-39'
        width='50'
        height='40'
        viewBox='0 0 50 40'
        fill='currentColor'
      >
        <path d='M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z'></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z'
          fill='#2563eb'
        ></path>
        <path
          d='M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z'
          fillOpacity='0.3'
        ></path>
      </svg>

      <span className='text-2xl font-bold text-white'>Metploy</span>
    </a>
  );
}