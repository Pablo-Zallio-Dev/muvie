import type { MovieSection } from "../../types/types"
import MoviesCards from "../ui/MoviesCards"
import ErrorMovie from "./ErrorMovie"
import LoadingMovies from "./LoadingMovies"

const MovieUpComming = ({title, movies, loading, error}: MovieSection) => {
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
  return (
    <section className="">
          <p className=" sm:px-24 md:py-1 sm:text-2xl md:text-4xl font-black "> {title}</p>

            <MoviesCards movies={movies} />
    </section>
  )
}

export default MovieUpComming