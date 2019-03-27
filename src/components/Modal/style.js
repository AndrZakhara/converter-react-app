const styles = () => ({
  modalWindow: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'gray',
    outline: 'none',
    width: 400,
    height: 220,
  },
  modalContentWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  mes: {
    margin: '0 20px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonModalWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    minWidth: 180,
  },
});

export default styles;
