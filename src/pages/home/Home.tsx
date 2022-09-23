import { useState } from "react";
import "./Home.css";
import CustomButton from "../../shared/component/customButton/CustomButton";
import CustomInput from "../../shared/component/customInput/CustomInput";
import TopHeader from "../../shared/component/topHeader/TopHeader";
import { getRandromNumber } from "../../shared/utils/helper";
import { INITIAL_STATE } from "../../shared/utils/constant";

export default function Home() {
  const [localStandard, setLocalStandard] = useState([
    {
      textColor: INITIAL_STATE.textColor,
      text: INITIAL_STATE.text,
      id: getRandromNumber(),
      indent: INITIAL_STATE.indent,
    },
  ]);
  const [position, setPosition] = useState({
    startPointer: INITIAL_STATE.pointer,
    endPointer: INITIAL_STATE.pointer,
  });

  const [currentCusor, setCurrentCusor] = useState(
    localStandard[localStandard.length - 1]
  );

  return (
    <div className="home">
      <div className="home__container">
        <TopHeader />
        {localStandard?.map((standard: any, index: number) => (
          <CustomInput
            key={index}
            standard={standard}
            setText={setLocalStandard}
            index={index}
            setPosition={setPosition}
            position={position}
            localStandard={localStandard}
            setCurrentCusor={setCurrentCusor}
            currentCusor={currentCusor}
          />
        ))}
        <CustomButton setText={setLocalStandard} />
      </div>
    </div>
  );
}
