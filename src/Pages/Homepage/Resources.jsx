import img1 from "../../assets/resourceimg1.jpg";
import { Harticles } from "../../DataCalls/Harticles";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="px-7 py-6 md:py-6 lg:py-14 bg-[#D3F5C6]">
      <h3 className="text-center text-3xl font-[AeonikBold] text-[#33383D] mb-12">
        Resources For You
      </h3>
      <div className=" flex flex-wrap justify-center gap-y-3">
        <div className="flex">
          <img src={img1} alt="" className=" w-full max-w-[387px] h-[406px]" />
        </div>
        <div className="w-full max-w-[406px] h-[406px] bg-white lg:mr-3 py-16 px-9">
          <h2 className="text-2xl md:text-[32px] leading-10 font-[AeonikMed]">
            ICAACS Nigeria 2023 New Update
          </h2>
          <button className="bg-deepGreen text-white p-[6px] mt-5 rounded mb-2">
            Industry Report
          </button>
          <p className="text-grey font-[AeonikLight] mb-3 ">
            15th October, 2023
          </p>
          <p className="font-[AeonikLight] text-base md:text-lg">
            We are ready to give tailor-made training for Nigerian farmers. This
            could only be done through local governments which are
            responsible...
          </p>
        </div>
        {Harticles.map((x, index) => (
          <Link key={index} className="h-[398px]">
            <div className="w-full  max-w-[387px] mr-3">
              <img src={x.img} alt={x.img} />
              <div className="px-6 py-5 bg-white flex flex-col gap-3 h-[180px]">
                <h3 className="text-lg md:text-xl text-black font-[AeonikMed] leading-7">
                  {x.headingText}
                </h3>
                <div className="flex items-center gap-4 text-sm ">
                  <button className="bg-deepGreen text-white p-[6px] rounded">
                    {x.buttonText}
                  </button>
                  <p className="text-grey font-[AeonikLight]">{x.date}</p>
                </div>
                <p className="text-black text-sm">
                  {" "}
                  <span className="text-base font-[AeonikMed]">{x.editor}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resources;
