import { create } from "zustand";
import { getGenres, getQuery } from "../services/movieServices";
import type {  GetGerne, Movie, MovieDTO, MovieSelectionState, SearchQuery } from "../types/types";
import { movieAdapter } from "../adapters/movie.adapter";



export const useGetGenre = create<GetGerne>((set) => ({
      genre: [],
      isLoading: false,
      isError: false,
      fetchGenre: async () => {
            set({ isLoading: true, isError: false })
            try {
                  const data = await getGenres()
                  set({ genre: data.genres, isLoading: false })

            } catch {
                  set({ isError: true, isLoading: false })
            }
      }

}))

export const useMovieSelection = create<MovieSelectionState>((set) => ({
      selectedMovie: null,
      setSelectedMovie: (movie) => set({
            selectedMovie: movie
      }),
      clearSelectedMovie: () => set({
            selectedMovie: null
      })
}))


export const useSearchQuery = create<SearchQuery>((set, get) => ({
      movieResults: [],
      setMovieResults: (movies) => set({ movieResults: movies}),
      searchQuery: '',
      setSearchQuery: (query: string) => set({
            searchQuery: query
      }),
      fetchQuery: async () => {
            const query = get().searchQuery
            try {
                  const data = await getQuery(query)
                  const responseGenres = await getGenres();
                  const genresList = responseGenres.genres
                  const movieAdapted = data.results.map((movie: MovieDTO) => movieAdapter(movie, genresList))
                  const sortedMovies = [...movieAdapted].sort((a: Movie, b: Movie) => {
            const yearA = parseInt(a.year) || 0;
            const yearB = parseInt(b.year) || 0;
            return yearB - yearA;
        });
                  set({ movieResults: sortedMovies })
            } catch  {
                  console.log("Error")
            }
      }
          
}))