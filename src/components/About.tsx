import "./About.css";
import RotatingCircle from "./RotatingCircle";

const About = () => {
  return (
    <div className="About">
      <div className="about-container">
        <RotatingCircle />
        <p>
          airWrks is a music production workshop that integrates technology and
          creativity to help the youth develop their music production skills.
          Through the use of FL Studio, participants learn how to record, edit,
          mix, and master audio, and gain insight into the similarities between
          coding and music production. By exploring the interplay between
          technology and creativity, airWrks empowers individuals to create
          music that is both technically sophisticated and artistically
          expressive.
        </p>
      </div>
      <div className="goals-container">
        <h3>Develop Technical Skills</h3>
        <img src="image.png" alt="a wrench" />
        <h3>Encourage Creativity</h3>
        <img src="image.png" alt="a wrench" />
        <h3>Develop Critical Listening Skills</h3>
        <img src="image.png" alt="a wrench" />
        <h3>Encourage Collaboration</h3>
        <img src="image.png" alt="a wrench" />
        <h3>Foster A Love Of Music</h3>
        <img src="image.png" alt="a wrench" />
      </div>
    </div>
  );
};

export default About;
