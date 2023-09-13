import "./Circle.css";

export default function Circle({width, height, top, right}) {
  return (
    <div
      className="circle"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        top: `${top}rem`,
        right: `${right}rem`
      }}
    ></div>
  );
}
