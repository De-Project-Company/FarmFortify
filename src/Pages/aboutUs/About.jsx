import Transition from "../../Transition";
import Landing from "./Landing";
import Mission from "./Mission";
import StandFor from "./StandFor";

const About = () => {
  return (
    <>
      <Landing />
      <Mission />
      <StandFor />
    </>
  );
};

const EnhancedAbout = Transition(About)

export default EnhancedAbout;
