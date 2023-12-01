import aria from "../../assets/Arla Food Logo.svg";
import flutter from "../../assets/FlutterwaveLogo.svg";
import fcmb from "../../assets/fcmbLogo.svg";
import farmsby from "../../assets/FarmsbyLogo.svg";
import hervest from "../../assets/HerVestLogo.svg";
import sterling from "../../assets/SterlingLogo.svg";
import boa from "../../assets/boaImage.svg";
import carrotImg from "../../assets/someCarrots.png";
import Button from "../../Components/Buttton";
import { HashLink } from 'react-router-hash-link';

const Partner = () => {
  return (
    <div className="px-3 py-6 md:px-16 lg:px-[4vw] md:py-6 lg:py-28">
      <div>
        <h1 className="text-xl font-semibold" >Our Partners</h1>
        <div className="overflow-hidden relative h-28 w-[100%]">
          <div className="flex items-center w-[200%] absolute overflow-hidden marquee h-32">
            <span>
              <img src={boa} alt="boa" className="w-20 md:w-28" />
            </span>
            <span>
              <img src={aria} alt="aria foods" className="w-20 md:w-28" />
            </span>
            <span>
              <img src={flutter} alt="flutter" className="w-20 md:w-36" />
            </span>
            <span>
              <img src={farmsby} alt="farmsby" className="w-20 md:w-36" />
            </span>
            <span>
              <img src={fcmb} alt="fcmb" className="w-16 " />
            </span>
            <span>
              <img src={sterling} alt="sterling" className="w-20 " />
            </span>
            <span>
              <img src={hervest} alt="hervest" className="hervest w-20 md:w-36" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-3 md:flex-nowrap mt-24 lg:mt-32 ">
        <div className="relative carrotImage ">
          <div className="flex">
          <img src={carrotImg} alt="carrot image" className="w-full" />
          </div>
          <div className="bg-[#1A7408] relative text-white flex flex-wrap justify-center lg:absolute lg:justify-normal lg:rounded-md lg:bottom-16 lg:right-[-320px] py-4 px-4 lg:py-8 lg:px-16 gap-6">
            <div>
              <h4 className="font-[AeonikBold] text-2xl lg:text-4xl text-center">
                5000+
              </h4>
              <p className="text-base font-[AeonikLight] lg:text-lg">Farmers Onboarded</p>
              </div>
            <div className="border-x-2 border-[rgba(255,255,255,0.25)] px-5">
            <h4 className="font-[AeonikBold] text-2xl lg:text-4xl text-center">
                2000
              </h4>
              <p className="text-base font-[AeonikLight] lg:text-lg">Loan Given</p>
            </div>
            <div>
            <h4 className="font-[AeonikBold] text-2xl lg:text-4xl text-center">
                32
              </h4>
              <p className="text-base lg:text-lg font-[AeonikLight]">States Present</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-[75%] lg:w-[55%] gap-6 py-10 justify-center border-[0.5px] border-[#E49115] rounded-lg px-12 lg:py-32">
          <p className="text-center font-thin font-[AeonikReg] lg:text-[28px] w-[99%]">
            We are here to help foster your growth in agro-business and improve
            the livelihood of farmers in Nigeria
          </p>
          <HashLink smooth  to='/loan#loantype'><Button>Learn More &gt; </Button></HashLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Partner;
