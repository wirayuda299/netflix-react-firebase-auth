import device from '../../assets/img/device-pile-id.png';
import video from '../../assets/videos/video-devices-id.mp4';

const WatchOnDevice = () => {
  return (
    <div className='w-full h-full bg-black text-white'>
      <div className='container  pt-10 max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:items-center '>
        <div>
          <h2 className='text-center text-3xl font-semibold pt-10 sm:text-5xl lg:text-6xl lg:pb-5 lg:pl-9 lg:text-left'>
            Watch everywhere.
          </h2>
          <p className='pt-5 text-md text-center sm:text-lg sm:px-8 lg:text-2xl lg:text-left '>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className='flex justify-center items-center flex-wrap'>
          <div className='relative w-[500px] h-[500px]'>
            <img
              className='absolute top-0 left-0 bg-blend-screen object-cover'
              src={device}
              alt='tv'
              loading='lazy'
              width='100%'
              height='100%'
            />
            <div className='min-w-[200px] xxsm:w-[200px] xsmC:w-[230px] xsm:w-[220px] smC:w-[240px] smC2:w-[260px] smC3:w-[300px] mx-auto pt-7 lg:my-auto '>
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

export default WatchOnDevice;
