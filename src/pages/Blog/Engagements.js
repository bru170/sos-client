import React, {useContext} from "react"
import AllPosts from "../../components/Posts/AllPosts"
import Header from "../../components/Headers/Header"
import {AuthContextState} from "../../Utils/AuthContextState"
import {Link} from "react-router-dom"

const Engagements = () => {
  const {authState} = useContext(AuthContextState)

  return (
    <>
      <main>
        {authState && (
          <Link to={"./createPost"} aria-label="navigate to pepoles page">
            Create Post
          </Link>
        )}
        <Header header="Engagements" />
        <AllPosts />
      </main>
    </>
  )
}

export default Engagements
