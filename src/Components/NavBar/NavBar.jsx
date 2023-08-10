import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Box from "../Box/Box";

export default function NavBar() {
  return (
    <nav>
        <Box mirrorY mirrorX/>
      <NavLink className="nav-btn">About Me</NavLink>
      <div className="line" />
      <NavLink className="nav-btn">Skills</NavLink>
      <div className="line" />
      <NavLink className="nav-btn">Projects</NavLink>
      <div className="line" />
      <NavLink className="nav-btn">Contact</NavLink>
      <Box mirrorX/>
    </nav>
  );
}
