import "./App.css";
import StepOne from "./components/forms/step_one";
import StepTwo from "./components/forms/step_two";
import StepThree from "./components/forms/step_three";
import StepFour from "./components/forms/step_four";

const steps = [{ id: 1, component: <StepOne /> }];
function App() {
  return (
    <div className="flex items-center  h-screen justify-center ">
      <div className="basis-[30%] bg-red-500 h-full">Side Bar</div>
      <div className="basis-[70%]  h-full  ">
        <div className="w-[90%] mx-auto">
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
        </div>
      </div>
    </div>
  );
}

export default App;
