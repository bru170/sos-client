import React, {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import axios from "axios"

const Post = () => {
  const [post, setPost] = useState([])
  let {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/postById/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [id])

  return (
    <main>
      {/* <div>
        <Link path="/engagements">Home</Link>/<Link path="/engagements">Engagements</Link>/
        {post.title}
      </div> */}
      <article>
        <p>IMAGE HERE</p>
        <h2>{post.title}</h2>
        <p> {post.author}</p>
        <p>{post.postText}</p>
      </article>
    </main>
  )
}

export default Post
