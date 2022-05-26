import axios from "axios"
import {useEffect, useState} from "react"
import styles from "./People.module.scss"

export const AllPeople = (auth) => {
  const [allPeople, setAllPeople] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/people").then((response) => {
      setAllPeople(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      {allPeople.map((value) => {
        return (
          <div className={styles.section}>
            <ul key={value.id}>
              <li>{value.name}</li>
              <li>{value.workPlace}</li>
              <li>
                <a
                  href={`mailto:${value.email}`}
                  aria-describedby={`opens external mailing service to contact ${value.name} by email`}
                >
                  {value.email}
                </a>
              </li>
              <li>{value.bioText}</li>
            </ul>
            {auth && (
              <>
                <button>Update</button>
                <button>Delete</button>
              </>
            )}
          </div>
        )
      })}
    </>
  )
}

export default AllPeople
