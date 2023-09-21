import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Box, IconButton } from "@mui/material";
import PopUpClient from "./PopUpClient";
import {
  getAllClientAPiDetails,
  createConsumerClientAPi,
  deleteConsumerClientDetails,
} from "../services/ApiServiceDetails";
import LoadingIndicator from "./LoadingIndicator";

const ClientIdListComp = () => {
  const [clientApiList, setClientApiList] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);

  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  useEffect(() => {
    getAllClientAPiDetails_service();
  }, []);

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
      tempData.push(obj);
    });
    setClientApiList(tempData);
    setLoadingIndicator(false);
  };
  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="button-add-new"
          onClick={() => {
            setEditFlowFlag(false);
            setIsPopUp(true);
          }}
        >
          Add New Client
        </button>
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

export default ClientIdListComp;
