import "./Home.css";
import profilePic from "../../assets/profile-pic-square.jpeg";

export default function Home() {
  return (
    <div className="page">
      <div className="home-pic-container">
        <img
          src={profilePic}
          alt="Profile picture of Siyar Farouq"
          className="home-pic"
        />
      </div>
      <div className="home-info">
        <div className="home-name">Siyar Farouq</div>
        <div className="home-job">
          Full-Stack Developer from Budapest, Hungary
        </div>
      </div>
    </div>
  );
}
