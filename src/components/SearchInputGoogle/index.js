import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import styles from './style';

const PlacesWithStandaloneSearchBox = ({ classes, loadWeather }) => {
  const onSearchBoxMounted = useRef();

  const onPlacesChanged = () => {
    const { current } = onSearchBoxMounted;
    const places = current.getPlaces();
    const { location } = places[0].geometry;
    const lat = location.lat();
    const lng = location.lng();
    loadWeather({ lat, lng });
  };
  return (
    <>
      <StandaloneSearchBox
        ref={onSearchBoxMounted}
        onPlacesChanged={onPlacesChanged}>
        <input
          type="text"
          placeholder="Enter your location"
          className={classes.input}
        />
      </StandaloneSearchBox>
    </>
  );
};

export default withStyles(styles)(PlacesWithStandaloneSearchBox);
