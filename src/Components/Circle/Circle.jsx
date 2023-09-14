import { useEffect, useState } from "react";
import "./Circle.css";
import { useLocation } from "react-router-dom";

export default function Circle() {
  const location = useLocation();
  const [positions, setPositions] = useState([0, 0])
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setPositions((positions) => positions.map(position => position = getRandomPosition()))
    setScale((scale) => scale = getRandomScale())
  }, [location.pathname])

  function getRandomPosition() {
    return Math.floor(Math.random() * 90) - 5;
  }

  function getRandomScale() {
    return Math.floor(Math.random() * 2) + 1;
  }

  return (
    <div
      className="circle"
      style={{
        translate: `${positions[0]}dvw ${positions[1]}dvh`,
        scale: `${scale}`
      }}
    ></div>
  );
}
