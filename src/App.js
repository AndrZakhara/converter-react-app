import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Home, LoginForm, News, Profile, Footer } from './components';
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
<<<<<<< HEAD
          <Route path = '/admin-panel' component = {Admin} />
=======
          <Route path = '/administrator' component = {Admin} />
>>>>>>> 7ed3d222f680af26fb4f1cd38614e5df8f5dad95
        </Switch>
        <Footer />
      </Fragment>      
    );
  }
}

export default App;
