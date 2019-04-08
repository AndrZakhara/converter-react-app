import React from 'react';
import moment from 'moment';
import Fade from '@material-ui/core/Fade';
import PlacesWithStandaloneSearchBox from 'components/SearchInputGoogle';
import { WEATHER_API_ICON_URL } from 'constants/endpoints';
import {
  WeatherWrapper,
  WeatherTitle,
  WeatherContent,
  WeatherContentTemp,
  WeatherContentImg,
  WeatherContentShortInfo,
} from './styles';

const Weather = ({ weather, loadWeather, onLoad }) => {
  const iconSrc = `${WEATHER_API_ICON_URL}${weather.weather.icon}.png`;

  return (
    <Fade in={!onLoad}>
      <WeatherWrapper>
        <WeatherTitle>
          <h2>Weather in</h2>
          <span>{weather.city_name}</span>
        </WeatherTitle>
        <PlacesWithStandaloneSearchBox loadWeather={loadWeather} />
        <WeatherContent>
          <WeatherContentTemp>
            <i>{weather.temp}</i>
            <span>
              <sup> o</sup>C
            </span>
          </WeatherContentTemp>
          <WeatherContentImg src={iconSrc} alt="weather" />
          <WeatherContentShortInfo>
            <li>{moment().format('LL')}</li>
            <li>
              <h4>{weather.weather.description}</h4>
            </li>
            <li>Relative Humidity {weather.rh}% </li>
          </WeatherContentShortInfo>
        </WeatherContent>
      </WeatherWrapper>
    </Fade>
  );
};

export default Weather;
