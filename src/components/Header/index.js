import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';

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
        {!isAuthenticated && (
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
        )}
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(style)(Header);
