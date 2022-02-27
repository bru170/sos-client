import axios from "axios"
import {useEffect, useState} from "react"

export const AllPosts = () => {
  const [allPost, setAllPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setAllPosts(response.data)
    })
  }, [])

  return (
    <div className="Posts">
      {allPost.map((value) => {
        return (
          <ul key={value.id}>
            <li>
              <div>{value.title}</div>
              <div>{value.postText}</div>
              <div>{value.author}</div>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default AllPosts
