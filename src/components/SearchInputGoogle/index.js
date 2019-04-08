import React, { useRef } from 'react';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import SearchBox from './styles';

const PlacesWithStandaloneSearchBox = ({ loadWeather }) => {
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
    <StandaloneSearchBox
      ref={onSearchBoxMounted}
      onPlacesChanged={onPlacesChanged}>
      <SearchBox type="text" placeholder="Enter your location" />
    </StandaloneSearchBox>
  );
};

export default PlacesWithStandaloneSearchBox;
