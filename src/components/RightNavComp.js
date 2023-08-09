import React, { useState, useEffect } from "react";
import ApiListComp from "./ApiListComp";

const RightNavComp = (props) => {
  const [selectedButtonValue, setselectedButtonValue] = useState(props.onClickButton);
  useEffect(() => {
    setselectedButtonValue(props.onClickButton);
  }, [props.onClickButton]);

  return (
    <div style={{ width: "85%", padding: 20 }}>
      {selectedButtonValue === 1 && <div>API List</div>}
      {selectedButtonValue === 2 && <div>Create new Consumer</div>}
      {selectedButtonValue === 3 && <ApiListComp></ApiListComp>}
      {selectedButtonValue === 4 && <div>Consumer List</div>}
    </div>
  );
};

export default RightNavComp;
