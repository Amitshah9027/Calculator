import React from "react";

function Button(props) {
  return (
    <button
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValues)}
    >
      {props.keyValues}{" "}
    </button>
  );
}
export default Button;
