import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Clients from './Components/Clients/Clients';
import AboutUs from './Components/AboutUs/AboutUs';
import Company from './Components/Company/Company';
import FAQs from './Components/FAQs/FAQs';
import CTA from './Components/CTA/CTA';

export default function Website() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Clients />
        <AboutUs />
        <Company />
        <FAQs />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
