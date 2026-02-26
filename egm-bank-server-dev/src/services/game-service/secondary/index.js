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

const { getRandomInt } = require("../../random");
const { isHitOrMissTrigger, getHitOrMissWin } = require("./hit-or-miss");
const { isMoneyWheelTrigger, getMoneyWheelWin } = require("./money-wheel");
const { isOneOfThreeTrigger, getOneOfThreeWin } = require("./one-of-three");
const { isRandomTrigger, getRandomWin } = require("./random");
const {
  isSixOfEighteenTrigger,
  getSixOfEighteenWin,
} = require("./six-of-eighteen");

const flags = {
  features: {
    FEATURE_GRAFFING_ON: true,
    FEATURE_SIX_OF_EIGHTEEN_ENABLED: true,
    FEATURE_HIT_OR_MISS_ENABLED: true,
    FEATURE_RANDOM_ENABLED: true,
    FEATURE_ONE_OF_THREE_ENABLED: true,
    FEATURE_MONEY_WHEEL_ENABLED: true,
  },
  feature: {
    FEATURE_GRAFFING_ON: true,
    FEATURE_UI_CASHIN_PANEL_SNAPPING: false,
    FEATURE_UI_CASHIN_PANEL_KEYPAD: true,
    FEATURE_UI_CASHIN_PANEL_SLIDER: false,
  },
};

function getSecondaryWin(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let win = {};
  if (
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED &&
    isSixOfEighteenTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex)
  ) {
    const sixOfEighteenRng1 = getRandomInt(0, 6);
    const sixOfEighteenRng2 = getRandomInt(0, 6);
    const sixOfEighteenRng3 = getRandomInt(0, 6);
    const sixOfEighteenRng4 = getRandomInt(0, 6);
    const sixOfEighteenRng5 = getRandomInt(0, 6);
    const sixOfEighteenRng6 = getRandomInt(0, 6);

    win = getSixOfEighteenWin(
      sixOfEighteenRng1,
      sixOfEighteenRng2,
      sixOfEighteenRng3,
      sixOfEighteenRng4,
      sixOfEighteenRng5,
      sixOfEighteenRng6,
      betIndex,
      denomIndex
    );
  } else if (
    flags.features.FEATURE_HIT_OR_MISS_ENABLED &&
    isHitOrMissTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex)
  ) {
    const hitOrMissRng = getRandomInt(0, 2);
    win = getHitOrMissWin(hitOrMissRng, betIndex, denomIndex);
  } else if (
    flags.features.FEATURE_RANDOM_ENABLED &&
    isRandomTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex)
  ) {
    const randomRng = getRandomInt(0, 64);
    win = getRandomWin(randomRng, betIndex, denomIndex);
  } else if (
    flags.features.FEATURE_ONE_OF_THREE_ENABLED &&
    isOneOfThreeTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex)
  ) {
    const oneOfThreeRng = getRandomInt(0, 3);
    win = getOneOfThreeWin(oneOfThreeRng, betIndex, denomIndex);
  } else if (
    flags.features.FEATURE_MONEY_WHEEL_ENABLED &&
    isMoneyWheelTrigger(reel1Symb, reel2Symb, reel3Symb, betIndex)
  ) {
    const wheelRng = getRandomInt(0, 1948);
    win = getMoneyWheelWin(wheelRng, betIndex, denomIndex);
  }

  return win;
}

module.exports = {
  getSecondaryWin,
};
