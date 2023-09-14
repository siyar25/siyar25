import "./UpperNav.css";
import profilePic from "../../assets/profile-pic-square.jpeg";
import { GiMoon } from "react-icons/gi";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function UpperNav() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [onHomePage, setOnHomePage] = useState(location.pathname === "/");

  useEffect(() => {
    setOnHomePage(location.pathname === "/");
  }, [location]);

  function handleThemeChange() {
    const root = document.querySelector(":root");
    darkMode ? changeToLight(root) : changeToDark(root);
    setDarkMode((mode) => !mode);
  }

  function changeToDark(root) {
    root.style.setProperty("--bgColor", "var(--bgColorDark)");
    root.style.setProperty("--borderColor", "var(--borderColorDark)");
    root.style.setProperty("--primaryColor", "var(--primaryColorDark)");
    root.style.setProperty("--secondaryColor", "var(--secondaryColorDark)");
    root.style.setProperty("--hoverColor", "var(--hoverColorDark)");
    root.style.setProperty("--activeBgColor", "var(--activeBgColorDark)");
    root.style.setProperty("--activeColor", "var(--activeColorDark)");
  }

  function changeToLight(root) {
    root.style.setProperty("--bgColor", "var(--bgColorLight)");
    root.style.setProperty("--borderColor", "var(--borderColorLight)");
    root.style.setProperty("--primaryColor", "var(--primaryColorLight)");
    root.style.setProperty("--secondaryColor", "var(--secondaryColorLight)");
    root.style.setProperty("--hoverColor", "var(--hoverColorLight)");
    root.style.setProperty("--activeBgColor", "var(--activeBgColorLight)");
    root.style.setProperty("--activeColor", "var(--activeColorLight)");
  }

  return (
    <div className="upper-nav">
      <div className="logo" style={{visibility: `${onHomePage ? "hidden" : "visible"}`}}>
        <NavLink className="name" to={"/"}>
          Siyar
          <br />
          Farouq
        </NavLink>
        <div className="job">
          Full-Stack Developer
          <br />
          from Budapest, Hungary
        </div>
      </div>
      <div className="buttons">
        <div className="theme-btn" onClick={handleThemeChange}>
          <GiMoon />
        </div>
        <NavLink
          className={`profile-pic-container ${onHomePage ? "at-home" : null}`}
          to={"aboutme"}
          style={{display: `${onHomePage ? "none" : "block"}`}}
        >
          <img
            src={profilePic}
            alt="Profile picture of Siyar Farouq"
            className={`profile-pic ${onHomePage ? "at-home" : null}`}
          />
        </NavLink>
      </div>
    </div>
  );
}
