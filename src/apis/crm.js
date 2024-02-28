import Axios from "axios";
import { coreGet, coreRequest } from "./core";
import { auth } from "../utils/auth";

const devUrl =
  "https://rlh-orchestration-api-management-dev.azure-api.net/api/orchestration";
// const baseUrl = 'https://rlh-orchestration-api-management-prod.azure-api.net/api/orchestration';

export const guestCheckout = async (data) => {
  let success = false;
  try {
    const response = await Axios.post(devUrl + "/GuestCheckout", {
      data,
    });
    if (response.status === 200) {
      success = true;
    }
  } catch (error) {
    console.log(error);
  }
  return success;
};

export const fetchContact = async (id, source = null) => {
  let returnData = {};
  let apiUrl = "/hello-rewards/fetchusercontact";
  const token = await auth.getAccessToken();
  const response = await coreRequest({
    url: apiUrl,
    data: { oktaId: id, token: token },
    method: "post",
    source: source,
  });

  const crmProfile = response ? response.crmProfile : {};
  if (crmProfile) {
    if (crmProfile.error) {
      returnData = {
        error: crmProfile.error,
        contact: null,
      };
      console.log("Error fetching CRM profile", crmProfile.message);
    } else {
      returnData = {
        error: null,
        contact: crmProfile && crmProfile.value && crmProfile.value[0],
      };
    }
  }

  return returnData;
};

export const revokeToken = async (source) => {
  let apiUrl = "/hello-rewards/revoketoken";

  const token = await auth.getAccessToken();
  const response = await coreRequest({
    url: apiUrl,
    data: { token: token },
    method: "post",
    source: source,
  });
  return response;
};

export const updateContact = async (data, source = null) => {
  try {
    let apiUrl = "/hello-rewards/contactupdate";
    const response = await coreRequest({
      url: apiUrl,
      data: data,
      source: source,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  // return contact;
};

export const updateLoginTime = async (email, source = null) => {
  let apiUrl = "/hello-rewards/updateguestlogin?email=" + email;
  try {
    const response = await coreGet(apiUrl, source);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (email, source = null) => {
  let apiUrl = "/hello-rewards/forgotPassword";
  let returnData;
  try {
    const response = await coreRequest({
      url: apiUrl,
      data: { email: email },
      source: source,
    });
    if (response) {
      if (response.error) {
        returnData = {
          error: true,
          errorSummary: response.message.errorSummary || response.message.Errortext  || response.message,
          errorCode: response.message.errorCode || response.message.Errorcode,
          rawResponse: response.message
        };
      } else {
        let parsedData = JSON.parse(response);
        returnData = {
          error: false,
          value: parsedData.value,
        };
      }
    }
  } catch (error) {
    console.log(error);
    returnData = {
      error: true,
      errorSummary: "Oops!! Something went wrong, please try again.",
    };
  }
  return returnData;
};

export const submitNewPassword = async (params, source = null) => {
  let encodedPassword = btoa(params.newpassword);
  let apiUrl =
    "/hello-rewards/submitresetpassword?recoveryToken=" +
    params.recoveryToken +
    "&newpassword=" +
    encodedPassword;

  let returnData;
  try {
    const response = await coreRequest({
      url: apiUrl,
      data: {
        recoveryToken: params.recoveryToken,
        newpassword: encodedPassword,
      },
      source: source,
    });

    if (response) {
      if (response.error) {
        returnData = {
          error: true,
          errorSummary: response.message.errorSummary || response.message,
        };
      } else {
        let parsedData = JSON.parse(response);
        returnData = {
          error: false,
          value: {
            sessionToken: parsedData.value.sessionToken,
            user: parsedData.value._embedded.user,
          },
        };
      }
    }
  } catch (error) {
    console.log(error.message);
    returnData = {
      error: true,
      errorSummary: "Oops!! Something went wrong, please try again.",
    };
  }
  return returnData;
};

export const enrollMember = async (params, source = null) => {
  let apiUrl = "/hello-rewards/enrollmember";
  let returnData;

  const initialValues = {
    rlhc_sitecode: "redlion",
    rlhc_source: "Redlion",
    rlhc_subsource: "rlhc",
  };
  const requestParams = { ...initialValues, ...params };
  try {
    const response = await coreRequest({
      url: apiUrl,
      data: requestParams,
      source: source,
    });
    if (response) {
      if (response.error) {
        let errorMessage;
        let errorType;
        if (response.apiResponse) {
          let errorResponse = response.apiResponse.message;

          if (errorResponse.errorCode === "E0000001") {
            errorMessage = "Email already exists.";
            errorType = "EMAIL_EXISTS";
          } else if (errorResponse.errorCauses) {
            errorMessage = errorResponse.errorCauses[0].errorSummary;
          } else if (
            errorResponse.indexOf("promo code failed to validate") !== -1
          ) {
            errorMessage = "Promo code is invalid.";
            errorType = "INVALID_PROMO";
          }
        }
        returnData = {
          error: true,
          errorSummary: {
            type: errorType,
            message:
              errorMessage || "Oops!! Something went wrong, please try again.",
          },
        };
      } else {
        returnData = {
          error: false,
          value: response.message,
        };
      }
    }
  } catch (error) {
    console.log(error);
    returnData = {
      error: true,
      errorSummary: "Oops!! Something went wrong, please try again.",
    };
  }
  return returnData;
};

export const activateMember = async (params, source = null) => {
  let apiUrl = "/hello-rewards/activatemember";
  let returnData;
  params["newpassword"] = btoa(params.newpassword);
  try {
    const response = await coreRequest({
      url: apiUrl,
      data: params,
      source: source,
    });
    if (response) {
      if (response.error) {
        let errorMessage =
          response.message.errorSummary ||
          response.apiResponse.message.errorSummary;
        returnData = {
          error: true,
          errorSummary:
            errorMessage || "Oops!! Something went wrong, please try again.",
        };
      } else {
        returnData = {
          error: false,
          value: {
            sessionToken: response.value.sessionToken,
            user: response.value._embedded.user,
          },
        };
      }
    }
  } catch (error) {
    console.log(error);
    returnData = {
      error: true,
      errorSummary: "Oops!! Something went wrong, please try again.",
    };
  }
  return returnData;
};

export const validateToken = async (token, source = null) => {
  let apiUrl = "/hello-rewards/validateTokenCRM";
  let isValid = true;
  try {
    let response = await coreRequest({
      url: apiUrl,
      data: { token: token },
      source: source,
    });
    if (!response || response.error) {
      isValid = false;
    }
  } catch (error) {
    console.log(error);
    isValid = false;
  }
  return isValid;
};

export const resendActivationEmail = async (data, source = null) => {
  let apiUrl = "/hello-rewards/resendactivationemail";
  let activationEmailSent = true;
  try {
    let response = await coreRequest({
      url: apiUrl,
      data: data,
      source: source,
    });
    if (!response || response.error) {
      activationEmailSent = false;
    }
  } catch (error) {
    console.log(error);
    activationEmailSent = false;
  }
  return activationEmailSent;
};
