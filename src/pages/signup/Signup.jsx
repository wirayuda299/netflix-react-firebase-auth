import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import { sendEmailVerification } from 'firebase/auth';

const Signup = () => {
  const { email, signUp } = useAuthContext();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const emptyInput = email == '' || password == '';
      if (emptyInput) {
        return toast.error('Please enter email and password');
      }
      const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      const isPassMatch = passPattern.test(password);

      if (!isPassMatch) {
        return toast.error('Password must be 6-16 characters and at least one number and one special character');
      }
      const signUpUser = await signUp(email, password)
      if (signUpUser) {
        const verifyUser = await sendEmailVerification(signUpUser.user).then(() => {
          toast.success('Email verification sent');
        }).then(user => {
          localStorage.setItem('token', JSON.stringify(user?.accessToken));
          navigate('/browse');
        })
        return verifyUser;
      }
    } catch (errors) {
      const error = errors?.code?.split('/')[1];
      if (error === 'invalid-email') {
        return toast.error('Invalid Email');
      }
      if (error === 'email-already-in-use') {
        return toast.error(
          'Email already in use'
        );
      }
      return toast.error(
        'Something went wrong, please try again later'
      );
    }
  };

  return (
    <div className='bg-white w-full h-full'>
      <Header add={'border-b'}>
        <div className='flex items-center'>
          <Link
            to='/signin'
            className='text-sm mr-4'
          >
            Sign In
          </Link>
        </div>
      </Header>
      <div className='w-full h-screen'>
        <div className='w-full flex flex-col justify-center items-center h-full'>
          <form
            className='p-4 w-full h-full max-w-md mx-auto flex flex-col justify-center items-center'
            onSubmit={handleSignup}
            autoComplete='off'
          >
            <div className='mt-10'>
              <h2 className='font-semibold text-4xl text-[#333333]'>
                Welcome back! Joining Netflix is
                easy.
              </h2>
              <p className='py-4 text-lg text-[#333333] font-semibold'>
                Enter your password and you'll be
                watching in no time.
              </p>
            </div>
            <div className='w-full'>
              <h5 className='font-semibold text-[#333333]'>
                Email
              </h5>
              <input
                className='w-full py-3 mb-4 pl-3'
                type='email'
                placeholder='Your email or phone number'
                value={email}
                disabled
              />
            </div>
            <div className='w-full'>
              <input
                className='w-full py-4 border pl-3 rounded-sm focus:outline-none border-gray-500'
                type='password'
                placeholder='Enter Your password'
                autoFocus
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <div className='text-blue-500 font-semibold text-left text-sm pt-2'>
              <Link
                to='/forgot-password'
                className='text-left'
              >
                Forgot your password?
              </Link>
            </div>
            <div className='bg-loginBtn w-full py-4 text-center text-white mt-4 rounded-md '>
              <button
                className='text-xl'
                type='submit'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
