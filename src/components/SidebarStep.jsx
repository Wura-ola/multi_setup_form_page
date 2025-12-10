import React from "react";
import Button from "./Button";

function SidebarStep(props) {
  const isActive = Number(props.value) === props.stepNumber;
  const baseClasses =
    "rounded-full w-[45px] h-[45px] flex items-center justify-center text-sm font-semibold border transition-colors";
  const activeClasses =
    "bg-PrimaryLightBlue text-primaryMarineBlue border-transparent";
  const inactiveClasses = "bg-transparent text-white border-white/60";

  return (
    <div className="hidden md:block">
      <div className="flex md:mt-10 md:gap-5">
        <Button
          onClick={() => props.updateStepNumber(Number(props.value))}
          className={`${baseClasses} ${
            isActive ? activeClasses : inactiveClasses
          }`}
          text={props.value}
        />
        <div className="block">
          <h2 className="text-coolGray">{props.heading}</h2>
          <h3 className=" text-white">{props.info}</h3>
        </div>
      </div>
    </div>
  );
}

export default SidebarStep;
