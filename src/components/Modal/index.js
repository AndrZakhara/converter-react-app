import React from 'react';
import { compose } from 'redux';
import Modal from 'react-modal';

import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './style';

const ModalWindow = ({
  isOpen,
  closeModal,
  classes,
  modalMessage,
  handleClick,
  isLoading,
  isSuccess,
}) => (
  <Modal className={classes.modalWindow} isOpen={isOpen} ariaHideApp={false}>
    <Paper className={classes.modalContentWrapper}>
      <span className={classes.mes}>
        {!isLoading && !isSuccess && <p>{modalMessage.approve}</p>}
        {isSuccess && <p>{modalMessage.success}</p>}
        {isLoading && (
          <CircularProgress className={classes.progress} color="primary" />
        )}
      </span>
      <div className={classes.buttonModalWrapper}>
        <Button
          className={classes.button}
          disabled={isSuccess && true}
          onClick={closeModal}
          variant="contained"
          color="primary">
          Cancel
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={!isSuccess ? handleClick : closeModal}>
          {!isSuccess ? 'Apply' : 'Close'}
        </Button>
      </div>
    </Paper>
  </Modal>
);

export default compose(withStyles(styles))(ModalWindow);
