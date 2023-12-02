import platform from "../../assets/communityPlatform.png";
const Platforms = () => {
  return (
    <div className="bg-[#D3F5C6] mb-[100px] flex flex-col md:flex-row px-10 py-[30px] md:px-[120px] md:pt-[127px]">
      <div className="lg:w-1/3 flex flex-col">
        <h1 className="font-[AeonikMed] items-center flex text-[16px] text-[#121415] lg:text-[24px] mb-4">
          Community Platforms
        </h1>
        <p className="mb-5 mr-[10px] font-[AeonikLight] text-[12px] lg:text-[16px] lg:w-[90%]">
          Here's where you can engage with the community and get all the latest
          updates.
        </p>
      </div>
      <div className="w-[100%]">
        <img className="w-full h-auto" src={platform} alt="platforms" />
      </div>
    </div>
  );
};

export default Platforms;
