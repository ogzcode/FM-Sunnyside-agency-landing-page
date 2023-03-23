import MainBottom from "./MainBottom";
import SectionRow from "./SectionRow";

import transformImage from "../../images/desktop/image-transform.jpg";
import standout from "../../images/desktop/image-stand-out.jpg";

function Main() {
    const data = [
      {
        title: "Transform your brand",
        content: `We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you.`,
        image: transformImage
      },
      {
        title: "Stand out to the right audience",
        content: `Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we’ll build and extend your brand in digital places.`,
        image: standout
      }
    ];
    return (
      <main>
        <section>
          {
            data.map((d, i) => <SectionRow {...d} key={i} />)
          }
        </section>
        <MainBottom />
      </main>
    );
  }

  export default Main;