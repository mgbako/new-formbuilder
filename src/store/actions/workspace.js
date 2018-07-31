import { SwypPartnerApi } from "../../core/api";
import {
  START_NETWORK_REQUEST,
  STOP_NETWORK_REQUEST,
  SAVE_WORKSPACES,
  DELETE_WORKSPACE,
  UPDATE_WORKSPACES,
  NETWORK_ERROR
} from "./types";

const updateWorkspaces = workspace => ({ type: UPDATE_WORKSPACES, workspace });
const startNetworkRequest = () => ({ type: START_NETWORK_REQUEST });
const endNetworkRequest = () => ({ type: STOP_NETWORK_REQUEST });
const networkError = error => ({ type: NETWORK_ERROR, error });
const removeWorkspace = id => ({ type: DELETE_WORKSPACE, id });
const saveWorkspaces = collection => ({
  type: SAVE_WORKSPACES,
  collection
});

export const fetchWorkspaces = businessId => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.get(`workspaces/businesses/${businessId}`)
      .then(res => {
        dispatch(endNetworkRequest());
        dispatch(saveWorkspaces(res.data));
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const createWorkspace = details => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.post("workspaces", details)
      .then(res => {
        dispatch(endNetworkRequest());
        updateWorkspaces(res.data);
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const deleteWorkspace = id => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.delete(`workspaces/${id}`)
      .then(() => {
        dispatch(endNetworkRequest());
        // check if delete was successful before remove item
        dispatch(removeWorkspace(id));
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};
