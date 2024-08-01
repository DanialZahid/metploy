export default function Company() {
  return (
    <section className='grid gap-20 text-center' id='company'>
      <div className='grid gap-10'>
        <h2>
          Manage an Efficient Schedule System
          <br />
          for All Your People and Your Company
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          similique reprehenderit quod minima unde molestiae, quia porro tempore
          illum a aut ratione nam aperiam dicta cupiditate voluptate quaerat, ea
          vel.
        </p>
      </div>

      <iframe
        className='rounded-xl shadow-2xl shadow-blue-600/40'
        width='100%'
        height='500'
        src='https://www.youtube-nocookie.com/embed/LXb3EKWsInQ'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        title='YouTube Video'
        allowFullScreen
      ></iframe>
    </section>
  );
}
