import React from "react"
import FeaturedPosts from "../components/FeaturedPost/FeaturedPosts"
import {Link} from "react-router-dom"
import Header from "../components/Headers/Header"

const Homepage = () => {
  return (
    <>
      <main>
        <Header header={"Supporting Informal Welfare Work in the Digitized State"} />
        <p>
          We are a Nordic research group that investigates informal support to citizens who struggle
          to access and use digital welfare services in Denmark, Norway, and Sweden. Digitalization
          in the Nordic countries has largely covered all welfare areas; social service, public
          education, and health care. However, many citizens find public digital services difficult
          to navigate and use due to inaccessible design or lack of support. To provide better
          digital services and support, we are interested in understanding how citizens are helped
          and the kind of barriers citizens encounter.
        </p>
        <p>
          This research project is funded by{" "}
          <a
            aria-label="link to NordForks webpage"
            href="https://www.nordforsk.org/projects/infrastructures-partially-digital-citizens-supporting-informal-welfare-work-digitized"
          >
            Nordforsk
          </a>
        </p>
        <br></br>
        <Link to={"./people"} aria-label="navigate to pepoles page">
          Meet the team behind the project
        </Link>
        <Link to={"./createPost"} aria-label="navigate to pepoles page">
          Create Post
        </Link>
        <br></br>
        <br></br>
        <FeaturedPosts />
      </main>
    </>
  )
}

export default Homepage
