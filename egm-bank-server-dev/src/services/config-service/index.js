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
 * |  28/02/2025   | Wilson Sam   |     Updated     |  SLOT-1762 - An Update on Paytable for RS mode
 * |  01/03/2025   | Wilson Sam   |     Updated     |  SLOT-1918 Cadillac: Paytable Changes for JD payout to 2.5L
 * **********************************************************************************************************************************************************************
 * */

const flags = {
  features: {
    FEATURE_GRAFFING_ON: false,
    FEATURE_SIX_OF_EIGHTEEN_ENABLED: true,
    FEATURE_HIT_OR_MISS_ENABLED: true,
    FEATURE_RANDOM_ENABLED: true,
    FEATURE_ONE_OF_THREE_ENABLED: true,
    FEATURE_MONEY_WHEEL_ENABLED: true,
  },
  feature: {
    FEATURE_GRAFFING_ON: false,
    FEATURE_UI_CASHIN_PANEL_SNAPPING: false,
    FEATURE_UI_CASHIN_PANEL_KEYPAD: true,
    FEATURE_UI_CASHIN_PANEL_SLIDER: false,
  },
};

const {
  betsValues,
  denomValues,
  defaultBetIndex,
  defaultDenomIndex,
  betValues,
} = require("../game-service/paytable");

const { Reel1 } = require("../game-service/reels/reel1");
const { Reel2 } = require("../game-service/reels/reel2");
const { Reel3 } = require("../game-service/reels/reel3");

const {
  sixOfEighteenConfig,
} = require("../game-service/secondary/six-of-eighteen");
const { hitOrMissConfig } = require("../game-service/secondary/hit-or-miss");
const { randomConfig } = require("../game-service/secondary/random");
const { oneOfThreeConfig } = require("../game-service/secondary/one-of-three");
const { wheelConfig } = require("../game-service/secondary/money-wheel");

//A Common Use Cases for MongoDB findOne method
//await Config.findOne({ gameId });
//Fetching Configuration Settings:

