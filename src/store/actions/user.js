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
        const error = err.response.data;
        dispatch(stopNetworkRequest());
        dispatch(networkError(error));
        dispatch(setNotificationMessage(error.details, error.type));
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
        const error = err.response.data;
        dispatch(stopNetworkRequest());
        dispatch(networkError(error));
        dispatch(
          setNotificationMessage(
            "Business name Already Taken",
            error.type,
            "error"
          )
        );
      });
  };
};
