import ErrorMovie from './ErrorMovie'
import LoadingMovies from './LoadingMovies'
import type { MovieSection } from '../../types/types'
import SearchMovieCard from '../ui/SearchMovieCard'

const MovieSearch = ({ title, movies, loading, error }: MovieSection) => {

        if (error) {
            return (
                  <ErrorMovie />
            )
      }
      if (loading) {
            return (
                  <LoadingMovies />
            )
      }

      console.log(movies)
  return (
    <>

    
    <section className="">
      <p className="  text-lg md:text-2xl px-12 py-12 lg:px-30 ">Resultados de busqueda para: <i className='font-black'> {title} </i> </p>
      <SearchMovieCard movies={movies} />
    </section>
    
    </>
  )
}

export default MovieSearch