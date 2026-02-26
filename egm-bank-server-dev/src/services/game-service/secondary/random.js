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

//SECG-5003["*","*","GC"] RANDOM
const randomLayoutMap = new Map();
randomLayoutMap.set(0, { start: 0, end: 37 });
randomLayoutMap.set(1, { start: 38, end: 53 });
randomLayoutMap.set(2, { start: 54, end: 60 });
randomLayoutMap.set(3, { start: 61, end: 63 });

const randomConfig = {
  randomLayout: [
    { id: 1, symb: "S1", payout: [5, 10, 15, 20, 25] },
    { id: 2, symb: "S2", payout: [10, 20, 30, 40, 50] },
    { id: 3, symb: "S3", payout: [20, 40, 60, 80, 100] },
    { id: 4, symb: "S4", payout: [50, 100, 150, 200, 250] },
  ],
};

function isRandomTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex) {
  let trigger = false;
  switch (reel3Symb) {
    case "GC":
      trigger = true;
      break;
    default:
      break;
  }
  return trigger;
}

function findIndexOfRandom(randomRng, randomLayoutMap) {
  let result = -1;
  for (const [key, value] of randomLayoutMap) {
    if (randomRng >= value.start && randomRng <= value.end) {
      result = key;
    }
  }
  return result;
}

function getRandomWin(randomRng, betIndex, denomIndex) {
  const index = findIndexOfRandom(randomRng, randomLayoutMap);
  return {
    id: "SECG3",
    winData: [
      {
        winAmount:
          randomConfig.randomLayout[index].payout[betIndex] *
          denomValues[denomIndex],
        index,
      },
    ],
  };
}

module.exports = {
  randomConfig,
  isRandomTrigger,
  getRandomWin,
};
