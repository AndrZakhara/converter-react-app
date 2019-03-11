import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = () => ({
  bigAvatar: {
    width: '100px',
    height: '100px',
  },
});

const UserInfo = ({ classes, id, users }) => {
  return (
    <div>
      <h2>User info</h2>
      <Avatar src="" alt="avatar" className={classes.bigAvatar} />
      {/* {console.log(Object.keys(users))} */}
      <h3>{id}</h3>
      <p>{id && console.log(users.id)}</p>
    </div>
  );
};

// UserInfo.propTypes = {
  
// };

export default withStyles(styles)(UserInfo);
