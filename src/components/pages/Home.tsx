import { useEffect } from "react"
import useMovies from "../../hooks/useMovies"
import { useGetGenre, useSearchQuery } from "../../store/store"
import BannerMovie from "../layout/BannerMovie"
import ErrorMovie from "../layout/ErrorMovie"
import LoadingMovies from "../layout/LoadingMovies"
import MovieSection from "../layout/MovieSection"
import MovieSearch from "../layout/MovieSearch"



const Home = () => {


      const query = useSearchQuery((state) => state.searchQuery)
      const movieResults = useSearchQuery((state) => state.movieResults)
      const fetchGenre = useGetGenre((state) => (state.fetchGenre))
      const genresLoading = useGetGenre((state) => state.isLoading); // Agrega este estado a tu store de géneros


      useEffect(() => {

            fetchGenre()

      }, [fetchGenre])

      const { loading, movies, error } = useMovies({ category: 'now_playing' })
      if (loading || genresLoading) {
            return (
                  <LoadingMovies />
            )
      }

      if (error) {
            return (
                  <ErrorMovie />
            )
      }


      return (
            <>

                  {
                        query
                              ? (<MovieSearch title={query} movies={movieResults} loading={loading} error={error} />)
                              : (
                                    <>
                                          {/* Solo mostramos el Banner si el array TIENE contenido */}
                                          {movies && movies.length > 0 ? (
                                                <BannerMovie movie={movies[0]} />
                                          ) : (
                                                <LoadingMovies /> // Si no hay error pero el array está vacío, seguimos esperando
                                          )}
                                          <MovieSection />
                                    </>

                              )
                  }

            </>
      )
}

export default Home