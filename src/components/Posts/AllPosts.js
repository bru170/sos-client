import axios from "axios"
import {useEffect, useState} from "react"
import styles from "./AllPosts.module.scss"
import {Link} from "react-router-dom"

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
              <Link to={`/post/${value.id}`}>{value.title}</Link>
              <div>{value.author}</div>
            </li>
          </ul>
        )
      })}
    </article>
  )
}

export default AllPosts
