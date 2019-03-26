const styles = () => ({
  root: {
    minWidth: 320,
    width: 320,
    height: '100%',
    overflowY: 'auto',
    padding: 0,
    backgroundColor: '#F0F0F0',
  },
  searchWrapper: {
    padding: '10px 0px 5px 20px',
    display: 'flex',
    alighnItems: 'center',
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 9,
  },
  listWrapper: {
    height: '100%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  divider: {
    width: 1,
    height: 36,
    margin: 4,
  },
});

export default styles;
