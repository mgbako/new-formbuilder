import {
  FETCH_LOGIN_DATA,
  FETCH_WORKSPACES,
  CREATE_FORM_DATA,
  FORM_PREVIEW_DATA,
  WORKSPACE_FORMS,
  FORM_RESPONSE_PENDING,
  FORM_RESPONSE_NOTED,
  FORM_RESPONSE_PROCESSED,
  ADD_ERROR,
  REMOVE_ERROR
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  createFormData: {},
  formElement: {},
  workspaceForms: [],
  formResponsePending: {},
  formResponseNoted: {},
  formResponseProcessed: {},
  loginData: {},
  message: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN_DATA: {
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
    case FORM_PREVIEW_DATA: {
      return {
        ...state,
        formElement: action.payload
      };
    }
    case WORKSPACE_FORMS: {
      return {
        ...state,
        workspaceForms: action.payload
      };
    }
    case FORM_RESPONSE_PENDING: {
      console.log("fetching");
      return {
        ...state,
        formResponsePending: action.payload
      };
    }
    case FORM_RESPONSE_NOTED: {
      console.log("fetching");
      return {
        ...state,
        formResponseNoted: action.payload
      };
    }
    case FORM_RESPONSE_PROCESSED: {
      console.log("fetching");
      return {
        ...state,
        formResponseProcessed: action.payload
      };
    }
    case ADD_ERROR: {
      console.log(action.error);
      return {
        ...state,
        message: action.error
      };
    }

    case REMOVE_ERROR: {
      return {
        ...state,
        message: null
      };
    }

    default:
      return state;
  }
}
