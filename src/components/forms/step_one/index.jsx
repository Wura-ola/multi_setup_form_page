import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";

// const initialValues = {
//   name: "",
//   email: "",
//   phone: "",
// };
function StepOne(props) {
  // const [values, setValues] = useState(initialValues);
  // const [error, setError] = useState();

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };
  // const handleNameError = () => {
  //   if (values.name === "") {
  //     setError(`Name should not be empty`);
  //   } else if (values?.name.length < 5) {
  //     setError(`Name must not be less than 5 characters`);
  //   } else {
  //     setError("");
  //   }
  // };
  // const handlePhoneError = () => {
  //   if (values.phone === "") {
  //     setError(`Phone Number should not be empty`);
  //   } else if (values?.phone.length < 11) {
  //     setError(`Phone Number must be 11 characters`);
  //   } else {
  //     setError("");
  //   }
  // };
  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };

  // const handleEmailError = (e) => {
  //   e.preventDefault();
  //   if (validateEmail(email)) {
  //     setError("Email is valid.");
  //   } else {
  //     setError("Please enter a valid email address.");
  //   }
  // };
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = {
      email: "",
      name: "",
      phone: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid");
      // handle form submission
    }
    props.updateStepNumber(2);
  };
  return (
    <div>
      {/* {JSON.stringify(values)} */}
      <h1 className=" text-primaryMarineBlue mb-2 text-xl font-extrabold">
        Personal Info
      </h1>
      <p className="text-coolGray text-sm  mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-primaryMarineBlue text-md mt-4">
          Name
        </label>
        <Input
          type="text"
          placeholder="e.g Stephen King"
          handleChange={handleChange}
          name="name"
          id="name"
          value={formData.name}
          // onChange={handleChange}
          // onBlur={handleNameError}
        />
        {/* <p className="text-red-500">{error}</p> */}
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <label htmlFor="email" className="text-primaryMarineBlue text-md mt-4">
          Email Address
        </label>
        <Input
          type="email"
          placeholder="e.g stephenking@gmail.com"
          handleChange={handleChange}
          name="email"
          id="email"
          // onBlur={handleEmailError}
          value={formData.email}
          // onChange={handleChange}
        />
        {/* <p className="text-red-500">{error}</p> */}
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <label htmlFor="phone" className="text-primaryMarineBlue text-md  mt-4">
          Phone Number
        </label>
        <Input
          type="text"
          placeholder="e.g +1234 567 890"
          handleChange={handleChange}
          name="phone"
          id="phone"
          value={formData.phone}
          // onChange={handleChange}
          // onBlur={handlePhoneError}
        />
        {/* <p className="text-red-500">{error}</p> */}
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
