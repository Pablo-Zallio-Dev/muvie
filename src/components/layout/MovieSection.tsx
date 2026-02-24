import MoviePopular from './MoviePopular'
import useMovies from '../../hooks/useMovies'
import MoviePlaying from './MoviePlaying'
import MovieUpComming from './MovieUpComming'


const MovieSection = () => {

      const { loading: popularLoading, movies: popularMovie, error: popularError } = useMovies('popular')
      const { loading: playingLoading, movies: playingMovie, error: playingError } = useMovies('now_playing')
      const { loading: upcomingLoading, movies: upcomingMovie, error: upcomingError } = useMovies('upcoming')

  


  return (
    <section className=" px-6 py-12 ">
          <MoviePopular title="Mas populares" movies={popularMovie} loading={popularLoading} error={popularError}  />
          <MoviePlaying title="Ahora en cines" movies={playingMovie} loading={playingLoading} error={playingError}  />
          <MovieUpComming title="Proximamente" movies={upcomingMovie} loading={upcomingLoading} error={upcomingError} />

    </section>
    
  )
}

export default MovieSection