<<<<<<< HEAD
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Home, LoginForm, Footer } from './components';
import { Admin, Converter, Profile  } from './pages';
=======
import React, { Component, Fragment }  from 'react';
import { Header, Home, LoginForm, News, Profile, Footer, SignUp } from './components';
import { Switch, Route, Redirect } from 'react-router-dom';
>>>>>>> feature/Sign-up make onSubmit handler

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header isAuthenticated = {false}/>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/login' component = {LoginForm} />
          <Route path = '/news' component = {News} />
          <Route path = '/profile' component = {Profile} />
          <Route path = '/sign-up' component = {SignUp} />
        </Switch>
        {/* {true && <Redirect to="/sign-up" />} */}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
