import jwt from "jwt-decode";

function isJwtExpired() {
  const jwtToken = window.sessionStorage.getItem("access-token");
  if (jwtToken === "" || jwtToken === undefined || jwtToken === null) {
    return true;
  } else {
    var jwtExpired = jwt<any>(jwtToken).exp * 1000 < new Date().getTime();
    return jwtExpired;
  }
}

export default isJwtExpired;
