import React, { useState, useEffect } from "react";
import ApiListComp from "./ApiListComp";
import AppInstComp from "./AppInstComp";
import CreateConsumer from "./CreateConsumer";

const RightNavComp = (props) => {
  const [selectedButtonValue, setselectedButtonValue] = useState(props.onClickButton);
  useEffect(() => {
    setselectedButtonValue(props.onClickButton);
  }, [props.onClickButton]);

  return (
    <div style={{ width: "85%", padding: 20 }}>
      {selectedButtonValue === 1 && <AppInstComp>API List</AppInstComp>}
      {selectedButtonValue === 2 && <CreateConsumer></CreateConsumer>}
      {selectedButtonValue === 3 && <ApiListComp></ApiListComp>}
      {selectedButtonValue === 4 && <div>Consumer List</div>}
    </div>
  );
};

export default RightNavComp;
