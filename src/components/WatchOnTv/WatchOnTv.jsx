import tv from '../../assets/img/tv.png';
import video from '../../assets/videos/video-tv-0819.mp4';

const WatchOnTv = () => {
  return (
    <div className='w-full h-full bg-black text-white'>
      <div className='w-full h-full flex flex-col justify-center gap-y-7 lg:flex-row lg:place-items-center'>
        <div className='container mx-auto'>
          <h2 className='text-center text-3xl font-semibold pt-10 sm:text-5xl lg:text-6xl lg:pb-5 lg:pl-9 lg:text-left'>
            Enjoy on your TV.
          </h2>
          <p className='pt-5 text-md text-center sm:text-lg sm:px-8 lg:text-3xl lg:text-left '>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <div className='container mx-auto '>
          <div className='flex justify-center items-center flex-wrap '>
            <div className='relative w-[500px] h-[500px]'>
              <img
                className='absolute bg-blend-screen object-cover'
                src={tv}
                alt='tv'
                loading='lazy'
                width='500'
                height='500'
              />
              <video muted autoPlay loop>
                <source src={video} type='video/mp4' loading='lazy' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOnTv;
