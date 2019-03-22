export default ({ spacing: { unit } }) => ({
  container: {
    margin: '0 auto 0',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  title: {
    marginBottom: unit * 2,
  },
  media: {
    width: '100%',
    height: '990px',
  },
  mediaTitle: {
    width: '80%',
    color: '#fff',
    fontSize: '40px',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  mediaTitleMain: {
    fontSize: '225px',
    fontWeight: '800',
    margin: '0',
    marginBottom: '30px',
  },
});
