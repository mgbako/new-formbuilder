import { SwypPartnerApi } from "../../core/api";
import {
  START_NETWORK_REQUEST,
  END_NETWORK_REQUEST,
  NETWORK_ERROR,
  SAVE_USER
} from "./types";

const startNetworkRequest = () => ({ type: START_NETWORK_REQUEST });
const endNetworkRequest = () => ({ type: END_NETWORK_REQUEST });
const networkError = error => ({ type: NETWORK_ERROR, error });
const saveUser = data => ({ type: SAVE_USER, data });

export const loginUser = loginDetails => {
  return dispatch => {
    dispatch(startNetworkRequest);
    SwypPartnerApi.post("businesses/loginuser", loginDetails)
      .then(res => {
        dispatch(endNetworkRequest());
        dispatch(saveUser(res.data));
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};

export const registerBusiness = details => {
  return dispatch => {
    dispatch(startNetworkRequest);
    SwypPartnerApi.post("businesses", details)
      .then(res => {
        dispatch(endNetworkRequest());
        dispatch(saveUser(res.data));
      })
      .catch(err => {
        dispatch(endNetworkRequest());
        dispatch(networkError(err));
      });
  };
};
