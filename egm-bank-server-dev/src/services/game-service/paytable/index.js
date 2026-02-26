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
 * |  23/06/2024   | Wilson Sam   |     Created     |  File Creation
 * |  26/11/2024   | Wilson Sam   |     Created     |  Updated Default Denom Index - 4
 * **********************************************************************************************************************************************************************
 * */

const betsValues = [1, 2, 3, 4, 5];
const defaultBetIndex = 0;
const denomValues = [1, 2, 5, 10, 20, 50, 100, 200, 500];
const defaultDenomIndex = 4;

const betValues = [
  [1, 2, 5, 10, 20, 50, 100, 200, 500],
  [2, 4, 10, 20, 40, 100, 200, 400, 1000],
  [3, 6, 15, 30, 60, 150, 300, 600, 1500],
  [4, 8, 20, 40, 80, 200, 400, 800, 2000],
  [5, 10, 25, 50, 100, 250, 500, 1000, 2500],
];

module.exports = {
  betsValues,
  denomValues,
  defaultBetIndex,
  defaultDenomIndex,
  betValues,
};
