interface Item {
  name: string;
  link: string;
}

interface NavCTAProps {
  items: Item[];
}

export function NavCTA({ items }: NavCTAProps) {
  const cta = items.map((item) => (
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

  return <div className='flex gap-4'>{cta}</div>;
}
