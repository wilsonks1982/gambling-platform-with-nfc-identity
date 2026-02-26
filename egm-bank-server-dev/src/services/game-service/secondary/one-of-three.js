/*
 * Copyright 2024 Wildace Private Limited - All Rights Reserved
 *
 * Licensed under Wildace Software License Agreement ("License").
 * You may not use this file except in compliance with the License.
 *
 * NOTICE
 * ALL INFORMATION CONTAINED HEREIN IS, AND REMAINS THE PROPERTY OF WILDACE PRIVATE LIMITED.
 * THE INTELLECTUAL AND TECHNICAL CONCEPTS CONTAINED HEREIN ARE PROPRIETARY TO WILDACE PRIVATE LIMITED AND ARE PROTECTED BY TRADE SECRET OR COPYRIGHT LAW.
 * DISSEMINATION OF THIS INFORMATION OR REPRODUCTION OF THIS MATERIAL IS STRICTLY FORBIDDEN UNLESS PRIOR WRITTEN PERMISSION IS OBTAINED FROM WILDACE PRIVATE LIMITED.
 * **********************************************************************************************************************************************************************
 * Change History
 * **********************************************************************************************************************************************************************
 * |     Date      |     Name     |      Change     |      Details
 * |  20/06/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const { denomValues } = require("../paytable");
const { SYMBOLS_W36 } = require("../primary/win-symbols");

const oneOfThreeLayoutMap = new Map();
oneOfThreeLayoutMap.set(0, { start: 0, end: 0 });
oneOfThreeLayoutMap.set(1, { start: 1, end: 1 });
oneOfThreeLayoutMap.set(2, { start: 2, end: 2 });

const oneOfThreeConfig = {
  oneOfThreeLayout: [
    { id: 1, symb: "S1", payout: [2, 4, 6, 8, 10] },
    { id: 2, symb: "S2", payout: [3, 6, 9, 12, 15] },
    { id: 3, symb: "S3", payout: [10, 20, 30, 40, 50] },
  ],
};

//SECG-5004["*","*","T6"] ONE OF THREE
function isOneOfThreeTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex) {
  let trigger = false;
  switch (reel3Symb) {
    case SYMBOLS_W36[2]:
      trigger = true;
      break;
    default:
      break;
  }
  return trigger;
}

function findIndexOfOneOfThree(oneOfThreeRng, oneOfThreeLayoutMap) {
  let result = -1;
  for (const [key, value] of oneOfThreeLayoutMap) {
    if (oneOfThreeRng >= value.start && oneOfThreeRng <= value.end) {
      result = key;
    }
  }
  return result;
}

function getOneOfThreeWin(oneOfThreeRng, betIndex, denomIndex) {
  const index = findIndexOfOneOfThree(oneOfThreeRng, oneOfThreeLayoutMap);
  const index0 = {
    index: 0,
    winAmount:
      oneOfThreeConfig.oneOfThreeLayout[0].payout[betIndex] *
      denomValues[denomIndex],
  };
  const index1 = {
    index: 1,
    winAmount:
      oneOfThreeConfig.oneOfThreeLayout[1].payout[betIndex] *
      denomValues[denomIndex],
  };
  const index2 = {
    index: 2,
    winAmount:
      oneOfThreeConfig.oneOfThreeLayout[2].payout[betIndex] *
      denomValues[denomIndex],
  };
  return {
    id: "SECG4",
    winData: [
      {
        winAmount:
          oneOfThreeConfig.oneOfThreeLayout[index].payout[betIndex] *
          denomValues[denomIndex],
        index,
      },
    ],
    noWinData:
      index == 0
        ? [index1, index2]
        : index == 1
        ? [index0, index2]
        : [index0, index1],
  };
}

module.exports = {
  oneOfThreeConfig,
  isOneOfThreeTrigger,
  getOneOfThreeWin,
};
