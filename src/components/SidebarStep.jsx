import React from "react";
import Button from "./Button";

function SidebarStep(props) {
  return (
    <div>
      <div className="flex mt-5 gap-5">
        <Button
          className=" rounded-full w-[45px]  text-primaryMarineBlue bg-PrimaryLightBlue"
          text={props.value}
        />
        <div>
          <h2 className="text-coolGray">{props.heading}</h2>
          <h3 className=" text-white">{props.info}</h3>
        </div>
      </div>
    </div>
  );
}

export default SidebarStep;
