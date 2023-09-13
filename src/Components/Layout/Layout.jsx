import NavBar from "../NavBar/NavBar";
import UpperNav from "../UpperNav/UpperNav";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <div className="content">
      <UpperNav />
      <NavBar />
      </div>
    </div>
  );
}
