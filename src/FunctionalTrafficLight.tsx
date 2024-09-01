import { useState } from "react";
const colors = ["red", "yellow", "green"];
export const FunctionalTrafficLight = () => {
  const [currentColor, setColor] = useState<number>(0);
  const changeColor = () => {
    const nextColor: number =
      currentColor === 0 ? colors.length - 1 : currentColor - 1;
    setColor(nextColor);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {colors.map((item, index) => {
          return (
            <div
              className={`circle ${currentColor === index ? item : "black"}`}
            ></div>
          );
        })}
      </div>
      <button className="next-state-button" onClick={changeColor}>
        Next State
      </button>
    </div>
  );
};
