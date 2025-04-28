// components/Nav.tsx

import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li>
                    <Link className="nav-link" to="/home">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/login">
                        <span>Login</span>
                    </Link>
                </li>
                {/* <li>
                    <a className="nav-link" href="#sobre">
                        <span>Sobre</span>
                    </a>
                </li> */}
            </ul>
        </nav>
    );
};