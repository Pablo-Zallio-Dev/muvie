import type { Movie } from "../../types/types";

interface BannerMovieProps {
      movie: Movie;
}

const BannerMovie = ({ movie }: BannerMovieProps) => {

      /**
       * url para imagenes
       */
      const urlImage = import.meta.env.VITE_BASE_URL_IMAGE


      return (

            <article className=" relative lg:h-190  ">
                  <img
                        src={`${urlImage}${movie.backdrop_path}`}
                        alt="Banner de la película"
                        className="w-full h-full object-cover rounded-t-2xl"
                  />

                  <section className="absolute top-0 flex flex-col justify-start md:justify-end gap-4 pb-12 lg:pb-24 px-8 xl:px-32 w-full h-full bg-linear-to-t from-10% from-background to-background-hero/0">
                        <section className=" flex items-end gap-2 pt-6">
                              <img
                                    src={`${urlImage}${movie.poster_path}`}
                                    alt="Poster de la película"
                                    className="w-20 s:w-26 sm:w-36 lg:w-56 rounded-lg"
                              />
                              <section className="flex flex-col items-start gap-1 p-1.5 sm:p-2.5 lg:px-12 lg:py-8">
                                    <h1 className="py-0.5 px-2 rounded-md bg-background-hero text-md lg:text-3xl font-bold tracking-tight">
                                          {movie.title}
                                    </h1>
                                    <div className="text-xxs lg:text-xl max-w-2xl">
                                          <p className="">
                                                Título original: <i> {movie.original_title} </i>
                                          </p>
                                          <p className="">
                                                <i> {movie.release_date.slice(0, 4)} </i>
                                          </p>
                                    </div>
                              </section>
                        </section>
                      
                  </section>
            </article>

      );
};

export default BannerMovie;


/* 



<article className=" relative lg:h-190">
                  <img
                        src={`${urlImage}${movie.backdrop_path}`}
                        alt="Banner de la película"
                        className="w-full h-full object-cover"
                  />

                  <section className="absolute top-0 flex flex-col justify-start md:justify-end gap-4 pb-12 lg:pb-24 px-8 xl:px-32 w-full h-full bg-linear-to-t from-10% from-background to-background-hero/0">
                        <section className=" flex items-end gap-2 pt-6">
                              <img
                                    src={`${urlImage}${movie.poster_path}`}
                                    alt="Poster de la película"
                                    className="w-20 s:w-26 sm:w-36 lg:w-56 rounded-lg"
                              />
                              <section className="flex flex-col items-start gap-1 p-1.5 sm:p-2.5 lg:px-12 lg:py-8">
                                    <h1 className="py-0.5 px-2 rounded-md bg-background-hero text-md lg:text-3xl font-bold tracking-tight">
                                          {movie.title}
                                    </h1>
                                    <div className="text-[.65rem] lg:text-xl max-w-2xl">
                                          <p className="">
                                                Título original: <i> {movie.original_title} </i>
                                          </p>
                                          <p className="">
                                                <i> {movie.release_date.slice(0, 4)} </i>
                                          </p>
                                    </div>
                              </section>
                        </section>
                        <section className="text-[.7rem]">
                              <p
                                    className={` ${isExpanded ?"line-clamp-2":""} md:text-sm lg:text-lg sm:line-clamp-none lg:w-250 `}
                              >
                                    {movie.overview}
                              </p>
                              <button
                                    className="pt-3 text-blue-600 sm:hidden"
                                    onClick={() => setIsExpanded(!isExpanded)}
                              >
                                    {isExpanded ?" + show more" : "- show less"}
                              </button>
                        </section>
                  </section>
            </article>
            
            
            */