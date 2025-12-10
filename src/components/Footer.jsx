import React from "react";
import Button from "../components/Button";

function Footer({
  stepNumber,
  updateStepNumber,
  previousStepNumber,
  nextText = "Next Step",
  onNext,
  hideBack = false,
}) {
  return (
    <div className="md:mt-28 mt-8 md:static fixed bottom-0 left-0 right-0 bg-white md:bg-transparent px-5 md:px-0 py-4 md:py-0 shadow-[0_-10px_24px_rgba(0,0,0,0.06)] md:shadow-none z-10">
      <div className="flex items-center justify-between gap-4 max-w-3xl mx-auto">
        {hideBack ? (
          <span />
        ) : (
          <Button
            className="text-coolGray text-sm md:text-base px-3 py-2 md:px-4 md:py-2 rounded disabled:opacity-40"
            text="Go back"
            type="button"
            onClick={previousStepNumber}
            disabled={stepNumber === 1}
          />
        )}
        <Button
          className="bg-primaryMarineBlue text-PrimaryLightBlue px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md text-sm md:text-base"
          text={nextText}
          type="button"
          onClick={() => (onNext ? onNext() : updateStepNumber(stepNumber + 1))}
        />
      </div>
    </div>
  );
}

export default Footer;
