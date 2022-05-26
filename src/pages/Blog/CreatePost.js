import React from "react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import {useNavigate} from "react-router-dom"
import * as yup from "yup"
import axios from "axios"

export const CreatePost = () => {
  let navigate = useNavigate()

  const validationSchema = yup.object().shape({
    title: yup.string("Enter the title").required("Title is required").required(),
    author: yup.string("Enter the author").required("Author is required").required(),
    postText: yup.string("Enter the post").required("Post is required").required()
  })

  const initialValues = {
    title: "",
    username: "Barbara Ninos",
    author: "",
    postText: "",
    tags: "Accessibility",
    categories: "News",
    featuredImage: {},
    featuredImageAltText: "Some alt text"
  }

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/posts", data, {
        headers: {
          accessToken: localStorage.getItem("accessToken")
        }
      })
      .then((response) => {
        if (response.data.error) {
          alert("Error")
        } else {
          console.log({response})
          navigate(`/engagements`)
        }
      })
  }

  return (
    <main>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({setFieldValue}) => (
          <Form>
            <label htmlFor="inputAddTitle">Title</label>
            <ErrorMessage name="title" component="span" />
            <Field id="inputAddTitle" name="title" placeholder="Enter title" type="text" />
            <label htmlFor="inputAddAuthor">Author</label>
            <ErrorMessage name="author" component="span" />
            <Field id="inputAddAuthor" name="author" placeholder="Enter author" type="text" />
            <label htmlFor="inputAddPostText">Post</label>
            <ErrorMessage name="postText" component="span" />
            <Field id="inputAddPostText" name="postText" placeholder="Enter post" type="text" />
            <label htmlFor="image">Image</label>
            <ErrorMessage name="image" component="span" />
            <input
              id="featuredImage"
              name="featuredImage"
              placeholder="Upload featured Image"
              type="file"
              accept="image/*"
              onChange={(event) => {
                setFieldValue("featuredImage", event.target.files[0])
              }}
            />
            <button type="submit">Create Post</button>
          </Form>
        )}
      </Formik>
    </main>
  )
}
