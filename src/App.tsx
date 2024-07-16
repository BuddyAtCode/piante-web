import { ReactLenis } from "lenis/react";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionOne from "./SectionOne";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

function App() {
  return (
    <ReactLenis root>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <SectionFive />
    </ReactLenis>
  );
}

export default App;
