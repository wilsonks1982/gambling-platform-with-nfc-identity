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

const wheelLayoutMap = new Map();
wheelLayoutMap.set(0, { start: 0, end: 7 });
wheelLayoutMap.set(1, { start: 8, end: 9 });
wheelLayoutMap.set(2, { start: 10, end: 380 });
wheelLayoutMap.set(3, { start: 381, end: 680 });
wheelLayoutMap.set(4, { start: 681, end: 681 });
wheelLayoutMap.set(5, { start: 682, end: 782 });
wheelLayoutMap.set(6, { start: 783, end: 784 });
wheelLayoutMap.set(7, { start: 785, end: 792 });
wheelLayoutMap.set(8, { start: 793, end: 1163 });
wheelLayoutMap.set(9, { start: 1164, end: 1165 });
wheelLayoutMap.set(10, { start: 1166, end: 1167 });
wheelLayoutMap.set(11, { start: 1168, end: 1538 });
wheelLayoutMap.set(12, { start: 1539, end: 1539 });
wheelLayoutMap.set(13, { start: 1540, end: 1893 });
wheelLayoutMap.set(14, { start: 1894, end: 1897 });
wheelLayoutMap.set(15, { start: 1898, end: 1947 });

const wheelConfig = {
  wheelLayout: [
    { id: 1, symb: "S4", payout: [0, 0, 0, 0, 50] },
    { id: 2, symb: "S6", payout: [0, 0, 0, 0, 250] },
    { id: 3, symb: "S1", payout: [0, 0, 0, 0, 5] },
    { id: 4, symb: "S2", payout: [0, 0, 0, 0, 10] },
    { id: 5, symb: "S7", payout: [0, 0, 0, 0, 500] },
    { id: 6, symb: "S3", payout: [0, 0, 0, 0, 25] },
    { id: 7, symb: "S5", payout: [0, 0, 0, 0, 100] },
    { id: 8, symb: "S4", payout: [0, 0, 0, 0, 50] },
    { id: 9, symb: "S1", payout: [0, 0, 0, 0, 5] },
    { id: 10, symb: "S5", payout: [0, 0, 0, 0, 100] },
    { id: 11, symb: "S6", payout: [0, 0, 0, 0, 250] },
    { id: 12, symb: "S1", payout: [0, 0, 0, 0, 5] },
    { id: 13, symb: "S7", payout: [0, 0, 0, 0, 500] },
    { id: 14, symb: "S2", payout: [0, 0, 0, 0, 10] },
    { id: 15, symb: "S5", payout: [0, 0, 0, 0, 100] },
    { id: 16, symb: "S3", payout: [0, 0, 0, 0, 25] },
  ],
};

//SECG-5005["*","*","WH"] MONEY WHEEL
function isMoneyWheelTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex) {
  let trigger = false;

  switch (reel3Symb) {
    case "WH":
      betIndex == 4 ? (trigger = true) : (trigger = false);
      break;
    default:
      break;
  }

  return trigger;
}

function findIndexOfMoneyWheel(wheelRng, wheelLayoutMap) {
  let result = -1;
  for (const [key, value] of wheelLayoutMap) {
    if (wheelRng >= value.start && wheelRng <= value.end) {
      result = key;
    }
  }
  return result;
}

function getMoneyWheelWin(wheelRng, betIndex, denomIndex) {
  const index = findIndexOfMoneyWheel(wheelRng, wheelLayoutMap);
  return {
    id: "SECG5",
    winData: [
      {
        winAmount:
          wheelConfig.wheelLayout[index].payout[betIndex] *
          denomValues[denomIndex],
        index,
      },
    ],
  };
}

module.exports = {
  wheelConfig,
  isMoneyWheelTrigger,
  getMoneyWheelWin,
};
