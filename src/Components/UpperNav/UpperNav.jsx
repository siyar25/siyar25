import "./UpperNav.css";
import profilePic from "../../assets/profile-pic-square.jpeg";
import { GiMoon } from "react-icons/gi"
import { useState } from "react";

export default function UpperNav() {

  const [darkMode, setDarkMode] = useState(false)

  function handleThemeChange() {
    const root = document.querySelector(":root");

    darkMode ? changeToLight(root) : changeToDark(root);

    setDarkMode(mode => !mode);
  }

  function changeToDark(root) {
    root.style.setProperty("--bgColor", "var(--bgColorDark)");
    root.style.setProperty("--borderColor", "var(--borderColorDark)");
    root.style.setProperty("--primaryColor", "var(--primaryColorDark)");
    root.style.setProperty("--secondaryColor", "var(--secondaryColorDark)");
    root.style.setProperty("--hoverColor", "var(--hoverColorDark)");
  }

  function changeToLight(root) {
    root.style.setProperty("--bgColor", "var(--bgColorLight)");
    root.style.setProperty("--borderColor", "var(--borderColorLight)");
    root.style.setProperty("--primaryColor", "var(--primaryColorLight)");
    root.style.setProperty("--secondaryColor", "var(--secondaryColorLight)");
    root.style.setProperty("--hoverColor", "var(--hoverColorLight)");
  }

  return (
    <div className="upper-nav">
      <div className="logo">
        <div className="name">
          Farouq
          <br />
          Siyar
        </div>
        <div className="job">
          Full-Stack Developer
          <br />
          from Budapest
        </div>
      </div>
      <div className="buttons">
        <div className="theme-btn" onClick={handleThemeChange}><GiMoon /></div>
        <div className="profile-pic-container">
        <img src={profilePic} alt="Profile picture of Siyar Farouq" id="profile-pic"/>

        </div>
      </div>
    </div>
  );
}
