import { Link, NavLink } from "react-router-dom";
import "../css/default.css";
import { HomeOutlined } from '@ant-design/icons';

function NavBar() {
    return (
        <nav className="nav_bar_wrap">
            <li>
                <Link to="/">
                <HomeOutlined />
                </Link>
            </li>
            <li>
                <NavLink to="/hall">
                    Wedding Hall
                </NavLink>
            </li>
            {/* <li>
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
            </li> */}
            <li>
                <NavLink to="/profile">
                    profile
                </NavLink>
            </li>
        </nav>
    )
}

export default NavBar;