import { Outlet, useParams } from 'react-router-dom';

const MovieDetail = () => {
  const checkItems = localStorage.getItem('watchList');
  const parsedItems = JSON.parse(checkItems);

  const { id } = useParams();
  return (
    <>
      {parsedItems.find((movie) => movie.id === Number(id)) && (
        <div
          className='w-full h-full overflow-y-auto'
          style={{ background: '#0b0b0e' }}>
          <div className='p-5 container'>
            {parsedItems
              .filter((movie) => movie.id === Number(id))
              .map((movie) => {
                return (
                  <div className='flex  flex-col gap-y-2' key={movie.id}>
                    <img
                      className='w-full aspect-video rounded-md pb-5 h-[350px] object-center'
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      alt={movie?.title}
                      width='100%'
                      height='100%'
                    />
                    <h1 className='text-2xl font-bold text-white pb-3'>
                      {movie?.title ?? movie?.name ?? movie?.original_name}
                    </h1>
                    <p className='text-white font-base'>
                      Overview : {movie?.overview}
                    </p>
                    <p className='text-white font-normal'>
                      Adult : {movie?.adult ? 'Yes' : 'No'}
                    </p>
                    <p className='text-white font-normal'>
                      Release Date : {movie?.release_date}
                    </p>
                    <p className='text-white font-normal'>
                      Original Language : {movie?.original_language}
                    </p>
                    <p className='text-white font-normal'>
                      Popularity : {movie?.popularity}
                    </p>
                    <p className='text-white font-normal'>
                      Vote Average : {movie?.vote_average}
                    </p>
                    <p className='text-white font-normal'>
                      Vote Count : {movie?.vote_count}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetail;
