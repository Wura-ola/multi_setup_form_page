import React from "react";

function StepFour() {
  return (
    <div>
      <div>
        <button onClick={() => props.updateStepNumber(4)}>Go forward 4</button>
        <button onClick={() => props.previousStepNumber(3)}>Go back 3 </button>
      </div>
    </div>
  );
}

export default StepFour;
