const constants = {
  SUCCCESS_MSG: "Request Successfull..!!",
  FORBIDDEN_MSG: "Not Authorized..!!",
  FAILURE_MSG: "Request Failed..!!",
  AUTHORIZATION_SUCCESS_MESSAGE: "Login successFull..!!",
  PASSWORD_MISMATCH: "Username password does Not macth..!!",
  USER_NOT_EXISTS: "User does not exist..!!",
};

const authConstants = {
  secret_key: "1234567890",
  expires_in: "1h",
};

let parseJwt = (token) => {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

module.exports = {
  constants,
  authConstants,
  parseJwt
};