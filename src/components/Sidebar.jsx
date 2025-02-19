import React from "react";
import SidebarStep from "./SidebarStep";

function Sidebar() {
  return (
    <div className=" flex h-screen ">
      <div className="flex flex-col pt-20 pl-14 h-screen">
        <SidebarStep value="1" heading="STEP 1" info=" YOUR INFO " />
        <SidebarStep value="2" heading="STEP 2" info=" YOUR INFO " />
        <SidebarStep value="3" heading="STEP 3" info=" YOUR INFO " />
        <SidebarStep value="4" heading="STEP 4" info=" YOUR INFO " />
      </div>
    </div>
  );
}

export default Sidebar;
