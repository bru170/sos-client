import axios from "axios"
import {useEffect, useState} from "react"
import styles from "./People.module.scss"

export const AllPeople = () => {
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
              <li>
                <div className={styles.grid__textBlock}>
                  <div>{value.name}</div>
                  <div>{value.workPlace}</div>
                  <a
                    href={`mailto:${value.email}`}
                    aria-describedby={`opens external mailing service to contact ${value.name} by email`}
                  >
                    {value.email}
                  </a>
                  <div>{value.bioText}</div>
                </div>
              </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default AllPeople
