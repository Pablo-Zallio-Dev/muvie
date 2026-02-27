import type { Movie } from "../../types/types"
import MovieCard from "./MovieCard"

const SearchMovieCard = ({ movies }: { movies: Movie[] }) => {

      return (
            <section className=" flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-14 py-8 md:px-24">
                  {
                        movies.map((movie) => (
                              <MovieCard key={movie.id} movie={movie} />
                        ))
                  }
            </section>
      )
}

export default SearchMovieCard

