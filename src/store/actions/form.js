import {
  REMOVE_FORM_ELEMENT,
  PRESERVE_NEW_FORM,
  UPDATE_FORMS,
  SAVE_FORMS
} from "./types";

import { SwypPartnerApi } from "../../core/api";
import { startNetworkRequest, stopNetworkRequest, networkError } from "./app";

const saveForms = collection => ({ type: SAVE_FORMS, collection });

const updateForms = form => ({ type: UPDATE_FORMS, form });

export const fetchForms = workspaceId => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.get(`forms/workspaces/${workspaceId}`)
      .then(res => {
        dispatch(stopNetworkRequest());
        dispatch(saveForms(res.data));
      })
      .catch(err => {
        dispatch(stopNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const createForm = details => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.post("forms", details)
      .then(res => {
        dispatch(stopNetworkRequest());
        dispatch(updateForms(res.data));
      })
      .catch(err => {
        dispatch(stopNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const preserveNewForm = form => ({ type: PRESERVE_NEW_FORM, form });
export const removeFormElement = id => ({ type: REMOVE_FORM_ELEMENT, id });
