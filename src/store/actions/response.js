import { SwypPartnerApi } from "../../core/api";
import {
  setNotificationMessage,
  startNetworkRequest,
  stopNetworkRequest,
  networkError
} from "./app";
import {
  SAVE_PROCESSED_RESPONSES,
  SAVE_PENDING_RESPONSES,
  SAVE_NOTED_RESPONSES
} from "./types";

const saveProcessedResponses = collection => ({
  type: SAVE_PROCESSED_RESPONSES,
  collection
});

const savePendingResponse = collection => ({
  type: SAVE_PENDING_RESPONSES,
  collection
});

const saveNotedResponse = collection => ({
  type: SAVE_NOTED_RESPONSES,
  collection
});

export const fetchProcessedResponse = businessId => {
  return dispatch => {
    const url = `responses/bystatus/processed?business=${businessId}`;
    dispatch(startNetworkRequest());
    makeNetworkResponse(url, dispatch, saveProcessedResponses);
  };
};

export const fetchPendingResponse = businessId => {
  return dispatch => {
    const url = `responses/bystatus/pending?business=${businessId}`;
    dispatch(startNetworkRequest());
    makeNetworkResponse(url, dispatch, savePendingResponse);
  };
};

export const fetchNotedResponse = businessId => {
  return dispatch => {
    const url = `responses/bystatus/noted?business=${businessId}`;
    dispatch(startNetworkRequest());
    makeNetworkResponse(url, dispatch, saveNotedResponse);
  };
};

const makeNetworkResponse = (url, dispatcher, resultCb) => {
  SwypPartnerApi.get(url)
    .then(res => {
      dispatcher(stopNetworkRequest());
      dispatcher(resultCb(res.data));
    })
    .catch(err => {
      const error = err.response.data;
      dispatcher(networkError(error));
      dispatcher(setNotificationMessage(error.details, error.type, "error"));
    });
};

export const all = businessId => {
  const processedUrl = `responses/bystatus/pending?business=${businessId}`;
  const pendingUrl = `responses/bystatus/pending?business=${businessId}`;
  const notedUrl = `responses/bystatus/noted?business=${businessId}`;

  const processedRequest = SwypPartnerApi.get(processedUrl);
  const pendingRequest = SwypPartnerApi.get(pendingUrl);
  const notedRequest = SwypPartnerApi.get(notedUrl);
  return dispatch => {
    Promise.all([processedRequest, pendingRequest, notedRequest])
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err.response.data));
  };
};
