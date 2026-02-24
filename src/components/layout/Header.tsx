import Logo from "../ui/Logo"
import SearchBar from "../ui/SearchBar"

const Header = () => {
      return (

            <header className=" flex flex-col justify-between md:items-center gap-2 xl:gap-7 py-5 px-3 md:px-10 ">
                  <Logo />
                  <SearchBar />
            </header>

      )
}

export default Header