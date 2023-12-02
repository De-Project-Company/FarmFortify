import Button from "../../Components/Buttton";
import Ecosystem from "../../assets/communityEcosystem.png";
const Tutorial = () => {
  return (
    <div className="md:mb-[100px] mb-[20px] h-[auto] md:h-[668px] w-[100%]">
      <div
        className="flex flex-col bg-no-repeat bg-cover w-full h-[100%] md:flex-row px-10 py-[30px] md:px-[120px] md:pt-[127px]"
        style={{ backgroundImage: `url(${Ecosystem})`, objectFit: "cover" }}
      >
        <div className="lg:w-1/3 flex flex-col">
          <h1 className="font-[AeonikBold]  flex text-[16px] text-[#33383D] lg:text-[24px] mb-4">
            <span className="text-[#33383D] font-[AeonikLight] mr-2">
              Ecosystem
            </span>{" "}
            Funding Program
          </h1>

          <p className="mb-5 mr-[10px] font-[AeonikLight] sm:w-[50%] text-[#33383D] text-[16px] lg:text-[16px] lg:w-[70%]">
            The FarmFortify Ecosystem continues to grow fast. We’re looking to
            foster the development of projects on the network with a dedicated
            funding program dedicated to the most interesting initiatives.
          </p>
          <div>
            <Button>
              <div className="flex text-[15px] md:text-[14px]  content-center gap-2">
                Learn more
                <img src="/assests/arrow.svg" width={25} height={25} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
