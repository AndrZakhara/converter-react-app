import React from 'react';
import { compose } from 'redux';
import Modal from 'react-modal';

import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import styles from './style';

const ModalWindow = props => {
  const { isOpen, closeModal, classes } = props;

  return (
    <Modal className={classes.modalWindow} isOpen={isOpen}>
      <Paper className={classes.modalContentWrapper}>
        <span className={classes.mes}>
          Do You really want to remove user Vasya Ivanov ?
        </span>
        <div className={classes.buttonModalWrapper}>
          <Button
            className={classes.button}
            onClick={closeModal}
            variant="contained"
            color="primary">
            Cancel
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary">
            Apply
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

export default compose(withStyles(styles))(ModalWindow);
