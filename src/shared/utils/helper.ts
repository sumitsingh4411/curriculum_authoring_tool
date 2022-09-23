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
        children: allStandard[i].children - 1,
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
