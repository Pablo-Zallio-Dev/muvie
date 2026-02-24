import { create } from "zustand";
import type { Genre } from "../types/types";
import { getGenres } from "../services/movieServices";

type GetGerne = {
      genre: Genre[],
      isLoading: boolean,
      isError: boolean
      fetchGenre: () => Promise<void>
}

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