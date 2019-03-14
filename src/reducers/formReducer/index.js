import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer.plugin({
    login: (state, action) => {
      switch (action.type) {
        case BUY_CURRENCY:
          console.log(action.payload);
          return state;
        default:
          return state;
      }
    },
  }),
};
