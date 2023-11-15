import fbIcon from "../assets/FbIcon.svg";
import igIcon from "../assets/IgIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import EmailIcon from "../assets/EmailIcon.svg";
import copyRight from "../assets/copyright.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    let year = new Date().getFullYear()
  return (
    <div className="bg-[#D3F5C6] px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-14">
      <section className="lg:flex gap-6 justify-between items-start ">
        <div className="lg:w-[30%] pt-4 flex flex-col gap-3">
          <h3 className="text-[#1A7408] text-3xl font-[AeonikBold]">
            FarmFortify
          </h3>
          <p className="text-sm font-[AeonikLight]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            nemo odit laborum velit reiciendis, dolores at dicta culpa eaque
            unde nihil ab{" "}
          </p>
          <div className="flex items-center gap-3">
            <Link>
              <img src={fbIcon} alt="Our Fb link" />
            </Link>
            <Link>
              <img src={igIcon} alt="Our Ig Link" />
            </Link>
            <Link>
              <img src={TwitterIcon} alt="Our TwitterIcon Link" />
            </Link>
            <Link>
              <img src={EmailIcon} alt="Our Enmail Address Link" />
            </Link>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl pb-2">Company</h3>
          <div className="flex flex-col gap-2">
            <Link>About Us</Link>
            <Link>Mission</Link>
            <Link>Our Team</Link>
            <Link>News</Link>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl pb-2">Product</h3>
          <div className="flex flex-col gap-2">
            <Link>Loan</Link>
            <Link>Resources</Link>
            <Link>Reviews</Link>
            <Link>Community</Link>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl pb-2">Help</h3>
          <div className="flex flex-col gap-2">
            <Link>Getting Started</Link>
            <Link>Contact Center</Link>
            <Link>FAQs</Link>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl pb-2">Subscribe</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="px-2 outline-none bg-transparent border border-[#121415] text-[#121415] text-sm"
            />
            <button className="bg-[#e49115] outline-none text-white py-2  px-6  font-[AeonikLight] rounded text-sm">
              Send
            </button>
          </div>
        </div>
      </section>
      <div className="flex mt-6">
        <img src={copyRight} alt="copyright Icon" />
        <h4>{year} <span className="text-[#1A7408]" >FarmFortify Team</span></h4>
      </div>
    </div>
  );
};

export default Footer;
