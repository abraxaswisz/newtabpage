import React, { Component } from "react";
import WeatherIcon from "./WeatherIcon";

function convertDate(date) {
  let getDate = Date.parse(date);
  getDate = new Date(getDate);
  let convertedDate = `${getDate.getDate()}/${getDate.getMonth() +
    1}/${getDate.getFullYear()}`;
  return convertedDate;
}

export default class MoonPhase extends Component {
  state = {
    currentMoonPhase: "",
    nextFullMoon: ""
  };

  componentDidMount = () => {
    this.getMoonPhases();
  };

  getMoonPhases = () => {
    const todaysDate = new Date();
    const todaysMonth = todaysDate.getMonth() + 1;
    const todaysDay = todaysDate.getDate();
    const todaysYear = todaysDate.getFullYear();
    const moonURL = `http://api.usno.navy.mil/moon/phase?date=${todaysMonth}/${todaysDay}/${todaysYear}&nump=12`;
    fetch(moonURL)
      .then(response => response.json())
      .then(response => response.phasedata)
      .then(response => {
        console.log(response);
        const moonPhaseArray = [...response];
        this.setState({ currentMoonPhase: moonPhaseArray[0].phase });
        const nextFullMoon = moonPhaseArray.find(
          phase => phase.phase === "Full Moon"
        );
        return nextFullMoon;
      })
      .then(response => this.setState({ nextFullMoon: response.date }))
      .catch(error => console.log(error));
  };
  render() {
    const { currentMoonPhase, nextFullMoon } = this.state;
    return (
      <div id="moon">
        <span>Faza księzyca: {currentMoonPhase}</span>
        <span>Następna pełnia: {convertDate(nextFullMoon)}</span>
      </div>
    );
  }
}
