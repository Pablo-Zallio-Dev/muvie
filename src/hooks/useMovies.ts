import { useEffect, useState } from "react"
import type { Movie } from "../types/types"
import getPopularMovies from "../services/movieServices"

/**
 * Hook que devuelve los estados de la peticion a la API
 * @returns 
 */

const useMovies = (category: string) => {

      const [movies, setMovies] = useState<Movie[]>([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(false)

      useEffect(() => {

            const loadMovies = async () => {
                  try {
                        setLoading(true)
                        const dataMovies = await getPopularMovies(category)
                        setMovies(dataMovies.results)
                        setLoading(false)
                  } catch (error) {
                        setError(true)
                        setLoading(false)
                        console.log(error)
                  }
            }

            loadMovies()
      }, [category])

      return {
            loading,
            movies,
            error
      }

}

export default useMovies