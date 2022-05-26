import React, {useState, useContext} from "react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import {useNavigate} from "react-router-dom"
import * as yup from "yup"
import axios from "axios"
import {AuthContextState} from "../../Utils/AuthContextState"

const Login = () => {
  const {setAuthState} = useContext(AuthContextState)
  let navigate = useNavigate()

  const validationSchema = yup.object().shape({
    username: yup.string("Enter the user").required("Username is required").required(),
    password: yup.string().required("Password is required")
  })

  const initialValues = {
    username: "",
    password: ""
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error)
      } else {
        localStorage.setItem("accessToken", response.data)
        setAuthState(true)
        navigate(`/`)
      }
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </main>
  )
}

export default Login
