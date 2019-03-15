export default ({ spacing: { unit } }) => ({
  container: {
    padding: unit,
    width: 600,
    margin: `${unit * 8}px auto 0`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: unit * 2,
  },
});
