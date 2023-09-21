import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Box, IconButton } from "@mui/material";
import PopUpComp from "./PopUpComp";
import { getAllApiDetails, updateApiDetails, deleteApiDetails } from "../services/ApiServiceDetails";
import LoadingIndicator from "./LoadingIndicator";
import { confirmAlert } from "react-confirm-alert"; // Import
import { useLocation } from "react-router-dom";

const ApiListComp = () => {
  const location = useLocation();
  const dataFromAppInst = location.state;
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [apiListData, setApiListData] = useState([]);
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  useEffect(() => {
    getAllApiDetails_service();
    console.log("AppInstComp row data:", dataFromAppInst);
    let dataTemp;
    apiListData.forEach((item, index) => {
      if (item.appInstanceDetails.appInstanceName === dataFromAppInst.apiRequestType) {
        dataTemp.push();
      }
    });
  }, []);

  const getAllApiDetails_service = async () => {
    setLoadingIndicator(true);
    const response = await getAllApiDetails();
    console.log("response in ApiListComp screen:", response.data);
    setApiListData(response.data.getAllApiDetails);
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
    if (window.confirm("Delete the item?")) {
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
