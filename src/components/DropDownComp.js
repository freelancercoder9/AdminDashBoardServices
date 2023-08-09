import React, { useState } from "react";
import "../styles.css";

const DropDownComp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="dropdown">
        <button onClick={handleOpen}>Dropdown</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button>Menu 1</button>
            </li>
            <li className="menu-item">
              <button>Menu 2</button>
            </li>
          </ul>
        ) : null}
        {open ? <div>Is Open</div> : <div>Is Closed</div>}
      </div>
    </div>
  );
};

export default DropDownComp;
