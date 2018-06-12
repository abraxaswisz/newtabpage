import React from "react";

import WeatherIcon from "./WeatherIcon";

const APIKEY = "11a003411397b91a1220e563a88b4971";
class Weather extends React.Component {
  state = {
    temperature: null,
    weatherDescription: ""
  };
  componentDidMount() {
    this.renderTemperature();
  }

  renderTemperature = () => {
    const city = "Wrocław";

    const requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`;

    fetch(requestURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          temperature: response.main.temp,
          weatherDescription: response.weather[0].description
        });
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h4>Temperatura dzisiaj:</h4>
        <p>{this.state.temperature}</p>
        <p>{this.state.weatherDescription}</p>
        <WeatherIcon weatherDescription={this.state.weatherDescription} />
      </div>
    );
  }
}

export default Weather;
