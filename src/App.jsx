import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import EnhancedAbout  from "./Pages/aboutUs/About";
import { AnimatePresence } from "framer-motion";
import EnhancedHomepage from "./Pages/Homepage/Homepage";


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<EnhancedHomepage />} />
          <Route path="/about" element={<EnhancedAbout />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
