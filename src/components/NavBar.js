import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <li>
                <NavLink to="/" >
                   홈화면
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" >
                    프로필 화면
                </NavLink>
            </li>
        </nav>
    )
}

export default NavBar;