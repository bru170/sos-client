import "./styles/index.scss"
import {Routing} from "./Routes/Routing"
import Navbar from "./components/Nav/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Routing />
      </div>
      <Footer />
    </>
  )
}

export default App
