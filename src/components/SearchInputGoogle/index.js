import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import apiKeyGoogle from './config';
import styles from './style';

class PlacesWithStandaloneSearchBox extends Component {
  componentDidMount() {
    const refs = {};
    this.setState({
      onSearchBoxMounted: ref => {
        refs.searchBox = ref;
      },
      onPlacesChanged: () => {
        const places = refs.searchBox.getPlaces();
        const { location } = places[0].geometry;
        const lat = location.lat();
        const lng = location.lng();
        this.props.loadWeather({ lat, lng });
      },
    });
  }

  render() {
    const { onSearchBoxMounted, bounds, onPlacesChanged } = this.state;
    const { classes } = this.props;

    return (
      <>
        <StandaloneSearchBox
          ref={onSearchBoxMounted}
          bounds={bounds}
          onPlacesChanged={onPlacesChanged}>
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
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}&callback&libraries=places,geometry`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
  }),
  withStyles(styles),
)(PlacesWithStandaloneSearchBox);
