import "./Main.css";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {}
const Main = () => {
  return (
    <div className="Main">
      <p id="beatsRhymeCodeLife">
        <span id="beats-span">beats</span>
        <span id="rhymes-span">Rhymes</span>
        <span id="code-span">Code</span>
        <span id="life-span">Life</span>
      </p>
    </div>
  );
};

export default Main;
