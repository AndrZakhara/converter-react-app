import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Button,
} from '@material-ui/core';
import { Person, ExitToApp } from '@material-ui/icons';

import './style.css';

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

const Header = ({
  classes,
  isAuthenticated,
  onLogout,
  isAdmin,
  login
}) => (
  <div>
    <AppBar position="static" className="navbar">
      <Toolbar className={classes.toolbar}>
        {!isAuthenticated ? (
          <div className={classes.brand}>
            <Link to="/home">
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
        {isAuthenticated ? (
          <Fragment>
            {!isAdmin ? (
              <Fragment>
                <Link to='/admin-panel'>
                  <Button  className = 'rightButton'>
                    <span className='text'>Admin Panel</span>
                  </Button>
                </Link>
                <Link to={`/converter`}>
                <Button  className = 'rightButton'>
                  <span className='text'>Converter</span>
                </Button>
              </Link>
                <Link to='/weather'>
                  <Button  className = 'rightButton'>
                    <span className='text'>Weather</span>
                  </Button>
                </Link>
              </Fragment>
            ) : (
              <Fragment>
              <Link to={`/converter`}>
                <Button  className = 'rightButton'>
                  <span className='text'>Converter</span>
                </Button>
              </Link>
                <Link to="/weather">
                  <Button  className = 'rightButton'>
                    <span className='text'>Weather</span>
                  </Button>
                  </Link>
              </Fragment>
            )}
            <Link to="/profile">
              <Button className="rightButton">
                <Person />
                <span className="text">{login}</span>
              </Button>
            </Link>
            <Button onClick={onLogout} className="rightButton">
              <ExitToApp />
              <span className="text">Logout</span>
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Link to={`/Sign-In`}>
              <Button  className = 'rightButton'>
                <span className='text'>Sign In</span>
              </Button>
            </Link>
            <Link to={`/Sign-Up`}>
              <Button  className = 'rightButton'>
                <span className='text'>Sign Up</span>
              </Button>
            </Link>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(style)(Header);
