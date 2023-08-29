import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PopUpInstComp from "./PopUpInstComp";
import { getAllAppInstances, createAppInstance } from "../services/ApiServiceDetails";
import LoadingIndicator from "./LoadingIndicator";
import Table from "./TableComp";

const AppInstComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);

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
      getAllAppInstances_services();
    }
    setIsPopUp(false);
  };
  useEffect(() => {
    getAllAppInstances_services();
  }, []);

  const getAllAppInstances_services = async () => {
    setLoadingIndicator(true);
    console.log("getAllAppInstances");
    const response = await getAllAppInstances();
    console.log("response in inst screen:", response.data);
    var tempData = [];
    response.data.getAllAppInstances.forEach((item) => {
      const formattedDateUat = new Date(item.lastUatDeployedDate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, "-");
      console.log("formattedDate:", formattedDateUat);

      const formattedDateProd = new Date(item.lastProdDeployedDate)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/ /g, "-");
      console.log("formattedDate:", formattedDateProd);
      var objData = { ...item, lastUatDeployedDate: formattedDateUat, lastProdDeployedDate: formattedDateProd };

      tempData.push(objData);
    });
    setApiInstData(tempData);
    setLoadingIndicator(false);
  };

  const columnNew = [
    { field: "appInstanceName", header: "App Instance Name" },
    { field: "appInstanceType", header: "App Instance Type" },
    { field: "lastUatDeployedDate", header: "Last Uat Dep Date" },
    { field: "lastProdDeployedDate", header: "Last Prod Dep Date" },
    { field: "uatDeployedEnv", header: "Uat Dep Env" },
    { field: "prodDeployedEnv", header: "Prod Dep Env" },
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "appInstanceName", //access nested data with dot notation
        header: "App Instance Name",
      },
      {
        accessorKey: "appInstanceType",
        header: "App Instance Type",
      },
      {
        accessorKey: "lastUatDeployedDate",
        header: "Last Uat Deployed Date",
      },
      {
        accessorKey: "lastProdDeployedDate",
        header: "Last Prod Deployed Date",
      },

      {
        accessorKey: "uatDeployedEnv",
        header: "Uat Deployed Env",
      },
      {
        accessorKey: "prodDeployedEnv", //normal accessorKey
        header: "Prod Deployed Env",
      },
    ],
    []
  );
  const rowEditAction = (rowData) => {
    console.log("rowEditAction 123 ", rowData);
  };

  const rowDeleteAction = (rowData) => {
    console.log("rowDeleteAction  ", rowData);
  };

  return (
    <div style={{ flex: 1 }}>
      {loadingIndicator && <LoadingIndicator></LoadingIndicator>}

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
      {/* <MaterialReactTable
        muiTableHeadCellProps={{
          //simple styling with the `sx` prop, works just like a style prop in this example
          sx: {
            //fontWeight: "normal",
            fontSize: "14px",
            color: "red",
          },
        }}
        columns={columns}
        data={apiInstData}
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
      /> */}

      <Table data={apiInstData} columns={columnNew} hover={true} striped={true} editFunction={rowEditAction} deleteFunction={rowDeleteAction} />
    </div>
  );
};

export default AppInstComp;
