import React, {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import styles from "./AllPosts.module.scss"
import axios from "axios"
import Date from "../Date/Date"

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
      <article className={styles.article}>
        <p>IMAGE HERE</p>
        <h2>{post.title}</h2>
        <p>
          Created on <Date format={"MMMM D, YYYY"}>{post.updatedAt}</Date> by{" "}
          <span style={{textTransform: "capitalize"}}>{post.author}</span>
        </p>
        <p>{post.postText}</p>
      </article>
    </main>
  )
}

export default Post
