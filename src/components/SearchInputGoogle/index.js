import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import styles from './style';

class PlacesWithStandaloneSearchBox extends Component {
  onSearchBoxMounted = ref => {
    this.searchBox = ref;
  };

  onPlacesChanged = () => {
    const places = this.searchBox.getPlaces();
    const { location } = places[0].geometry;
    const lat = location.lat();
    const lng = location.lng();
    const { loadWeather } = this.props;
    loadWeather({ lat, lng });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <StandaloneSearchBox
          ref={this.onSearchBoxMounted}
          onPlacesChanged={this.onPlacesChanged}>
          <input
            type="text"
            placeholder="Enter your location"
            className={classes.input}
          />
        </StandaloneSearchBox>
      </>
    );
  }
}

export default compose(
  withProps({
    loadingElement: <div />,
    containerElement: <div />,
  }),
  withStyles(styles),
)(PlacesWithStandaloneSearchBox);