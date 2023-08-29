import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Box, IconButton } from "@mui/material";
import { createConsumerDetails, consumer_getAllConsumers } from "../services/ApiServiceDetails";
import PopUpConsumer from "./PopUpConsumer";
import LoadingIndicator from "./LoadingIndicator";

const ConsumerListComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [consumerListData, setConsumerListData] = useState([]);
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  useEffect(() => {
    consumer_getAllConsumers_service();
  }, []);

  const consumer_getAllConsumers_service = async () => {
    setLoadingIndicator(true);
    console.log("consumer_getAllConsumers in screen");
    const response = await consumer_getAllConsumers();
    console.log("response getAllConsumers:", response.data);
    setConsumerListData(response.data.consumer_getAllConsumers);
    setLoadingIndicator(false);
  };

  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickSave = async (objectData) => {
    console.log("onClickSave", objectData);
    setLoadingIndicator(true);
    const response = await createConsumerDetails(objectData);
    console.log("response in update service in screen:", response);
    if (response !== null && response.data !== null) {
      consumer_getAllConsumers_service();
    }
    setLoadingIndicator(false);
    setIsPopUp(false);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "appCode", //access nested data with dot notation
        header: "App Code",
        size: 120,
      },
      {
        accessorKey: "primaryOwner",
        header: "Primary Owner",
        size: 120,
      },
      {
        accessorKey: "primaryOwnerEmail",
        header: "Pri Owner Email",
        size: 120,
      },
      {
        accessorKey: "secondaryOwner",
        header: "Secondary Owner",
        size: 120,
      },
      {
        accessorKey: "secondaryOwnerEmail", //normal accessorKey
        header: "Sec Owner Email",
        size: 120,
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
        initialState={{ density: "compact" }}
        positionActionsColumn="last"
        options={{ actionsColumnIndex: -1 }}
        muiTableProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, .4)",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, .3)",
            color: "red",
            textAlign: "center",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, .2)",
            textAlign: "center",
          },
        }}
        enableColumnResizing
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
      {loadingIndicator && <loadingIndicator></loadingIndicator>}
    </div>
  );
};

export default ConsumerListComp;
