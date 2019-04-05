import React, { Fragment } from 'react';
import { Header, Footer } from 'components';
import RootRouter from 'routes';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from './styles';

const App = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
    <RootRouter />
    <Footer />
  </Fragment>
);

export default withTheme(App);
