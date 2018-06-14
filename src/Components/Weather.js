import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

const APIKEY = "11a003411397b91a1220e563a88b4971";
class Weather extends React.Component {
  static propTypes = {
    weatherDescription: PropTypes.string
  };
  state = {
    temperature: null,
    weatherDescription: "",
    humidity: null
  };
  componentDidMount() {
    this.getTemperature();
  }

  getTemperature = () => {
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
      </div>
    );
  }
}

export default Weather;
