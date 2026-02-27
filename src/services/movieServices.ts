import type { GetPopularMoviesParams } from "../types/types"
import api from "./apiServices"

/**
 * Funcion que trae las peliculas de las categorias desde la api. 
 * @returns Los datos requeridos desde la api.
 */

export const getPopularMovies = async({category, language = 'es-ES', page = 1, signal }:GetPopularMoviesParams & { signal?: AbortSignal } ) => {
      const { data } = await api.get(`/movie/${category}`, {
            params: {language, page},
            signal: signal,      
      }
      )
      return data
}

/**
 * Funcion que trae la lista de generos de las peliculas. 
 * @returns Los datos requeridos desde la api.
 */
export const getGenres = async() => {
      const { data } = await api.get(`/genre/movie/list?language=es`)
      return data
}

/**
 * Funcion que trae la pelicula buscada. 
 * @returns Los datos requeridos desde la api.
 */
export const getQuery = async(query: string) => {
      const { data } = await api.get(`/search/movie`, {
            params: { query, include_adult: false, language: 'es-ES', page: 1 }
      })
      return data
}

