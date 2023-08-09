import axios from "axios";
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
