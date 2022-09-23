import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { customInputActions } from "../../redux/slices/customInputSlice";
import CustomSvgElement from "../customSvgElement/CustomSvgElement";
import "./CustomInput.css";
import { debounce } from "lodash";

export default function CustomInput({
  standard,
  setText,
  index,
  setPosition,
  position,
  localStandard,
  setCurrentCusor,
  currentCusor,
}: any) {
  const dispatch = useDispatch();
  const changeHandler = (currentValue: any, allStandard: any, index: any) => {
    dispatch(
      customInputActions.setAllStandard(
        allStandard.map((standard: any, i: number) =>
          i === index ? { ...standard, text: currentValue } : standard
        )
      )
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(
    debounce(
      (currentVaue: any, allStandard: any, index: any) =>
        changeHandler(currentVaue, allStandard, index),
      300
    ),
    []
  );

  const handleChange = (
    value: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setText(
      localStandard.map((standard: any, i: number) =>
        i === index ? { ...standard, text: value } : standard
      )
    );
    setCurrentCusor(index);
    debouncedChangeHandler(value, localStandard, index);
  };

  const handleDragEnter = (position: any) => {
    setPosition((prev: any) => ({
      ...prev,
      endPointer: position,
    }));
  };

  const handleDragEnd = () => {
    const listCopy: any = [...localStandard];
    let temp = listCopy[position.startPointer];
    listCopy[position.startPointer] = listCopy[position.endPointer];
    listCopy[position.endPointer] = temp;
    setText(listCopy);
    dispatch(customInputActions.setAllStandard(listCopy));
  };

  const handleDragStart = (position: any) => {
    setPosition((prev: any) => ({
      ...prev,
      startPointer: position,
    }));
  };

  return (
    <div
      className="customInput"
      draggable={true}
      onDragStart={() => {
        handleDragStart(index);
      }}
      onDragEnter={() => handleDragEnter(index)}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <div className={"customInput__container"}>
        <CustomSvgElement
          standard={standard}
          setText={setText}
          index={index}
          localStandard={localStandard}
          setCurrentCusor={setCurrentCusor}
          currentCusor={currentCusor}
        />
        <div
          className="identent__input__container"
          style={{
            marginLeft: `${standard.indent * 20}px`,
          }}
        >
          -
        </div>
        <div className="customInput__container__right">
          <input
            onFocus={() => setCurrentCusor(index)}
            type="text"
            value={localStandard[index].text}
            onChange={(e: any) => {
              handleChange(e.target.value, index);
            }}
            style={{ color: standard?.textColor }}
            className="customInput__container__right__input"
            placeholder="Type standard here (e.g. Numbers)"
          />
        </div>
      </div>
    </div>
  );
}
