import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <div id="beatsRhymesCodeLife-container">
        <p id="beatsRhymeCodeLife">
          <span id="beats-span">beats</span>
          <span id="rhymes-span">Rhymes</span>
          <span id="code-span">Code</span>
          <span id="life-span">Life</span>
        </p>
      </div>
      <div id="beatMachine-Container">
        <div className="beatMachine outerShell">
          <div className="innerShell">
            <div id="info-box">
              <h3>Music Production Workshop</h3>
            </div>
            <div className="rows row-1">
              <div className="volume"></div>
              <div className="pan"></div>
              <div className="channel">
                <p id="kick">Kick</p>
              </div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
            </div>
            <div className="rows row-2">
              <div className="volume"></div>
              <div className="pan"></div>
              <div className="channel">
                <p id="snare">Snare</p>
              </div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
            </div>
            <div className="rows row-3">
              <div className="volume"></div>
              <div className="pan"></div>
              <div className="channel">
                <p id="hi-hats">Hi-Hats</p>
              </div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
              <div className="step"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
