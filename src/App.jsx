import Navbar from "./Components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
      </Routes>
      
    </>
  )
}

export default App
