import React from "react";
import Button from "./Button";

function SidebarStep(props) {
  return (
    <div className="hidden md:block">
      <div className="flex md:mt-10 md:gap-5">
        <Button
          onClick={() => props.updateStepNumber(Number(props.value))}
          className="rounded-full w-[45px] text-primaryMarineBlue bg-PrimaryLightBlue"
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
