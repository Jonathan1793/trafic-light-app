import { Component } from "react";

type Colors = {
  redColor: string;
  yellowColor: string;
  greenColor: string;
};

export class ClassTrafficLight extends Component<object, Colors> {
  state: Colors = {
    redColor: "black",
    yellowColor: "black",
    greenColor: "green",
  };

  changeColor = () => {
    if (this.state.greenColor != "black") {
      this.setState({
        redColor: "black",
        yellowColor: "yellow",
        greenColor: "black",
      });
    }
    if (this.state.redColor != "black") {
      this.setState({
        redColor: "black",
        yellowColor: "black",
        greenColor: "green",
      });
    }
    if (this.state.yellowColor != "black") {
      this.setState({
        redColor: "red",
        yellowColor: "black",
        greenColor: "black",
      });
    }
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${this.state.redColor}`}></div>
          <div className={`circle ${this.state.yellowColor}`}></div>
          <div className={`circle ${this.state.greenColor}`}></div>
        </div>
        <button className="next-state-button" onClick={this.changeColor}>
          Next State
        </button>
      </div>
    );
  }
}
