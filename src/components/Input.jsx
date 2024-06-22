import React from "react";

function Input(props) {
  return (
    <input
      className="w-[100%]  border-lightGray border-2 rounded  mb-4 pl-3 py-[5px] hover:border-PrimaryPurplishBlue  outline-none"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      name={props.name}
    />
  );
}

export default Input;
