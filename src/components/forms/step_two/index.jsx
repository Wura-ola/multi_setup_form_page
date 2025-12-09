import React, { useState } from "react";
import Card from "../../Card";
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import Footer from "../../Footer";

function StepTwo({ stepNumber, updateStepNumber, previousStepNumber }) {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "arcade",
      name: "Arcade",
      icon: arcade,
      monthly: "$9/mo",
      yearly: "$90/yr",
    },
    {
      id: "advanced",
      name: "Advanced",
      icon: advanced,
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
    { id: "pro", name: "Pro", icon: pro, monthly: "$15/mo", yearly: "$150/yr" },
  ];

  const isYearly = billingCycle === "yearly";

  return (
    <div className="bg-white md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none px-5 py-6 md:px-0 md:py-0 -mt-16 md:mt-0">
      <h1 className="text-primaryMarineBlue font-semibold text-2xl md:text-3xl mb-2">
        Select your plan
      </h1>
      <p className="text-coolGray tracking-wider leading-6">
        You have the option of monthly or yearly billing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            src={plan.icon}
            alt={`${plan.name} plan`}
            title={plan.name}
            price={isYearly ? plan.yearly : plan.monthly}
            subtext={isYearly ? "2 months free" : ""}
          />
        ))}
      </div>
      <div className="my-8 md:my-10 rounded-lg bg-lightGray py-3 flex items-center justify-center gap-6">
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
      <Footer
        stepNumber={stepNumber}
        updateStepNumber={updateStepNumber}
        previousStepNumber={previousStepNumber}
      />
    </div>
  );
}

export default StepTwo;
