import { useAtom } from "jotai"
import { searchAtom } from "../components/Atoms"



function useSearchInput(e){
    const [ , setSearchString] = useAtom(searchAtom)
    setSearchString(e.target.value)
}

export default useSearchInput