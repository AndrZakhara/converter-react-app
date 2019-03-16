import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { styles } from './style';

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className="footer">
        <Grid className={classes.subFooter}>
          <Typography
            className={classes.footerText}
            variant="subheading"
            component="span">
            © {currentYear} CHISW, Inc.
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
