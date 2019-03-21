import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';

import { signOut } from 'actions/auth';
import { ADMIN } from 'constants/roles';
import styles from './style';

const Header = ({ classes, isLoggedIn, role, onLogOut }) => (
  <div>
    <AppBar position="static" className={classes.navbar}>
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
            {role === ADMIN ? (
              <Fragment>
                <Link to="/admin-panel" className={classes.navbarA}>
                  <Button className={classes.rightButton}>
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
            <Button className={classes.rightButton} onClick={onLogOut}>
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

const mapStateToProps = ({ auth, user }) => ({
  isLoggedIn: auth.isLoggedIn,
  role: user.profile.role,
});

const mapDispatchToProps = {
  onLogOut: signOut,
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
