import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { createConsumerDetails } from "../services/ApiServiceDetails";
import PopUpConsumer from "./PopUpConsumer";
import { consumer_getAllApiDetails } from "../services/ApiServiceDetails";

const CreateConsumer = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [consumerListData, setConsumerListData] = useState([]);

  useEffect(() => {
    consumer_getAllApiDetails_service();
  }, []);

  const consumer_getAllApiDetails_service = async () => {
    console.log("consumer_getAllApiDetails in screen");
    const response = await consumer_getAllApiDetails();
    console.log("response consumer_getAllApiDetails:", response.data);
    setConsumerListData(response.data.consumer_getAllApiDetails);
  };

  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickSave = async (objectData) => {
    console.log("onClickSave", objectData);

    const response = await createConsumerDetails(objectData);
    console.log("response in update service in screen:", response);
    if (response !== null && response.data !== null) {
      // getAllApiDetails_service();
    }
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
        accessorKey: "primaryOwner",
        header: "Primary Owner",
        // size: 150,
      },
      {
        accessorKey: "primaryOwnerEmail",
        header: "Primary Owner Email",
        // size: 30,
      },
      {
        accessorKey: "secondaryOwner",
        header: "Secondary Owner",
        // size: 50,
      },
      {
        accessorKey: "secondaryOwnerEmail", //normal accessorKey
        header: "Secondary Owner Email",
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
          <PopUpConsumer
            onClickCancel={onClickCancel}
            selectedRowData={selectedRowData}
            onClickSave={onClickSave}
            editFlowFlag={editFlowFlag}
          ></PopUpConsumer>
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
          Add New Consumer
        </button>
      </div>
      <MaterialReactTable
        columns={columns}
        data={consumerListData}
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

export default CreateConsumer;
