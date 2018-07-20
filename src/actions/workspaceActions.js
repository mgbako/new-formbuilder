import axios from "axios";
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
} from "./types";

export const addError = error => ({
  type: ADD_ERROR,
  error
});

export const removeError = () => ({
  type: REMOVE_ERROR
});

export function loginUser(loginDetails) {
  return function(dispatch) {
    axios
      .post(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/businesses/loginuser`,
        {
          email: loginDetails.email,
          password: loginDetails.password
        }
      )
      .then(response => {
        sessionStorage.setItem("token", response.data.token);
        const accounts = response.data.business.accounts;
        console.log(accounts);
        dispatch({
          type: FETCH_LOGIN_DATA,
          payload: response.data
        });
      })
      .catch(error => {
        error = error.response.data;

        dispatch(addError(error.message));
      });
  };
}

export function fetchWorkspaces(businessId) {
  return function(dispatch) {
    axios
      .get(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/workspaces/businesses/${businessId}`
      )
      .then(response => {
        dispatch({
          type: FETCH_WORKSPACES,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getFormIdAndTitle(createFormData) {
  return function(dispatch) {
    dispatch({
      type: CREATE_FORM_DATA,
      payload: createFormData
    });
  };
}
export function formPreviewData(formElement) {
  return function(dispatch) {
    dispatch({
      type: FORM_PREVIEW_DATA,
      payload: formElement
    });
  };
}

export function fetchWorkspaceForm(workspaceId) {
  return function(dispatch) {
    axios
      .get(
        `https://swyp-business-backend-service.herokuapp.com/api/v1/forms/workspaces/${workspaceId}`
      )
      .then(response => {
        console.log(response.data);
        dispatch({
          type: WORKSPACE_FORMS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function fetchPendingForms() {
  return function(dispatch) {
    axios
      .get(
        "https://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/pending"
      )
      .then(response => {
        console.log(response.data);
        dispatch({
          type: FORM_RESPONSE_PENDING,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function fetchNotedForms() {
  return function(dispatch) {
    axios
      .get(
        "https://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/noted"
      )
      .then(response => {
        console.log(response.data);
        dispatch({
          type: FORM_RESPONSE_NOTED,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function fetchProcessedForms() {
  return function(dispatch) {
    axios
      .get(
        "https://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/processed"
      )
      .then(response => {
        console.log(response.data);
        dispatch({
          type: FORM_RESPONSE_PROCESSED,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
