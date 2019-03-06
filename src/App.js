import React, { Component, Fragment }  from 'react';
import { Header, Home, LoginForm, News, Profile } from './components';
import { Switch, Route } from 'react-router-dom';

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
        </Switch>
      </Fragment>      
    );
  }
}

export default App;