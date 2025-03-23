import "./Bento.css";
import About from "../components/About";
import ContactMe from "../components/Contacts";
import Face from "../components/Face";
import Funny from "../components/Funny";
import GitHubLink from "../components/GitHub";
import LinkedInLink from "../components/LinkedIn";
import Services from "../components/Services";
import Tools from "../components/Tools";

export const Bento = () => {
  return (
    <div className="grid-container">
      <div className="box box1">
        <Face />
      </div>
      <div className="box box2">
        <About />
      </div>
      <div className="box box3">
        <Services />
      </div>
      <div className="box box4">
        <GitHubLink />
      </div>
      <div className="box box5">
        <LinkedInLink />
      </div>
      <div className="box box6">
        <Tools />
      </div>
      <div className="box box7">7</div>
      <div className="box box8">8</div>
      {/* <div className="box box9">9</div> */}
      <div className="box box10">
        <ContactMe />
      </div>
    </div>
  );
};
