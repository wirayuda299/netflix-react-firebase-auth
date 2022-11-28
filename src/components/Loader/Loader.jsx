import loading from '../../assets/img/loading.gif';
const Loader = () => {
  return (
    <div className='w-full h-screen bg-black fixed '>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='loading'>
          <div className='circle cyan'></div>
          <div className='circle magenta'></div>
          <div className='circle yellow'></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
