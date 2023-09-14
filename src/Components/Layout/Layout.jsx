import { Outlet } from "react-router-dom";
import Circle from "../Circle/Circle";
import NavBar from "../NavBar/NavBar";
import UpperNav from "../UpperNav/UpperNav";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <div className="content">
      <UpperNav />
      <Outlet />
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>

      <NavBar />
      </div>
    </div>
  );
}
