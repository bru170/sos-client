import axios from "axios"
import {useEffect, useState} from "react"

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
          <ul key={value.id}>
            <li>
              <div>{value.name}</div>
              <div>{value.workPlace}</div>
              <div>{value.email}</div>
              <div>{value.bioText}</div>
              <img src={value.image} alt={"image of " + value.name} />
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default AllPeople
