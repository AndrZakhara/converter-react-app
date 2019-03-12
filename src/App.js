import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, LoginForm, Footer } from './components';
import { Admin, Converter, Profile, SignUp, Home } from './pages';

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
        </Switch>
        {/* {true && <Redirect to="/sign-up" />} */}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
