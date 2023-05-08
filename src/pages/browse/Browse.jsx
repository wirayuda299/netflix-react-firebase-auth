import { memo, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import poster from '../../assets/img/spiderman.jpg';
import Footer from '../../components/Footer/Footer';
import { useAuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { AiOutlineSearch } from 'react-icons/ai';
import defaultProfile from '../../assets/img/default.png';
import { endpoints } from '../../data/endpoints';


const Browse = () => {
 
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]);
  const [populerTvShows, setPopulerTvShows] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .all(
        endpoints.map(async (endpoint) => {
          return await axios
            .get(endpoint.url)
            .then((response) => {
              return response?.data;
            });
        }),
      )
      .then((response) => {
        setGenres(response[0].genres);
        setTrending(response[1].results);
        setPopulerTvShows(response[2].results);
        setTopRated(response[3].results);
        setLoading(false);
      });
  }, []);

  const { addToWatchList, user } =
    useAuthContext();
  const slicedEmail = user?.email?.slice(0, user?.email?.indexOf('@'));

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
      </div>
    );
  }
  return (
    <div className='w-full h-full'>
      <Header add='border-b border-gray-600'>
        <form>
          <label
            htmlFor='search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>
          <div className='relative '>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <AiOutlineSearch className='text-gray-400' />
            </div>
            <input
              type='search'
              id='search'
              className='block transition-all ease duration-500 w-full md:w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-600 rounded-lg focus:outline-none bg-transparent focus:text-gray-300'
              placeholder='Search'
              required
            />
          </div>
        </form>
        <div className='px-5'>
          <div className='flex items-center justify-center space-x-3'>
            <div className=' flex justify-center items-center w-8 h-8 overflow-hidden bg-gray-400 rounded-full'>
              <img
                className='object-cover rounded-full w-10 h-10'
                src={user?.photoURL|| defaultProfile }
                alt='avatar'
                width='100%'
              />
            </div>
            <div className='text-slate-400 font-semibold text-sm'>
              <button>{user?.displayName ?? slicedEmail}</button>
            </div>
          </div>
        </div>
      </Header>
      <div className='overflow-x-scroll flex space-x-2 my-3'>
        {genres &&
          genres.map((genre) => (
            <button
              key={genre?.id}
              name={genre?.name}
              title={genre?.name}
              className='bg-slate-700 text-gray-400 transition-all ease-out duration-300 w-full rounded-md px-6 h-[25px] whitespace-nowrap hover:bg-slate-800 mb-4 text-sm '>
              {genre.name}
            </button>
          ))}
      </div>
      <div className='w-full h-full p-5'>
        <img
          src={poster}
          alt='poster'
          className='max-h-[500px] w-full rounded-lg object-cover aspect-video'
          width='100%'
          height={500}
          loading='lazy'
        />
        <div className='w-full h-full '>
          <h2 className='text-2xl font-bold text-gray-300 pt-7 pb-5'>
            Trending
          </h2>
          <div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
            {trending?.map((movie) => (
              <Card
                add='bg-[#1c1e27] transition-all ease duration-500 backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20'
                key={movie?.id}
                img={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                title={
                  movie?.title ||
                  movie?.name ||
                  movie?.original_name
                }
                rating={movie?.vote_average}
                addToWatchList={() =>
                  addToWatchList(movie)
                }
              />
            ))}
          </div>
          <h2 className='text-2xl font-bold text-gray-300  pt-7 pb-5'>
            Popular Tv Shows
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
            {populerTvShows.map((movie) => (
              <Card
                add='bg-[#1c1e27] transition-all ease duration-500 backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20'
                key={movie?.id}
                img={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                title={
                  movie?.title ||
                  movie?.name ||
                  movie?.original_name
                }
                rating={movie?.vote_average}
                addToWatchList={() =>
                  addToWatchList(movie)
                }
              />
            ))}
          </div>
          <h2 className='text-2xl font-bold text-gray-300  pt-7 pb-5'>
            Top Rated
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
            {topRated.map((movie) => (
              <Card
                add='bg-[#1c1e27] transition-all ease duration-500 backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20'
                key={movie?.id}
                img={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                title={
                  movie?.title ||
                  movie?.name ||
                  movie?.original_name
                }
                rating={movie?.vote_average}
                addToWatchList={() =>
                  addToWatchList(movie)
                }
              />
            ))}
          </div>
          <section>
            <Footer add='bg-gray-600' />
          </section>
        </div>
      </div>
    </div>
  );
};

export default memo(Browse);
