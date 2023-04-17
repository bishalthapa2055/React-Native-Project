import React from "react";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(20, "Too Long")
    .required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number()
    // .max(10, "Must Be of 10 digits")
    .required("Phone number is required"),
  comment: Yup.string()
    .min(5, "Too short")
    .max(50, "Too long")
    .required("Comment is required"),
});

export default Schema;
