import { NavLink as Link, Outlet} from "react-router-dom"

const SearchAlg = () => {
    return (
        <>
            <div className='linkWrapper'>
                <Link className="link" to='linear'>Linear</Link>
                <Link className="link" to='jump'>Jump</Link>
                <Link className="link" to='binary'>Binary</Link>
                <Link className="link" to='breadth'>Breadth</Link>
                <Link className="link" to='depth'>Depth</Link>

            </div>
            <div className="projectWindow">
                <Outlet />
            </div>
        </>
    )
}

export default SearchAlg