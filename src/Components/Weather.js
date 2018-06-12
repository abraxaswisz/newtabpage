import React from "react";
const APIKEY = "11a003411397b91a1220e563a88b4971";
class Weather extends React.Component {
  state = {
    temperature: null
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
          temperature: response.main.temp
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return <div>Temperatura dzisiaj: {this.state.temperature}</div>;
  }
}

export default Weather;
