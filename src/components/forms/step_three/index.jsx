import React, { useState } from "react";
import Footer from "../../Footer";

const addOns = [
  {
    id: "online-service",
    title: "Online service",
    description: "Access to multiplayer games",
    monthly: "+$1/mo",
    yearly: "+$10/yr",
  },
  {
    id: "larger-storage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthly: "+$2/mo",
    yearly: "+$20/yr",
  },
  {
    id: "customizable-profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthly: "+$2/mo",
    yearly: "+$20/yr",
  },
];

function StepThree({
  stepNumber,
  updateStepNumber,
  previousStepNumber,
  billingCycle,
  setBillingCycle,
}) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const isYearly = billingCycle === "yearly";

  const toggleAddOn = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none px-5 py-6 md:px-0 md:py-0 -mt-16 md:mt-0">
      <h1 className="text-primaryMarineBlue font-semibold text-2xl md:text-3xl mb-2">
        Pick add-ons
      </h1>
      <p className="text-coolGray tracking-wider leading-6">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="my-6 md:my-8 rounded-lg bg-lightGray py-3 px-4 flex flex-col md:flex-row items-center md:items-center justify-between md:justify-center gap-3 md:gap-6 text-center md:text-left w-full">
        <span
          className={`font-bold ${
            !isYearly ? "text-primaryMarineBlue" : "text-coolGray"
          }`}
        >
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={isYearly}
          onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
          className="relative h-7 w-14 rounded-full bg-primaryMarineBlue transition-colors"
        >
          <span
            className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${
              isYearly ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`font-bold ${
            isYearly ? "text-primaryMarineBlue" : "text-coolGray"
          }`}
        >
          Yearly
        </span>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-8">
        {addOns.map((addOn) => {
          const isSelected = selectedAddOns.includes(addOn.id);

          return (
            <label
              key={addOn.id}
              className={`flex items-start md:items-center gap-4 rounded-xl border px-4 py-4 md:px-5 md:py-5 transition-colors cursor-pointer w-full ${
                isSelected
                  ? "border-PrimaryPurplishBlue bg-PrimaryLightBlue/10"
                  : "border-coolGray/60 hover:border-PrimaryPurplishBlue"
              }`}
            >
              <input
                type="checkbox"
                className="h-5 w-5 accent-PrimaryPurplishBlue cursor-pointer"
                checked={isSelected}
                onChange={() => toggleAddOn(addOn.id)}
              />
              <div className="flex-1">
                <p className="text-primaryMarineBlue font-semibold text-base md:text-lg">
                  {addOn.title}
                </p>
                <p className="text-coolGray text-sm md:text-base leading-relaxed">
                  {addOn.description}
                </p>
              </div>
              <span className="text-PrimaryPurplishBlue font-semibold text-sm md:text-base md:self-center self-start whitespace-nowrap">
                {isYearly ? addOn.yearly : addOn.monthly}
              </span>
            </label>
          );
        })}
      </div>

      <Footer
        stepNumber={stepNumber}
        updateStepNumber={updateStepNumber}
        previousStepNumber={previousStepNumber}
      />
    </div>
  );
}

export default StepThree;
