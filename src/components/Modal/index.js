import React from 'react';
import { compose } from 'redux';
import Modal from 'react-modal';

import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './style';

const ModalWindow = ({ isOpen, closeModal, classes, modalMessage }) => (
  <Modal className={classes.modalWindow} isOpen={isOpen}>
    <Paper className={classes.modalContentWrapper}>
      <span className={classes.mes}>
        {modalMessage}
        <CircularProgress className={classes.progress} color="primary" />
      </span>
      <div className={classes.buttonModalWrapper}>
        <Button
          className={classes.button}
          onClick={closeModal}
          variant="contained"
          color="primary">
          Cancel
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          Apply
        </Button>
      </div>
    </Paper>
  </Modal>
);

export default compose(withStyles(styles))(ModalWindow);
