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
const { SYMBOLS_W12 } = require("../primary/win-symbols");

const sixOfEighteenLayoutMap = new Map();
sixOfEighteenLayoutMap.set(0, { start: 0, end: 0 });
sixOfEighteenLayoutMap.set(1, { start: 1, end: 1 });
sixOfEighteenLayoutMap.set(2, { start: 2, end: 2 });
sixOfEighteenLayoutMap.set(3, { start: 3, end: 3 });
sixOfEighteenLayoutMap.set(4, { start: 4, end: 4 });
sixOfEighteenLayoutMap.set(5, { start: 5, end: 5 });
sixOfEighteenLayoutMap.set(6, { start: 6, end: 6 });

const sixOfEighteenConfig = {
  sixOfEighteenLayout: [
    { id: 1, symb: "S1", payout: [1, 2, 3, 4, 5] },
    { id: 2, symb: "S2", payout: [2, 4, 6, 8, 10] },
    { id: 3, symb: "S3", payout: [3, 6, 9, 12, 15] },
    { id: 4, symb: "S4", payout: [4, 8, 12, 16, 20] },
    { id: 5, symb: "S5", payout: [10, 20, 30, 40, 50] },
    { id: 6, symb: "S6", payout: [30, 60, 90, 120, 150] },
  ],
};

//SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
function isSixOfEighteenTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex) {
  let trigger = false;
  switch (reel1Symb) {
    case SYMBOLS_W12[0]:
      switch (reel2Symb) {
        case SYMBOLS_W12[1]:
          switch (reel3Symb) {
            case SYMBOLS_W12[2]:
              trigger = true;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return trigger;
}

function findIndexOfSixOfEighteen(sixOfEighteenRng, sixOfEighteenLayoutMap) {
  let result = -1;
  for (const [key, value] of sixOfEighteenLayoutMap) {
    if (sixOfEighteenRng >= value.start && sixOfEighteenRng <= value.end) {
      result = key;
    }
  }
  return result;
}

function getSixOfEighteenWin(
  sixOfEighteenRng1,
  sixOfEighteenRng2,
  sixOfEighteenRng3,
  sixOfEighteenRng4,
  sixOfEighteenRng5,
  sixOfEighteenRng6,
  betIndex,
  denomIndex
) {
  const index1 = findIndexOfSixOfEighteen(
    sixOfEighteenRng1,
    sixOfEighteenLayoutMap
  );
  const index2 = findIndexOfSixOfEighteen(
    sixOfEighteenRng2,
    sixOfEighteenLayoutMap
  );
  const index3 = findIndexOfSixOfEighteen(
    sixOfEighteenRng3,
    sixOfEighteenLayoutMap
  );
  const index4 = findIndexOfSixOfEighteen(
    sixOfEighteenRng4,
    sixOfEighteenLayoutMap
  );
  const index5 = findIndexOfSixOfEighteen(
    sixOfEighteenRng5,
    sixOfEighteenLayoutMap
  );
  const index6 = findIndexOfSixOfEighteen(
    sixOfEighteenRng6,
    sixOfEighteenLayoutMap
  );

  return {
    id: "SECG1",
    winData: [
      {
        winAmount:
          sixOfEighteenConfig.sixOfEighteenLayout[index1].payout[betIndex] *
          denomValues[denomIndex],
        index: index1,
      },
      {
        winAmount:
          sixOfEighteenConfig.sixOfEighteenLayout[index2].payout[betIndex] *
          denomValues[denomIndex],
        index: index2,
      },
      {
        winAmount:
          sixOfEighteenConfig.sixOfEighteenLayout[index3].payout[betIndex] *
          denomValues[denomIndex],
        index: index3,
      },
      {
        winAmount:
          sixOfEighteenConfig.sixOfEighteenLayout[index4].payout[betIndex] *
          denomValues[denomIndex],
        index: index4,
      },
      {
        winAmount:
          sixOfEighteenConfig.sixOfEighteenLayout[index5].payout[betIndex] *
          denomValues[denomIndex],
        index: index5,
      },
      {
        winAmount:
          sixOfEighteenConfig.sixOfEighteenLayout[index6].payout[betIndex] *
          denomValues[denomIndex],
        index: index6,
      },
    ],
  };
}

module.exports = {
  sixOfEighteenConfig,
  isSixOfEighteenTrigger,
  getSixOfEighteenWin,
};
