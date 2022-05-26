import "./styles/index.scss"
import {Routing} from "./Routes/Routing"
import Navbar from "./components/Nav/Navbar"
import Footer from "./components/Footer/Footer"
import {AuthContextState} from "./Utils/AuthContextState"
import {useState, useEffect} from "react"
import axios from "axios"

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false
  })

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/authUser", {
        headers: {
          accessToken: localStorage.getItem("accessToken")
        }
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({...authState, status: false})
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true
          })
        }
      })
  }, [])

  return (
    <>
      <AuthContextState.Provider value={{authState, setAuthState}}>
        <div className="wrapper">
          <Navbar />
          <Routing />
        </div>
        <Footer />
      </AuthContextState.Provider>
    </>
  )
}

export default App
