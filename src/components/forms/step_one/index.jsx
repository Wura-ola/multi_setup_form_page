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
  const [error, setError] = useState();

  const handleChange = () => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formValidate = () => {
    if (values.name === "") {
      setError("name should not be empty");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    formValidate();
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
      <form onSubmit={onSubmit}>
        <label htmlFor="name" className="text-primaryMarineBlue text-md mt-4">
          Name
        </label>
        <Input
          placeholder="e.g Stephen King"
          handleChange={handleChange}
          name="name"
          id="name"
        />
        <p className="text-red-500">{error}</p>
        <label htmlFor="email" className="text-primaryMarineBlue text-md mt-4">
          Email Address
        </label>
        <Input
          placeholder="e.g stephenking@gmail.com"
          handleChange={handleChange}
          name="email"
          id="email"
        />
        <label htmlFor="phone" className="text-primaryMarineBlue text-md  mt-4">
          Phone Number
        </label>
        <Input
          placeholder="e.g +1234 567 890"
          handleChange={handleChange}
          name="phone"
          id="phone"
        />

        <div className="flex justify-end pt-20">
          <Button
            className=" bg-primaryMarineBlue text-PrimaryLightBlue  px-3 py-2 rounded"
            text="Next Step"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default StepOne;
