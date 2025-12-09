import React from "react";
import Footer from "../../Footer";

function StepThree({ stepNumber, updateStepNumber, previousStepNumber }) {
  return (
    <div>
      {/* TODO: add add-ons content */}
      <Footer
        stepNumber={stepNumber}
        updateStepNumber={updateStepNumber}
        previousStepNumber={previousStepNumber}
      />
    </div>
  );
}

export default StepThree;
