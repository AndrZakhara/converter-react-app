export default function combineEvents(reducers, initialState) {
  return (state = initialState, action) => {
    if (undefined in reducers) {
      throw new Error('Unappropriated reducer type', reducers);
    }
    if (action.type in reducers) {
      return { ...state, ...reducers[action.type](state, action) };
    }
    if ('default' in reducers) {
      return { ...state, ...reducers.default(state, action) };
    }
    return state;
  };
}
