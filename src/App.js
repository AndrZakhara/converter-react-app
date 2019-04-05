import React, { Fragment } from 'react';
import { Header, Footer } from 'components';
import RootRouter from 'routes';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Header />
      <RootRouter />
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default withTheme(App);
