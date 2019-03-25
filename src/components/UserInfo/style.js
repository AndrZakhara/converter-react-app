const styles = theme => ({
  paperWrapper: {
    color: theme.palette.text.secondary,
    padding: '0px 10px',
    display: 'flex',
    flexDirection: 'column',
    width: '620px',
  },
  headerWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  infoBodyWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userInfoWrapper: {
    width: '60%',
  },
  bigAvatar: {
    marginLeft: 50,
    width: '120px',
    height: '120px',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    margin: '0 5px 5px 5px',
  },
});

export default styles;
