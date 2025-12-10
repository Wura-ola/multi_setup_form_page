import React from "react";
// import Button from "../../Button";
import Footer from "../../Footer";

const addOns = [
  {
    id: "online-service",
    title: "Online service",
    monthly: "+$1/mo",
    yearly: "+$10/yr",
  },
  {
    id: "larger-storage",
    title: "Larger storage",
    monthly: "+$2/mo",
    yearly: "+$20/yr",
  },
];

function StepFour({
  previousStepNumber,
  updateStepNumber,
  stepNumber,
  billingCycle = "monthly",
}) {
  const isYearly = billingCycle === "yearly";
  const planName = `Arcade (${isYearly ? "Yearly" : "Monthly"})`;
  const planPrice = isYearly ? "$90/yr" : "$9/mo";
  const total = isYearly ? "$120/yr" : "$12/mo";

  return (
    <div className="bg-white md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none px-5 py-6 md:px-0 md:py-0 -mt-16 md:mt-0">
      <h1 className="text-primaryMarineBlue font-semibold text-2xl md:text-3xl mb-2">
        Finishing up
      </h1>
      <p className="text-coolGray tracking-wider leading-6">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-lightGray/40 rounded-lg p-4 md:p-5 mt-6 md:mt-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-primaryMarineBlue font-semibold text-base md:text-lg">
              {planName}
            </p>
            <button
              type="button"
              className="text-coolGray underline text-sm hover:text-primaryMarineBlue"
              onClick={previousStepNumber}
            >
              Change
            </button>
          </div>
          <span className="text-primaryMarineBlue font-semibold">
            {planPrice}
          </span>
        </div>

        <hr className="border-lightGray my-4" />

        <div className="flex flex-col gap-3">
          {addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex items-center justify-between text-sm md:text-base"
            >
              <span className="text-coolGray">{addOn.title}</span>
              <span className="text-primaryMarineBlue font-medium">
                {isYearly ? addOn.yearly : addOn.monthly}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 px-2 md:px-3">
        <span className="text-coolGray text-sm md:text-base">
          Total (per {isYearly ? "year" : "month"})
        </span>
        <span className="text-primaryMarineBlue font-bold text-lg md:text-xl">
          {total}
        </span>
      </div>

      <div className="pb-24 md:pb-0" />
      <Footer
        stepNumber={stepNumber}
        updateStepNumber={updateStepNumber}
        previousStepNumber={previousStepNumber}
        nextText="Confirm"
        onNext={() => updateStepNumber(stepNumber + 1)}
      />
    </div>
  );
}

export default StepFour;
