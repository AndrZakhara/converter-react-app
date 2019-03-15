import { reducer as formReducer } from 'redux-form'
import {COUNT_CURRENCY_ASYNC} from 'actions/currencyAction';

export const formsReducers = ({
  form: formReducer.plugin({
    currencyForm: (state, action) => {
      switch(action.type) {
        case COUNT_CURRENCY_ASYNC:
        console.log(action);
        
          return {
            ...state,
            amountBuy: action.payload,
          }
        default:
          return state
      }
    }
  })
});