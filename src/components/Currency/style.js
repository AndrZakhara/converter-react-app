// eslint-disable-next-line import/prefer-default-export
export const styles = theme => ({
  appContent: {
    width: 650,
    margin: 'auto',
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid #3f51b5',
    borderRadius: 5,
    background: '#fff',
    paddingBottom: 30,
  },
  marginDef: {
    margin: 0,
  },
  converterTitle: {
    background: '#3f51b5',
    color: '#fff',
    borderRadius: '5px 5px 0 0',
    width: `${100}%`,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    lineHeight: `${50}px`,
  },
  currencyLine: {
    width: `${90}%`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  buyBtn: {
    width: 150,
    fontSize: 20,
  },
  changeBtn: {
    width: 60,
    borderRadius: 7,
    fontSize: 20,
    lineHeight: `${28}px`,
  },
  bottomBtnsWrap: {
    width: `${100}%`,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  formControl: {
    width: `${220}px`,
    textAlign: 'center',
  },
  feeWrapper: {
    width: `${30}%`,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputAmount: {
    width: `${220}px`,
  },
});
