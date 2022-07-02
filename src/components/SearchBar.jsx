import { useAtom } from "jotai"
import { searchAtom } from "./Atoms"

const SearchBar = () => {
    const [, setSearchString] = useAtom(searchAtom)

    function handleSearchInput(e) {
        setSearchString(e.target.value)
    }

    return (
        <div className="searchBar">
            <input className='searchInput' type='text'
                required autoComplete="off" name='search'
                onChange={handleSearchInput} />
            <label className="searchLabel">Search</label>
        </div>
    )
}

export default SearchBar