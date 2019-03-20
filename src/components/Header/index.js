import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';

import './style.css';
import { signOut } from 'actions/auth';

const style = {
  toolbar: {
    display: 'flex',
  },
  brand: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  title: {
    color: '#fff',
  },
};

const Header = ({ classes, isLoggedIn, role, onLogOut }) => {
  const LogOutHandler = () => onLogOut();
  return (
    <div>
      <AppBar position="static" className="navbar">
        <Toolbar className={classes.toolbar}>
          {isLoggedIn ? (
            <div className={classes.brand}>
              <Link to="/">
                <Button>
                  <Typography variant="title" className={classes.title}>
                    LOGO
                  </Typography>
                </Button>
              </Link>
            </div>
          ) : (
            <div className={classes.brand}>
              <Typography variant="title" className={classes.title}>
                LOGO
              </Typography>
            </div>
          )}
          {isLoggedIn ? (
            <Fragment>
              {role === 'admin' ? (
                <Fragment>
                  <Link to="/admin-panel">
                    <Button className="rightButton">
                      <span className="text">Admin Panel</span>
                    </Button>
                  </Link>
                </Fragment>
              ) : null}
              <Link to="/converter">
                <Button className="rightButton">
                  <span className="text">Converter</span>
                </Button>
              </Link>
              <Link to="/weather">
                <Button className="rightButton">
                  <span className="text">Weather</span>
                </Button>
              </Link>
              <Link to="/profile">
                <Button className="rightButton">
                  <Person />
                </Button>
              </Link>
              <Button className="rightButton" onClick={LogOutHandler}>
                <ExitToApp />
                <span className="text">Logout</span>
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/sign-in">
                <Button className="rightButton">
                  <span className="text">Sign In</span>
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button className="rightButton">
                  <span className="text">Sign Up</span>
                </Button>
              </Link>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ auth, user }) => ({
  isLoggedIn: auth.isLoggedIn,
  role: user.profile.role,
});

const mapDispatchToProps = {
  onLogOut: signOut,
};

export default compose(
  withStyles(style),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
