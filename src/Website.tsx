import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

function Main() {
  return (
    <main>
      <Section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          reprehenderit natus id fugit, ducimus sint iure qui quas totam veniam
          voluptatum, voluptatem dignissimos odit vitae cumque autem,
          exercitationem facilis delectus.
        </p>
      </Section>
    </main>
  );
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={`m-auto max-w-screen-xl ${className ?? ''}`.trim()}>
      {children}
    </section>
  );
}

function Website() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Website;
