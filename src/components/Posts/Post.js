import React, {useEffect, useState, useContext} from "react"
import {useParams, Link} from "react-router-dom"
import styles from "./AllPosts.module.scss"
import axios from "axios"
import Date from "../Date/Date"
import {AuthContextState} from "../../Utils/AuthContextState"

const Post = () => {
  const {authState} = useContext(AuthContextState)

  const [post, setPost] = useState([])
  let {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/postById/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [id])

  return (
    <main>
      <div>
        <a className={styles.nav__item} href={"/"}>
          Home
        </a>
        /
        <a className={styles.nav__item} href={"/engagements"}>
          Engagements
        </a>
      </div>
      <article className={styles.article}>
        <p>{post.featureImageAltText}</p>
        <h2>{post.title}</h2>
        <p>
          Created on <Date format={"MMMM D, YYYY"}>{post.updatedAt}</Date> by{" "}
          <span style={{textTransform: "capitalize"}}>{post.author}</span>
          <br></br>
          Updated by <span style={{textTransform: "capitalize"}}>{post.username}</span>
        </p>
        <p>{post.postText}</p>
      </article>
      {authState.status && (
        <>
          <button>Draft</button>
          <button>Edit</button>
          <button>Delete</button>
        </>
      )}
    </main>
  )
}

export default Post
