import mission from "../../assets/mission.svg";

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10">
      <div className="md:w-1/2 md:mr-8 flex items-center">
        <div className="">
          <h1 className="text-[#1A7408] text-2xl mb-4">Our Mission</h1>
          <p className="mb-5">
            To encourage and attract non-farmers into agriculture, and empower
            farmers to transform agriculture into a sustainable and prosperous
            livelihood.
          </p>
        <p className="mb-5">
            We believe that by cultivating the land, we can cultivate a brighter
            future for the generation to come. That is why we are passionate about
            creating a world where agriculture is sustainable, inclusive, and
            driven by innovation to improve lives.
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img className="w-full h-auto" src={mission} alt="Mission" />
      </div>
    </div>
  );
};

export default Mission;
