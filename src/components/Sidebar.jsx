import React from "react";
import SidebarStep from "./SidebarStep";
import SidebarMobile from "./SidebarMobile";

function Sidebar(props) {
  return (
    <div className="flex md:h-screen justify-center md:justify-start w-full">
      <div className="hidden md:flex md:flex-col md:pt-20 md:pl-14 md:h-screen">
        <SidebarStep
          value="1"
          heading="STEP 1"
          info=" YOUR INFO "
          updateStepNumber={props.updateStepNumber}
        />

        <SidebarStep
          value="2"
          heading="STEP 2"
          info=" SELECT PLAN "
          updateStepNumber={props.updateStepNumber}
        />

        <SidebarStep
          value="3"
          heading="STEP 3"
          info=" ADD-ONS "
          updateStepNumber={props.updateStepNumber}
        />
        <SidebarStep
          value="4"
          heading="STEP 4"
          info=" SUMMARY "
          updateStepNumber={props.updateStepNumber}
        />
      </div>
      <div className="md:hidden sidebarstep flex gap-4 px-6 py-6">
        <SidebarMobile value="1" updateStepNumber={props.updateStepNumber} />
        <SidebarMobile value="2" updateStepNumber={props.updateStepNumber} />
        <SidebarMobile value="3" updateStepNumber={props.updateStepNumber} />
        <SidebarMobile value="4" updateStepNumber={props.updateStepNumber} />
      </div>
    </div>
  );
}

export default Sidebar;
