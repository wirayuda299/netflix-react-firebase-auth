import mobile from '../../assets/img/mobile.jpg';
import small from '../../assets/img/forSmDevice.jpg';
import md from '../../assets/img/md.jpg';
import boxshot from '../../assets/img/boxshotCrop.png';
import downloadIcon from '../../assets/img/download-icon.gif';

const OurStory = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col justify-center items-center lg:flex-row bg-black text-white'>
        <div className='container order-1 lg:order-2'>
          <h2 className='text-center text-2xl font-semibold pt-10 sm:text-4xl lg:text-5xl lg:font-bold lg:pb-5 lg:pl-9 lg:text-left'>
            Download your shows to watch offline.
          </h2>
          <p className='text-center pt-5 text-md  sm:text-lg sm:px-8 lg:text-3xl lg:text-left lg:pl-9'>
            Save your favorites easily and always have something to watch.
          </p>
        </div>

        <div className='container text-white flex justify-center items-center order-2 lg:order-1'>
          <div className='w-full'>
            <picture>
              <source srcSet={small} media='(min-width:360px)' />
              <source srcSet={md} media='(min-width:600px)' />
              <img src={mobile} alt='mobile' className='w-full' />
            </picture>
            <div className='flex justify-between border border-slate-600 bg-black rounded-md p-2 -translate-y-20 sm:-translate-y-28 sm:py-3 w-[250px] sm:w-[350px] md:w-[390px] lg:w-[320px] mx-auto'>
              <div className='flex space-x-2'>
                <img
                  className='aspect-square'
                  src={boxshot}
                  alt='boxshot'
                  width={50}
                  height={50}
                />
                <div>
                  <p className='text-sm'>Stranger Things</p>
                  <span className='text-xs'>Downloading...</span>
                </div>
              </div>
              <div className='bg-black'>
                <img src={downloadIcon} alt='' width={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
