import { SAVE_USER } from "../actions";
import { updateState } from "../utility";

const initialState = {
  user: null,
  business: null,
  token: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return updateState(state, {
        business: action.data.business,
        token: action.data.token,
        user: action.data.user
      });

    default:
      return state;
  }
};
