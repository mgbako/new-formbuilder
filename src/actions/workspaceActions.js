import axios from "axios";
import {
  FETCH_LOGIN_DATA,
  FETCH_WORKSPACES,
  CREATE_FORM_DATA,
  WORKSPACE_FORMS,
  FORM_RESPONSE_STATUS
} from "./types";

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
        console.log(error);
      });
  };
}

export function fetchWorkspaces(businessId) {
  return function(dispatch) {
    axios
      .get(
        `http://swyp-business-backend-service.herokuapp.com/api/v1/workspaces/getbybusiness/${businessId}`
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

export function fetchWorkspaceForm(workspaceId) {
  return function(dispatch) {
    axios
      .get(
        `http://swyp-business-backend-service.herokuapp.com/api/v1/forms/workspaces/${workspaceId}`
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

export function fetchFormResponseStatus() {
  return function(dispatch) {
    axios
      .get(
        "http://swyp-business-backend-service.herokuapp.com/api/v1/responses/bystatus/pending"
      )
      .then(response => {
        console.log(response.data);
        dispatch({
          type: FORM_RESPONSE_STATUS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
