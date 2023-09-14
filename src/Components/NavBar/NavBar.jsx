import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink className="nav-btn" to={"aboutme"}>About</NavLink>
      <NavLink className="nav-btn" to={"skills"}>Skills</NavLink>
      <NavLink className="nav-btn" to={"projects"}>Projects</NavLink>
      <NavLink className="nav-btn" to={"contact"}>Contact</NavLink>
    </nav>
  );
}
