import React from "react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as yup from "yup"
import axios from "axios"

export const AddNewPerson = () => {
  const validationSchema = yup.object().shape({
    name: yup.string("Enter the name").required("Name is required"),
    workPlace: yup.string("Enter the workPlace").required("Work Place is required"),
    email: yup.string("Enter the email").required("Email is required"),
    bioText: yup.string("Enter the bio").required("Bio is required"),
    image: yup.string("Upload an image").required("Image is required")
  })

  const initialValues = {
    name: "",
    workPlace: "Barbara Ninos",
    email: "",
    bioText: "",
    image: ""
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/people", data).then((response) => {
      console.log("It worked", {data})
    })
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <label htmlFor="name">Name</label>
        <ErrorMessage name="name" component="span" />
        <Field id="name" name="name" placeholder="Enter full name" type="text" />
        <label htmlFor="workPlace">Work Place</label>
        <ErrorMessage name="workPlace" component="span" />
        <Field
          id="workPlace"
          name="workPlace"
          placeholder="Enter university / organisation where they work"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <ErrorMessage name="email" component="span" />
        <Field id="email" name="email" placeholder="Enter email" type="text" />
        <label htmlFor="bioText">About Text</label>
        <ErrorMessage name="bioText" component="span" />
        <Field id="bioText" name="bioText" placeholder="Enter bio text" type="text" />
        <label htmlFor="image">Image</label>
        <ErrorMessage name="image" component="span" />
        <Field id="about" name="image" placeholder="Upload image" type="file" accept="image/*" />
        <button type="submit">Add Team Member</button>
      </Form>
    </Formik>
  )
}
