import React from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import { getWeatherData } from './weather.actions';
import { getWeatherDataSelector } from './weather.selectors';

class Weather extends React.Component {
  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weatherData.map(cityWeather => (
            <li key={cityWeather.key} className="city">
              <span className="city__name">{cityWeather.name}</span>
              <span className="city__temperature">{cityWeather.temperature}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
const mapState = state => {
  return {
    weatherData: getWeatherDataSelector(state),
  };
};
const mapDispatch = {
  getWeatherData: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
