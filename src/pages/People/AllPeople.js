import axios from "axios"
import {useEffect, useState} from "react"
import styles from "./People.module.scss"
import GOTHENBURG from "../../images/footerLogos/gothenburg.png"

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
          <div className={styles.grid}>
            <ul key={value.id}>
              <li>
                <div className={styles.grid__imageBlock}>
                  {/* <img src={value.image} alt={`${value.name} ${value.altText}`} /> */}
                  <img
                    src={GOTHENBURG}
                    alt="Logo for one of our sponsors University of Gothenborg"
                  />{" "}
                </div>

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
