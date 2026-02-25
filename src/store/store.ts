import { create } from "zustand";
import { getGenres } from "../services/movieServices";
import type { GetGerne, MovieSelectionState } from "../types/types";



export const useGetGenre = create<GetGerne>(( set ) => ({
      genre: [],
      isLoading: true,
      isError: false,
      fetchGenre: async() => {

            try {
                  set({ isLoading: false })
                  const data = await getGenres()
                  set({genre: data.genres })
                  
            } catch  {
                  set({ isError: true, isLoading: false })
            }
      } 

}))   

export const useMovieSelection = create<MovieSelectionState>((set) => ({
      selectedMovie: null,
      setSelectedMovie:(movie) => set({
            selectedMovie: movie
      }),
      clearSelectedMovie:() => set({
            selectedMovie: null
      })
}))