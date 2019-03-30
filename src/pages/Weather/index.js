import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from 'components/Weather';
import { loadWeather } from 'actions';
import locationDnepr from 'constants/location';

class WeatherWrap extends Component {
  componentDidMount() {
    const { loadWeatherAction } = this.props;
    loadWeatherAction(locationDnepr);
  }

  render() {
    const { weather, loadWeatherAction, onLoad } = this.props;
    return (
      <div>
        <Weather
          weather={weather}
          loadWeather={loadWeatherAction}
          onLoad={onLoad}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather: weather.weatherData,
  onLoad: weather.onLoading,
});

const mapDispatchToProps = {
  loadWeatherAction: loadWeather,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherWrap);
