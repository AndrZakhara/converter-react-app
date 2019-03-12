export const MY_ACTION = 'MY_ACTION';

export const myAction = () => dispatch => {
  dispatch({
    type: MY_ACTION,
    item: 'item',
  });
};
