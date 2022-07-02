import { Outlet} from "react-router-dom"
import AlgorithmNavbar from "../components/AlgorithmNavbar"


const Algorithms = () => {
    return (
            <div className="algContainer">
                <AlgorithmNavbar />
                <div className="algWindow">
                    <Outlet />
                </div>
            </div>
    )
}

export default Algorithms