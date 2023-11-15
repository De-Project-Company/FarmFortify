import Navbar from "./Components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
