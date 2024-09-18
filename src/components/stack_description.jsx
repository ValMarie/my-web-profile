import React from "react";


const StackInfo = ({ iconInfo, activeIndex }) => {
  const active_description = iconInfo[activeIndex] || { id: "", stack_name: "", detail: "" };


  return (
    <div className=" card drop-card p-3">
      <div className="card-header"> {active_description.stack_name || "No Name Available"}</div>
      <div className="card-body p-stack">{active_description.detail || "No Detail Available"}</div>
    </div>
  );
};

export default StackInfo;
