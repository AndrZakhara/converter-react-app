export default ({ spacing: { unit } }) => ({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  container: {
    padding: `0 ${unit * 3}px`,
  },
});
