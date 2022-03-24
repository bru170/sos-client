import axios from "axios"
import {useEffect, useState} from "react"
import Date from "../Date/Date"
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
              <a href="/">{value.title}</a>
              <br></br>
              <Date date={value.updatedAt} />
            </li>
          </ul>
        )
      })}
    </article>
  )
}

export default FeaturedPosts
