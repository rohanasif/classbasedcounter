import React from "react";

export default class App extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
