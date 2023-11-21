import Landing from "./Landing";
import Partner from "./Partner";
import Reviews from "./Reviews";
import Wecan from "./Wecan";
import Eligible from "./Eligible";
import Resources from "./Resources";
import Transition from "../../Transition";

const Homepage = () => {
  return (
    <>
      <Landing />
      <Partner />
      <Wecan />
      <Reviews />
      <Resources />
      <Eligible />
    </>
  );
};

const EnhancedHomepage = Transition(Homepage)

export default EnhancedHomepage
