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
const { SYMBOLS_W23 } = require("../primary/win-symbols");

const hitOrMissLayoutMap = new Map();
hitOrMissLayoutMap.set(0, { start: 0, end: 0 });
hitOrMissLayoutMap.set(1, { start: 1, end: 1 });

const hitOrMissConfig = {
  hitOrMissLayout: [
    { id: 1, symb: "S1", payout: [5, 10, 15, 20, 25] },
    { id: 2, symb: "S2", payout: [35, 70, 105, 140, 175] },
  ],
};

//SECG-5002["T5","T5","T5"] HIT OR MISS
function isHitOrMissTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex) {
  let trigger = false;
  switch (reel1Symb) {
    case SYMBOLS_W23[0]:
      switch (reel2Symb) {
        case SYMBOLS_W23[1]:
          switch (reel3Symb) {
            case SYMBOLS_W23[2]:
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

function findIndexOfHitOrMiss(hitOrMissRng, hitOrMissLayoutMap) {
  let result = -1;
  for (const [key, value] of hitOrMissLayoutMap) {
    if (hitOrMissRng >= value.start && hitOrMissRng <= value.end) {
      result = key;
    }
  }
  return result;
}

function getHitOrMissWin(hitOrMissRng, betIndex, denomIndex) {
  const index = findIndexOfHitOrMiss(hitOrMissRng, hitOrMissLayoutMap);

  return {
    id: "SECG2",
    winData: [
      {
        winAmount:
          hitOrMissConfig.hitOrMissLayout[index].payout[betIndex] *
          denomValues[denomIndex],
        index,
      },
    ],
  };
}

module.exports = {
  hitOrMissConfig,
  isHitOrMissTrigger,
  getHitOrMissWin,
};
