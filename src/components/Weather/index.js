import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import PlacesWithStandaloneSearchBox from 'components/SearchInputGoogle';
import Fade from '@material-ui/core/Fade';
import { WEATHER_API_ICON_URL } from 'constants/endpoints';
import styles from './style';

const Weather = ({ classes, weather, loadWeather, onLoad }) => {
  const iconSrc = `${WEATHER_API_ICON_URL}${weather.weather.icon}.png`;

  return (
    <Fade in={!onLoad}>
      <div className={classes.weatherWrapper}>
        <div className={classes.weatherTitle}>
          <h2>Weather in</h2>
          <span>{weather.city_name}</span>
        </div>
        <PlacesWithStandaloneSearchBox loadWeather={loadWeather} />
        <div className={classes.weatherContent}>
          <div className={classes.weatherContentTemp}>
            <i>{weather.temp}</i>
            <span>
              <sup> o</sup>C
            </span>
          </div>
          <img
            className={classes.weatherContentImg}
            src={iconSrc}
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
    </Fade>
  );
};

export default withStyles(styles)(Weather);
