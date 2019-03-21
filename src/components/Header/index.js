import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';

import styles from './style';

const Header = ({ classes, isAuthenticated, onLogout, isAdmin, login }) => (
  <div>
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        {!isAuthenticated ? (
          <div className={classes.brand}>
            <Link to="/home" className={classes.navbarA}>
              <Button>
                <Typography variant="title" className={classes.title}>
                  LOGO
                </Typography>
              </Button>
            </Link>
          </div>
        ) : (
          <Typography variant="title" className={classes.title}>
            LOGO
          </Typography>
        )}
        {!isAuthenticated && (
          <Fragment>
            {!isAdmin ? (
              <Fragment>
                <Link to="/admin-panel" className={classes.navbarA}>
                  <Button className={classes.rightButton}>
                    <span className="text">Admin Panel</span>
                  </Button>
                </Link>
                <Link to="/converter" className={classes.navbarA}>
                  <Button className={classes.rightButton}>
                    <span className="text">Converter</span>
                  </Button>
                </Link>
                <Link to="/weather" className={classes.navbarA}>
                  <Button className={classes.rightButton}>
                    <span className="text">Weather</span>
                  </Button>
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/converter" className={classes.navbarA}>
                  <Button className={classes.rightButton}>
                    <span className="text">Converter</span>
                  </Button>
                </Link>
                <Link to="/weather" className={classes.navbarA}>
                  <Button className={classes.rightButton}>
                    <span className="text">Weather</span>
                  </Button>
                </Link>
              </Fragment>
            )}
            <Link to="/profile" className={classes.navbarA}>
              <Button className={classes.rightButton}>
                <Person />
                <span className="text">{login}</span>
              </Button>
            </Link>
            <Button onClick={onLogout} className={classes.rightButton}>
              <ExitToApp />
              <span className="text">Logout</span>
            </Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
