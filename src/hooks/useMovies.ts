      import { useEffect, useState } from "react"
      import type {Movie, MovieDTO} from "../types/types"
      import getPopularMovies from "../services/movieServices"
      import { movieAdapter } from "../adapters/movie.adapter"
      import { useGetGenre } from "../store/store"

      /**
       * Hook que devuelve los estados de la peticion a la API
       * @returns 
       */

      interface MoviesState {
      movies: Movie[];
      loading: boolean;
      error: boolean;
      }

      const useMovies = (category: string) => {

            const [state, setState] = useState<MoviesState>({ movies: [], loading: true, error: false})


      

            const genres = useGetGenre((state) => state.genre)

            useEffect(() => {

                  const loadMovies = async () => {
                        try {
                              setState(prev => ({ ...prev, loading: true, error: false }));
                              const dataMovies = await getPopularMovies(category)
                              const movieAdapted = dataMovies.results.map( (movie: MovieDTO) => (movieAdapter(movie, genres)) )
                              setState({ movies: movieAdapted, loading: false, error: false });
                        } catch  {
                        setState({ movies: [], loading: false, error: true });
                        }
                  }

                  loadMovies()
            }, [category, genres])

      return { movies: state.movies, loading: state.loading, error: state.error };

      }

      export default useMovies