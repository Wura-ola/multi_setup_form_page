import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};
function StepOne() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {JSON.stringify(values)}
      <h1 className=" text-primaryMarineBlue mb-2 text-xl font-extrabold">
        Personal Info
      </h1>
      <p className="text-coolGray text-sm  mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <div>
        <label className="text-primaryMarineBlue text-md mt-4">Name</label>
        <Input
          placeholder="e.g Stephen King"
          handleChange={handleChange}
          name="name"
        />
        <label className="text-primaryMarineBlue text-md mt-4">
          Email Address
        </label>
        <Input
          placeholder="e.g stephenking@gmail.com"
          handleChange={handleChange}
          name="email"
        />
        <label className="text-primaryMarineBlue text-md  mt-4">
          Phone Number
        </label>
        <Input
          placeholder="e.g +1234 567 890"
          handleChange={handleChange}
          name="phone"
        />
        <div className="flex justify-end pt-20">
          <Button
            className=" bg-primaryMarineBlue text-PrimaryLightBlue  px-3 py-2 rounded"
            text="Next Step"
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;
