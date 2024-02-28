import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownToggleIcon = () => {
  return (
    <FontAwesomeIcon
      className={`toggle-icon`}
      icon="chevron-down"
      style={{fontSize: "10px"}}
    />
  );
};
export default DropdownToggleIcon;
