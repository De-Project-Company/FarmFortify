import { MetricsData, ChoiceData } from "../../Data/aboutUsData";
import Map from "../../assets/Map.svg";
import target from "../../assets/Targets.svg";
import human from "../../assets/human.svg";

export const Metrics = () => {
  return (
    <div className="px-[6rem] bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 md:w-1/2 grid-cols-2 h-[250px] md:my-auto grid items-center">
          {MetricsData.map((item, index) => (
            <div
              key={index}
              className={`flex mb-4 md:mb-0 items-center md:items-start `}
            >
              <img src={item.img} alt="metrics" className="w-6 h-6 mr-[4px]" />
              <div className="">
                <h1 className="text-[#1A7408] ">{item.number}</h1>
                <p className="text-[14px] font-[Aeoniklight] md:mr-2 w-[160px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={Map} alt="map" className="w-full h-auto p-8" />
        </div>
      </div>
      <div>
        <h1 className="font-[AeonikMed] text-xl">SDG targets</h1>
        <img src={target} alt="target" className="mt-5 mb-[287px] " />
      </div>
      <div className="flex md:flex-col">
        <div className="mb-[172px] md:grid-cols-2 grid grid-cols-1 items-center">
          <img src={human} alt="human" className="h-auto w-[80%]" />
          <div>
            <h1 className="mb-8 text-[#1A7408] font-[AeonikBold] text-2xl">
              Why choose us
            </h1>
            <div className="grid-cols-2 grid">
              {ChoiceData.map((item, index) => (
                <div
                  key={index}
                  className={`mb-8 mr-8 md:mb-0 items-center md:items-start `}
                >
                  <div className="flex items-start">
                    <img
                      src={item.img}
                      alt="ticked"
                      className=" w-6 h-6 mr-3"
                    />
                    <div>
                      <h1 className="text-[#0F4605] font-[AeonikBold]">
                        {item.title}
                      </h1>
                      <p className="text-[14px] mt-4 mb-16 md:mr-2 font-[AeonikReg] w-[200px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
