import { Accessed } from "../../DataCalls/AccessData";
const Access = () => {
  return (
    <div className="px-7 py-5 md:px-16 lg:px-[4vw] md:py-6 lg:py-[108px]">
      <div className="text-center text-black flex flex-col items-center justify-center md:py-6 lg:py-[108px]  ">
        <h2 className="text-4xl  md:text-[44px]  font-[AeonikBold] pb-4">
          Access Financial Aid to Scale.
        </h2>
        <p className="text-3xl md:text-[36px] font-[AeonikMed] pb-5 ">
          Increase production on a larger scale.
        </p>
        <p className="text-base md:text-lg font-[AeonikLight] md:w-[63%] ">
          We understand that agriculture requires financial support to thrive.
          Our loan feature is carefully designed to provide farmers with the
          financial assistance they need to enhance their operational
          efficiency, invest in new technologies, and ensure a sustainable
          future for their farms.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-comGreen py-20 px-[102px]">
            <header>
                <h3 className="text-deepGreen text-3xl font-[AeonikBold] pb-10 md:text-4xl text-center">Benefits</h3>
            </header>
            <div className="flex flex-wrap md:flex-nowrap gap-5 items-center">
                {Accessed.map((x,index)=>(
                    <div key={index}>
                        <div className="w-[200px] bg-white flex flex-col items-center justify-center px-8 py-9 h-[169px] gap-3 boxed">
                        <p className="text-lg text-center font-[AeonikMed] ">{x.name}</p>
                        <img src={x.img} alt="" className="w-12 h-12"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
