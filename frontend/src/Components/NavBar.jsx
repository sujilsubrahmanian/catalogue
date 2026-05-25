import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" claasName="nav-lnk">Favorites</Link>
        </div>
    </nav>
}

    export default NavBar
