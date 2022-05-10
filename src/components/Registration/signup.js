import React from "react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import {useNavigate} from "react-router-dom"
import * as yup from "yup"
import axios from "axios"

const Signup = () => {
  let navigate = useNavigate()

  const validationSchema = yup.object().shape({
    username: yup.string("Enter the user").required("Username is required").required(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
  })

  const initialValues = {
    username: "",
    password: ""
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response) => {
      navigate(`/login`)
    })
  }

  return (
    <main>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="username">Username</label>
          <ErrorMessage name="username" component="span" />
          <Field id="username" name="username" placeholder="Enter username" type="text" />
          <label htmlFor="password">Password</label>
          <ErrorMessage name="password" component="span" />
          <Field id="password" name="password" placeholder="Enter password" type="text" />
          <button type="submit">Signup</button>
        </Form>
      </Formik>
    </main>
  )
}

export default Signup
