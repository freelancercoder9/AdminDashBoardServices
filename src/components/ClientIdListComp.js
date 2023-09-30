import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, IconButton } from "@mui/material";
import PopUpClient from "./PopUpClient";
import {
  getAllClientAPiDetails,
  createConsumerClientAPi,
  deleteConsumerClientDetails,
  consumer_getAllConsumers,
  getAllApiDetails,
} from "../services/ApiServiceDetails";
import LoadingIndicator from "./LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buttonSelectVal } from "../actions/UpdateButtonState";
import Dropdown from "react-dropdown";
import { useLocation } from "react-router-dom";
import PopUpClientViewComp from "./PopUpClientViewComp";

const ClientIdListComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const dataFromPreviousScreen = location.state;
  const [clientApiList, setClientApiList] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});
  const [appCode, setAppCode] = useState("ALL");
  const [appCodeList, setAppCodeList] = useState([]);
  const [apiName, setApiName] = useState("ALL");
  const [apiNameList, setApiNameList] = useState([]);
  const [viewFlowFlag, setViewFlowFlag] = useState(false);

  useEffect(() => {
    getAllClientAPiDetails_service();
    consumer_getAllConsumers_service();
    getAllApiDetails_service();
    console.log("dataFromPreviousScreen:", dataFromPreviousScreen);
    if (
      dataFromPreviousScreen !== null &&
      dataFromPreviousScreen.data !== undefined &&
      dataFromPreviousScreen.data.appCode !== undefined
    ) {
      console.log("dataFromPreviousScreen:", dataFromPreviousScreen.data.appCode);
      setAppCode(dataFromPreviousScreen.data.appCode);
    }
    if (
      dataFromPreviousScreen !== null &&
      dataFromPreviousScreen.data !== undefined &&
      dataFromPreviousScreen.data.apiName !== undefined
    ) {
      console.log("dataFromPreviousScreen:", dataFromPreviousScreen.data.apiName);
      setApiName(dataFromPreviousScreen.data.apiName);
    }
  }, []);
  useEffect(() => {
    getAllClientAPiDetails_service();
  }, [appCode, apiName]);

  const consumer_getAllConsumers_service = async () => {
    setLoadingIndicator(true);
    console.log("consumer_getAllConsumers in screen");
    const response = await consumer_getAllConsumers();
    console.log("response getAllConsumers:", response.data);

    let tempData = ["ALL"];
    response.data.consumer_getAllConsumers.forEach((item, index) => {
      console.log("consumerListData");
      tempData.push(item.appCode);
    });
    console.log("tempData:", tempData);
    setAppCodeList(tempData);
    setLoadingIndicator(false);
  };

  const getAllApiDetails_service = async () => {
    console.log("getAllApiDetails_service");
    setLoadingIndicator(true);
    const response = await getAllApiDetails();
    console.log("response in ApiListComp screen:", response.data);

    let tempData = ["ALL"];
    response.data.getAllApiDetails.forEach((item, index) => {
      console.log("getAllApiDetails");
      tempData.push(item.apiName);
    });
    setApiNameList(tempData);
    console.log("tempData:", tempData);
  };

  const getAllClientAPiDetails_service = async () => {
    setLoadingIndicator(true);
    const response = await getAllClientAPiDetails();
    console.log("response in ApiListComp screen:", response.data);
    var tempData = [];
    response.data.getAllClientAPiDetails.forEach((item, index) => {
      const formattedDateUat = new Date(item.uatStatusDate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, "-");
      console.log("formattedDate:", formattedDateUat);
      const formattedDateProd = new Date(item.prodStatusDate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, "-");
      console.log("formattedDate:", formattedDateProd);
      var obj = { ...item, uatStatusDate: formattedDateUat, prodStatusDate: formattedDateProd };

      console.log("api name:", apiName, appCode);
      if (apiName === "ALL" && appCode === "ALL") {
        tempData.push(obj);
      } else {
        if (
          (obj.apiDetails.apiName === apiName || apiName === "ALL") &&
          (obj.consumerDetails.appCode === appCode || appCode === "ALL")
        ) {
          tempData.push(obj);
        }
      }
      console.log("tempData before loop:", tempData);
    });
    setClientApiList(tempData);
    setLoadingIndicator(false);
  };
  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickOk = () => {
    console.log("onClickOk");
    setViewFlowFlag(false);
  };
  const onClickSave = async (objectData, consumerId, apiId) => {
    console.log("onClickSave:", objectData, consumerId, apiId);
    setLoadingIndicator(true);
    const response = await createConsumerClientAPi(objectData, consumerId, apiId);
    console.log("response in update service in screen:", response);
    if (response !== null && response.data !== null) {
      getAllClientAPiDetails_service();
    }
    setLoadingIndicator(false);
    setIsPopUp(false);
  };

  const deleteConsumerClientDetails_service = async (rowData) => {
    console.log("deleteConsumerClientDetails in screen:", rowData);
    setLoadingIndicator(true);
    if (window.confirm("Do you want to delete the item?")) {
      console.log("Thing was deleted");

      const response = await deleteConsumerClientDetails(rowData.id);
      console.log("response in screen:", response);
      if (response !== null && response.data !== undefined) {
        console.log("success message:", response.returnMessage);
      } else if (response.returnCode === -1) {
        console.log("failure:", response.returnMessage);
        alert(response.returnMessage);
      }
    } else {
      console.log("Thing was not deleted.");
    }
    setLoadingIndicator(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "consumerDetails.appCode", //access nested data with dot notation
        header: "App Code",
        size: 40,
      },
      {
        accessorKey: "clientId",
        header: "Client ID",
        size: 50,
      },
      {
        accessorKey: "apiDetails.apiName",
        header: "API Name",
        size: 100,
      },
      {
        accessorKey: "contactName",
        header: "Contact Name",
        size: 50,
      },
      {
        accessorKey: "uatStatus", //normal accessorKey
        header: "UAT Status",
        size: 40,
      },
      {
        accessorKey: "uatStatusDate", //normal accessorKey
        header: "UAT Status Date",
        size: 50,
      },
      {
        accessorKey: "prodStatus", //normal accessorKey
        header: "Prod Status",
        size: 30,
      },
      {
        accessorKey: "prodStatusDate", //normal accessorKey
        header: "Prod Status Date",
        size: 50,
      },
      {
        accessorKey: "tpsValue", //normal accessorKey
        header: "TPS Value",
        size: 20,
      },
    ],
    []
  );
  return (
    <div style={{ flex: 1, padding: 15 }}>
      {isPopUp === true && (
        <div className="popup-comp">
          <PopUpClient
            onClickCancel={onClickCancel}
            selectedRowData={selectedRowData}
            onClickSave={onClickSave}
            editFlowFlag={editFlowFlag}
          ></PopUpClient>
        </div>
      )}
      {viewFlowFlag === true && (
        <div className="popup-comp">
          <PopUpClientViewComp
            onClickOk={onClickOk}
            selectedRowData={selectedRowData}
            viewFlowFlag={viewFlowFlag}
          ></PopUpClientViewComp>
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
            <h4 style={{ textAlign: "start" }}>APP Code</h4>
          </div>

          <div style={{ width: "60%" }}>
            <Dropdown
              className="myClassName"
              options={appCodeList}
              onChange={(e) => {
                console.log("va : ", e);
                setAppCode(e.value);
              }}
              value={appCode}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "35%", alignItems: "center" }}>
          <div style={{ width: "35%" }}>
            <h4 style={{ textAlign: "start" }}>API Name</h4>
          </div>

          <div style={{ width: "60%" }}>
            <Dropdown
              className="myClassName"
              options={apiNameList}
              onChange={(e) => {
                console.log("va : ", e);
                setApiName(e.value);
              }}
              value={apiName}
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
        columns={columns}
        data={clientApiList}
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
        enableColumnResizing
        initialState={{ density: "compact" }}
        enableRowActions
        enableStickyHeader
        positionActionsColumn="last"
        options={{ actionsColumnIndex: -1 }}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px", height: "100%" }}>
            <IconButton
              color="secondary"
              onClick={() => {
                //table.setEditingRow(row);
                console.log("console log", row.original);
                setEditFlowFlag(true);
                setIsPopUp(true);
                setSelectedRowData(row.original);
              }}
            >
              <EditIcon style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
                // setData([...data]);
                deleteConsumerClientDetails_service(row.original);
              }}
            >
              <DeleteIcon style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
                // setData([...data]);
                navigate("/ConsumerListComp", { state: { fromScreen: "CLIENT_ID", data: "row.original" } });
                dispatch(buttonSelectVal(4));
              }}
            >
              <ForwardRoundedIcon style={{ fontSize: 30 }} color="primary" />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
                // setData([...data]);
                // navigate("/ConsumerListComp", { state: { fromScreen: "CLIENT_ID", data: "row.original" } });
                // dispatch(buttonSelectVal(4));
                console.log("row data:", row.original);
                setSelectedRowData(row.original);
                setViewFlowFlag(true);
              }}
            >
              <RemoveRedEyeIcon style={{ fontSize: 30 }} color="primary" />
            </IconButton>
          </Box>
        )}
      />
      {loadingIndicator && <LoadingIndicator></LoadingIndicator>}
    </div>
  );
};

export default ClientIdListComp;
