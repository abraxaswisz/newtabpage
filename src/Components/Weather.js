import React from "react";

import WeatherIcon from "./WeatherIcon";

const APIKEY = "11a003411397b91a1220e563a88b4971";
class Weather extends React.Component {
  state = {
    temperature: null,
    weatherDescription: "",
    humidity: null,
    currentMoonPhase: "",
    nextFullMoon: ""
  };
  componentDidMount() {
    this.renderTemperature();
    this.renderMoonPhases();
  }

  renderTemperature = () => {
    const city = "Wrocław";

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`;
    fetch(weatherURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          temperature: response.main.temp,
          weatherDescription: response.weather[0].description,
          humidity: response.main.humidity + "%"
        });
        console.log(response);
      })
      .catch(error => console.error(error));
  };
  renderMoonPhases = () => {
    const todaysDate = new Date();
    console.log(todaysDate.getDay());
    const todaysMonth = todaysDate.getMonth() + 1;
    const todaysDay = todaysDate.getDate();
    const todaysYear = todaysDate.getFullYear();
    const moonURL = `http://api.usno.navy.mil/moon/phase?date=${todaysMonth}/${todaysDay}/${todaysYear}&nump=12`;
    fetch(moonURL)
      .then(response => response.json())
      .then(response => response.phasedata)
      .then(response => {
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
    const {
      temperature,
      humidity,
      weatherDescription,
      currentMoonPhase,
      nextFullMoon
    } = this.state;
    return (
      <div>
        <p>Temperatura: {temperature}</p>
        <p>Wilgotność: {humidity}</p>
        <p>Pogoda: {weatherDescription}</p>
        <WeatherIcon weatherDescription={weatherDescription} />
        <p>Faza księzyca: {currentMoonPhase}</p>
        <p>Następna pełnia: {nextFullMoon}</p>
      </div>
    );
  }
}

export default Weather;
