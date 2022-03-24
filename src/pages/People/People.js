import React from "react"
import {AddNewPerson} from "./AddNewPerson"
import AllPeople from "./AllPeople"

const People = () => {
  return (
    <>
      <main>
        <h1>Meet the People</h1>
        <AllPeople />
        <AddNewPerson />
      </main>
    </>
  )
}

export default People
