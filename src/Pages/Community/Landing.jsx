import CommunityHero from "../../assets/communityHero.png";
import Button from "../../Components/Buttton";
const Landing = () => {
  return (
    <div
      className="flex flex-col md:mb-[100px] lg:justify-center z-0 w-full min-h-[calc(100vh-9rem)] bg-no-repeat lg:bg-cover text-white"
      style={{ backgroundImage: `url(${CommunityHero})` }}
    >
      <div className=" px-10 pt-[65px] md:px-[120px] md:pt-[127px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  lg:w-[900px] font-[AeonikBold] mt-[-5] mb-4">
          Empowering Nigerian Farmers Transition into Large-scale Agriculture
          with ease.{" "}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-[Aeoniklight] lg:text-[20px]  max-w-screen-md mb-8">
          We provide smallholder farmers first hand access to finance, useful
          resources to help them scale up, and ensuring agricultural development
          and sustainability in Nigeria.
        </p>
        <Button>Apply for a Loan</Button>
      </div>
    </div>
  );
};

export default Landing;
