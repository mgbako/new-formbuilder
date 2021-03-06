import { SwypPartnerApi } from "../../core/api";
import { SAVE_USER } from "./types";
import {
  setNotificationMessage,
  startNetworkRequest,
  stopNetworkRequest,
  networkError
} from "./app";

const saveUser = data => ({ type: SAVE_USER, data });

export const loginUser = loginDetails => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.post("businesses/loginuser", loginDetails)
      .then(res => {
        dispatch(stopNetworkRequest());
        dispatch(saveUser(res.data));
      })
      .catch(err => {
        if (err.response) {
          const error = err.response.data;
          dispatch(stopNetworkRequest());
          dispatch(setNotificationMessage(error.details, "error"));
        }
        dispatch(networkError(err));
        dispatch(setNotificationMessage("Bad Network", "error"));
      });
  };
};

export const registerBusiness = details => {
  return dispatch => {
    dispatch(startNetworkRequest());
    SwypPartnerApi.post("businesses", details)
      .then(res => {
        dispatch(stopNetworkRequest());
        dispatch(saveUser(res.data));
      })
      .catch(err => {
        if (err.response) {
          const error = err.response.data;
          dispatch(stopNetworkRequest());
          dispatch(setNotificationMessage(error.details, "error"));
        }
        dispatch(networkError(err));
        dispatch(setNotificationMessage("Bad Network", "error"));
      });
  };
};
