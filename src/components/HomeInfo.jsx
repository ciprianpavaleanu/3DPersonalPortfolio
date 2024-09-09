import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"> Ciprian </span> 👋 <br />A
      junior front-end developer from Romania.
    </h1>
  ),
  2: (
    <InfoBox
      text="Picked many skills going through courses, tutorials and working on several projects"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Worked on multiple projects for my portfolio over last year. Here you can find some of them"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="If you want to find more, contact me!"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
