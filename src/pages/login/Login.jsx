import { useRef } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import netflix from '../../assets/img/netflix.webp';
import Header from '../../components/Header/Header';
import { useAuthContext } from '../../context/AuthContext';
const Login = () => {
  const { signIn, user } = useAuthContext();
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signIn(email?.current?.value, password?.current?.value).then(
        (user) => {
          const token = user?.user?.accessToken;
          localStorage.setItem('token', JSON.stringify(token));
          navigate('/browse');
          toast.success('Login Successful');
        },
      );
    } catch (errors) {
      const error = errors?.code?.split('/')[1];
      if (error === 'invalid-email') {
        return toast.error('Invalid Email');
      }
      if (error === 'user-not-found') {
        return toast.error('User not found');
      }
      if (error === 'wrong-password') {
        return toast.error('Wrong Password');
      }
      return toast.error('Something went wrong, please try again later');
    }
  };
  return (
    <div
      className=' bg-center bg-black bg-fixed bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${netflix})` }}>
      <Header add='fixed top-0' />
      <div
        className='w-full h-full'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.801), rgba(0, 0, 0, 0.507))',
        }}>
        <div className='w-full h-screen text-white'>
          <div className='flex flex-col justify-center items-center h-full sm:pt-10'>
            <form
              className=' w-full h-full border-b sm:border-0 sm:w-[500px] bg-black sm:bg-[rgba(0,0,0,0.65)] sm:h-[500px] flex flex-col justify-center items-center px-7'
              onSubmit={handleLogin}>
              <div>
                <h1 className='text-4xl font-bold py-7 '>Sign In</h1>
              </div>
              <div className='flex flex-col justify-center items-center w-full '>
                <input
                  type='text'
                  className='bg-[#333333] text-[#8c8c8c] w-full px-3 py-4 mb-6 rounded-sm focus:outline-none'
                  placeholder={user?.email || 'Email or Phone Number'}
                  id='email'
                  ref={email}
                  required
                />
                <input
                  className='bg-[#333333] text-[#8c8c8c] w-full px-3 py-4 mb-12 rounded-sm focus:outline-none'
                  type='password'
                  name='password'
                  required
                  id='password'
                  placeholder='Your password'
                  ref={password}
                />
                <button className='bg-signUpBtn hover:bg-signUpBtnHover w-full py-3 text-md rounded-sm'>
                  Sign In
                </button>
                <div className='w-full flex justify-between text-xs mt-2'>
                  <div>
                    <input
                      className='outline-none border-none mr-2 accent-[#333333] checked:bg-[#333333] checked:text-[#8c8c8c]'
                      type='checkbox'
                      name='remember'
                      id='remember'
                    />
                    <label htmlFor='remember'>Remember me?</label>
                  </div>
                  <div>
                    <p>Need help?</p>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <div>
                  <span className='text-sm font-semibold mr-2 text-[#333333]'>
                    New to Netflix?
                  </span>
                  <Link to='/'>
                    <span className=''>Sign Up Now</span>
                  </Link>
                </div>
                <p className='text-sm text-left pt-3'>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a Bot.
                  <Link to='/learn-more' className='text-blue-500 pl-2'>
                    Learn more.
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
