import React from "react"
import {AddNewPerson} from "./AddNewPerson"
import AllPeople from "./AllPeople"

const People = () => {
  return (
    <>
      <AddNewPerson />
      <h1>Meet the People</h1>
      <AllPeople />
    </>
  )
}

export default People
