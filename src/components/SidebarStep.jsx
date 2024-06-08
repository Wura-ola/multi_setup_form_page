import React from "react";
import Button from "./Button";

function SidebarStep(props) {
  return (
    <div>
      <div className="flex mt-5">
        <Button
          className=" rounded-2xl  text-primaryMarineBlue bg-PrimaryLightBlue"
          text={props.value}
        />
        <div>
          <h2 className="text-primaryLightBlue">{props.heading}</h2>
          <h3>{props.info}</h3>
        </div>
      </div>
    </div>
  );
}

export default SidebarStep;
