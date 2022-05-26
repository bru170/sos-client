import "./styles/index.scss"
import {Routing} from "./Routes/Routing"
import Navbar from "./components/Nav/Navbar"
import Footer from "./components/Footer/Footer"
import {AuthContextState} from "./Utils/AuthContextState"
import {useState, useEffect} from "react"

function App() {
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true)
    }
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
