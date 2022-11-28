import { Link } from 'react-router-dom';
import netflix from '../../assets/img/netflix.webp';
import Header from '../Header/Header';
import Input from '../input/Input';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'

const Banner = () => {
  return (
    <>
      <div
        className=' bg-cover bg-no-repeat bg-center bg-black bg-fixed text-white h-full w-full'
        style={{
          backgroundImage: `url(${netflix})`,
        }}>
        <div className='w-full bg-gradient-to-b from-[#000000e0] to-[#00000048] flex flex-col justify-center items-center h-full pb-10 sm:h-screen'>
          <section className='w-full fixed top-0 z-50 '>
            <Header>
              <div className='flex space-x-2 mr-5'>
                <LanguageSwitch
                  className='flex border border-slate-600 items-center text-xs text-white bg-transparent w-16 sm:w-40 truncate focus:outline-none'
                  en='en'
                  id='id'
                  idText='Bahasa Indonesia'
                  enText='English'
                />
                <Link
                  to='/signin'
                  className=' bg-loginBtn hover:bg-loginBtnHover text-center text-base rounded-sm w-20'>
                  Sign In
                </Link>
              </div>
            </Header>
          </section>
          <div className='max-w-3xl'>
            <div className='text-center pt-36'>
              <h1 className='font-semibold text-3xl px-2 sm:font-bold sm:text-5xl lg:font-medium '>
                Unlimited movies, TV shows, and more.
              </h1>
              <p className='text-base pt-5 sm:text-3xl '>
                Watch anywhere. Cancel anytime.
              </p>
              <p className='text-base px-5 pt-3 md:text-lg md:font-semibold'>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <Input text={'Get Started'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
