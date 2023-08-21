import React, { useState, useEffect } from "react";
import ApiListComp from "./ApiListComp";
import AppInstComp from "./AppInstComp";
import ConsumerListComp from "./ConsumerListComp";
import ClientIdListComp from "./ClientIdListComp";
import TeamMembersComp from "./TeamMembersComp";

const RightNavComp = (props) => {
  const [selectedButtonValue, setselectedButtonValue] = useState(props.onClickButton);
  useEffect(() => {
    setselectedButtonValue(props.onClickButton);
  }, [props.onClickButton]);

  return (
    <div style={{ width: "85%", padding: 20 }}>
      {selectedButtonValue === 1 && <AppInstComp>API List</AppInstComp>}
      {selectedButtonValue === 2 && <ClientIdListComp></ClientIdListComp>}
      {selectedButtonValue === 3 && <ApiListComp></ApiListComp>}
      {selectedButtonValue === 4 && <ConsumerListComp></ConsumerListComp>}
      {selectedButtonValue === 5 && <TeamMembersComp></TeamMembersComp>}
    </div>
  );
};

export default RightNavComp;
