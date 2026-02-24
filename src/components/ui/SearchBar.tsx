
import iconSearch from '../../assets/icons/HeroiconsOutlineMagnifyingGlass.svg'
const SearchBar = () => {
      return (


            <form className=" flex gap-1.5 w-full md:w-130 xl:w-160 py-2.5 md:py-4 px-1.5 md:px-3 rounded-2xl bg-bg-input ">
                  <img src={iconSearch} alt="" className="" />
                  <input type="text" name="" id="" className=' w-full text-sm focus:outline-0 ' placeholder='Search movies...' aria-label='Search movie' />
            </form>


      )
}

export default SearchBar