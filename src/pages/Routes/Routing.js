import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AllPosts from "../Blog/AllPosts"
import Homepage from "../Homepage"
import {CreatePost} from "../Blog/CreatePost"
import People from "../People/People"
import Contact from "../Contact/Contact"
import Engagements from "../Blog/Engagements"

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/people" element={<People />} />
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
