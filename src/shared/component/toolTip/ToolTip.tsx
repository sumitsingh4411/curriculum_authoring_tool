import React from "react";
import ReactTooltip from "react-tooltip";

function Tooltip({ id, text }: any) {
  return (
    <ReactTooltip id={id} place="top" effect="float">
      <span>{text}</span>
    </ReactTooltip>
  );
}

export default Tooltip;