async function fetchConfigSettings() {
  const TestConfigResp = {
    user: {
      uid: "",
      credits: 0,
      symbol: "₹",
      separator: ",",
    },
    flags: flags,
    betting: {
      minBet: 200,
      maxBet: 1000,
      step: 200,
      coinValues: betsValues,
      denomValues: denomValues,
      defaultDenomIndex: defaultDenomIndex,
      defaultCoinIndex: defaultBetIndex,
      betValues: betValues,
    },
    reelConfig: {
      reel1: Reel1,
      reel2: Reel2,
      reel3: Reel3,
    },
    sixOfEighteenConfig: sixOfEighteenConfig,
    hitOrMissConfig: hitOrMissConfig,
    randomConfig: randomConfig,
    oneOfThreeConfig: oneOfThreeConfig,
    wheelConfig: wheelConfig,
    paytable: {
      //JD: Jackpot Dhamaka
      //RU: Rupee
      //SS: Sparkling Seven
      //RS: Red Seven
      //BS: Blue Seven
      //3B: 3 Bar
      //2B: 2 Bar
      //1B: 1 Bar
      //MA: Matka
      //CH: Cherry
      //BE: Bell
      //WI: Wild
      //2X: 2X Multipier
      //WH: Wheel
      //GC: Gold Coin
      //T1: Idli
      //T2: Dosa
      //T3: Chitranna
      //T4: Raggi Mudde
      //T5: Elaneeru
      //T6: Coffee

      sorted: [
        {
          id: 1,
          sym1: "JD",
          sym2: "JD",
          sym3: "JD",
          win: [2500, 5000, 7500, 10000, 12500],
          secWin: "",
        },
        {
          id: 2,
          sym1: "T1",
          sym2: "T1",
          sym3: "T1",
          win: [1200, 2400, 3600, 4800, 6000],
          secWin: "",
        },
        {
          id: 3,
          sym1: "T2",
          sym2: "T2",
          sym3: "T2",
          win: [900, 1800, 2700, 3600, 4500],
          secWin: "",
        },
        {
          id: 4,
          sym1: "T3",
          sym2: "T3",
          sym3: "T3",
          win: [600, 1200, 1800, 2400, 3000],
          secWin: "",
        },
        {
          id: 5,
          sym1: "RU",
          sym2: "RU",
          sym3: "RU",
          win: [500, 1000, 1500, 2000, 2500],
          secWin: "",
        },
        {
          id: 6,
          sym1: "MA",
          sym2: "MA",
          sym3: "MA",
          win: [400, 800, 1200, 1600, 2000],
          secWin: "",
        },
        {
          id: 7,
          sym1: "CH",
          sym2: "CH",
          sym3: "CH",
          win: [200, 400, 600, 800, 1000],
          secWin: "",
        },
        {
          id: 8,
          sym1: "BE",
          sym2: "BE",
          sym3: "BE",
          win: [100, 200, 300, 400, 500],
          secWin: "",
        },
        {
          id: 9,
          sym1: "SS",
          sym2: "SS",
          sym3: "2X",
          win: [60, 120, 180, 240, 300], //PAYTABLE CHANGE 80 => 60
          secWin: "",
        },
        {
          id: 10,
          sym1: "3B",
          sym2: "3B",
          sym3: "2X",
          win: [50, 100, 150, 200, 250],
          secWin: "",
        },
        {
          id: 11,
          sym1: "RS",
          sym2: "RS",
          sym3: "2X",
          win: [50, 100, 150, 200, 250],
          secWin: "",
        },
        {
          id: 12,
          sym1: "T4",
          sym2: "T4",
          sym3: "T4",
          win: [50, 100, 150, 200, 250],
          secWin: "SECG1",
        },
        {
          id: 13,
          sym1: "T1",
          sym2: "T1",
          sym3: "",
          win: [30, 60, 90, 120, 150], //PAYTABLE CHANGE 40 => 30
          secWin: "",
        },
        {
          id: 14,
          sym1: "SS",
          sym2: "SS",
          sym3: "W",
          win: [30, 60, 90, 120, 150], //PAYTABLE CHANGE 40 => 30
          secWin: "",
        },
        {
          id: 15,
          sym1: "SS",
          sym2: "SS",
          sym3: "SS",
          win: [30, 60, 90, 120, 150], //PAYTABLE CHANGE 40 => 30
          secWin: "",
        },
        {
          id: 16,
          sym1: "T2",
          sym2: "T2",
          sym3: "",
          win: [25, 50, 75, 100, 125], //PAYTABLE CHANGE 30 => 25
          secWin: "",
        },
        {
          id: 17,
          sym1: "2B",
          sym2: "2B",
          sym3: "2X",
          win: [24, 48, 72, 96, 120], //PAYTABLE CHANGE 30 => 24
          secWin: "",
        },
        {
          id: 18,
          sym1: "BS",
          sym2: "BS",
          sym3: "2X",
          win: [30, 60, 90, 120, 150],
          secWin: "",
        },
        {
          id: 19,
          sym1: "3B",
          sym2: "3B",
          sym3: "WI",
          win: [25, 50, 75, 100, 125],
          secWin: "",
        },
        {
          id: 20,
          sym1: "3B",
          sym2: "3B",
          sym3: "3B",
          win: [25, 50, 75, 100, 125],
          secWin: "",
        },
        {
          id: 21,
          sym1: "RS",
          sym2: "RS",
          sym3: "WI",
          win: [25, 50, 75, 100, 125],
          secWin: "",
        },
        {
          id: 22,
          sym1: "RS",
          sym2: "RS",
          sym3: "RS",
          win: [25, 50, 75, 100, 125],
          secWin: "",
        },
        {
          id: 23,
          sym1: "T5",
          sym2: "T5",
          sym3: "T5",
          win: [20, 40, 60, 80, 100],
          secWin: "SECG2",
        },
        {
          id: 24,
          sym1: "T3",
          sym2: "T3",
          sym3: "",
          win: [20, 40, 60, 80, 100],
          secWin: "",
        },
        {
          id: 25,
          sym1: "1B",
          sym2: "1B",
          sym3: "2X",
          win: [16, 32, 48, 64, 80], //PAYTABLE CHANGE 20 => 16
          secWin: "",
        },
        {
          id: 26,
          sym1: "2B",
          sym2: "2B",
          sym3: "WI",
          win: [12, 24, 36, 48, 60], //PAYTABLE CHANGE 15 => 12
          secWin: "",
        },
        {
          id: 27,
          sym1: "BS",
          sym2: "BS",
          sym3: "WI",
          win: [15, 30, 45, 60, 75],
          secWin: "",
        },
        {
          id: 28,
          sym1: "BS",
          sym2: "BS",
          sym3: "BS",
          win: [15, 30, 45, 60, 75],
          secWin: "",
        },
        {
          id: 29,
          sym1: "2B",
          sym2: "2B",
          sym3: "2B",
          win: [12, 24, 36, 48, 60], //PAYTABLE CHANGE 15 => 12
          secWin: "",
        },
        {
          id: 30,
          sym1: "1B",
          sym2: "1B",
          sym3: "WI",
          win: [8, 16, 24, 32, 40], //PAYTABLE CHANGE 10 => 8
          secWin: "",
        },
        {
          id: 31,
          sym1: "1B",
          sym2: "1B",
          sym3: "1B",
          win: [8, 16, 24, 32, 40], //PAYTABLE CHANGE 10 => 8
          secWin: "",
        },
        {
          id: 32,
          sym1: "",
          sym2: "",
          sym3: "GC",
          win: [10, 20, 30, 40, 50],
          secWin: "SECG3",
        },
        {
          id: 33,
          sym1: "A7",
          sym2: "A7",
          sym3: "2X",
          win: [8, 16, 24, 32, 40], //PAYTABLE CHANGE 10 => 8
          secWin: "",
        },
        {
          id: 34,
          sym1: "A7",
          sym2: "A7",
          sym3: "A7",
          win: [4, 8, 12, 16, 20], //PAYTABLE CHANGE 5 => 4
          secWin: "",
        },
        {
          id: 35,
          sym1: "A7",
          sym2: "A7",
          sym3: "WI",
          win: [4, 8, 12, 16, 20], //PAYTABLE CHANGE 5 => 4
          secWin: "",
        },
        {
          id: 36,
          sym1: "",
          sym2: "",
          sym3: "T6",
          win: [5, 10, 15, 20, 25],
          secWin: "SECG4",
        },
        {
          id: 37,
          sym1: "AB",
          sym2: "AB",
          sym3: "2X",
          win: [2, 4, 6, 8, 10], //PAYTABLE CHANGE 4 => 2
          secWin: "",
        },
        {
          id: 38,
          sym1: "T1",
          sym2: "",
          sym3: "",
          win: [3, 6, 9, 12, 15], //PAYTABLE CHANGE 4 => 3
          secWin: "",
        },
        {
          id: 39,
          sym1: "T2",
          sym2: "",
          sym3: "",
          win: [2, 4, 6, 8, 10], //PAYTABLE CHANGE 3 => 2
          secWin: "",
        },
        {
          id: 40,
          sym1: "T3",
          sym2: "",
          sym3: "",
          win: [1, 2, 3, 4, 5], //PAYTABLE CHANGE 2 => 1
          secWin: "",
        },
        {
          id: 41,
          sym1: "AB",
          sym2: "AB",
          sym3: "AB",
          win: [1, 2, 3, 4, 5], //PAYTABLE CHANGE 2 => 1
          secWin: "",
        },
        {
          id: 42,
          sym1: "AB",
          sym2: "AB",
          sym3: "WI",
          win: [1, 2, 3, 4, 5], //PAYTABLE CHANGE 2 => 1
          secWin: "",
        },
        {
          id: 43,
          sym1: "",
          sym2: "",
          sym3: "WH",
          win: [0, 0, 0, 0, 10],
          secWin: "SECG5",
        },
      ],
      jackpotDhamaka: [
        {
          sym1: "JD",
          sym2: "JD",
          sym3: "JD",
          win: [4000, 8000, 12000, 16000, 20000],
        },
      ],
      lineWins: [
        {
          sym1: "RU",
          sym2: "RU",
          sym3: "RU",
          win: [500, 1000, 1500, 2000, 2500],
        },
        {
          sym1: "MA",
          sym2: "MA",
          sym3: "MA",
          win: [400, 800, 1200, 1600, 2000],
        },
        { sym1: "CH", sym2: "CH", sym3: "CH", win: [200, 400, 600, 800, 1000] },
        { sym1: "BE", sym2: "BE", sym3: "BE", win: [100, 200, 300, 400, 500] },
      ],
      lineWinsWithWildOr2X: [
        { sym1: "SS", sym2: "SS", sym3: "SS", win: [40, 80, 120, 160, 200] },
        { sym1: "RS", sym2: "RS", sym3: "RS", win: [25, 50, 75, 100, 125] },
        { sym1: "BS", sym2: "BS", sym3: "BS", win: [15, 30, 45, 60, 75] },
        { sym1: "A7", sym2: "A7", sym3: "A7", win: [5, 10, 15, 20, 25] },
        { sym1: "3B", sym2: "3B", sym3: "3B", win: [25, 50, 75, 100, 125] },
        { sym1: "2B", sym2: "2B", sym3: "2B", win: [15, 30, 45, 60, 75] },
        { sym1: "1B", sym2: "1B", sym3: "1B", win: [10, 20, 30, 40, 50] },
        { sym1: "AB", sym2: "AB", sym3: "AB", win: [2, 4, 6, 8, 10] },
      ],
      secondaryGames: [
        { sym1: "", sym2: "", sym3: "GC", win: [10, 20, 30, 40, 50] },
        { sym1: "", sym2: "", sym3: "WL", win: [3, 6, 9, 12, 15] },
      ],
      themeJackpots: [
        {
          sym1: "T1",
          sym2: "T1",
          sym3: "T1",
          win: [1200, 2400, 3600, 4800, 6000],
        },
        {
          sym1: "T2",
          sym2: "T2",
          sym3: "T2",
          win: [900, 1800, 2700, 3600, 4500],
        },
        {
          sym1: "T3",
          sym2: "T3",
          sym3: "T3",
          win: [600, 1200, 1800, 2400, 3000],
        },
      ],
      themeLineWins: [
        { sym1: "T1", sym2: "T1", sym3: "", win: [40, 80, 120, 160, 200] },
        { sym1: "T2", sym2: "T2", sym3: "", win: [30, 60, 90, 120, 150] },
        { sym1: "T3", sym2: "T3", sym3: "", win: [20, 40, 60, 80, 100] },
        { sym1: "T1", sym2: "", sym3: "", win: [4, 8, 12, 16, 20] },
        { sym1: "T2", sym2: "", sym3: "", win: [3, 6, 9, 12, 15] },
        { sym1: "T3", sym2: "", sym3: "", win: [2, 4, 6, 8, 10] },
      ],
      themeSecondaryGames: [
        { sym1: "T4", sym2: "T4", sym3: "T4", win: [50, 100, 150, 200, 250] },
        { sym1: "T5", sym2: "T5", sym3: "T5", win: [20, 40, 60, 80, 100] },
        { sym1: "", sym2: "", sym3: "T6", win: [5, 10, 15, 20, 25] },
      ],
    },
  };

  return TestConfigResp;
}

module.exports = {
  fetchConfigSettings,
  flags,
};
