import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Forms = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email("Email is Invalid").required("Email is Required"),
    age: yup
      .number("Age is rquired")
      .positive("Must be Positive Number")
      .required("Age is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password doesnt match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        {errors && errors.fullName && <p>{errors.fullName.message}</p>}
        <br />
        <input type="text" placeholder="Email" {...register("email")} />
        {errors && errors.email && <p>{errors.email.message}</p>}
        <br />
        <input type="number" placeholder="Age" {...register("age")} />
        {errors && errors.age && <p>{errors.age.message}</p>}
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors && errors.password && <p>{errors.password.message}</p>}
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors && errors.confirmPassword && (
          <p>{errors.confirmPassword.message}</p>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Forms;
