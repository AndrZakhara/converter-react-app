import React, { Component, Fragment }  from 'react';
import { Header, Home, LoginForm, News, Profile } from './components';
import Converter from './pages/Converter';
>>>>>>> feature/converter, *add component currency;
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
          <Route path = '/admin-panel' component = {Admin} />
          <Route path = '/converter' component = {Converter} />
        </Switch>
        {/* <Footer /> */}
      </Fragment>      
    );
  }
}

export default App;
