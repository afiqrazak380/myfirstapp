import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { counter: "0" };

  // A function to increment the conter every time a button is clicked
  incrementCounter = () => {
    this.setState({ conter: parseInt(this.state.conter) + 1 });
  };

  // Override the render method
  render() {
    return;
    <div>
      <button onClick={this.incrementCounter}>Click Me!</button>
      <br />
      {this.state.counter}
    </div>;
  }
}

export default App;
