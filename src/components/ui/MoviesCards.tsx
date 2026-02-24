import type { Movie } from "../../types/types"
import starCard from '../../assets/icons/starCard.svg'
import { useGetGenre } from "../../store/store"

const MoviesCards = ({ movies }: { movies: Movie[] }) => {

      const urlImage = import.meta.env.VITE_BASE_URL_IMAGE


      const genre = useGetGenre((state) => (state.genre))

      return (


            <section className=" flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-14 py-8 md:px-24">
                  {

                        movies.map((movie) => (
                              <section key={movie.id} className="w-min">
                                    <section className=" relative w-max ">
                                          <img src={`${urlImage}${movie.poster_path}`} alt="" className=" w-32 md:w-48 " />
                                          <div className=" absolute top-3 right-3 flex justify-center items-center gap-1 px-1 py-0.5 rounded-xl bg-slate-800 text-xxs ">
                                                <img src={starCard} alt="" />
                                                <p className=" pt-0.5 "> 7.5 </p>
                                          </div>
                                    </section>
                                    <section className="md:pt-6">
                                          <h1 className=" font-bold text-sm "> {movie.title} </h1>
                                          <div className=" flex gap-2 text-xxs text-description-text ">
                                                <p className="">{new Date(movie.release_date).getFullYear()}, </p>
                                                {

                                                      movie.genre_ids.slice(0, 1).map((id) => {
                                                            const genreName = genre.find(g => g.id === id)?.name;
                                                            return <p className=" "> {genreName}  </p>
                                                      })
                                                }
                                          </div>
                                    </section>
                              </section>
                        ))
                  }
            </section>




      )
}

export default MoviesCards

