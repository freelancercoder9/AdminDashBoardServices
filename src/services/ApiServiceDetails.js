import axios from "axios";
// const api_endpoint = "http://localhost:8080/";
//const api_endpoint = "http://192.168.18.3:8080/";
const api_endpoint = "https://api-utility-back-end.onrender.com/";
// const api_endpoint = "https://servicesdashboardapi.onrender.com/";

export const getAllApiDetails = async () => {
  console.log("getAllApiDetails");
  const res = axios
    .get(api_endpoint + "apiDetails/getAllApiDetailsList")
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

export const updateApiDetails = async (objectData, appInstanceID, developerID) => {
  console.log("updateApiDetails in service", objectData, appInstanceID, developerID);

  const res = axios
    .post(api_endpoint + "apiDetails/" + appInstanceID + "/" + developerID + "/createApi", objectData)
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
export const deleteApiDetails = async (apiId) => {
  console.log("updateApiDetails in service", apiId);

  const res = axios
    .delete(api_endpoint + "apiDetails/deleteApiDetails" + apiId)
    .then((response) => {
      console.log("Response From  deleteApiDetails Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            // deleteApiDetails: response.data,
            returnMessage: "Successfully deleted",
          },
        };
      } else if (response.status === "500") {
        return {
          returnCode: -1,
          returnMessage: response.data.message,
        };
      } else {
        return {
          returnCode: -1,
          returnMessage: "service failed, please try again later",
        };
      }
    })
    .catch((error) => {
      console.log("Error Response  deleteApiDetails: ", error);
      return {
        returnCode: -1,
        returnMessage: "deleteApiDetails request failed, please try again",
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
export const consumer_getAllConsumers = async () => {
  console.log("consumer_getAllConsumers in service");

  const res = axios
    .get(api_endpoint + "consumerDetails/getAllConsumers")
    .then((response) => {
      console.log("Response From  consumer_getAllConsumers Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            consumer_getAllConsumers: response.data,
          },
        };
      } else {
        console.log("consumer_getAllConsumers in else Condition:", response);
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " consumer_getAllConsumers request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  consumer_getAllConsumers: ", error);
      return {
        returnCode: -1,
        returnMessage: "consumer_getAllConsumers request failed, please try again",
      };
    });

  return res;
};

export const getAllClientAPiDetails = async () => {
  console.log("getAllApiDetails");
  const res = axios
    .get(api_endpoint + "ConsumerClient/getAllClientAPiDetails")
    .then((response) => {
      console.log("Response From  getAllClientAPiDetails Server : ", response);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            getAllClientAPiDetails: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllClientAPiDetails request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  getAllClientAPiDetails: ", error);
      return {
        returnCode: -1,
        returnMessage: "getAllClientAPiDetails request failed, please try again",
      };
    });

  return res;
};

export const createConsumerClientAPi = async (objectData, consumerId, apiId) => {
  console.log("createConsumerDetails in service", objectData, consumerId, apiId);

  const res = axios
    .post(api_endpoint + "ConsumerClient/" + consumerId + "/" + apiId + "/createConsumerClientAPi", objectData)
    .then((response) => {
      console.log("Response From  createConsumerClientAPi Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            createConsumerClientAPi: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " createConsumerClientAPi request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  createConsumerClientAPi: ", error);
      return {
        returnCode: -1,
        returnMessage: "createConsumerClientAPi request failed, please try again",
      };
    });
  return res;
};

export const getAllMembers = async () => {
  console.log("getAllMembers");
  const res = axios
    .get(api_endpoint + "members/getAllMembers")
    .then((response) => {
      console.log("Response From  getAllMembers Server : ", response);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            getAllMembers: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " getAllMembers request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  getAllMembers: ", error);
      return {
        returnCode: -1,
        returnMessage: "getAllMembers request failed, please try again",
      };
    });

  return res;
};

export const members_createUpdateMember = async (objectData, consumerId, apiId) => {
  console.log("createConsumerDetails in service", objectData, consumerId, apiId);

  const res = axios
    .post(api_endpoint + "members/createUpdateMember", objectData)
    .then((response) => {
      console.log("Response From  members_createUpdateMember Server : ", response.data);

      if (response.status === 200) {
        return {
          returnCode: 0,
          data: {
            members_createUpdateMember: response.data,
          },
        };
      }
      //   else if (response.data === "201") {
      //     return {
      //       returnCode: -1,
      //       returnMessage: " members_createUpdateMember request failed, please try again",
      //     };
      //   }
    })
    .catch((error) => {
      console.log("Error Response  members_createUpdateMember: ", error);
      return {
        returnCode: -1,
        returnMessage: "members_createUpdateMember request failed, please try again",
      };
    });
  return res;
};
