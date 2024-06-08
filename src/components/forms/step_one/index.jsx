import React from "react";
import Input from "../../Input";
import Button from "../../Button";

function StepOne() {
  return (
    <div>
      <h1 className=" text-primaryMarineBlue mb-2 text-lg">Personal Info</h1>
      <p className="text-coolGray text-sm  mb-4">
        {" "}
        Please provide your name, email address, and phone number.
      </p>
      <div>
        <label className="text-primaryMarineBlue text-md mt-4">Name</label>
        <Input placeholder="e.g Stephen King" />
        <label className="text-primaryMarineBlue text-md mt-4">
          Email Address
        </label>
        <Input placeholder="e.g stephenking@gmail.com " />
        <label className="text-primaryMarineBlue text-md  mt-4">
          Phone Number
        </label>
        <Input placeholder="e.g +1234 567 890" />
        <div className="flex justify-end pt-20">
          <Button text="Next Step" />
        </div>
      </div>
    </div>
  );
}

export default StepOne;
