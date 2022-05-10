import React from "react"
import Header from "../../components/Headers/Header"
import AddNewPerson from "./AddNewPerson"
import AllPeople from "./AllPeople"

const People = () => {
  return (
    <>
      <main>
        <Header header="Meet the People" />
        <AllPeople />
        <AddNewPerson />
      </main>
    </>
  )
}

export default People
