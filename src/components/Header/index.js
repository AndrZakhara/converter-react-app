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
      <nav>
        <ul>
          {/* <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to='/profile'>Profile</Link></li> */}
          <li><Link to='/administrator'>Admin page</Link></li>
        </ul>
      </nav>
    </header>

  );
};

export default withStyles(styles)(Header);