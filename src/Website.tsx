import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return <header></header>;
}

function Footer() {
  return <footer></footer>;
}

function Main() {
  return (
    <main>
      <div className='inline-flex items-center gap-1'>
        <FontAwesomeIcon icon={faEnvelope} className='text-red-400' size='lg' />

        <span>Email us</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        repudiandae voluptas atque mollitia vero maxime similique, et est
        temporibus reiciendis tenetur esse officiis deserunt aut ad ipsam
        explicabo exercitationem voluptates?
      </p>
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
