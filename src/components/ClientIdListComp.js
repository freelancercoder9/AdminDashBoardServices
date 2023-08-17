import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PopUpClient from "./PopUpClient";

const ClientIdListComp = () => {
  const [clientListData, setClientListData] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);

  useEffect(() => {
    // consumer_getAllConsumers_service();
  }, []);

  //   const getAllApiDetails_service = async () => {
  //     const response = await getAllApiDetails();
  //     console.log("response in ApiListComp screen:", response.data);
  //     setApiListData(response.data.getAllApiDetails);
  //   };
  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickSave = async (objectData) => {
    console.log("onClickSave", objectData);

    //  const response = await createConsumerDetails(objectData);
    //  console.log("response in update service in screen:", response);
    //  if (response !== null && response.data !== null) {
    //    consumer_getAllConsumers_service();
    //  }
    setIsPopUp(false);
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "appCode", //access nested data with dot notation
        header: "App Code",
        // size: 150,
      },
      {
        accessorKey: "clientId",
        header: "Client ID",
        // size: 150,
      },
      {
        accessorKey: "apiName",
        header: "API Name",
        // size: 30,
      },
      {
        accessorKey: "contactName",
        header: "Contact Name",
        // size: 50,
      },
      {
        accessorKey: "uatStatus", //normal accessorKey
        header: "UAT Status",
        // size: 50,
      },
      {
        accessorKey: "uatStatusDate", //normal accessorKey
        header: "UAT Status Date",
        // size: 50,
      },
      {
        accessorKey: "prodStatus", //normal accessorKey
        header: "Prod Status",
        // size: 50,
      },
      {
        accessorKey: "tpsValue", //normal accessorKey
        header: "TPS Value",
        // size: 50,
      },
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
          <PopUpClient
            onClickCancel={onClickCancel}
            selectedRowData={selectedRowData}
            onClickSave={onClickSave}
            editFlowFlag={editFlowFlag}
          ></PopUpClient>
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
          Add New Client
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
        data={clientListData}
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

export default ClientIdListComp;
