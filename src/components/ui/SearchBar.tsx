
      import { useEffect } from 'react'
      import iconSearch from '../../assets/icons/HeroiconsOutlineMagnifyingGlass.svg'
      import { useSearchQuery } from '../../store/store'
      const SearchBar = () => {

            const setSearchQuery = useSearchQuery((state) => state.setSearchQuery)
            const fetchQuery = useSearchQuery((state) => state.fetchQuery)
            const query = useSearchQuery((state) => state.searchQuery)


            useEffect(() => {
                  if (query.trim().length > 0) {
                        fetchQuery();
                  }
            }, [query, fetchQuery])


            return (


                  <form className=" flex gap-1.5 w-full md:w-130 xl:w-160 py-2.5 md:py-4 px-1.5 md:px-3 rounded-2xl bg-bg-input " onSubmit={(e) => e.preventDefault()} >
                        <img src={iconSearch} alt="" className="" />
                        <input type="text" name="" id="" className=' w-full text-sm focus:outline-0 ' placeholder='Search movies...' aria-label='Search movie' onChange={(e) => setSearchQuery(e.target.value)} value={query} />
                  </form>


            )
      }

      export default SearchBar