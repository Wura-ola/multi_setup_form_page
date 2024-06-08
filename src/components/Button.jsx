import React from "react";

function Button(props) {
  return (
    <button
      className={`
    bg-primaryMarineBlue text-PrimaryLightBlue  px-3 py-2 rounded ${props.className}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
