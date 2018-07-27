import axios from "axios";

export const SwypPartnerApi = axios.create({
  baseURL: "https://swyp-business-backend-service.herokuapp.com/api/v1/"
});
