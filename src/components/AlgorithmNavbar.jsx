import { NavLink as Link } from "react-router-dom"

const AlgorithmNavbar = () => {
  return (
    <div className="algNavbar">
      <Link className="algLink" to='create'>Create Dataset</Link>
      <Link className="algLink" to='searching'>Search Algorithms</Link>
      <Link className="algLink" to='sorting'>Sorting Algoritms</Link>
      <Link className="algLink" to='general'>General Algorithms</Link>
      <Link className="algLink" to='arrays'>Array Algoritms</Link>
      <Link className="algLink" to='graphs'>Graph Algorithms</Link>
    </div>
  )
}

export default AlgorithmNavbar