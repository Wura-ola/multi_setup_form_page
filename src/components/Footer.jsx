import React from "react";
import Button from "../components/Button";

function Footer({ stepNumber, updateStepNumber, previousStepNumber }) {
  return (
    <div className=" mt-28">
      <div className="flex justify-between items-baseline">
        <Button
          className="  text-coolGray "
          text="Go back"
          type="submit"
          onClick={previousStepNumber}
          disabled={stepNumber === 1}
        />
        <Button
          className=" bg-primaryMarineBlue text-PrimaryLightBlue  px-3 py-2 rounded"
          text="Next Step"
          type="submit"
          onClick={() => updateStepNumber(stepNumber + 1)}
          disabled={stepNumber === 4}
        />
      </div>
    </div>
  );
}

export default Footer;
