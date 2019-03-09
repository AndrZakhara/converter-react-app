import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Home, LoginForm, News, Profile } from './components';
import { Admin } from './pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path = '/login' component = {LoginForm} />
          <Route path = '/news' component = {News} />
          <Route path = '/profile' component = {Profile} />
          <Route path = '/administrator' component = {Admin} />
        </Switch>
      </Fragment>      
    );
  }
}

export default App;
