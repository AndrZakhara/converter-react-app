import React from 'react';
import { connect } from 'react-redux';
import Weather from 'components/Weather';
import { loadWeather } from 'actions/weather.actions';

const WeatherWrap = ({ weather, loadWeatherAction }) => (
  <div>
    <Weather weather={weather} loadWeather={loadWeatherAction} />
  </div>
);

const mapStateToProps = ({ weather }) => ({
  weather: weather.weatherData,
});

const mapDispatchToProps = {
  loadWeatherAction: loadWeather,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherWrap);
