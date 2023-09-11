import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import { Box, IconButton } from "@mui/material";
import LoadingIndicator from "./LoadingIndicator";
import PopUpTeam from "./PopUpTeam";
import { getAllMembers, members_createUpdateMember, deleteMemBerDetails } from "../services/ApiServiceDetails";

const TeamMembersComp = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});
  const [editFlowFlag, setEditFlowFlag] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [teamMemberList, setTeamMemberList] = useState([]);

  useEffect(() => {
    getAllMembers_service();
  }, []);

  const onClickCancel = () => {
    console.log("onClickCancel");
    setIsPopUp(false);
  };

  const onClickSave = async (objectData) => {
    console.log("onClickSave in TeamMembersComp:", objectData);
    setLoadingIndicator(true);
    const response = await members_createUpdateMember(objectData);
    console.log("response in TeamMembersComp:", response);
    if (response !== null && response.data !== null) {
      getAllMembers_service();
    }
    setIsPopUp(false);
    setLoadingIndicator(false);
  };

  const getAllMembers_service = async () => {
    console.log("getAllMembers_service in TeamMembersComp");
    setLoadingIndicator(true);
    const response = await getAllMembers();
    console.log("getAllMembers in screen:", response);
    setTeamMemberList(response.data.getAllMembers);
    setLoadingIndicator(false);
  };

  const deleteMemBerDetails_services = async (rowData) => {
    console.log("deleteMemBerDetails in screen:", rowData);
    setLoadingIndicator(true);
    if (window.confirm("Delete the item?")) {
      const response = await deleteMemBerDetails(rowData.id);
      console.log("response in screen:", response);
      if (response !== null && response.data !== undefined) {
        console.log("success message:", response.returnMessage);
        getAllMembers_service();
      } else if (response.returnCode === -1) {
        console.log("failure message:", response.returnMessage);
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
        accessorKey: "memberName", //access nested data with dot notation
        header: "Member Name",
        // size: 150,
      },
      {
        accessorKey: "memberRole", //access nested data with dot notation
        header: "Role",
        // size: 150,
      },
      {
        accessorKey: "locationName",
        header: "Location Name",
        // size: 150,
      },
      {
        accessorKey: "contactNumber",
        header: "Contact Number",
        // size: 30,
      },
    ],
    []
  );

  return (
    <div style={{ flex: 1, padding: 15 }}>
      {isPopUp === true && (
        <div className="popup-comp">
          <PopUpTeam
            onClickCancel={onClickCancel}
            selectedRowData={selectedRowData}
            onClickSave={onClickSave}
            editFlowFlag={editFlowFlag}
          ></PopUpTeam>
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
          Add New Member
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
        data={teamMemberList}
        enableRowActions
        initialState={{ density: "compact" }}
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
                deleteMemBerDetails_services(row.original);
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

export default TeamMembersComp;
