import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PopUpComp from "./PopUpComp";
import { getAllApiDetails, updateApiDetails } from "../services/ApiServiceDetails";

const ApiListComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [apiListData, setApiListData] = useState([]);
  const [editFlowFlag, setEditFlowFlag] = useState(true);

  useEffect(() => {
    getAllApiDetails_service();
  }, []);

  const getAllApiDetails_service = async () => {
    const response = await getAllApiDetails();
    console.log("response in ApiListComp screen:", response.data);
    setApiListData(response.data.getAllApiDetails);
  };
  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickSave = async (objectData, appInstanceID) => {
    console.log("onClickSave", objectData, appInstanceID);

    const response = await updateApiDetails(objectData, appInstanceID);
    console.log("response in update service in screen:", response);
    if (response !== null && response.data !== null) {
      getAllApiDetails_service();
    }
    setIsPopUp(false);
  };

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "apiName", //access nested data with dot notation
        header: "API Name",
        // size: 150,
      },
      {
        accessorKey: "appInstanceDetails.appInstanceName",
        header: "App Instance Name",
        // size: 150,
      },
      {
        accessorKey: "apiRequestType",
        header: "API Type",
        // size: 30,
      },
      {
        accessorKey: "developerName",
        header: "Developer Name",
        // size: 50,
      },
      {
        accessorKey: "devStatus", //normal accessorKey
        header: "Dev Status",
        // size: 50,
      },
      // {
      //   accessorKey: "devCompletedDate",
      //   header: "Dev Completed Date",
      //   size: 100,
      // },
      {
        accessorKey: "uatStatus",
        header: "Uat Status",
        // size: 100,
      },
      // {
      //   accessorKey: "uatCompletedDate",
      //   header: "Uat Completed Date",
      //   size: 100,
      // },
      {
        accessorKey: "prodStatus",
        header: "Prod Status",
        // size: 100,
      },
      // {
      //   accessorKey: "prodCompletedDate",
      //   header: "Prod Completed Date",
      //   size: 100,
      // },
    ],
    []
  );

  return (
    <div style={{ flex: 1 }}>
      {isPopUp === true && (
        <div
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: "absolute",
            zIndex: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
        >
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
          style={{
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            borderRadius: 5,
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
          onClick={() => {
            setEditFlowFlag(false);
            setIsPopUp(true);
          }}
        >
          Add New API
        </button>
      </div>
      <MaterialReactTable
        muiTableHeadCellProps={{
          //simple styling with the `sx` prop, works just like a style prop in this example
          sx: {
            //fontWeight: "normal",
            fontSize: "14px",
            color: "red",
          },
        }}
        columns={columns}
        data={apiListData}
        enableRowActions
        enableColumnResizing
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
                setIsPopUp(true);
                setselectedRowData(row.original);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
                // setData([...data]);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />
    </div>
  );
};

export default ApiListComp;
