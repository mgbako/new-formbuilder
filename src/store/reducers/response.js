import { updateState } from "../utility";
import {
  SAVE_PROCESSED_RESPONSES,
  SAVE_PENDING_RESPONSES,
  SAVE_NOTED_RESPONSES
} from "../actions";

const initialState = {
  processed: [],
  pending: [],
  noted: []
};

export const response = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROCESSED_RESPONSES:
      return updateState(state, { processed: action.collection });
    case SAVE_PENDING_RESPONSES:
      return updateState(state, { pending: action.collection });
    case SAVE_NOTED_RESPONSES:
      return updateState(state, { noted: action.collection });
    default:
      return state;
  }
};
