import Client from "./Client/Client";

const Clients = () => {
  return (
    <section
      id='Clients'
      className='pt-20 pb-[250px] bg-black relative'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div className='max-w-[570px] mx-auto mb-12 text-center'>
              <h2 className='font-bold text-3xl md:text-4xl text-white mb-4'>
                Some of My Happy Clients
              </h2>
              <p className='font-medium text-lg text-body-color'>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className='w-full px-4'>
            <div
              className='flex flex-wrap items-center justify-center wow fadeInUp'
              data-wow-delay='.1s
              '
            >
              <Client />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
