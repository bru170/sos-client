import axios from "axios"
import {useEffect, useState} from "react"

export const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/posts/featuredPosts").then((response) => {
      setFeaturedPosts(response.data)
    })
  }, [])

  return (
    <div className="Posts">
      {featuredPosts.map((value) => {
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

export default FeaturedPosts
