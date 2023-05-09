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
      <div id="circle-container">
        <div id="circle">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enable-background="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d="M 225, 150 a 75,75 0 1,1 -150,0 a 75,75 0 1,1 150,0 "
              />
            </defs>
            <circle cx="150" cy="150" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath xlinkHref="#circlePath" startOffset="25%">
                  Beats
                </textPath>
                <textPath xlinkHref="#circlePath" startOffset="50%">
                  Rhymes
                </textPath>
                <textPath xlinkHref="#circlePath" startOffset="75%">
                  Code
                </textPath>
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  Life
                </textPath>
              </text>
            </g>
          </svg>
        </div>
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
