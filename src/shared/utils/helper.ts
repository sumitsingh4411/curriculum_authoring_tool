import { toast } from "react-toastify";

export const getRandromNumber = () => {
  return Math.random().toString(36).substring(2, 15);
};

export const checkLastChildIsFilled = (allStandard: any) => {
  if (allStandard[allStandard?.length - 1]?.text?.trim()?.length > 0) {
    return true;
  }
  return false;
};

export const getColor = (key: any) => {
  const colors = ["#0cdde0", "#000000", "#808080", "#c0c0c0", "#800000"];
  if (key <= colors.length) {
    return colors[key];
  } else {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
};

export const getFontWeight = (key: any) => {
  const fontWeights = ["bolder", "bold", "normal"];
  if (key <= fontWeights.length) {
    return fontWeights[key];
  }
  return "normal";
};

export const getFontSize = (key: any) => {
  const fontSizes = ["16px", "14px", "12px"];
  if (key <= fontSizes.length) {
    return fontSizes[key];
  }
  return "12px";
};

export const getLeftIdentent = (allStandard: any, standard: any) => {
  let ans: any = [];
  for (let i = 0; i < allStandard.length; i++) {
    if (allStandard[i].id === standard.id) {
      ans.push({
        ...allStandard[i],
        indent: allStandard[i].indent - 1,
      });
    } else {
      ans.push(allStandard[i]);
    }
  }
  return ans;
};

export const getRightIdentent = (allStandard: any, standard: any) => {
  let ans: any = [];
  for (let i = 0; i < allStandard.length; i++) {
    if (allStandard[i].id === standard.id) {
      ans.push({
        ...allStandard[i],
        indent: allStandard[i].indent + 1,
      });
    } else {
      ans.push(allStandard[i]);
    }
  }
  return ans;
};

export const getDeleteStandard = (allStandard: any, standard: any) => {
  let ans: any = [];
  for (let i = 0; i < allStandard.length; i++) {
    if (allStandard[i].id === standard.id) {
      if (i === allStandard.length - 1 || allStandard[i + 1].indent === 0) {
        continue;
      }
      while (
        i < allStandard.length &&
        allStandard[i + 1]?.indent >= allStandard[i]?.indent
      ) {
        i++;
      }
    } else {
      ans.push(allStandard[i]);
    }
  }
  return ans;
};

export const changeStandard = (
  value: any,
  index: any,
  allStandard: any,
  property: any
) => {
  let ans = [...allStandard];
  for (let i in ans[index]) {
    if (i === property) {
      ans[index][i] = value;
    }
  }
  return ans;
};

/**
 * This fuction is used for download json file
 * @param allStandard
 * @returns
 */
export const downloadJsonFile = (allStandard: any) => {
  if (allStandard.length === 0 || allStandard[0].text.trim().length === 0) {
    toast.error("Please add some standard");
    return;
  }
  let filename = allStandard[0].text + ".json";
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

export const getIndent = (allStandard: any) => {
  return allStandard?.length > 0
    ? allStandard[allStandard?.length - 1]?.indent
    : 0;
};

export const setCurrentValue = (allStandard: any, index: any, value: any) => {
  return allStandard?.map((standard: any, i: number) =>
    i === index ? { ...standard, text: value } : standard
  );
};

export const getDragedList = (localStandard: any, position: any) => {
  const listCopy: any = [...localStandard];
  let temp = listCopy[position.startPointer];
  listCopy[position.startPointer] = listCopy[position.endPointer];
  listCopy[position.endPointer] = temp;
  return listCopy;
};
