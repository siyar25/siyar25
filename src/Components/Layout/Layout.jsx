import Circle from "../Circle/Circle";
import NavBar from "../NavBar/NavBar";
import UpperNav from "../UpperNav/UpperNav";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <div className="content">
      <UpperNav />
      <Circle width={43.5} height={43.5} top={16.7} right={58.4}/>
      <Circle width={41} height={41} top={-10} right={11.2}/>
      <Circle width={34.375} height={34.375} top={17.7} right={-7.3}/>
      <NavBar />
      </div>
    </div>
  );
}
