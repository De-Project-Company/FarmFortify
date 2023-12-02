import {Data} from "../../Data/aboutUsData";
const StandFor = () => {
  return (
    <div className=" bg-[#DFFBD5] flex-shrink-0 px-3 py-6 md:px-16 lg:px-[4vw] lg:py-28 ">
      <p className="text-[#33383D] text-lg font-[AeonikLight] text-center font-normal tracking-[4px]">
        Core value
      </p>
      <h1 className="text-[#1A7408] font-[AeonikBold] text-2xl md:text-4xl text-center leading-[3rem] pb-3">
        What we stand for
      </h1>
      <p className=" text-center mx-auto font-[Aeoniklight] font-normal leading-normal md:w-[37%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nisl
        turpis rhoncus, non. Elementum sed molestie donec est sed. Sed sit
        aenean a, venenatis elit id vestibulum. Aliquet maecenas
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 mt-[80px]">
        {Data.map((data, index) => {
          return (
            <div
              key={index}
              className="rounded-md bg-white boxed w-[249.609px] h-[225px] flex-shrink-0"
            >
              <img
                src={data.img}
                alt=""
                className="w-[94px] my-[27px] h-[94px] mx-auto flex-shrink-0"
              />
              <h1 className="text-[#121415] font-[AeonikBold] text-lg text-center font-bold leading-normal">
                {data.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StandFor;
