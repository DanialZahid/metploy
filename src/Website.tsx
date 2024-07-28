import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Section } from './HTMLElements/Section';

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
