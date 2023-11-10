import aria from "../../assets/Arla Food Logo.svg";
import flutter from "../../assets/FlutterwaveLogo.svg";
import fcmb from "../../assets/fcmbLogo.svg";
import farmsby from "../../assets/FarmsbyLogo.svg";
import hervest from "../../assets/HerVestLogo.svg";
import sterling from "../../assets/SterlingLogo.svg";
import boa from "../../assets/boaImage.svg";
import carrotImg from "../../assets/someCarrots.png";
import Button from '../../Components/Buttton'

const Partner = () => {
  return (
    <div className="px-7 py-6 md:px-16 lg:px-28 md:py-6 lg:py-14">
      <div>
        <h1 className="text-xl font-semibold">Our Partners</h1>
        <div className="overflow-hidden relative h-28 w-[100%]">
          <div className="flex items-center w-[200%] absolute overflow-hidden marquee h-32">
            <span>
              <img src={boa} alt="boa" className="w-20" />
            </span>
            <span>
              <img src={aria} alt="aria foods" className="w-20" />
            </span>
            <span>
              <img src={flutter} alt="flutter" className="w-20" />
            </span>
            <span>
              <img src={farmsby} alt="farmsby" className="w-20" />
            </span>
            <span>
              <img src={fcmb} alt="fcmb" className="w-20" />
            </span>
            <span>
              <img src={sterling} alt="sterling" className="w-20" />
            </span>
            <span>
              <img src={hervest} alt="hervest" className="hervest w-20" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap mt-20 ">
        <div className="md:w-1/2 relative carrotImage">
          <img src={carrotImg} alt="carrot image" />
        </div>
        <div className="flex flex-col items-center md:w-1/2">
            <p className="text-center font-thin font-[AeonikReg] lg:text-2xl px-10 py-10 lg:pt-36">
              We are here to help foster your growth in agro-business and
              improve the livelihood of farmers in Nigeria
            </p>
              <Button>Learn More &gt; </Button>
          </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Partner;


