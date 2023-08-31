import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Box, IconButton } from "@mui/material";
import PopUpInstComp from "./PopUpInstComp";
import { getAllAppInstances, createAppInstance } from "../services/ApiServiceDetails";
import LoadingIndicator from "./LoadingIndicator";
import "../styles.css";

const AppInstComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

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
  const columns = useMemo(
    () => [
      {
        accessorKey: "appInstanceName", //access nested data with dot notation
        header: "App Name",
        size: 120,
      },
      {
        accessorKey: "appInstanceType",
        header: "App Type",
        size: 50,
      },
      {
        accessorKey: "lastUatDeployedDate",
        header: "Last Uat Deployed Date",
        size: 80,
      },
      {
        accessorKey: "lastProdDeployedDate",
        header: "Last Prod Deployed Date",
        size: 80,
      },

      {
        accessorKey: "uatDeployedEnv",
        header: "Uat Deployed Env",
        size: 80,
      },
      {
        accessorKey: "prodDeployedEnv", //normal accessorKey
        header: "Prod Deployed Env",
        size: 80,
      },
    ],
    []
  );
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
            // paddingLeft: 10,
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
        data={apiInstData}
        initialState={{ density: "compact" }}
        enableRowActions
        enableStickyHeader
        positionActionsColumn="last"
        options={{
          actionsColumnIndex: -1,
          rowStyle: (rowData) => ({
            // backgroundColor: selectedRow === rowData.tableData.id ? "#r81345" : "#FFF",
          }),
          tableLayout: "auto",
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
    </div>
  );
};

export default AppInstComp;
