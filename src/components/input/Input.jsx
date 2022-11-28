import propTypes from 'prop-types';
import { useRef } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Input = ({ text }) => {
  const { email, setEmail } = useAuthContext();
  const input = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const isEMpty = input.current.value === '';

      if (isEMpty) {
        return toast.error('Please enter your email');
      }
      setEmail(input.current.value);
      return navigate('/signup');
    } catch (error) {
      toast.error('something went wrong');
    }
  };

  return (
    <form
      className='flex flex-col justify-center items-center lg:flex-row lg:space-x-0'
      onSubmit={handleSubmit}>
      <input
        className='text-slate-600 mt-3 py-3 w-72 sm:w-[500px] pl-2 focus:outline-none md:py-4 rounded-sm'
        type='email'
        placeholder='Email address...'
        onChange={(e) => setEmail(e.target.value)}
        ref={input}
      />
      <div className='mx-auto mt-3'>
        <button
          className='bg-signUpBtn hover:bg-signUpBtnHover rounded-sm text-white py-3 w-32 focus:outline-none md:py-4 md:pr-0'
          type='submit'>
          {text} <AiOutlineRight className='inline' />
        </button>
      </div>
    </form>
  );
};

Input.propTypes = {
  text: propTypes.string,
  handleSignUp: propTypes.func,
};

export default Input;
