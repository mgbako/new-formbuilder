import axios from "axios";

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer: ${sessionStorage.getItem("token")}`;
    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
