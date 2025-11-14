import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const navItems = [
    //array of nav pages
    { path: "/", label: "Home" },
    { path: "/submitSighting", label: "Submission" },
    { path: "/map", label: "Tracker" },
    { path: "/allsightings", label: "All Sightings" },
    { path: "/resources", label: "Resources" },
  ];
  return (
    <header className="site-header">
      <h1 className="navbar-title">EYE ON THE FLY</h1>
      <nav className="navbar">
        <ul className="nav-links">
          {navItems.map(
            (
              item //loop over navItems
            ) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
