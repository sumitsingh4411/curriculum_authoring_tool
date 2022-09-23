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

export const getRandomColor = (key: any) => {
  const colors = [
    "#0cdde0",
    "#000000",
    "#808080",
    "#c0c0c0",
    "#800000",
    "#ff0000",
    "#800080",
    "#ff00ff",
  ];
  return colors[key];
};

export const getLeftIdentent = (allStandard: any, standard: any) => {
  let ans: any = [];
  for (let i = 0; i < allStandard.length; i++) {
    if (allStandard[i].id === standard.id) {
      ans.push({
        ...allStandard[i],
        indent: allStandard[i].indent - 1,
        textColor: getRandomColor(allStandard[i].indent - 1),
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
        textColor: getRandomColor(allStandard[i].indent + 1),
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
