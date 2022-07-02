import { useAtom } from "jotai"
import { animationAtom} from "./Atoms"

const AlgMenu = () => {
    const [, setAnimation] = useAtom(animationAtom)


    return (
        <div className="algMenu">
            <button className="algMenuBtn"
                onClick={() => setAnimation([false, false])} >
                Start</button>
            <button className="algMenuBtn"
                onClick={() => setAnimation([true, false])} >
                Pause</button>
            <button className="algMenuBtn"
                onClick={() => setAnimation([false, true])} >
                Reset</button>
        </div>
    )
}

export default AlgMenu
