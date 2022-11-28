import { Link } from 'react-router-dom';
import netflix from '../../assets/img/netflix.webp';

const Error = () => {
  return (
    <div
      className='bg-cover bg-no-repeat bg-center bg-fixed'
      style={{ backgroundImage: `url(${netflix})` }}>
      <div
        className='w-full h-screen flex flex-col justify-center items-center text-center text-white'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.801), rgba(0, 0, 0, 0.507))',
        }}>
        <div className='p-4'>
          <div>
            <h1 className='font-semibold text-4xl sm:text-8xl '>
              Lost Your Way?
            </h1>
          </div>
          <div>
            <p className='pt-5 text-sm  sm:text-xl'>
              We are apologize, but the page you are looking for does not exist.
            </p>
            <button className='text-center text-sm font-semibold bg-white mt-5 rounded-sm text-black px-3 py-1'>
              <Link to='/'>Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
