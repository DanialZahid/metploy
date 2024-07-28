export default function Card() {
  return (
    <>
      <div className='grid gap-8 text-center'>
        <h2>All-in-One HR Efficient System for All Your HR Needs</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id,
          quia perferendis quibusdam sapiente beatae dolorem expedita a
          voluptate eveniet nesciunt soluta assumenda maxime quod exercitationem
          similique, laudantium nobis ullam?
        </p>
      </div>

      <div className='grid grid-cols-2 items-center gap-16 rounded-2xl border-2 border-gray-600 bg-gradient-to-br from-gray-700/20 to-gray-700/30 p-16'>
        <div className='grid content-start justify-items-start gap-8'>
          <p className='text-2xl font-bold'>
            Elevate Workplace Satisfaction and
            <br />
            Performance with Metploy Management
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, facere explicabo maxime iusto qui ipsam fugiat nostrum
            similique repellat quia sed? Fuga amet pariatur necessitatibus,
            laboriosam eligendi eaque maxime ab.
          </p>

          <button>Level Up Your HR Management</button>
        </div>

        <img
          className='justify-self-center'
          width={600}
          src='/assets/img/hero.jpg'
          alt=''
          loading='lazy'
          decoding='async'
        />
      </div>
    </>
  );
}
