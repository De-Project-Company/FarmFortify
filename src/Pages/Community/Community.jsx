import Transition from "../../Transition";
import Landing from "./Landing";
import Metrics from "./Metrics";
import Platforms from "./Platforms";
import Tutorial from "./Tutorial";
import BugBounty from "./BugBounty";
import Ambassador from "./Ambassador";
import News from "./News";

const About = () => {
  return (
    <>
      <Landing />
      <Platforms />
      <Tutorial />
      <Ambassador />
      <Metrics />
      <News />
      <BugBounty />
    </>
  );
};

const EnhancedCommunity = Transition(About);

export default EnhancedCommunity;
