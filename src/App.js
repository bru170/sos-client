import "./styles/index.scss"
import {Routing} from "./pages/Routes/Routing"
import Navbar from "./components/Nav/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App
