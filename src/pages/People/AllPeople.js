import axios from "axios"
import {useEffect, useState} from "react"

export const AllPeople = () => {
  const [allPeople, setAllPeople] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/people").then((response) => {
      setAllPeople(response.data)
    })
  }, [])

  return (
    <>
      {allPeople.map((value) => {
        return (
          <ul key={value.id}>
            <li>
              <div>{value.name}</div>
              <div>{value.workPlace}</div>
              <div>{value.email}</div>
              <div>{value.bioText}</div>
              <div>{value.image}</div>
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default AllPeople
