import { NavLink as Link} from "react-router-dom"

const SideNavbar = () => {
  return (
    <div className="sideNavContainer">
        <div className='linkWrapper'>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/algorithms'>Algorithms</Link>
        </div>
    </div>
  )
}

export default SideNavbar