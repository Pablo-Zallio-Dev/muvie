import { createPortal } from "react-dom"
import { useMovieSelection } from "../../store/store"
import { useEffect } from "react"
import iconStar from '../../assets/icons/starCard.svg'
import iconBack from '../../assets/icons/iconBack.svg'
import clsx from "clsx"
const MovieDetails = () => {

      const selectedMovie = useMovieSelection((state) => state.selectedMovie)
      const clearSelectedMovie = useMovieSelection((state) => state.clearSelectedMovie)

      useEffect(() => {

            const pressEsc = (e: KeyboardEvent) => {
                  if (e.key === 'Escape') {
                        clearSelectedMovie()
                  }
            }

            if (selectedMovie) {

                  document.body.style.overflow = 'hidden';

                  window.addEventListener('keydown', pressEsc)


            } else {
                  document.body.style.overflow = 'auto';
            }

            return () => {
                  document.body.style.overflow = 'auto';
                  window.removeEventListener('keydown', pressEsc)
            };

      }, [selectedMovie, clearSelectedMovie])

      return (
            <>

                  {
                        selectedMovie && createPortal(

                              <article className=" fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full px-4 bg-slate-600/50 " onClick={clearSelectedMovie} >
                                    <section className=" flex flex-col items-center w-190  bg-background-details p-6 rounded-2xl " onClick={(e) => e.stopPropagation()}>
                                          <div className="relative ">
                                                <section className=" absolute top-0 left-0 w-full h-full bg-linear-to-t from-background-details to-slate-0 " />
                                                <img src={selectedMovie.backdropUrl} alt={`Imagen de la pelicula ${selectedMovie.title} en la tarjeta de detalles`} className={clsx("w-180 min-h-100  rounded-t-lg object-cover", { ' h-100  ': selectedMovie.backdropUrl })} loading="lazy" />

                                          </div>
                                          <div className="  py-12  ">
                                                <h1 className=" text-lg sm:text-xl font-bold "> {selectedMovie.title} </h1>
                                                <section className=" flex items-center gap-4  text-xs ">
                                                      <p className=" text-xxs "> {selectedMovie.year} </p>
                                                      <div className=" flex gap-1 ">
                                                            <img src={iconStar} alt="" className="w-2.5" />
                                                            <p className=""> {selectedMovie.scoreAverage} </p>
                                                      </div>
                                                </section>
                                                <p className=" text-xxs text-description-text "> {selectedMovie.genres.join(', ')} </p>
                                                <section className=" flex flex-col gap-4 pt-8  ">
                                                      <p className=" text-sm sm:text-lg font-bold ">Descripción General:</p>
                                                      <p className=" text-xs sm:text-sm "> {selectedMovie.overview} </p>
                                                </section>
                                          </div>
                                          <button className=" flex flex-col gap-1 items-center self-center px-6 py-1 shadow-box border border-gray-700/20 rounded-full " onClick={clearSelectedMovie} >
                                                <img src={iconBack} alt="Icono de vuelta atras" className=" w-4 " />
                                                <p className=" text-xs ">Inicio</p>
                                          </button>

                                    </section>
                              </article>,

                              document.body
                        )
                  }



            </>
      )
}

export default MovieDetails

/* 

h-[400px] object-cover

*/