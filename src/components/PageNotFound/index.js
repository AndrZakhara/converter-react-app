import React from 'react';
import { Card, withStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

import styles from './styles';

const PageNotFound = ({ classes }) => (
  <Card className={classes.container}>
    <CardMedia
      className={classes.media}
      image="http://www.reactiongifs.us/wp-content/uploads/2015/04/nothing_to_see_here_naked_gun.gif"
    />
    <div className={classes.mediaTitle}>
      <h2 className={classes.mediaTitleMain}>404</h2>
      <p>Ooops, the page you are looking for does not exist.</p>
    </div>
  </Card>
);

export default withStyles(styles)(PageNotFound);
