import React from 'react';
import image from 'assets/images/404_image.gif';
import { Сontainer, Media, MediaTitle, MediaTitleMain } from './styles';

const PageNotFound = () => (
  // eslint-disable-next-line react/jsx-pascal-case
  <Сontainer>
    <Media image={image} />
    <MediaTitle>
      <MediaTitleMain>404</MediaTitleMain>
      <p>Ooops, the page you are looking for does not exist.</p>
    </MediaTitle>
  </Сontainer>
);

export default PageNotFound;
