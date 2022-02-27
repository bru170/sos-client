import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AllPosts from "../Blog/AllPosts"
import {CreatePost} from "../Blog/CreatePost"
import Homepage from "../Homepage"
import People from "../People/People"

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/engagements" element={<AllPosts />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </Router>
  )
}
