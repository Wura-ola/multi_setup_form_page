import "./App.css";
import StepOne from "./components/forms/step_one/index";
import StepTwo from "./components/forms/step_two/index";
import StepThree from "./components/forms/step_three/index";
import StepFour from "./components/forms/step_four";
import StepFive from "./components/forms/step_five";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [stepNumber, setStepNumber] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly");

  function updateStepNumber(step) {
    return setStepNumber(step);
  }
  function previousStepNumber() {
    if (stepNumber > 1) {
      setStepNumber(stepNumber - 1);
    }
  }
  return (
    <div className="min-h-screen bg-[#f8f9ff] md:bg-transparent flex md:flex-row flex-col md:items-center md:justify-center lg:p-6">
      <div className="sidebar w-full md:w-auto md:basis-[35%] lg:basis-[30%] md:rounded-2xl overflow-hidden">
        <Sidebar
          className="md:rounded"
          updateStepNumber={updateStepNumber}
          stepNumber={stepNumber}
        />
      </div>
      <div className="w-full md:basis-[65%] lg:basis-[70%] bg-white shadow-xl md:shadow-none flex items-start md:items-center justify-center md:p-8 lg:p-10 px-5 pb-12 -mt-14 md:mt-0 lg::ml-6">
        <div className="md:w-[88%] lg:w-[80%] w-full mx-auto">
          {stepNumber === 1 ? (
            <StepOne updateStepNumber={updateStepNumber} />
          ) : stepNumber === 2 ? (
            <StepTwo
              stepNumber={stepNumber}
              updateStepNumber={updateStepNumber}
              previousStepNumber={previousStepNumber}
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
            />
          ) : stepNumber === 3 ? (
            <StepThree
              stepNumber={stepNumber}
              updateStepNumber={updateStepNumber}
              previousStepNumber={previousStepNumber}
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
            />
          ) : stepNumber === 4 ? (
            <StepFour
              stepNumber={stepNumber}
              updateStepNumber={updateStepNumber}
              previousStepNumber={previousStepNumber}
              billingCycle={billingCycle}
            />
          ) : (
            <StepFive />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
