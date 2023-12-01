import { ChoiceData,MetricsData1, MetricsData2 } from "../../Data/aboutUsData";
import Map from "../../assets/Map.svg";
import target from "../../assets/Targets.svg";
import human from "../../assets/human.svg";

export const Metrics = () => {
  return (
    <div className="px-3 py-6 md:px-16 lg:px-[4vw] lg:py-28 bg-white">
      <div className="flex items-center">
        
        <div className="w-full flex py-6 items-start gap-10 md:gap-40 md:max-w-[570px]">
        <div className="flex flex-col gap-14">
        {MetricsData1.map((x, index) => (
            <div key={index} className="flex items-start">
              <img src={x.img} alt="" className="w-10" />
              <div>
                <h5 className="text-2xl md:text-3xl text-[#1A7408] font-[AeonikBold]">{x.number}</h5>
                <p className="text-lg font-[AeonikLight]">{x.text}</p>
              </div>
            </div>

          ))}
        </div>
        <div className="flex flex-col gap-14">
        {MetricsData2.map((x, index) => (
            <div key={index} className="flex items-start">
              <img src={x.img} alt="" className="w-10" />
              <div>
                <h5 className="text-2xl md:text-3xl text-[#1A7408] font-[AeonikBold]">{x.number}</h5>
                <p className="text-lg font-[AeonikLight]">{x.text}</p>
              </div>
            </div>

          ))}
        </div>
        </div>
        <div className="hidden md:flex p-20">
          <img src={Map} alt="map" className="w-full" />
        </div>
      </div>
      <div>
        <h1 className="font-[AeonikMed] text-3xl">SDG targets</h1>
        <img src={target} alt="target" className="mt-5 " />
      </div>
      <div className="flex md:flex-col pt-7 lg:pt-72">
        <div className="mb-[172px] md:flex flex-wrap  lg:grid lg:grid-cols-2 grid grid-cols-1 items-center">
          <img src={human} alt="human" className="h-auto pb-7 md:pb-0 w-full md:w-[80%]" />
          <div className=" flex flex-col gap-14">
            <h1 className=" text-[#1A7408] font-[AeonikBold] text-4xl">
              Why choose us
            </h1>
            <div className="lg:grid-cols-2 lg:grid flex flex-col md:flex-row md:flex-wrap gap-6 ">
              {ChoiceData.map((item, index) => (
                <div
                  key={index}
                  className={``}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={item.img}
                      alt="ticked"
                      className=" w-6"
                    />
                    <div>
                      <h1 className="text-[#0F4605] text-[20px] font-[AeonikBold]">
                        {item.title}
                      </h1>
                      <p className="text-lg mt-4 lg:mb-16 md:mr-2 font-[AeonikReg] lg:w-[270px]">
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
