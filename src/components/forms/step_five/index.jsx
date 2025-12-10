import React from "react";
import thankYouIcon from "../../../assets/images/icon-thank-you.svg";

function StepFive() {
  return (
    <div className="bg-white md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none px-5 py-10 md:px-0 md:py-0 -mt-12 md:mt-0 text-center flex flex-col items-center gap-4">
      <img
        src={thankYouIcon}
        alt="Thank you"
        className="w-16 h-16 md:w-20 md:h-20"
      />
      <h1 className="text-primaryMarineBlue font-semibold text-2xl md:text-3xl">
        Thank you!
      </h1>
      <p className="text-coolGray leading-7 md:w-[80%]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;
