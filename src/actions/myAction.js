export const MY_ACTION = 'MY_ACTION';

export const myAction = () => {
  return (dispatch) => {
    dispatch({
      type: MY_ACTION,
      item: 'item'
    })
  }
}