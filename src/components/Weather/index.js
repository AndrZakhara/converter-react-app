import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

import PlacesWithStandaloneSearchBox from 'components/SearchInputGoogle';
import styles from './style';

class Weather extends Component {
  componentDidMount() {
    const { loadWeather } = this.props;
    loadWeather();
  }

  render() {
    const { classes, weather } = this.props;
    return (
      <div className={classes.weatherWrapper}>
        <div className={classes.weatherTitle}>
          <h2>Weather in</h2>
          <span>{weather.city_name}</span>
        </div>
        <PlacesWithStandaloneSearchBox />
        <div className={classes.weatherContent}>
          <div className={classes.weatherContentTemp}>
            <i>{weather.temp}</i>
            <span>
              <sup> o</sup>C
            </span>
          </div>
          <img
            className={classes.weatherContentImg}
            src={`https://www.weatherbit.io/static/img/icons/${
              weather.weather.icon
            }.png`}
            alt="weather"
          />
          <ul className={classes.weatherContentShortInfo}>
            <li>{moment().format('LL')}</li>
            <li>
              <h4>{weather.weather.description}</h4>
            </li>
            <li>Relative Humidity {weather.rh}% </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Weather);
