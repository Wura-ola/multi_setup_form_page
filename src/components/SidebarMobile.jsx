import React from "react";
import Button from "./Button";

function SidebarMobile({ value, updateStepNumber, stepNumber }) {
  const isActive = Number(value) === stepNumber;
  const baseClasses =
    "rounded-full w-[50px] h-[50px] flex items-center justify-center text-sm font-semibold border transition-colors";
  const activeClasses =
    "bg-PrimaryLightBlue text-primaryMarineBlue border-transparent";
  const inactiveClasses = "bg-transparent text-white border-white/60";

  return (
    <div className="siderBarMobile">
      <Button
        onClick={() => updateStepNumber(Number(value))}
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
        text={value}
      />
    </div>
  );
}

export default SidebarMobile;
