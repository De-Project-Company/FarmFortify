import { ProfileData } from "../../Data/aboutUsData";

export const Team = () => {
  return (
    <div className="px-[2rem] bg-white">
      <div className="text-center">
        <h1 className="text-3xl ">Our Team</h1>
        <p className="text-[#33383D] mt-[12px]">
          {" "}
          Meet our team of world-class problem solvers
        </p>
      </div>

      <div className="flex flex-wrap mx-auto m-[65px] px-[110px] justify-start gap-16 flex-start">
        {ProfileData.map((item, index) => {
          return (
            <div key={index} className="justify-start">
              <img src={item.img} alt="profile" />
              <p>{item.name}</p>
              <p className="text-[#33383D] mt-[12px]">{item.Role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
