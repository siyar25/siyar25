import React from "react";
import "./Box.css";

export default function Box({ mirrorY, mirrorX }) {
  const styles = {
    transform: mirrorY ? "scaleX(-1)" : "",
  };
  return (
    <div
      className="box"
      style={{
        transform: `${mirrorY ? "scaleX(-1)" : ""} ${
          mirrorX ? "scaleY(-1)" : ""
        }`,
      }}
    >
      <div className="boxline horizontal-line"></div>
      <div className="boxline vertical-line"></div>
    </div>
  );
}
