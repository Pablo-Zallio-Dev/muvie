import { useEffect } from "react"
import useMovies from "../../hooks/useMovies"
import { useGetGenre } from "../../store/store"
import BannerMovie from "../layout/BannerMovie"
import ErrorMovie from "../layout/ErrorMovie"
import LoadingMovies from "../layout/LoadingMovies"
import MovieSection from "../layout/MovieSection"



const Home = () => {

      const fetchGenre = useGetGenre((state) => (state.fetchGenre))
      

      useEffect(() => {

            fetchGenre()

      }, [fetchGenre])




      const { loading, movies, error } = useMovies('now_playing')

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

                  <BannerMovie movie={movies[0]} />
                  <MovieSection />

            </>
      )
}

export default Home