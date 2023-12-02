import Button from "../../Components/Buttton";
import bugBounty from "../../assets/communityBugBounty.png";

const BugBounty = () => {
  return (
    <div className="md:mb-[200px] mb-[50px] h-[auto] md:h-[668px] w-[100%]">
      <div
        className="flex flex-col bg-no-repeat bg-cover w-full h-[100%] md:flex-row px-10 py-[30px] md:px-[120px] md:pt-[127px]"
        style={{ backgroundImage: `url(${bugBounty})`, objectFit: "cover" }}
      >
        <div className="lg:w-1/3 flex flex-col">
          <h1 className="font-[AeonikMed] mr-2 flex text-[16px] text-[#121415] lg:text-[24px] mb-4">
            Bug Bounty <span className="font-[AeonikLight] ml-2 ">Program</span>
          </h1>

          <p className="mb-5 mr-[10px] font-[AeonikLight] sm:w-[50%] text-[12px] lg:text-[18px] lg:w-[70%]">
            Help us make the network better and safer. We’re offering rewards
            for farmers who find safe and potential vulnerabilities in our farm.
          </p>
          <div>
            <Button>
              <div className="flex text-[12px] text-center md:text-[14px]  content-center gap-2">
                Coming soon
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
      </div>
    </div>
  );
};

export default BugBounty;
