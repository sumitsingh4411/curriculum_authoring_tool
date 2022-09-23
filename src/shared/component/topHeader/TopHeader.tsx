import { memo } from "react";
import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="topHeader">
      <h2 className="topHeader_title">MATHEMATICS</h2>
      <div className="topHeader__container">
        <div className="topHeader__container__left">
          <h3 className="header-title">Actions</h3>
          <p className="subheader">Move, Ident</p>
          <p className="subheader">Outdent, Delete</p>
        </div>
        <div className="topHeader__container__right">
          <h3 className="header-title">Standard</h3>
          <p className="subheader">The text of the standard</p>
        </div>
      </div>
    </div>
  );
}

export default memo(TopHeader);
