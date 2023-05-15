import "./RotatingCircle.css";

const RotatingCircle = () => {
  return (
    <div className="RotatingCircle">
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
  );
};

export default RotatingCircle;
