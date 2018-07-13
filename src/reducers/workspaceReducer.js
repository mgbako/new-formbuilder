import {
  FETCH_LOGIN_DATA,
  FETCH_WORKSPACES,
  NEW_WORKSPACE,
  CREATE_FORM_DATA,
  WORKSPACE_FORMS,
  FORM_RESPONSE_STATUS,
  PENDING_STATUS
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  createFormData: {},
  workspaceForms: [],
  formResponseData: {},
  loginData: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN_DATA: {
      console.log("fetching");

      return {
        ...state,
        loginData: action.payload
      };
    }
    case FETCH_WORKSPACES: {
      return {
        ...state,
        items: action.payload
      };
    }
    case CREATE_FORM_DATA: {
      return {
        ...state,
        createFormData: action.payload
      };
    }

    case WORKSPACE_FORMS: {
      return {
        ...state,
        workspaceForms: action.payload
      };
    }
    case FORM_RESPONSE_STATUS: {
      return {
        ...state,
        formResponseData: action.payload
      };
    }

    default:
      return state;
  }
}