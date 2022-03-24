import "./styles/index.scss"
import {Routing} from "./pages/Routes/Routing"
import Navbar from "./components/header/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  )
}

export default App
