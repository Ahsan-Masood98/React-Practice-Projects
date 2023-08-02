import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./formikForm.css";

const FormicForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: yup.string().email("Invalid Email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
        </div>
        <div className="input-container">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <p>{formik.errors.lastName}</p>
          )}
        </div>
        <div className="input-container">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormicForm;
