import "./App.css";
import StepOne from "./components/forms/step_one/index";

import StepTwo from "./components/forms/step_two";
import StepThree from "./components/forms/step_three";
import StepFour from "./components/forms/step_four";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [stepNumber, setStepNumber] = useState(1);

  function updateStepNumber(step_number) {
    return setStepNumber(step_number);
  }
  return (
    <div className="flex items-center  h-screen justify-center md:flex-row flex-col  overflow-y-scroll ">
      <div className="  sidebar basis-[30%] ">
        <Sidebar updateStepNumber={updateStepNumber} stepNumber={stepNumber} />
      </div>
      <div className="md:basis-[70%] flex h-full items-center justify-center">
        <div className=" md:w-[80%] mx-auto mt-[9] w-[90%]">
          {stepNumber === 1 ? (
            <StepOne updateStepNumber={updateStepNumber} />
          ) : stepNumber === 2 ? (
            <StepTwo updateStepNumber={updateStepNumber} />
          ) : stepNumber === 3 ? (
            <StepThree updateStepNumber={updateStepNumber} />
          ) : (
            <StepFour updateStepNumber={updateStepNumber} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
