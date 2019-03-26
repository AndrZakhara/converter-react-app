import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from 'components/Weather';
import { loadWeather } from 'actions/weather.actions';

class WeatherWrap extends Component {
  componentDidMount() {
    const { loadWeatherAction } = this.props;
    loadWeatherAction({ lat: 48.46, lng: 35.046 });
  }

  render() {
    const { weather, loadWeatherAction } = this.props;
    return (
      <div>
        <Weather weather={weather} loadWeather={loadWeatherAction} />
      </div>
    );
  }
}

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