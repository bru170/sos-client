import axios from "axios"
import {useEffect, useState} from "react"
import styles from "./Categories.module.scss"
import {Link} from "react-router-dom"

export const Categories = () => {
  const [allPost, setAllPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setAllPosts(response.data)
    })
  }, [])

  return (
    <div className={styles.container}>
      {allPost.map((value) => {
        return (
          <ul key={value.id}>
            <li>
              <Link to={`/post/${value.id}`}>{value.categories}</Link>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default Categories
