export default ({ spacing: { unit } }) => ({
  container: {
    marginTop: unit * 8,
    marginBottom: unit * 40,
  },
  form: {
    width: 600,
    margin: `${unit * 3}px auto 0`,
  },
  input: {
    marginBottom: unit * 2,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
