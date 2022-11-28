import kids from '../../assets/img/child.png';
const KidsValue = () => {
  return (
    <div className='w-full h-full bg-black '>
      <div className='flex flex-col justify-center items-center text-white lg:flex-row lg:justify-between p-5'>
        <div className='container order-1 lg:order-2'>
          <div className='text-center text-3xl font-semibold pt-10 sm:text-5xl lg:text-5xl lg:text-left lg:pl-6 '>
            <h2>Create profiles for kids.</h2>
          </div>
          <div className='pt-5 text-md text-center sm:text-lg sm:px-8 lg:text-[25px] lg:text-left '>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
        <div className='container order-2 lg:order-1 '>
          <div className='w-full'>
            <img
              src={kids}
              alt='kids'
              width='100%'
              height='100%'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsValue;
