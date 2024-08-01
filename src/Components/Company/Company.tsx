export default function Company() {
  return (
    <section className='grid gap-20' id='company'>
      <div className='grid gap-10 text-center'>
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

      <section className='grid grid-cols-2 gap-16 p-0'>
        <div className='grid gap-10'>
          <h2>
            2700+ Customers Shared
            <br />
            their Love for Metploy
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe est
            cupiditate officiis dignissimos exercitationem repellat!
          </p>
        </div>

        <div className='grid min-h-[600px] items-end rounded-xl bg-[url(/assets/img/hero.jpg)] p-8'>
          <div className='self-e grid gap-10 rounded-xl bg-black/50 p-8 backdrop-blur-sm'>
            <p className='text-xl italic text-white'>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              libero. Laborum aliquam recusandae dolores placeat rerum eos ullam
              minus numquam!&quot;
            </p>

            <div className='grid gap-2'>
              <span className='text-xl font-bold'>John Doe</span>
              <span className='text-gray-300'>
                Head of Human Resources at ABC Company
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
