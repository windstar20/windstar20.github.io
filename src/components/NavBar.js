import { Link, NavLink } from "react-router-dom";
import "../css/default.css";

function NavBar() {
    return (
        <nav className="nav_bar_wrap">
            <li>
                <Link to="/">
                   Home
                </Link>
            </li>
            <li>
                <NavLink to="/hall">
                    Wedding Hall
                </NavLink>
            </li>
            <li>
                <NavLink to="/studio">
                    Studio
                </NavLink>
            </li>
            <li>
                <NavLink to="/dress">
                    Dress
                </NavLink>
            </li>
            <li>
                <NavLink to="/makeup">
                    Makeup
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile">
                    profile
                </NavLink>
            </li>
        </nav>
    )
}

export default NavBar;