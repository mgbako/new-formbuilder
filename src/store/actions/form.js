import { SwypPartnerApi } from "../../core/api";
import {
  START_NETWORK_REQUEST,
  REMOVE_FORM_ELEMENT,
  STOP_NETWORK_REQUEST,
  PRESERVE_NEW_FORM,
  NETWORK_ERROR,
  UPDATE_FORMS,
  SAVE_FORMS
} from "./types";

const saveForms = collection => ({ type: SAVE_FORMS, collection });
const startNetworkRequest = () => ({ type: START_NETWORK_REQUEST });
const endNetworkRequest = () => ({ type: STOP_NETWORK_REQUEST });
const networkError = error => ({ type: NETWORK_ERROR, error });
const updateForms = form => ({ type: UPDATE_FORMS, form });

export const fetchForms = workspaceId => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.get(`forms/workspaces/${workspaceId}`)
      .then(res => {
        dispatch(endNetworkRequest());
        dispatch(saveForms(res.data));
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const createForm = details => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.post("forms", details)
      .then(res => {
        dispatch(endNetworkRequest());
        dispatch(updateForms(res.data));
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const preserveNewForm = form => ({ type: PRESERVE_NEW_FORM, form });
export const removeFormElement = id => ({ type: REMOVE_FORM_ELEMENT, id });
