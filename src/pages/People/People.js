import React, {useContext} from "react"
import Header from "../../components/Headers/Header"
import AddNewPerson from "./AddNewPerson"
import AllPeople from "./AllPeople"
import {AuthContextState} from "../../Utils/AuthContextState"
import Title from "../../components/Title/Title"

const People = () => {
  const {authState} = useContext(AuthContextState)

  return (
    <>
      <main>
        <Header header="Meet the People" />
        <AllPeople />
        {authState && (
          <>
            <Title title="Add a new team member here:" />
            <AddNewPerson />
          </>
        )}
      </main>
    </>
  )
}

export default People
