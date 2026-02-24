
import bannerErrorImage from '../../assets/images/imageError.webp'
import logo from '../../assets/images/logo.webp'
const ErrorMovie = () => {
      return (
                  <section className=" relative  lg:h-144 xl:h-160 ">

                        <img src={bannerErrorImage} alt="Fondo de pantalla de error, iamgen de la pelicula el padrino" className=' w-full h-full lg:object-cover  ' />

                        <section className=" absolute top-0 flex flex-col justify-center gap-2 md:gap-6 pt-16 pl-6 md:pl-24 w-full h-full bg-gray-800/50  ">
                              <img src={logo} alt="logo de muvie" className=" w-12 sm:w-20 " />
                              <section className=" flex flex-col gap-1 text-xs s:text-sm md:text-lg xl:text-xl w-64 md:w-98 lg:w-140 ">
                                    <p className="   "> Lo sentimos</p>
                                    <p className="   "> Nos están comunicando que no se encuentra la página que has solicitado.</p>
                              </section>
                        <p className=" text-[.6rem] s:text-xs text-description-text ">Imagen de "El padrino" (1972) de Francis Ford Coppola</p>
                        </section>
                  </section>
      )
}

export default ErrorMovie