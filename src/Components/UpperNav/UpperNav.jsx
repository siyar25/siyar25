import "./UpperNav.css";
import profilePic from "../../assets/profile-pic-square.jpeg";

export default function UpperNav() {
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
        <div className="theme-btn">🌙</div>
        <div className="profile-pic-container">
        <img src={profilePic} alt="Profile picture of Siyar Farouq" id="profile-pic"/>

        </div>
      </div>
    </div>
  );
}
