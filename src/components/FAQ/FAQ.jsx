import { useCallback } from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Input from '../input/Input';
import { data } from './Data/Data';

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggleHidden = useCallback(
    (index) => {
      if (clicked === index) {
        return setClicked(null);
      }
      setClicked(index);
    },
    [clicked],
  );

  return (
    <div className='w-full h-full bg-black text-white pb-5 transition-all ease duration-500'>
      <div className='text-center text-3xl font-semibold sm:text-5xl lg:pb-5 lg:pl-9 lg:text-left'>
        <h2 className='text-center py-10'>Frequently Asked Questions</h2>
      </div>
      <div className='container max-w-3xl mx-auto'>
        <ul className='px-5 '>
          {data.map((item, index) => (
            <li key={index} className='bg-[#303030] mb-3 '>
              <div
                className={`flex justify-between items-center py-2 sm:py-3 px-3 text-white ${
                  clicked === index && 'border-b'
                }`}>
                <h3 className='text-sm sm:text-base md:text-lg'>
                  {item.title}
                </h3>
                <AiOutlinePlus
                  className={`text-3xl cursor-pointer ${
                    clicked === index && 'rotate-45'
                  }`}
                  onClick={() => toggleHidden(index)}
                />
              </div>
              <p className={clicked === index ? 'block p-5' : 'hidden'}>
                {item?.content}
              </p>
            </li>
          ))}
        </ul>
        <div className='w-full '>
          <p className='text-center py-3 text-base sm:text-lg'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Input text={'Get Started'} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
