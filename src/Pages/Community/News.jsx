import Button from "../../Components/Buttton";
import { NewsData } from "../../Data/CommunityData";
export const News = () => {
  return (
    <div className=" w-[100%]">
      <div className="h-auto lg:h-[668px] mt-[100px] bg-[#d3f5c638] mb-[10px] md:mb-[100px] flex flex-col lg:flex-row px-10 py-[30px] md:px-[120px] md:pt-[127px]">
        <div className="lg:w-1/3 flex flex-col">
          <h1 className="font-[AeonikLight] items-center flex text-[16px] text-[#121415] lg:text-[24px] mb-4">
            Latest <span className="font-[AeonikBold]  ml-2">news</span>
          </h1>
          <p className="mb-5 mr-[10px] font-[AeonikLight] text-[12px] lg:text-[16px] lg:w-[90%]">
            The following are our most frequented and updated communication
            channels. You name it, we’ve got it!
          </p>
          <div>
            <Button>
              <div className="flex text-[12px] text-center md:text-[14px]  content-center gap-2">
                See all news
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
        <div className="mt-3 w-[100%] flex flex-wrap  lg:flex-nowrap gap-[24px]">
          {NewsData.map((item, index) => (
            <div key={index} className=" "> 
              <div className="">
                <div className="mx-auto justify-start place-items-center flex-start h-max border border-[#1A7408] w-[276px] ">
                  <img  className="border border-b-[#1A7408] w-max" src={item.src} alt={item.tag} />
                  <div className="bg-[#D3F5C6] p-[26px] w-[276px]">
                    <h2 className= "border px-[8px] py-[1px] w-max font-[AeonikLight] text-[#1a7408e4] border-[#1A7408] ">{item.tag}</h2>
                    <h1 className="text-[18px] font-[AeonikMed] my-[20px] text-[#33383D]">{item.title}</h1>
                    <div className="flex space-x-6">
                      <div className="flex items-center ">
                        <img width={24} height={24} src={item.authorImg} alt={item.author} />
                        <p className="text-[#121415] font-[AeonikLight]  ml-2 text-[13px] ">{item.author}</p>
                      </div>
                      <div className="flex  items-center">
                        <img src={item.icon} width={12} height={13} alt={item.icon} />
                        <p className="text-[#121415] font-[AeonikLight] ml-2 text-[13px]">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
