import React from "react";
import classes from "./Checkout.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      street: "",
      postal: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      street: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      postal: Yup.string()
        .min(5, "Must be 5 characters")
        .max(5, "Must be 5 characters")
        .required("Required"),
      city: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      props.onConfirm(values);
      console.log(values);
    },
  });
  const nameControlClasses = `${classes.control} ${
    formik.touched.name && formik.errors.name && classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formik.touched.street && formik.errors.street && classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formik.touched.postal && formik.errors.postal && classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formik.touched.city && formik.errors.city && classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Your Street</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.street}
        />
        {formik.touched.street && formik.errors.street && (
          <div>{formik.errors.street}</div>
        )}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          name="postal"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postal}
        />
        {formik.touched.postal && formik.errors.postal && (
          <div>{formik.errors.postal}</div>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city && (
          <div>{formik.errors.city}</div>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
