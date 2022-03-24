import axios from "axios"
import {useEffect, useState} from "react"
import styles from "./AllPosts.module.scss"

export const AllPosts = () => {
  const [allPost, setAllPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setAllPosts(response.data)
    })
  }, [])

  return (
    <article className={styles.article}>
      {allPost.map((value) => {
        return (
          <ul key={value.id}>
            <li>
              <div>{value.title}</div>
              <div>{value.author}</div>
            </li>
          </ul>
        )
      })}
    </article>
  )
}

export default AllPosts
