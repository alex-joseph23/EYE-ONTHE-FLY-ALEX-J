import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
    const navItems = [
        {path: "/", label: "Home"},
        {path: "/map", label: "Map"},
        {path:"/submitSighting", label: "Make A Submission"},
        {path: "/resources", label: "Resources"}
    ];
    return ( <header className="site-header">
        <nav className="navbar">
            <ul className="nav-links">
                {navItems.map((item) => ( <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                </li>))}
            </ul>
        </nav>
    </header>);}
export default Header;