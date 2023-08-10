import Box from "../Box/Box";
import "./UpperNav.css";

export default function UpperNav() {
  return (
    <div className="upper-nav">
      <Box mirrorY/>
      <div className="name">Farouq Siyar</div>
      <div className="line" />
      <Box />
    </div>
  );
}
