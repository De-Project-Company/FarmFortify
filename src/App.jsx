import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import EnhancedAbout  from "./Pages/aboutUs/About";
import { AnimatePresence } from "framer-motion";
import EnhancedHomepage from "./Pages/Homepage/Homepage";
import EnhancedResources from "./Pages/Resources/Resources";
import EnhancedCommunity from "./Pages/Community/Community";
import { useEffect, useState } from "react";


function App() {
  const location = useLocation();

  const [loading,setLoading] = useState(false)

  useEffect(()=>{

    window.addEventListener('load', ()=>{
      setLoading(true)
    })
    window.addEventListener('unload', ()=>{
      setLoading(false)
    })
  })

  return (
    <>
      <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<EnhancedHomepage />} />
          <Route path="/about" element={<EnhancedAbout />} />
          <Route path="/resources" element={<EnhancedResources />} />
          <Route path="/community" element={<EnhancedCommunity />} />

        </Routes>
      </AnimatePresence>
      <Footer />
      </>
      
    </>
  );
}

export default App;
