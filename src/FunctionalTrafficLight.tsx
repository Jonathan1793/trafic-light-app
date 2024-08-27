import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [redColor, setRedColor] = useState<string>("black");
  const [greenColor, setGreenColor] = useState<string>("green");
  const [yellowColor, setYellowColor] = useState<string>("black");

  const changeColor = () => {
    if (greenColor != "black") {
      setRedColor("black");
      setYellowColor("yellow");
      setGreenColor("black");
    }
    if (redColor != "black") {
      setGreenColor("green");
      setYellowColor("black");
      setRedColor("black");
    }
    if (yellowColor != "black") {
      setGreenColor("black");
      setRedColor("red");
      setYellowColor("black");
    }
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${redColor}`}></div>
        <div className={`circle ${yellowColor}`}></div>
        <div className={`circle ${greenColor}`}></div>
      </div>
      <button className="next-state-button" onClick={changeColor}>
        Next State
      </button>
    </div>
  );
};
