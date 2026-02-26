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
 * |  27/06/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */

const {
  SYMBOLS_W12,
  SYMBOLS_W23,
  SYMBOLS_W32,
  SYMBOLS_W36,
  SYMBOLS_W43,
} = require("../src/services/game-service/primary/win-symbols");
const {
  betValues,
  denomValues,
} = require("../src/services/game-service/paytable");
const { getPrimaryWin } = require("../src/services/game-service/primary");
const {
  isSixOfEighteenTrigger,
  getSixOfEighteenWin,
  sixOfEighteenConfig,
} = require("../src/services/game-service/secondary/six-of-eighteen");
const {
  isHitOrMissTrigger,
  getHitOrMissWin,
  hitOrMissConfig,
} = require("../src/services/game-service/secondary/hit-or-miss");
const {
  isRandomTrigger,
  getRandomWin,
  randomConfig,
} = require("../src/services/game-service/secondary/random");
const {
  isOneOfThreeTrigger,
  getOneOfThreeWin,
  oneOfThreeConfig,
} = require("../src/services/game-service/secondary/one-of-three");
const {
  isMoneyWheelTrigger,
  getMoneyWheelWin,
  wheelConfig,
} = require("../src/services/game-service/secondary/money-wheel");

describe("SIX OF EIGHTEEN Feature Tests", () => {
  test("SIX OF EIGHTEEN Feature Match Success", () => {
    expect(
      isSixOfEighteenTrigger(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2])
    ).toBe(true);
  });
  test("SIX OF EIGHTEEN Feature Match Fail 1", () => {
    expect(
      isSixOfEighteenTrigger(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W23[2])
    ).toBe(false);
  });
  test("SIX OF EIGHTEEN Feature Match Fail 2", () => {
    expect(
      isSixOfEighteenTrigger(SYMBOLS_W12[0], SYMBOLS_W23[1], SYMBOLS_W12[2])
    ).toBe(false);
  });
  test("SIX OF EIGHTEEN Feature Match Fail 3", () => {
    expect(
      isSixOfEighteenTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W12[2])
    ).toBe(false);
  });
  test("SIX OF EIGHTEEN Feature  Id", () => {
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 0, 0).id).toBe("SECG1");
  });
  test("SIX OF EIGHTEEN Index 0", () => {
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 0, 0).winData[0].index).toBe(
      0
    );
    expect(getSixOfEighteenWin(1, 0, 0, 0, 0, 0, 0, 0).winData[0].index).toBe(
      1
    );
    expect(getSixOfEighteenWin(2, 0, 0, 0, 0, 0, 0, 0).winData[0].index).toBe(
      2
    );
    expect(getSixOfEighteenWin(3, 0, 0, 0, 0, 0, 0, 0).winData[0].index).toBe(
      3
    );
    expect(getSixOfEighteenWin(4, 0, 0, 0, 0, 0, 0, 0).winData[0].index).toBe(
      4
    );
    expect(getSixOfEighteenWin(5, 0, 0, 0, 0, 0, 0, 0).winData[0].index).toBe(
      5
    );
  });
  test("SIX OF EIGHTEEN Index 0 Bet 0", () => {
    expect(
      getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 0, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[0].payout[0] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(1, 0, 0, 0, 0, 0, 0, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[1].payout[0] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(2, 0, 0, 0, 0, 0, 0, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[2].payout[0] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(3, 0, 0, 0, 0, 0, 0, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[3].payout[0] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(4, 0, 0, 0, 0, 0, 0, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[4].payout[0] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(5, 0, 0, 0, 0, 0, 0, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[5].payout[0] * denomValues[0]
    );
  });

  test("SIX OF EIGHTEEN Index 0 Bet 1", () => {
    expect(
      getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 1, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[0].payout[1] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(1, 0, 0, 0, 0, 0, 1, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[1].payout[1] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(2, 0, 0, 0, 0, 0, 1, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[2].payout[1] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(3, 0, 0, 0, 0, 0, 1, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[3].payout[1] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(4, 0, 0, 0, 0, 0, 1, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[4].payout[1] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(5, 0, 0, 0, 0, 0, 1, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[5].payout[1] * denomValues[0]
    );
  });

  test("SIX OF EIGHTEEN Index 0 Bet 2", () => {
    expect(
      getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 2, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[0].payout[2] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(1, 0, 0, 0, 0, 0, 2, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[1].payout[2] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(2, 0, 0, 0, 0, 0, 2, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[2].payout[2] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(3, 0, 0, 0, 0, 0, 2, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[3].payout[2] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(4, 0, 0, 0, 0, 0, 2, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[4].payout[2] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(5, 0, 0, 0, 0, 0, 2, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[5].payout[2] * denomValues[0]
    );
  });
  test("SIX OF EIGHTEEN Index 0 Bet 3", () => {
    expect(
      getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 3, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[0].payout[3] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(1, 0, 0, 0, 0, 0, 3, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[1].payout[3] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(2, 0, 0, 0, 0, 0, 3, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[2].payout[3] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(3, 0, 0, 0, 0, 0, 3, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[3].payout[3] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(4, 0, 0, 0, 0, 0, 3, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[4].payout[3] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(5, 0, 0, 0, 0, 0, 3, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[5].payout[3] * denomValues[0]
    );
  });
  test("SIX OF EIGHTEEN Index 0 Bet 4", () => {
    expect(
      getSixOfEighteenWin(0, 0, 0, 0, 0, 0, 4, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[0].payout[4] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(1, 0, 0, 0, 0, 0, 4, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[1].payout[4] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(2, 0, 0, 0, 0, 0, 4, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[2].payout[4] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(3, 0, 0, 0, 0, 0, 4, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[3].payout[4] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(4, 0, 0, 0, 0, 0, 4, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[4].payout[4] * denomValues[0]
    );
    expect(
      getSixOfEighteenWin(5, 0, 0, 0, 0, 0, 4, 0).winData[0].winAmount
    ).toBe(
      sixOfEighteenConfig.sixOfEighteenLayout[5].payout[4] * denomValues[0]
    );
  });
  test("SIX OF EIGHTEEN Index 1", () => {
    expect(getSixOfEighteenWin(0, 1, 0, 0, 0, 0, 0, 0).winData[1].index).toBe(
      1
    );
    expect(getSixOfEighteenWin(0, 2, 0, 0, 0, 0, 0, 0).winData[1].index).toBe(
      2
    );
    expect(getSixOfEighteenWin(0, 3, 0, 0, 0, 0, 0, 0).winData[1].index).toBe(
      3
    );
    expect(getSixOfEighteenWin(0, 4, 0, 0, 0, 0, 0, 0).winData[1].index).toBe(
      4
    );
    expect(getSixOfEighteenWin(0, 5, 0, 0, 0, 0, 0, 0).winData[1].index).toBe(
      5
    );
  });
  test("SIX OF EIGHTEEN Index 2", () => {
    expect(getSixOfEighteenWin(0, 0, 1, 0, 0, 0, 0, 0).winData[2].index).toBe(
      1
    );
    expect(getSixOfEighteenWin(0, 0, 2, 0, 0, 0, 0, 0).winData[2].index).toBe(
      2
    );
    expect(getSixOfEighteenWin(0, 0, 3, 0, 0, 0, 0, 0).winData[2].index).toBe(
      3
    );
    expect(getSixOfEighteenWin(0, 0, 4, 0, 0, 0, 0, 0).winData[2].index).toBe(
      4
    );
    expect(getSixOfEighteenWin(0, 0, 5, 0, 0, 0, 0, 0).winData[2].index).toBe(
      5
    );
  });
  test("SIX OF EIGHTEEN Index 3", () => {
    expect(getSixOfEighteenWin(0, 0, 0, 1, 0, 0, 0, 0).winData[3].index).toBe(
      1
    );
    expect(getSixOfEighteenWin(0, 0, 0, 2, 0, 0, 0, 0).winData[3].index).toBe(
      2
    );
    expect(getSixOfEighteenWin(0, 0, 0, 3, 0, 0, 0, 0).winData[3].index).toBe(
      3
    );
    expect(getSixOfEighteenWin(0, 0, 0, 4, 0, 0, 0, 0).winData[3].index).toBe(
      4
    );
    expect(getSixOfEighteenWin(0, 0, 0, 5, 0, 0, 0, 0).winData[3].index).toBe(
      5
    );
  });
  test("SIX OF EIGHTEEN Index 4", () => {
    expect(getSixOfEighteenWin(0, 0, 0, 0, 1, 0, 0, 0).winData[4].index).toBe(
      1
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 2, 0, 0, 0).winData[4].index).toBe(
      2
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 3, 0, 0, 0).winData[4].index).toBe(
      3
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 4, 0, 0, 0).winData[4].index).toBe(
      4
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 5, 0, 0, 0).winData[4].index).toBe(
      5
    );
  });
  test("SIX OF EIGHTEEN Index 5", () => {
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 1, 0, 0).winData[5].index).toBe(
      1
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 2, 0, 0).winData[5].index).toBe(
      2
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 3, 0, 0).winData[5].index).toBe(
      3
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 4, 0, 0).winData[5].index).toBe(
      4
    );
    expect(getSixOfEighteenWin(0, 0, 0, 0, 0, 5, 0, 0).winData[5].index).toBe(
      5
    );
  });
});

describe("HIT OR MISS Feature Tests", () => {
  test("Match Success", () => {
    expect(
      isHitOrMissTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2])
    ).toBe(true);
  });
  test("Match Fail 1", () => {
    expect(
      isHitOrMissTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W32[2])
    ).toBe(false);
  });
  test("Match Fail 2", () => {
    expect(
      isHitOrMissTrigger(SYMBOLS_W23[0], SYMBOLS_W32[1], SYMBOLS_W23[2])
    ).toBe(false);
  });
  test("Match Fail 3", () => {
    expect(
      isHitOrMissTrigger(SYMBOLS_W32[0], SYMBOLS_W23[1], SYMBOLS_W23[2])
    ).toBe(false);
  });
  test("HIT OR MISS Feature Id", () => {
    expect(getHitOrMissWin(0, 0, 0).id).toBe("SECG2");
  });
  test("HIT OR MISS Index 0", () => {
    expect(getHitOrMissWin(0, 0, 0).winData[0].index).toBe(0);
  });

  test("HIT OR MISS Index 0-0-0", () => {
    expect(getHitOrMissWin(0, 0, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[0].payout[0] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 0-1-0", () => {
    expect(getHitOrMissWin(0, 1, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[0].payout[1] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 0-2-0", () => {
    expect(getHitOrMissWin(0, 2, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[0].payout[2] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 0-3-0", () => {
    expect(getHitOrMissWin(0, 3, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[0].payout[3] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 0-4-0", () => {
    expect(getHitOrMissWin(0, 4, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[0].payout[4] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 1", () => {
    expect(getHitOrMissWin(1, 0, 0).winData[0].index).toBe(1);
  });
  test("HIT OR MISS Index 1-0-0", () => {
    expect(getHitOrMissWin(1, 0, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[1].payout[0] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 1-1-0", () => {
    expect(getHitOrMissWin(1, 1, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[1].payout[1] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 1-2-0", () => {
    expect(getHitOrMissWin(1, 2, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[1].payout[2] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 1-3-0", () => {
    expect(getHitOrMissWin(1, 3, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[1].payout[3] * denomValues[0]
    );
  });
  test("HIT OR MISS Index 1-4-0", () => {
    expect(getHitOrMissWin(1, 4, 0).winData[0].winAmount).toBe(
      hitOrMissConfig.hitOrMissLayout[1].payout[4] * denomValues[0]
    );
  });
});

describe("RANDOM Feature Tests", () => {
  test("Trigger Success", () => {
    expect(
      isRandomTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W32[2])
    ).toBe(true);
  });
  test("Trigger Fail 1", () => {
    expect(
      isRandomTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2])
    ).toBe(false);
  });
  test("Random Feature Id", () => {
    expect(getRandomWin(0, 0, 0).id).toBe("SECG3");
  });
  test("Random Index 0", () => {
    expect(getRandomWin(0, 0, 0).winData[0].index).toBe(0);
  });
  test("Random Index 0-0-0", () => {
    expect(getRandomWin(0, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[0] * denomValues[0]
    );
  });
  test("Random Index 0-1-0", () => {
    expect(getRandomWin(0, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[1] * denomValues[0]
    );
  });
  test("Random Index 0-2-0", () => {
    expect(getRandomWin(0, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[2] * denomValues[0]
    );
  });
  test("Random Index 0-3-0", () => {
    expect(getRandomWin(0, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[3] * denomValues[0]
    );
  });
  test("Random Index 0-4-0", () => {
    expect(getRandomWin(0, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[4] * denomValues[0]
    );
  });
  test("Random Index 0", () => {
    expect(getRandomWin(37, 0, 0).winData[0].index).toBe(0);
  });
  test("Random Index 37-0-0", () => {
    expect(getRandomWin(37, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[0] * denomValues[0]
    );
  });
  test("Random Index 37-1-0", () => {
    expect(getRandomWin(37, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[1] * denomValues[0]
    );
  });
  test("Random Index 37-2-0", () => {
    expect(getRandomWin(37, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[2] * denomValues[0]
    );
  });
  test("Random Index 37-3-0", () => {
    expect(getRandomWin(37, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[3] * denomValues[0]
    );
  });
  test("Random Index 37-4-0", () => {
    expect(getRandomWin(37, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[0].payout[4] * denomValues[0]
    );
  });

  test("Random Index 1", () => {
    expect(getRandomWin(38, 0, 0).winData[0].index).toBe(1);
  });
  test("Random Index 38-0-0", () => {
    expect(getRandomWin(38, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[0] * denomValues[0]
    );
  });
  test("Random Index 38-1-0", () => {
    expect(getRandomWin(38, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[1] * denomValues[0]
    );
  });
  test("Random Index 38-2-0", () => {
    expect(getRandomWin(38, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[2] * denomValues[0]
    );
  });
  test("Random Index 38-3-0", () => {
    expect(getRandomWin(38, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[3] * denomValues[0]
    );
  });
  test("Random Index 38-4-0", () => {
    expect(getRandomWin(38, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[4] * denomValues[0]
    );
  });
  test("Random Index 1", () => {
    expect(getRandomWin(53, 0, 0).winData[0].index).toBe(1);
  });
  test("Random Index 53-0-0", () => {
    expect(getRandomWin(53, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[0] * denomValues[0]
    );
  });
  test("Random Index 53-1-0", () => {
    expect(getRandomWin(53, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[1] * denomValues[0]
    );
  });
  test("Random Index 53-2-0", () => {
    expect(getRandomWin(53, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[2] * denomValues[0]
    );
  });
  test("Random Index 53-3-0", () => {
    expect(getRandomWin(53, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[3] * denomValues[0]
    );
  });
  test("Random Index 53-4-0", () => {
    expect(getRandomWin(53, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[1].payout[4] * denomValues[0]
    );
  });
  test("Random Index 2", () => {
    expect(getRandomWin(54, 0, 0).winData[0].index).toBe(2);
  });
  test("Random Index 54-0-0", () => {
    expect(getRandomWin(54, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[0] * denomValues[0]
    );
  });
  test("Random Index 54-1-0", () => {
    expect(getRandomWin(54, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[1] * denomValues[0]
    );
  });
  test("Random Index 54-2-0", () => {
    expect(getRandomWin(54, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[2] * denomValues[0]
    );
  });
  test("Random Index 54-3-0", () => {
    expect(getRandomWin(54, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[3] * denomValues[0]
    );
  });
  test("Random Index 54-4-0", () => {
    expect(getRandomWin(54, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[4] * denomValues[0]
    );
  });
  test("Random Index 2", () => {
    expect(getRandomWin(60, 0, 0).winData[0].index).toBe(2);
  });
  test("Random Index 60-0-0", () => {
    expect(getRandomWin(60, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[0] * denomValues[0]
    );
  });
  test("Random Index 60-1-0", () => {
    expect(getRandomWin(60, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[1] * denomValues[0]
    );
  });
  test("Random Index 60-2-0", () => {
    expect(getRandomWin(60, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[2] * denomValues[0]
    );
  });
  test("Random Index 60-3-0", () => {
    expect(getRandomWin(60, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[3] * denomValues[0]
    );
  });
  test("Random Index 60-4-0", () => {
    expect(getRandomWin(60, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[2].payout[4] * denomValues[0]
    );
  });
  test("Random Index 3", () => {
    expect(getRandomWin(61, 0, 0).winData[0].index).toBe(3);
  });
  test("Random Index 61-0-0", () => {
    expect(getRandomWin(61, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[0] * denomValues[0]
    );
  });
  test("Random Index 61-1-0", () => {
    expect(getRandomWin(61, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[1] * denomValues[0]
    );
  });
  test("Random Index 61-2-0", () => {
    expect(getRandomWin(61, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[2] * denomValues[0]
    );
  });
  test("Random Index 61-3-0", () => {
    expect(getRandomWin(61, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[3] * denomValues[0]
    );
  });
  test("Random Index 61-4-0", () => {
    expect(getRandomWin(61, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[4] * denomValues[0]
    );
  });
  test("Random Index 3", () => {
    expect(getRandomWin(63, 0, 0).winData[0].index).toBe(3);
  });
  test("Random Index 63-0-0", () => {
    expect(getRandomWin(63, 0, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[0] * denomValues[0]
    );
  });
  test("Random Index 63-1-0", () => {
    expect(getRandomWin(63, 1, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[1] * denomValues[0]
    );
  });
  test("Random Index 63-2-0", () => {
    expect(getRandomWin(63, 2, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[2] * denomValues[0]
    );
  });
  test("Random Index 63-3-0", () => {
    expect(getRandomWin(63, 3, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[3] * denomValues[0]
    );
  });
  test("Random Index 63-4-0", () => {
    expect(getRandomWin(63, 4, 0).winData[0].winAmount).toBe(
      randomConfig.randomLayout[3].payout[4] * denomValues[0]
    );
  });
});

describe("ONE OF THREE Feature Tests", () => {
  test("TRIGGER Success", () => {
    expect(
      isOneOfThreeTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W36[2])
    ).toBe(true);
  });
  test("TRIGGER Fail 1", () => {
    expect(
      isOneOfThreeTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2])
    ).toBe(false);
  });
  test("ONE OF THREE Feature Id", () => {
    expect(getOneOfThreeWin(0, 0, 0).id).toBe("SECG4");
  });
  /**
   * Index 0 of [0-2] winData Check
   */
  test("ONE OF THREE Index 0", () => {
    expect(getOneOfThreeWin(0, 0, 0).winData[0].index).toBe(0);
  });
  test("ONE OF THREE Index 0-0-0", () => {
    expect(getOneOfThreeWin(0, 0, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-1-0", () => {
    expect(getOneOfThreeWin(0, 1, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-2-0", () => {
    expect(getOneOfThreeWin(0, 2, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-3-0", () => {
    expect(getOneOfThreeWin(0, 3, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-4-0", () => {
    expect(getOneOfThreeWin(0, 4, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[4] * denomValues[0]
    );
  });
  /**
   * Index 0 of [0-2] noWinData Check
   */
  test("ONE OF THREE Index 0 noWinData[0]", () => {
    expect(getOneOfThreeWin(0, 0, 0).noWinData[0].index).toBe(1);
  });
  test("ONE OF THREE Index 0 noWinData[1]", () => {
    expect(getOneOfThreeWin(0, 0, 0).noWinData[1].index).toBe(2);
  });
  test("ONE OF THREE Index 0-0-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(0, 0, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-0-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(0, 0, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-1-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(0, 1, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-1-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(0, 1, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-2-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(0, 2, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-2-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(0, 2, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-3-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(0, 3, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-3-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(0, 3, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-4-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(0, 4, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[4] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 0-4-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(0, 4, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[4] * denomValues[0]
    );
  });
  /**
   * Index 1 of [0-2] winData Check
   */
  test("ONE OF THREE Index 1", () => {
    expect(getOneOfThreeWin(1, 0, 0).winData[0].index).toBe(1);
  });
  test("ONE OF THREE Index 1-0-0", () => {
    expect(getOneOfThreeWin(1, 0, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-1-0", () => {
    expect(getOneOfThreeWin(1, 1, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-2-0", () => {
    expect(getOneOfThreeWin(1, 2, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-3-0", () => {
    expect(getOneOfThreeWin(1, 3, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-4-0", () => {
    expect(getOneOfThreeWin(1, 4, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[4] * denomValues[0]
    );
  });
  /**
   * Index 1 of [0-2] noWinData Check
   */
  test("ONE OF THREE Index 1 noWinData[0]", () => {
    expect(getOneOfThreeWin(1, 0, 0).noWinData[0].index).toBe(0);
  });
  test("ONE OF THREE Index 1 noWinData[1]", () => {
    expect(getOneOfThreeWin(1, 0, 0).noWinData[1].index).toBe(2);
  });
  test("ONE OF THREE Index 1-0-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(1, 0, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-0-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(1, 0, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-1-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(1, 1, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-1-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(1, 1, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-2-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(1, 2, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-2-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(1, 2, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-3-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(1, 3, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-3-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(1, 3, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-4-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(1, 4, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[4] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 1-4-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(1, 4, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[4] * denomValues[0]
    );
  });
  /**
   * Index 2 of [0-2] winData Check
   */
  test("ONE OF THREE Index 2", () => {
    expect(getOneOfThreeWin(2, 0, 0).winData[0].index).toBe(2);
  });
  test("ONE OF THREE Index 2-0-0", () => {
    expect(getOneOfThreeWin(2, 0, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-1-0", () => {
    expect(getOneOfThreeWin(2, 1, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-2-0", () => {
    expect(getOneOfThreeWin(2, 2, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-3-0", () => {
    expect(getOneOfThreeWin(2, 3, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-4-0", () => {
    expect(getOneOfThreeWin(2, 4, 0).winData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[2].payout[4] * denomValues[0]
    );
  });

  /**
   * Index 2 of [0-2] noWinData Check
   */
  test("ONE OF THREE Index 2 noWinData[0]", () => {
    expect(getOneOfThreeWin(2, 0, 0).noWinData[0].index).toBe(0);
  });
  test("ONE OF THREE Index 2 noWinData[1]", () => {
    expect(getOneOfThreeWin(2, 0, 0).noWinData[1].index).toBe(1);
  });
  test("ONE OF THREE Index 2-0-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(2, 0, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-0-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(2, 0, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[0] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-1-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(2, 1, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-1-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(2, 1, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[1] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-2-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(2, 2, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-2-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(2, 2, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[2] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-3-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(2, 3, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-3-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(2, 3, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[3] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-4-0 noWinData[0]", () => {
    expect(getOneOfThreeWin(2, 4, 0).noWinData[0].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[0].payout[4] * denomValues[0]
    );
  });
  test("ONE OF THREE Index 2-4-0 noWinData[1]", () => {
    expect(getOneOfThreeWin(2, 4, 0).noWinData[1].winAmount).toBe(
      oneOfThreeConfig.oneOfThreeLayout[1].payout[4] * denomValues[0]
    );
  });
});

describe("MONEY WHEEL Feature Tests", () => {
  test("Match Success", () => {
    expect(
      isMoneyWheelTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W43[2], 4)
    ).toBe(true);
  });
  test("Match Fail 1", () => {
    expect(
      isMoneyWheelTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W43[2], 0)
    ).toBe(false);
  });
  test("Match Fail 2", () => {
    expect(
      isMoneyWheelTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W43[2], 1)
    ).toBe(false);
  });
  test("Match Fail 3", () => {
    expect(
      isMoneyWheelTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W43[2], 2)
    ).toBe(false);
  });
  test("Match Fail 4", () => {
    expect(
      isMoneyWheelTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W43[2], 3)
    ).toBe(false);
  });
  test("Match Fail 5", () => {
    expect(
      isMoneyWheelTrigger(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 4)
    ).toBe(false);
  });
  test("Money Wheel Id", () => {
    expect(getMoneyWheelWin(0, 4, 0).id).toBe("SECG5");
  });

  test("Money Wheel Index 0", () => {
    expect(getMoneyWheelWin(0, 4, 0).winData[0].index).toBe(0);
  });
  test("Money Wheel Index 0-1", () => {
    expect(getMoneyWheelWin(0, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[0].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 0-2", () => {
    expect(getMoneyWheelWin(7, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[0].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 1", () => {
    expect(getMoneyWheelWin(8, 4, 0).winData[0].index).toBe(1);
  });

  test("Money Wheel Index 1-1", () => {
    expect(getMoneyWheelWin(8, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[1].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 1-2", () => {
    expect(getMoneyWheelWin(9, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[1].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 2", () => {
    expect(getMoneyWheelWin(10, 4, 0).winData[0].index).toBe(2);
  });

  test("Money Wheel Index 2-1", () => {
    expect(getMoneyWheelWin(10, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[2].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 2-2", () => {
    expect(getMoneyWheelWin(380, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[2].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 3", () => {
    expect(getMoneyWheelWin(381, 4, 0).winData[0].index).toBe(3);
  });
  test("Money Wheel Index 3-1", () => {
    expect(getMoneyWheelWin(381, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[3].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 3-2", () => {
    expect(getMoneyWheelWin(680, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[3].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 4", () => {
    expect(getMoneyWheelWin(681, 4, 0).winData[0].index).toBe(4);
  });
  test("Money Wheel Index 4-1", () => {
    expect(getMoneyWheelWin(681, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[4].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 4-2", () => {
    expect(getMoneyWheelWin(681, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[4].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 5", () => {
    expect(getMoneyWheelWin(682, 4, 0).winData[0].index).toBe(5);
  });
  test("Money Wheel Index 5-1", () => {
    expect(getMoneyWheelWin(682, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[5].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 5-2", () => {
    expect(getMoneyWheelWin(782, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[5].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 6", () => {
    expect(getMoneyWheelWin(783, 4, 0).winData[0].index).toBe(6);
  });
  test("Money Wheel Index 6-1", () => {
    expect(getMoneyWheelWin(783, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[6].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 6-2", () => {
    expect(getMoneyWheelWin(784, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[6].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 7", () => {
    expect(getMoneyWheelWin(785, 4, 0).winData[0].index).toBe(7);
  });
  test("Money Wheel Index 7-1", () => {
    expect(getMoneyWheelWin(785, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[7].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 7-2", () => {
    expect(getMoneyWheelWin(792, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[7].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 8", () => {
    expect(getMoneyWheelWin(793, 4, 0).winData[0].index).toBe(8);
  });
  test("Money Wheel Index 8-1", () => {
    expect(getMoneyWheelWin(793, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[8].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 8-2", () => {
    expect(getMoneyWheelWin(1163, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[8].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 9", () => {
    expect(getMoneyWheelWin(1164, 4, 0).winData[0].index).toBe(9);
  });
  test("Money Wheel Index 9-1", () => {
    expect(getMoneyWheelWin(1164, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[9].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 9-2", () => {
    expect(getMoneyWheelWin(1165, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[9].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 10", () => {
    expect(getMoneyWheelWin(1166, 4, 0).winData[0].index).toBe(10);
  });
  test("Money Wheel Index 10-1", () => {
    expect(getMoneyWheelWin(1166, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[10].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 10-2", () => {
    expect(getMoneyWheelWin(1167, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[10].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 11", () => {
    expect(getMoneyWheelWin(1168, 4, 0).winData[0].index).toBe(11);
  });
  test("Money Wheel Index 11-1", () => {
    expect(getMoneyWheelWin(1168, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[11].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 11-2", () => {
    expect(getMoneyWheelWin(1538, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[11].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 12", () => {
    expect(getMoneyWheelWin(1539, 4, 0).winData[0].index).toBe(12);
  });
  test("Money Wheel Index 12-1", () => {
    expect(getMoneyWheelWin(1539, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[12].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 12-2", () => {
    expect(getMoneyWheelWin(1539, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[12].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 13", () => {
    expect(getMoneyWheelWin(1540, 4, 0).winData[0].index).toBe(13);
  });
  test("Money Wheel Index 13-1", () => {
    expect(getMoneyWheelWin(1540, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[13].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 13-2", () => {
    expect(getMoneyWheelWin(1893, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[13].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 14", () => {
    expect(getMoneyWheelWin(1894, 4, 0).winData[0].index).toBe(14);
  });
  test("Money Wheel Index 14-1", () => {
    expect(getMoneyWheelWin(1894, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[14].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 14-2", () => {
    expect(getMoneyWheelWin(1897, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[14].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 15", () => {
    expect(getMoneyWheelWin(1898, 4, 0).winData[0].index).toBe(15);
  });
  test("Money Wheel Index 15-1", () => {
    expect(getMoneyWheelWin(1898, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[15].payout[4] * denomValues[0]
    );
  });
  test("Money Wheel Index 15-2", () => {
    expect(getMoneyWheelWin(1947, 4, 0).winData[0].winAmount).toBe(
      wheelConfig.wheelLayout[15].payout[4] * denomValues[0]
    );
  });
});
