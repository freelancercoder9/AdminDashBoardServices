import React from "react";
import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Table = ({ data = null, columns = null, hover = true, striped = true, editFunction, deleteFunction }) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns && columns.map((head) => <th>{getCaps(head.header, head.field)}</th>)} <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) => (
                  <td>{row[col.field]}</td>
                ))}

                <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: 10 }}>
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ fontSize: 20, color: "green", paddingLeft: 10, cursor: "pointer" }}
                    title="Edit"
                    onClick={() => {
                      editFunction(row);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ fontSize: 20, color: "red", paddingLeft: 15, cursor: "pointer" }}
                    title="Delete"
                    onClick={() => {
                      deleteFunction(row);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPlay}
                    style={{ fontSize: 20, color: "#461f51", paddingLeft: 15, cursor: "pointer" }}
                    title="Delete"
                    onClick={() => {
                      deleteFunction(row);
                    }}
                  />
                </div>
              </tr>
            ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Table;
