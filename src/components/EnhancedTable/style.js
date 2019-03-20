export default theme => ({
  root: {
    width: '90%',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  headerTitle: {
    background: '#3f51b5',
    color: '#fff',
    borderRadius: '4px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    margin: 0,
    padding: '10px 0',
    border: '1px solid #3f51b5',
    boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 3px 1px -2px rgba(0,0,0,0.12)`,
    textTransform: 'capitalize',
    letterSpacing: '1px',
  },
});
