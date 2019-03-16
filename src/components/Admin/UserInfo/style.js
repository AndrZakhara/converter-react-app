const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    color: '#999999',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
  },
  infoWrapper: {
    display: 'flex',
  },
  bigAvatar: {
    width: '100px',
    height: '100px',
  },
});

export default styles;