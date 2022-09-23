import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customInputActions,
  selectCustomInput,
} from "../../redux/slices/customInputSlice";
import { downloadJsonFile } from "../../utils/helper";
import "./TopHeader.css";

function TopHeader({ setText }: any) {
  const dispatch = useDispatch();
  const { allStandard } = useSelector(selectCustomInput);

  const downLoadFile = async () => {
    downloadJsonFile(allStandard);
  };

  const uploadFile = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      dispatch(customInputActions.setAllStandard(JSON.parse(text as string)));
      setText(JSON.parse(text as string));
    };
    reader.readAsText(file);
  };

  return (
    <div className="topHeader">
      <div className="topHeader__top">
        <h2 className="topHeader_title">MATHEMATICS</h2>
        <div className="top-header-item">
          <input
            className="download-json-file json-input"
            type="file"
            onChange={uploadFile}
            title="Loads"
          />
          <p className="download-json-file" onClick={downLoadFile}>
            Saves
          </p>
        </div>
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
