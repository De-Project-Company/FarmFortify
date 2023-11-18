
import Navbar from "./Components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage"
import Footer from "./Components/Footer"
import About from "./Pages/aboutUs/About";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
