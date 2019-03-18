/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Home, LoginForm, Footer } from './components';
import { Admin, Converter, Profile, SignUp, SignIn } from './pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/admin-panel" component={Admin} />
          <Route path="/profile" component={Profile} />
          <Route path="/converter" component={Converter} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
        {true && <Redirect to="/sign-in" />}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
