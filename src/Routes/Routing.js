import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Homepage from "../pages/Homepage"
import {CreatePost} from "../pages/Blog/CreatePost"
import People from "../pages/People/People"
import Contact from "../pages/Contact/Contact"
import Engagements from "../pages/Blog/Engagements"
import Post from "../components/Posts/Post"
import AccessibilityStatement from "../pages/AccessibilityStatement/AccessibilityStatement"
import Cookies from "../pages/Cookies/Cookies"

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/people" element={<People />} />
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Router>
  )
}
