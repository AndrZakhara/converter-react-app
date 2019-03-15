import { reducer as formReducer } from 'redux-form'
import {COUNT_CURRENCY} from '../../actions/currencyAction';

export const formsReducers = ({
  form: formReducer.plugin({
    currencyForm: (state, action) => { 
      switch(action.type) {
        case COUNT_CURRENCY:
          return {
            ...state,
            values: action.payload
          }
        default:
          return state
      }
    }
  })
});