import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import PopUpComp from "./PopUpComp";
import { getAllApiDetails } from "../services/ApiServiceDetails";

const ApiListComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setselectedRowData] = useState({});
  const [apiListData, setApiListData] = useState([]);

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
  const onClickSave = () => {
    console.log("onClickSave");
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
        header: "API Request Type",
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
          <PopUpComp onClickCancel={onClickCancel} selectedRowData={selectedRowData}></PopUpComp>
        </div>
      )}

      <MaterialReactTable
        columns={columns}
        data={apiListData}
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

export default ApiListComp;
