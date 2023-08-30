import './Navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className="brand">
                  <h1>
                    Cooking Ninja
                  </h1>
                </Link>
                <Link to="/create">
                  <h3>
                    Create recipe
                  </h3>
                </Link>
            </nav>
            
        </div>
    )
}

export default Navbar
