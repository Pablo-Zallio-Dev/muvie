import { useEffect, useState } from "react"
import type { MovieDTO, MoviesState } from "../types/types"
import { movieAdapter } from "../adapters/movie.adapter"
import { useGetGenre } from "../store/store"
import { getPopularMovies } from "../services/movieServices"

/**
 * Hook que devuelve los estados de la peticion a la API
 * @returns 
 */

const useMovies = ({ category }: { category: string }) => {

      const [state, setState] = useState<MoviesState>({ movies: [], loading: true, error: false })
      const genres = useGetGenre((state) => state.genre)

      useEffect(() => {
            const controller = new AbortController();
            const { signal } = controller;

            const loadMovies = async () => {

                  try {
                        setState(prev => ({ ...prev, loading: true, error: false }));

                        const dataMovies = await getPopularMovies({ category, signal })
                        const movieAdapted = dataMovies.results.map((movie: MovieDTO) => (movieAdapter(movie, genres)));



                        setState({ movies: movieAdapted, loading: false, error: false });
                  } catch {
                        setState({ movies: [], loading: false, error: true });
                  }
            }

            loadMovies()

            return () => {
                  controller.abort();
            };
      }, [category, genres])

      return { movies: state.movies, loading: state.loading, error: state.error };

}

export default useMovies