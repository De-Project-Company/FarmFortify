import {Data} from "../../Data/aboutUsData";
const StandFor = () => {
  return (
    <div className=" bg-[#DFFBD5] flex-shrink-0 pb-[130px] ">
      <p className="text-gray-700 font-aeonik text-center pt-[106px] font-normal leading-normal tracking-wider">
        Core value
      </p>
      <h1 className="text-green-700 font-aeonik text-3xl text-center font-bold leading-normal">
        What we stand for
      </h1>
      <p className=" text-center mx-auto font-aeonik font-normal leading-normal md:w-[569px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida nisl
        turpis rhoncus, non. Elementum sed molestie donec est sed. Sed sit
        aenean a, venenatis elit id vestibulum. Aliquet maecenas
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 mt-[80px]">
        {Data.map((data, index) => {
          return (
            <div
              key={index}
              className="rounded-md bg-white shadow-md w-[249.609px] h-[225px] flex-shrink-0"
            >
              <img
                src={data.img}
                alt=""
                className="w-[94px] my-[27px] h-[94px] mx-auto flex-shrink-0"
              />
              <h1 className="text-green-700 font-aeonik text-2xl text-center font-bold leading-normal">
                {data.title}
              </h1>
              <p className="text-black text-center mx-auto font-aeonik font-normal leading-normal">
                {data.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StandFor;
