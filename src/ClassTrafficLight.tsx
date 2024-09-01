import { Component } from "react";

/*can you please go a little into the types I used here 
and the functional component too please. I'm just getting into typescript and I don't know
if I used them correctly or if they are even necessary where I used them. thank you!

*/
type ColorsIndex = {
  colorIndex: number;
};

const colors: string[] = ["red", "yellow", "green"];

export class ClassTrafficLight extends Component<object, ColorsIndex> {
  state: ColorsIndex = {
    colorIndex: 0,
  };

  changeColor = () => {
    const nextStateColor: number =
      this.state.colorIndex === 0
        ? colors.length - 1
        : this.state.colorIndex - 1;

    this.setState({ colorIndex: nextStateColor });
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {colors.map((item, index) => {
            return (
              <div
                className={`circle ${
                  index === this.state.colorIndex ? item : "black"
                }`}
              ></div>
            );
          })}
        </div>
        <button className="next-state-button" onClick={this.changeColor}>
          Next State
        </button>
      </div>
    );
  }
}
