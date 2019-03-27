import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const InputFile = React.forwardRef(({ onChange, accept, classes }, ref) => (
  <input
    type="file"
    accept={accept.join(',')}
    ref={ref}
    className={classes.root}
    onChange={onChange}
  />
));

InputFile.defaultProps = {
  accept: ['.png', '.jpg', '.jpeg'],
};

InputFile.propTypes = {
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(InputFile);
