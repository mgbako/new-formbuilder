import { updateState } from "../utility";
import {
  REMOVE_FORM_ELEMENT,
  PRESERVE_NEW_FORM,
  UPDATE_FORMS,
  SAVE_FORMS
} from "../actions";

const initialState = {
  all: [],
  newForm: []
};
export const form = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FORM_ELEMENT:
      const inputs = state.newForm.filter(el => el.id !== action.id);
      return updateState(state, { newForm: inputs });

    case PRESERVE_NEW_FORM:
      return updateState(state, { newForm: action.form });

    case UPDATE_FORMS:
      return updateState(state, { all: state.all.concat(action.form) });

    case SAVE_FORMS:
      return updateState(state, { all: action.collection });

    default:
      return state;
  }
};
