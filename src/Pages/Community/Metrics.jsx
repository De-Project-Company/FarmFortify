import Button from "../../Components/Buttton";
import Ambassador from "../../assets/CommunityAmbassador.png";
export const Metrics = () => {
  return (
    <div className="bg-[#d3f5c638] mt-[100px] flex flex-col md:flex-row px-10 py-[40px] md:px-[120px] md:py-[86px]">
      <div className="lg:w-1/3 flex flex-col">
        <h1 className="font-[AeonikMed] items-center flex text-[16px] text-[#121415] lg:text-[24px] mb-4">
         Ambassador<span  className="text-[#33383D] ml-2 font-[AeonikLight]">  Program</span>
        </h1>
        <p className="mb-5 mr-[10px] font-[AeonikLight] text-[12px] lg:text-[16px] lg:w-[70%]">
          Support the FarmFortify core team through community and marketing
          initiatives while accumulating rewards.
        </p>
        <div>
            <Button>
              <div className="flex text-[12px] text-center md:text-[14px]  content-center gap-2">
                Learn more
                <img
                  src="/assests/arrow.svg"
                  className="md:w-[25px] md:m-0 mt-[6px] h-[15px] w-[15px] md:h-[25px] "
                  width={20}
                  height={20}
                />
              </div>
            </Button>
          </div>
      </div>
      <div className="md:w-2/3 w-[100%] mt-3">
        <img className="w-full h-auto" src={Ambassador} alt="platforms" />
      </div>
    </div>
  );
};

export default Metrics;
