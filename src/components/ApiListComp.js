import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Box, IconButton } from "@mui/material";
import PopUpComp from "./PopUpComp";
import { getAllApiDetails, updateApiDetails, deleteApiDetails, getAllMembers, getAllAppInstances } from "../services/ApiServiceDetails";
import LoadingIndicator from "./LoadingIndicator";
import { confirmAlert } from "react-confirm-alert"; // Import
import "../styles.css";
import Dropdown from "react-dropdown";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buttonSelectVal } from "../actions/UpdateButtonState";

const ApiListComp = () => {
  const location = useLocation();
  const previousScreenData = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [apiListData, setApiListData] = useState([]);
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  const [appName, setAppName] = useState("ALL");
  const [appNameList, setAppNameList] = useState([]);
  const [developerNameList, setDeveloperNameList] = useState([]);
  const [developerName, setDeveloperName] = useState("ALL");

  useEffect(() => {
    getAllApiDetails_service();
    getAllAppInstances_services();
    getAllMembers_service();
    console.log("dataFromAppInst or dataFromTeamMember:", previousScreenData);

    if (
      previousScreenData !== undefined &&
      previousScreenData !== null &&
      previousScreenData.data !== undefined &&
      previousScreenData.data.appInstanceName !== undefined
    ) {
      console.log("from App screen to Api List", previousScreenData.data.appInstanceName);
      setAppName(previousScreenData.data.appInstanceName);
    }
    if (
      previousScreenData !== undefined &&
      previousScreenData !== null &&
      previousScreenData.data !== null &&
      previousScreenData.data.memberName !== undefined
    ) {
      console.log("from teamMember screen to api List:", previousScreenData.data.memberName);
      setDeveloperName(previousScreenData.data.memberName);
    }
  }, []);

  useEffect(() => {
    getAllApiDetails_service();
  }, [appName, developerName]);

  const getAllApiDetails_service = async () => {
    setLoadingIndicator(true);
    const response = await getAllApiDetails();
    console.log("response in ApiListComp screen:", response.data);
    setApiListData(response.data.getAllApiDetails);
    let tempData = [];
    if (response.data.getAllApiDetails.length > 0) {
      if (appName === "ALL" && developerName === "ALL") {
        setApiListData(response.data.getAllApiDetails);
      } else {
        response.data.getAllApiDetails.forEach((item, index) => {
          if (
            (item.appInstanceDetails.appInstanceName === appName || appName === "ALL") &&
            (item.developerDetails.memberName === developerName || developerName === "ALL")
          ) {
            tempData.push(item);
          }
        });
        setApiListData(tempData);
      }
      // if (appName === "ALL" && developerName === "ALL") {
      //   setApiListData(response.data.getAllApiDetails);
      // } else {
      //   var tempArray = response.data.getAllApiDetails;
      //   const filteredData = tempArray.filter((tempData) => {
      //     let returnValue = false;
      //     if (developerName !== "ALL") {
      //       console.log("developer name not all");
      //       if (tempData.developerDetails.memberName !== developerName) {
      //         return false;
      //       } else {
      //         returnValue = true;
      //       }
      //     }
      //     if (appName !== "ALL") {
      //       if (tempData.appInstanceDetails.appInstanceName !== appName) {
      //         return false;
      //       } else {
      //         returnValue = true;
      //       }
      //     }
      //     return returnValue;
      //   });
      //   console.log("Now filtered Data is ", filteredData);
      //   setApiListData(filteredData);
      // }
    }
    setLoadingIndicator(false);
  };
  const getAllAppInstances_services = async () => {
    setLoadingIndicator(true);
    console.log("getAllAppInstances");
    const response = await getAllAppInstances();
    console.log("response in inst screen:", response.data);
    var tempData = ["ALL"];
    response.data.getAllAppInstances.forEach((item, index) => {
      tempData.push(item.appInstanceName);
    });
    setAppNameList(tempData);
    setLoadingIndicator(false);
  };
  const getAllMembers_service = async () => {
    console.log("getAllMembers_service in TeamMembersComp");
    setLoadingIndicator(true);
    const response = await getAllMembers();
    console.log("getAllMembers in screen:", response);

    let dataTemp = ["ALL"];
    response.data.getAllMembers.forEach((item, index) => {
      dataTemp.push(item.memberName);
    });

    setDeveloperNameList(dataTemp);
    setLoadingIndicator(false);
  };
  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickSave = async (objectData, appInstanceID, developerID) => {
    console.log("onClickSave", objectData, appInstanceID, developerID);
    setLoadingIndicator(true);
    const response = await updateApiDetails(objectData, appInstanceID, developerID);
    console.log("response in update service in screen:", response);
    if (response !== null && response.data !== null) {
      getAllApiDetails_service();
    }
    setLoadingIndicator(false);
    setIsPopUp(false);
  };
  const deleteApiDetails_service = async (rowData) => {
    setLoadingIndicator(true);
    if (window.confirm("Do you want to delete the item?")) {
      console.log("Thing was deleted");
      const response = await deleteApiDetails(rowData.id);
      console.log("response in screen:", response);
      if (response !== null && response.data !== undefined) {
        console.log("response message:", response.returnMessage);
        getAllApiDetails_service();
      } else if (response.returnCode === -1) {
        console.log("failure:", response.returnMessage);
        alert(response.returnMessage);
      }
    } else {
      // Do nothing!
      console.log("Thing was not deleted.");
    }

    setLoadingIndicator(false);
  };

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "apiName", //access nested data with dot notation
        header: "API Name",
        headerClassName: "rt-tr-align-left",
        style: {
          textAlign: "right",
        },
        size: 200,
      },
      {
        accessorKey: "appInstanceDetails.appInstanceName",
        header: "App Instance Name",
        size: 120,
      },
      {
        accessorKey: "apiRequestType",
        header: "API Type",
        size: 30,
      },
      {
        accessorKey: "developerDetails.memberName",
        header: "Developer Name",
        size: 70,
      },
      {
        accessorKey: "devStatus", //normal accessorKey
        header: "Dev Status",
        size: 50,
      },

      {
        accessorKey: "uatStatus",
        header: "Uat Status",
        size: 50,
      },

      {
        accessorKey: "prodStatus",
        header: "Prod Status",
        size: 40,
      },
      {
        accessorKey: "totalTps",
        header: "Total TPS",
        size: 50,
      },
    ],
    []
  );

  return (
    <div style={{ flex: 1, padding: 15 }}>
      {isPopUp === true && (
        <div className="popup-comp">
          <PopUpComp
            onClickCancel={onClickCancel}
            selectedRowData={selectedRowData}
            onClickSave={onClickSave}
            editFlowFlag={editFlowFlag}
          ></PopUpComp>
        </div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "yellow",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", width: "35%", alignItems: "center" }}>
          <div style={{ width: "35%" }}>
            <h4 style={{ textAlign: "start" }}>APP Name</h4>
          </div>

          <div style={{ width: "60%" }}>
            <Dropdown
              className="myClassName"
              options={appNameList}
              onChange={(e) => {
                console.log("va : ", e);
                setAppName(e.value);
              }}
              value={appName}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "35%", alignItems: "center" }}>
          <div style={{ width: "35%" }}>
            <h4 style={{ textAlign: "start" }}>Developer Name</h4>
          </div>

          <div style={{ width: "60%" }}>
            <Dropdown
              className="myClassName"
              options={developerNameList}
              onChange={(e) => {
                console.log("va : ", e);
                setDeveloperName(e.value);
              }}
              value={developerName}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div style={{}}>
          <button
            className="button-add-new"
            onClick={() => {
              setEditFlowFlag(false);
              setIsPopUp(true);
            }}
          >
            Add New API
          </button>
        </div>
      </div>
      <MaterialReactTable
        muiTableProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, .4)",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, .3)",
            color: "red",
            // textAlign: "center",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, .2)",
            // textAlign: "center",
          },
        }}
        defaultColumn={{
          maxSize: 400,
          minSize: 100,
          size: 100, //default size is usually 180
        }}
        enableColumnResizing
        columns={columns}
        data={apiListData}
        initialState={{ density: "compact" }}
        enableRowActions
        enableStickyHeader
        positionActionsColumn="last"
        options={{
          actionsColumnIndex: -1,
          rowStyle: (rowData) => ({
            // backgroundColor: selectedRow === rowData.tableData.id ? "#r81345" : "#FFF",
          }),
        }}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px", height: "100%" }}>
            <IconButton
              color="secondary"
              onClick={() => {
                //table.setEditingRow(row);
                console.log("console log", row.original);
                setEditFlowFlag(true);
                setIsPopUp(true);
                setselectedRowData(row.original);
              }}
            >
              <EditIcon style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
                // setData([...data]);
                deleteApiDetails_service(row.original);
              }}
            >
              <DeleteIcon style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
                // setData([...data]);
                navigate("/ClientIdListComp", { state: { fromScreen: "API_List", data: row.original } });
                dispatch(buttonSelectVal(2));
              }}
            >
              <ForwardRoundedIcon style={{ fontSize: 30 }} color="primary" />
            </IconButton>
          </Box>
        )}
      />

      {loadingIndicator && <LoadingIndicator></LoadingIndicator>}
    </div>
  );
};

export default ApiListComp;
