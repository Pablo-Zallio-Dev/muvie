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
      useEffect(() => {

            fetchGenre()

      }, [fetchGenre])

      const { loading, movies, error } = useMovies({ category: 'now_playing' })
      if (error) {
            return (
                  <ErrorMovie />
            )
      }


      if (loading) {
            return (
                  <LoadingMovies />
            )
      }
      return (
            <>

                  {
                        query
                              ? (<MovieSearch title={query} movies={movieResults} loading={loading} error={error} />)
                              : (
                                    <>

                                          <BannerMovie movie={movies[0]} />
                                          <MovieSection />
                                    </>

                              )
                  }

            </>
      )
}

export default Home