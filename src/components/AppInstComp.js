import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PopUpInstComp from "./PopUpInstComp";
import { getAllAppInstances, createAppInstance } from "../services/ApiServiceDetails";

const AppInstComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);

  const [apiInstData, setApiInstData] = useState([]);

  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };
  const onClickSave = async (objectData) => {
    console.log("onClickSave:", objectData);
    const response = await createAppInstance(objectData);
    console.log("response in AppInstComp screen:", response.data);
    if (response !== null && response.data !== null) {
      getAllAppInstances();
      setIsPopUp(false);
    }
  };
  useEffect(() => {
    getAllAppInstances_services();
  }, []);

  const getAllAppInstances_services = async () => {
    console.log("getAllAppInstances");
    const response = await getAllAppInstances();
    console.log("response in inst screen:", response.data);
    setApiInstData(response.data.getAllAppInstances);
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "appInstanceName", //access nested data with dot notation
        header: "App Instance Name",
        // size: 150,
      },
      {
        accessorKey: "appInstanceType",
        header: "App Instance Type",
        // size: 150,
      },
      {
        accessorKey: "lastUatDeployedDate",
        header: "Last Uat Deployed Date",
        // size: 50,
      },
      {
        accessorKey: "lastProdDeployedDate",
        header: "Last Prod Deployed Date",
        // size: 30,
      },

      {
        accessorKey: "uatDeployedEnv",
        header: "Uat Deployed Env",
        // size: 100,
      },
      {
        accessorKey: "prodDeployedEnv", //normal accessorKey
        header: "Prod Deployed Env",
        // size: 50,
      },
      // {
      //   accessorKey: "devCompletedDate",
      //   header: "Dev Completed Date",
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
          <PopUpInstComp
            onClickCancel={onClickCancel}
            selectedRowData={selectedRowData}
            onClickSave={onClickSave}
            editFlowFlag={editFlowFlag}
          ></PopUpInstComp>
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
          Add New Inst
        </button>
      </div>
      <MaterialReactTable
        columns={columns}
        data={apiInstData}
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

export default AppInstComp;
