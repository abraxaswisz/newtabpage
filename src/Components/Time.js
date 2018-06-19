import React from "react";

export default class Time extends React.Component {
  state = {
    time: new Date()
  };
  addSecond = () => {
    this.setState({ time: new Date() });
  };

  componentDidMount() {
    this.actualTime = setInterval(() => {
      this.addSecond();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.actualTime);
  }
  render() {
    return (
      <React.Fragment>
        <h2 id="time">{this.state.time.toLocaleTimeString()}</h2>
      </React.Fragment>
    );
  }
}
