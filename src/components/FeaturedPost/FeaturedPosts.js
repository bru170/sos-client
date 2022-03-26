import axios from "axios"
import {useEffect, useState} from "react"
import Date from "../Date/Date"
import {Link} from "react-router-dom"
import styles from "./FeaturedPosts.module.scss"

export const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts/featuredPosts").then((response) => {
      setFeaturedPosts(response.data)
    })
  }, [])

  return (
    <article className={styles.article}>
      {featuredPosts.map((value) => {
        return (
          <ul key={value.id}>
            <li>
              <image>{value.image}</image>
              <Link to={`/post/${value.id}`}>{value.title}</Link>
              <br></br>
              <Date format={"MMMM D, YYYY"}>{value.updatedAt}</Date>
            </li>
          </ul>
        )
      })}
    </article>
  )
}

export default FeaturedPosts
