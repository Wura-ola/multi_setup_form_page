import React from "react";
import Input from "../../Input";
import Button from "../../Button";

function StepOne() {
  return (
    <div>
      <h1>Personal Info</h1>
      <p> Please provide your name, email address, and phone number.</p>
      <div>
        <Input />
        <Input />
        <Input />
        <Button />
      </div>
    </div>
  );
}

export default StepOne;
