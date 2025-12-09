import React from "react";
import Button from "./Button";

function SidebarMobile({ value, updateStepNumber }) {
  return (
    <div className="siderBarMobile">
      <Button
        onClick={() => updateStepNumber(Number(value))}
        className="rounded-full w-[50px] h-[50px] text-primaryMarineBlue bg-PrimaryLightBlue"
        text={value}
      />
    </div>
  );
}

export default SidebarMobile;
