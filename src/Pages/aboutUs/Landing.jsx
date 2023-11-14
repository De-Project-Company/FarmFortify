import aboutHero from "../../assets/aboutHero.svg";

const Landing = () => {
  return (
    <div
      className="flex flex-col justify-center items-center z-0 w-full min-h-[calc(100vh-5rem)] bg-no-repeat lg:bg-cover text-white"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-[-5] mb-4">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-screen-md mb-8">
          FarmFortify is an agro-tech company passionate about improving lives
          and securing a bountiful future. We provide resources and support
          needed to drive large-scale farming initiatives, encouraging a
          community of successful farmers and ensuring agricultural development
          and sustainability in Nigeria.
        </p>
      </div>
    </div>
  );
};

export default Landing;
