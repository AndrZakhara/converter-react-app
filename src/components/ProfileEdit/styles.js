export default ({ spacing: { unit }, breakpoints }) => ({
  container: {
    marginTop: unit * 8,
  },
  form: {
    width: 600,
    margin: `${unit * 3}px auto 0`,
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  input: {
    marginBottom: unit * 2,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
