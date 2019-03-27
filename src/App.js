import React, { Fragment } from 'react';
import { Header, Footer } from 'components';
import RootRouter from 'routes';

const App = () => (
  <Fragment>
    <Header />
    <RootRouter />
    <Footer />
  </Fragment>
);

export default App;
