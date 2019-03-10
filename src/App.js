import React, { Component, Fragment }  from 'react';
import { Header, LoginForm, News, Profile } from './components';
import Home from './pages/Home';
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
        </Switch>
        <Footer />
      </Fragment>      
    );
  }
}

export default App;