import "./App.css";
import StepOne from "./components/forms/step_one/index";

import StepTwo from "./components/forms/step_two";
import StepThree from "./components/forms/step_three";
import StepFour from "./components/forms/step_four";
import Sidebar from "./components/Sidebar";

// const steps = [{ id: 1, component: <StepOne /> }];
function App() {
  return (
    <div className="flex items-center  h-screen justify-center md:flex-row flex-col  overflow-y-scroll ">
      <div className="  sidebar basis-[30%] ">
        <Sidebar />
      </div>
      <div className="md:basis-[70%] flex h-full items-center justify-center">
        <div className=" md:w-[80%] mx-auto mt-[9] w-[90%]">
          <StepOne />
          {/* <StepTwo />
          <StepThree />
          <StepFour /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
