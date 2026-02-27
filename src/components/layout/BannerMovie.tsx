import type { Movie } from "../../types/types";

interface BannerMovieProps {
      movie: Movie;
}

const BannerMovie = ({ movie }: BannerMovieProps) => {
      return (
            <article className=" relative lg:h-190  ">
                  <img
                        src={movie.backdropUrl}
                        alt="Banner de la película"
                        className="w-full h-full object-cover rounded-t-2xl"
                  />

                  <section className="absolute top-0 flex flex-col justify-start md:justify-end gap-4 pb-12 lg:pb-24 px-8 xl:px-32 w-full h-full bg-linear-to-t from-10% from-background to-background-hero/0">
                        <section className=" flex items-end gap-2 pt-18 md:pt-8 ">
                              <img
                                    src={movie.posterUrl}
                                    alt="Poster de la película"
                                    className="w-20 s:w-26 sm:w-36 lg:w-56 rounded-lg"
                              />
                              <section className="flex flex-col items-start gap-1 p-1.5 sm:p-2.5 lg:px-12 lg:py-8">
                                    <h1 className="py-0.5 text-md lg:text-3xl 2xl:text-6xl font-bold tracking-tight">
                                          {movie.title}
                                    </h1>
                                    <div className="text-xxs lg:text-xl max-w-2xl">
                                          <p className="">
                                                Título original: <i> {movie.originalTitle} </i>
                                          </p>
                                          <p className="">
                                                <i> {movie.year} </i>
                                          </p>
                                    </div>
                              </section>
                        </section>
                  </section>
            </article>

      );
};

export default BannerMovie;
