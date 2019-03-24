import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import apiKeyGoogle from './config';

class PlacesWithStandaloneSearchBox extends Component {
  componentWillMount() {
    const refs = {};

    this.setState({
      places: [],
      onSearchBoxMounted: ref => {
        refs.searchBox = ref;
      },
      onPlacesChanged: () => {
        const places = refs.searchBox.getPlaces();
        const cordinats = places.map(({ geometry: { location } }) => ({
          lat: location.lat(),
          long: location.lng(),
        }));
        this.setState({
          places,
        });
      },
    });
  }

  render() {
    const { onSearchBoxMounted, bounds, onPlacesChanged } = this.props;
    return (
      <>
        <StandaloneSearchBox
          ref={onSearchBoxMounted}
          bounds={bounds}
          onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Enter your location"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '85%',
              height: '32px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              outline: 'none',
              textOverflow: 'ellipses',
            }}
          />
        </StandaloneSearchBox>
      </>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKeyGoogle}&callback&libraries=places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
  }),
  withScriptjs,
)(PlacesWithStandaloneSearchBox);
