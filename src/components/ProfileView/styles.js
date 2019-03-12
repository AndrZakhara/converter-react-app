export default ({ spacing: { unit } }) => ({
  container: {
    padding: unit,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: unit * 2,
  },
});
