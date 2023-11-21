import Transition from "../../Transition";
import Landing from "./Landing";
import Metrics from "./Metrics";
import Mission from "./Mission";
import StandFor from "./StandFor";
import Team from "./Team";

const About = () => {
  return (
    <>
      <Landing />
      <Mission />
      <StandFor />
      <Metrics />
      <Team />
    </>
  );
};

const EnhancedAbout = Transition(About);

export default EnhancedAbout;
