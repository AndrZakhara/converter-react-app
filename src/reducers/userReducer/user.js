import { fromJS } from "immutable";
import { FETCH_USER, FETCH_USER_SUCCESS, SAVE_PROFILE } from "../../actions/types";

const initialState = fromJS({
  profile: null
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return state.merge({
        error: null
      });
    case FETCH_USER_SUCCESS:
      return state.merge({
        profile: fromJS(payload)
      });
    case SAVE_PROFILE:
      console.log(payload);
      return state.set("profile", fromJS(payload));
    default:
      return state;
  }
};