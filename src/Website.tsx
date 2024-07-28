import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/Hero';
import { Clients } from './Components/Clients';

function Website() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Clients />
      </main>

      <Footer />
    </>
  );
}

export default Website;
