import type { Movie } from "../../types/types"
import starCard from '../../assets/icons/starCard.svg'
import { useMovieSelection } from "../../store/store"


const MovieCard = ({ movie }: { movie: Movie }) => {

      const setSelectedMovie = useMovieSelection((state) => state.setSelectedMovie)




      return (

            <section className=" flex flex-col justify-between gap-2 w-32.5 md:w-55 shadow-xl/10 shadow-slate-400 "  >

                  <section className=" relative w-full overflow-hidden ">
                        <img src={movie.posterUrl} alt="" className=" w-32 md:w-55 aspect-2/3 lg:hover:scale-105 transition-transform duration-200  " loading="lazy" />
                        <div className=" absolute top-3 right-3 flex justify-center items-center gap-1 px-1 py-0.5 rounded-xl bg-slate-800 text-xxs ">
                              <img src={starCard} alt={movie.title} />
                              <p className=" pt-0.5 "> {movie.scoreAverage} </p>
                        </div>
                  </section>

                  <section className="  py-2 px-4">
                        <h2 className=" font-bold text-sm pb-4 "> {movie.title} </h2>
                        <div className=" flex flex-col gap-1 text-xxs sm:text-xs text-description-text ">
                              <p className="">{movie.year}, </p>
                              <p className="  "> {movie.genres.join(', ')} </p>
                        </div>
                  </section>
                  <button className=" pb-4 text-blue-600 text-xxs cursor-pointer " onClick={() => setSelectedMovie(movie)} >+ info</button>
            </section>

      )
}

export default MovieCard