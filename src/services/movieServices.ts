import api from "./apiServices"

/**
 * Funcion que trae los datos desde la api.
 * @returns Los datos requeridos desde la api.
 */

const getPopularMovies = async(category: string) => {
      const response = await api.get(`/movie/${category}?language=es-ES&page=1`)
      return response.data
}

export const getGenres = async() => {
      const response = await api.get(`/genre/movie/list?language=es`)
      return response.data
}

export default getPopularMovies