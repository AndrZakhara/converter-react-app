import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  header: {
    color: 'green',
  }
});

const Header = ({ classes }) => {
  return (
    <header>
    <div>
      <h2 className = {classes.header}>My App!</h2>
      <Icon>star</Icon>
    </div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>
    </header>

  );
};

export default withStyles(styles)(Header);