const buttons = [
  {
    name: 'Sign Up',
    link: '#',
  },

  {
    name: 'Log In',
    link: '#',
  },
];

export default function NavigationButtons() {
  const cta = buttons.map((item) => (
    <button
      key={item.name}
      title={item.name}
      className={
        item.name === 'Sign Up' ? 'bg-transparent hover:bg-white/20' : ''
      }
    >
      {item.name}
    </button>
  ));

  return <div className='flex gap-2 justify-self-end'>{cta}</div>;
}
