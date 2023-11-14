import { NavLink } from "react-router-dom";
import ham from "../assets/ham.svg";
import closeIcon from "../assets/closeMenu.svg";
import Button from "./Buttton";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [bodyScrollValue, setBodyScrollValue] = useState(0);
  const [elementscrollValue, setElementScrollValue] = useState(0);

  const [modalAppear, setModalApp] = useState(false);

  function handleModalAppearance(e) {
    e.preventDefault();
    e.stopPropagation();
    setModalApp(!modalAppear);
  }

  useEffect(() => {
    const getScroll = () => {
      setBodyScrollValue(document.body.scrollTop);
      setElementScrollValue(document.documentElement.scrollTop);
      if (bodyScrollValue > 20 || elementscrollValue > 20) {
        document.getElementById("trans").style.top = "0";
      } else if (elementscrollValue < 10 || bodyScrollValue < 10) {
        document.getElementById("trans").style.top = "";
      }
    };

    window.addEventListener("scroll", getScroll);

    return () => window.removeEventListener("scroll", getScroll);
  }, [bodyScrollValue, elementscrollValue]);

  return (
    <div>
      <div className="flex justify-between px-7 py-6 md:px-16 lg:px-28 md:py-6 items-center">
        <h1 className="text-xl md:text-3xl text-[#1A7408] font-bold">
          FarmFortify
        </h1>
        <div className="flex items-center gap-3 md:gap-10">
          <div>
            <select name="" id="" className="text-xl">
              <option value="En">En</option>
            </select>
          </div>
          <div>
            <Button onClick={handleModalAppearance} setState={setModalApp}>Contact Us</Button>
          </div>
        </div>
      </div>
      <nav
        className="trans bg-[#1A7408] py-2 md:py-5 fixed w-full overflow-hidden z-30"
        id="trans"
      >
        <div className="text-white hidden md:flex justify-center lg:gap-24 md:gap-16 text-lg font-[AeonikReg] font-thin">
          <div>
            <NavLink>Home</NavLink>
          </div>
          <div>
            <NavLink>About Us</NavLink>
          </div>
          <div>
            <NavLink>Loans</NavLink>{" "}
          </div>
          <div>
            <NavLink>Resources</NavLink>
          </div>
          <div>
            <NavLink>Community</NavLink>
          </div>
        </div>
        <div className="flex md:hidden justify-center ">
          <img src={ham} className="w-11 bg-white rounded-xl" alt="ham Icon" />
        </div>
      </nav>
      <Modal modalAppearance={modalAppear} handleModalAppearance={handleModalAppearance} />
    </div>
  );
};

export default Navbar;
