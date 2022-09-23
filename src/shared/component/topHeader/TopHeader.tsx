import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCustomInput } from "../../redux/slices/customInputSlice";
import "./TopHeader.css";

function TopHeader() {
  const { allStandard } = useSelector(selectCustomInput);

  const downLoadFile = async () => {
    let filename = "data.json";
    let contentType = "application/json;charset=utf-8;";
    //@ts-ignore
    if (window.navigator && window.navigator?.msSaveOrOpenBlob) {
      var blob = new Blob(
        //@ts-ignore
        [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
        { type: contentType }
      );
      //@ts-ignore
      navigator?.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement("a");
      a.download = filename;
      a.href =
        "data:" +
        contentType +
        "," +
        encodeURIComponent(JSON.stringify(allStandard));
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  return (
    <div className="topHeader">
      <div className="topHeader__top">
        <h2 className="topHeader_title">MATHEMATICS</h2>
        <p className="download-json-file" onClick={downLoadFile}>
          Download Json file
        </p>
      </div>
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
