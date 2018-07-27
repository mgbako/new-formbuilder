import { updateState } from "../utility";
import {
  START_NETWORK_REQUEST,
  END_NETWORK_REQUEST,
  NETWORK_ERROR
} from "../actions";

const initialState = {
  loading: false,
  error: false,
  errorMessage: null
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case NETWORK_ERROR:
      return updateState(state, { errorMessage: action.error });

    case START_NETWORK_REQUEST:
      return updateState(state, { loading: true });

    case END_NETWORK_REQUEST:
      return updateState(state, { loading: false });

    default:
      return state;
  }
};
