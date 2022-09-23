import "./CustomButton.css";
import circleIcon from "../../../assets/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  customInputActions,
  selectCustomInput,
} from "../../redux/slices/customInputSlice";
import { getRandomColor, getRandromNumber } from "../../utils/helper";
import { INITIAL_STATE } from "../../utils/constant";

export default function CustomButton({ setText }: any) {
  const dispatch = useDispatch();
  const { allStandard } = useSelector(selectCustomInput);

  const addStandard = () => {
    let ans: any = [...allStandard];
    ans.push({
      textColor: getRandomColor(allStandard[allStandard.length - 1].indent),
      text: INITIAL_STATE.text,
      id: getRandromNumber(),
      indent: allStandard[allStandard.length - 1].indent,
    });
    setText(ans);
    dispatch(customInputActions.setAllStandard(ans));
  };

  return (
    <div className="customButton" onClick={addStandard}>
      <div className="customButton__container">
        <img
          src={circleIcon}
          alt="plus"
          className="customButton__container__icon"
        />
        <p className="customButton__container__text">Add a standard</p>
      </div>
    </div>
  );
}
