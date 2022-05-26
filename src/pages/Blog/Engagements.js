import React, {useContext} from "react"
import AllPosts from "../../components/Posts/AllPosts"
import Header from "../../components/Headers/Header"

const Engagements = () => {
  return (
    <>
      <main>
        <Header header="Engagements" />
        <AllPosts />
      </main>
    </>
  )
}

export default Engagements
