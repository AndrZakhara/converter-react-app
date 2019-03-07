import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';

class Footer extends Component {
  render () {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className={classes.root}>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.footerText}
            variant='subheading'
            component={'span'}
          >
            © {currentYear} CHISW, Inc.
          </Typography>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    backgroundColor: `#3f51b5`,
    overflowX: 'hidden',
    position: 'absolute',
    bottom: '0',
    height: '58px',
    width: '100%'
  },
  subFooter: {
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#fff',
    fontSize: '0.95rem',
    textAlign: 'center',
    lineHeight: 1.5
  }
})

export default withStyles(styles)(Footer)