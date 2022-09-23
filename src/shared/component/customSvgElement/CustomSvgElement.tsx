import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { customInputActions } from "../../redux/slices/customInputSlice";
import { getDeleteStandard, getRightIdentent } from "../../utils/helper";
import "./CustomSvgElement.css";
import Tooltip from "../toolTip/ToolTip";

export default function CustomSvgElement({
  standard,
  setText,
  index,
  localStandard,
  currentCusor,
  setCurrentCusor,
}: any) {
  const dispatch = useDispatch();

  const leftIdentent = () => {
    if (standard.indent === 0) {
      toast.error("Can't indent more");
      return;
    }
    setText(
      localStandard.map((standard: any, i: number) =>
        i === index ? { ...standard, indent: standard.indent - 1 } : standard
      )
    );
    dispatch(
      customInputActions.setAllStandard(
        localStandard.map((standard: any, i: number) =>
          i === index ? { ...standard, indent: standard.indent - 1 } : standard
        )
      )
    );
  };

  const rightIdentent = () => {
    setText(getRightIdentent(localStandard, standard));
    dispatch(
      customInputActions.setAllStandard(
        getRightIdentent(localStandard, standard)
      )
    );
  };

  const deleteStandard = () => {
    setText(getDeleteStandard(localStandard, standard));
    dispatch(
      customInputActions.setAllStandard(
        getDeleteStandard(localStandard, standard)
      )
    );
  };

  return (
    <div
      className="customSvgElement"
      onMouseMove={() => {
        setCurrentCusor(index);
      }}
    >
      <div className="customSvgElement__container">
        <svg
          data-tip
          data-for="move"
          style={{
            cursor: "move",
          }}
          className={
            standard.text.length > 0 && currentCusor === index
              ? "svg-icon custom__icon"
              : "svg-icon custom__icon__disabled"
          }
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M926.293333 482.56l-128-128a42.666667 42.666667 0 0 0-60.586666 60.586667L792.746667 469.333333H554.666667V230.826667l55.04 55.466666A42.666667 42.666667 0 0 0 640 298.666667a42.666667 42.666667 0 0 0 30.293333-12.373334 42.666667 42.666667 0 0 0 0-60.586666l-128-128A42.666667 42.666667 0 0 0 512 85.333333a42.666667 42.666667 0 0 0-29.866667 12.373334l-128 128a42.666667 42.666667 0 0 0 60.16 60.586666L469.333333 231.253333V469.333333H230.826667l55.466666-55.04a42.666667 42.666667 0 0 0-60.586666-60.586666l-128 128A42.666667 42.666667 0 0 0 85.333333 512a42.666667 42.666667 0 0 0 12.373334 30.293333l128 128A42.666667 42.666667 0 0 0 256 682.666667a42.666667 42.666667 0 0 0 30.293333-12.373334 42.666667 42.666667 0 0 0 0-60.586666L231.253333 554.666667H469.333333v238.506666l-55.04-55.466666a42.666667 42.666667 0 0 0-60.586666 60.586666l128 128A42.666667 42.666667 0 0 0 512 938.666667a42.666667 42.666667 0 0 0 29.866667-12.373334l128-128a42.666667 42.666667 0 0 0-60.586667-60.586666L554.666667 792.746667V554.666667h238.506666l-55.466666 55.04a42.666667 42.666667 0 0 0 0 60.586666A42.666667 42.666667 0 0 0 768 682.666667a42.666667 42.666667 0 0 0 30.293333-12.373334l128-128A42.666667 42.666667 0 0 0 938.666667 512a42.666667 42.666667 0 0 0-12.373334-29.44z" />
        </svg>
        <Tooltip id="move" text="Move" />

        <svg
          data-tip
          data-for="outdent"
          onClick={leftIdentent}
          className={
            standard.text.length > 0 && currentCusor === index
              ? "svg-icon custom__icon"
              : "svg-icon custom__icon__disabled"
          }
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enable-background="new 0 0 1000 1000"
        >
          <g>
            <path d="M911,421H312.2l181-181c30.8-30.8,30.8-80.8,0-111.6c-30.8-30.8-80.8-30.8-111.6,0L10,500l371.6,371.6c15.4,15.4,35.6,23.1,55.8,23.1c20.2,0,40.4-7.8,55.8-23.1c30.8-30.8,30.8-80.8,0-111.6l-181-181h598.8c43.6,0,78.9-35.3,78.9-78.9c0-43.6-35.3-78.9-78.9-78.9L911,421z" />
          </g>
        </svg>
        <Tooltip id="outdent" text="Outdent" />

        <svg
          data-tip
          data-for="indent"
          onClick={rightIdentent}
          className={
            standard.text.length > 0 && currentCusor === index
              ? "svg-icon custom__icon right_icon_change"
              : "svg-icon custom__icon__disabled right_icon_change"
          }
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enable-background="new 0 0 1000 1000"
        >
          <g>
            <path d="M911,421H312.2l181-181c30.8-30.8,30.8-80.8,0-111.6c-30.8-30.8-80.8-30.8-111.6,0L10,500l371.6,371.6c15.4,15.4,35.6,23.1,55.8,23.1c20.2,0,40.4-7.8,55.8-23.1c30.8-30.8,30.8-80.8,0-111.6l-181-181h598.8c43.6,0,78.9-35.3,78.9-78.9c0-43.6-35.3-78.9-78.9-78.9L911,421z" />
          </g>
        </svg>
        <Tooltip id="indent" text="Indent" />

        <svg
          data-tip
          data-for="delete"
          onClick={deleteStandard}
          className={
            standard.text.length > 0 && currentCusor === index
              ? "svg-icon custom__icon"
              : "svg-icon custom__icon__disabled"
          }
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M173.942611 173.061544l677.733649 0 0 35.670407L173.942611 208.731952 173.942611 173.061544zM691.160449 957.805392 334.458421 957.805392c-19.318998 0-35.670407-6.315846-49.043996-18.957771-13.383822-12.58462-20.812001-29.306466-22.295795-50.157353l-53.505611-695.568852 35.670407-4.461615 53.505611 695.568852c2.967588 25.311479 14.857383 37.905308 35.670407 37.905308l356.702028 0c20.802792 0 32.692586-12.593829 35.670407-37.905308l53.504588-695.568852 35.670407 4.461615-53.504588 695.568852c-1.483794 19.318998-9.293667 35.670407-23.409153 49.043996C724.975603 951.108876 708.995653 957.805392 691.160449 957.805392zM673.325245 190.896748l-35.670407 0 0-53.505611c0-23.741727-11.889795-35.670407-35.670407-35.670407L423.63444 101.720729c-23.780613 0-35.670407 11.927657-35.670407 35.670407l0 53.505611-35.670407 0 0-53.505611c0-20.812001 6.687306-37.905308 20.060895-51.27992 13.383822-13.373589 30.466895-20.060895 51.27992-20.060895l178.351014 0c20.802792 0 37.896098 6.687306 51.27992 20.060895 13.373589 13.373589 20.060895 30.466895 20.060895 51.27992L673.326269 190.896748zM405.799236 280.071743l17.835204 570.72345-35.670407 0L370.128829 280.071743 405.799236 280.071743zM494.974231 280.071743l35.670407 0 0 570.72345-35.670407 0L494.974231 280.071743zM619.820658 280.071743l35.670407 0-17.835204 570.72345-35.670407 0L619.820658 280.071743z" />
        </svg>
        <Tooltip id="delete" text="Delete" />
      </div>
    </div>
  );
}
