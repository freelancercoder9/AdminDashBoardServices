import axios from "axios";
// const api_endpoint = "http://localhost:8080/";
const api_endpoint = "http://192.168.18.3:8080/";

export const getAllApiDetails = async () => {
  console.log("getAllApiDetails");
  const res = axios
    .get(api_endpoint + "apiDetails/getAllApiDetails")
    .then((response) => {
      console.log("Response From  getAllApiDetails Server : ", response);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            getAllApiDetails: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllApiDetails request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  getAllApiDetails: ", error);
      return {
        returnCode: -1,
        returnMessage: "getAllApiDetails request failed, please try again",
      };
    });

  return res;
};

export const updateApiDetails = async (objectData, appInstanceID) => {
  console.log("updateApiDetails in service", objectData, appInstanceID);

  const res = axios
    .post(api_endpoint + "apiDetails/" + appInstanceID + "/createApi", objectData)
    .then((response) => {
      console.log("Response From  updateApiDetails Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            getAllApiDetails: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllApiDetails request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  updateApiDetails: ", error);
      return {
        returnCode: -1,
        returnMessage: "updateApiDetails request failed, please try again",
      };
    });

  return res;
};

export const getAllAppInstances = async () => {
  console.log("getAllAppInstances in service");
  const res = axios
    .get(api_endpoint + "appInstanceDetails/getAllAppNames")
    .then((response) => {
      console.log("Response From  getAllAppInstances Server : ", response);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            getAllAppInstances: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllAppInstances request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  getAllAppInstances: ", error);
      return {
        returnCode: -1,
        returnMessage: "getAllAppInstances request failed, please try again",
      };
    });

  return res;
};

export const createAppInstance = async (objectData) => {
  console.log("createAppInstance in service", objectData);

  const res = axios
    .post(api_endpoint + "appInstanceDetails/createAppInstance", objectData)
    .then((response) => {
      console.log("Response From  createAppInstance Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            createAppInstance: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllApiDetails request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  createAppInstance: ", error);
      return {
        returnCode: -1,
        returnMessage: "createAppInstance request failed, please try again",
      };
    });

  return res;
};

export const createConsumerDetails = async (objectData) => {
  console.log("createConsumerDetails in service", objectData);

  const res = axios
    .post(api_endpoint + "consumerDetails/createConsumerDetails", objectData)
    .then((response) => {
      console.log("Response From  createConsumerDetails Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            createConsumerDetails: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllApiDetails request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  createConsumerDetails: ", error);
      return {
        returnCode: -1,
        returnMessage: "createConsumerDetails request failed, please try again",
      };
    });

  return res;
};
export const consumer_getAllApiDetails = async () => {
  console.log("createConsumerDetails in service");

  const res = axios
    .post(api_endpoint + "consumerDetails/getAllApiDetails")
    .then((response) => {
      console.log("Response From  consumer_getAllApiDetails Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            consumer_getAllApiDetails: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllApiDetails request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  consumer_getAllApiDetails: ", error);
      return {
        returnCode: -1,
        returnMessage: "consumer_getAllApiDetails request failed, please try again",
      };
    });

  return res;
};
