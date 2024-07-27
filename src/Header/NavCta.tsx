interface Item {
  name: string;
  link: string;
}

interface NavCtaProps {
  items: Item[];
}

export function NavCta({ items }: NavCtaProps) {
  const cta = items.map((item) => (
    <button
      key={item.name}
      title={item.name}
      className={
        item.name === 'Log In'
          ? 'transition-colors bg-blue-600 rounded-full px-10 py-3 hover:bg-blue-700'
          : ''
      }
    >
      {item.name}
    </button>
  ));

  return <div className='flex gap-10'>{cta}</div>;
}
