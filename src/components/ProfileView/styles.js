export default ({ spacing: { unit } }) => ({
  container: {
    padding: unit,
    width: 600,
    margin: `${unit * 8}px auto 0`,
    marginBottom: unit * 50,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: unit * 2,
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
  },
  media: {
    height: '140px',
    width: '140px',
    borderRadius: '50%',
  },
});
