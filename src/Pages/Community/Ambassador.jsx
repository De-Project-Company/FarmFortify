import Button from "../../Components/Buttton";
export const Team = () => {
  return (
    <div className="w-[100%]">
      <div className="h-auto lg:h-[668px] mt-[100px] bg-[#d3f5c638] mb-[10px] md:mb-[100px] flex flex-col lg:flex-row px-10 py-[30px] md:pl-[120px] md:pt-[127px]">
        <div className=" lg:w-1/3 flex flex-col">
          <h1 className="font-[AeonikLight] items-center flex text-[16px] text-[#33383D] lg:text-[24px] mb-4">
            Latest
            <span className="text-[#33383D] ml-1 font-[AeonikBold]">Video</span>
          </h1>
          <p className="mb-5 mr-[10px] text-[#33383D] font-[AeonikLight] text-[12px] lg:text-[16px] lg:w-[90%]">
            Learn about FarmFortify technology, watch tutorials, catch up with
            event recaps, and more.
          </p>
          <div>
            <Button>
              <div className="flex text-[12px] text-center md:text-[14px]  content-center gap-2">
                Go to YouTube channel
                <img
                  src="/assests/redirect.svg"
                  className="md:w-[25px] md:m-0 mt-[6px] h-[15px] w-[15px] md:h-[25px] "
                  width={20}
                  height={20}
                />
              </div>
            </Button>
          </div>
        </div>
        <div className="mt-3 md:mt-0 w-[100%] flex flex-wrap  lg:flex-nowrap gap-[24px]">
          <div className="mb-[100x]">
            <div>
              <img src="/assests/tutorial1.png" alt="1st tutorial" />
            </div>
            <div className="bg-[#D3F5C6] w-[276px] border-t-[#1A7408] pb-[40px] p-[16px] border">
              <p className="text-[#121415] text-[18px] ">
                What’s coming up?...
              </p>
              <div className="flex gap-x-5">
                <img src="/assests/icon.svg" alt="calender img" />
                <p className="text-[#33383D] text-[13px]">Jan 14, 2024</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/assests/tutorial1.png" alt="1st tutorial" />
            </div>
            <div className="bg-[#D3F5C6] w-[276px] border-t-[#1A7408] pb-[40px] p-[16px] border">
              <p className="text-[#121415] text-[18px] ">
                What’s coming up?...
              </p>
              <div className="flex gap-x-5">
                <img src="/assests/icon.svg" alt="calender img" />
                <p className="text-[#33383D] text-[13px]">Jan 14, 2024</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/assests/tutorial1.png" alt="1st tutorial" />
            </div>
            <div className="bg-[#D3F5C6] w-[276px] border-t-[#1A7408] pb-[40px] p-[16px] border">
              <p className="text-[#121415] text-[18px] ">
                What’s coming up?...
              </p>
              <div className="flex gap-x-5">
                <img src="/assests/icon.svg" alt="calender img" />
                <p className="text-[#33383D] text-[13px]">Jan 14, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
