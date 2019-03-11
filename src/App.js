import React, { Component, Fragment }  from 'react';
import { Header, Home, LoginForm, News, Profile } from './components';
import Converter from './pages/Converter';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path = '/' 
          component = {Home} />
          <Route path = '/login' component = {LoginForm} />
          <Route path = '/news' component = {News} />
          <Route path = '/profile' component = {Profile} />
          <Route path = '/converter' component = {Converter} />
        </Switch>
        <Footer />
      </Fragment>      
    );
  }
}

export default App;