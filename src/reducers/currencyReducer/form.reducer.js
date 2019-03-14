import { reducer as formReducer } from 'redux-form'
import {COUNT_CURRENCY} from '../../actions/currencyAction';

export const formsReducers = ({
  form: formReducer.plugin({
    currencyForm: (state, action) => { 
      switch(action.type) {
        case COUNT_CURRENCY:
        console.log(action);
        
          return {
            ...state,
            values: {
              ...state.values,
              amountBuy: 35 
            }
          }
        default:
          return state
      }
    }
  })
});