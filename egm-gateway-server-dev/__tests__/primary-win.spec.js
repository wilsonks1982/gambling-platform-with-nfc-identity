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
 * |  26/06/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */

const {
  WIN_PAYOUT_W01,
  WIN_PAYOUT_W02,
  WIN_PAYOUT_W03,
  WIN_PAYOUT_W04,
  WIN_PAYOUT_W05,
  WIN_PAYOUT_W06,
  WIN_PAYOUT_W07,
  WIN_PAYOUT_W08,
  WIN_PAYOUT_W09,
  WIN_PAYOUT_W10,
  WIN_PAYOUT_W11,
  WIN_PAYOUT_W12,
  WIN_PAYOUT_W13,
  WIN_PAYOUT_W14,
  WIN_PAYOUT_W15,
  WIN_PAYOUT_W16,
  WIN_PAYOUT_W17,
  WIN_PAYOUT_W18,
  WIN_PAYOUT_W19,
  WIN_PAYOUT_W20,
  WIN_PAYOUT_W21,
  WIN_PAYOUT_W22,
  WIN_PAYOUT_W23,
  WIN_PAYOUT_W24,
  WIN_PAYOUT_W25,
  WIN_PAYOUT_W26,
  WIN_PAYOUT_W27,
  WIN_PAYOUT_W28,
  WIN_PAYOUT_W29,
  WIN_PAYOUT_W30,
  WIN_PAYOUT_W31,
  WIN_PAYOUT_W32,
  WIN_PAYOUT_W33,
  WIN_PAYOUT_W34,
  WIN_PAYOUT_W35,
  WIN_PAYOUT_W36,
  WIN_PAYOUT_W37,
  WIN_PAYOUT_W38,
  WIN_PAYOUT_W39,
  WIN_PAYOUT_W40,
  WIN_PAYOUT_W41,
  WIN_PAYOUT_W42,
  WIN_PAYOUT_W43,
} = require("../src/services/game-service/primary/win-payouts");

const {
  SYMBOLS_W01,
  SYMBOLS_W02,
  SYMBOLS_W03,
  SYMBOLS_W04,
  SYMBOLS_W05,
  SYMBOLS_W06,
  SYMBOLS_W07,
  SYMBOLS_W08,
  SYMBOLS_W09,
  SYMBOLS_W10,
  SYMBOLS_W11,
  SYMBOLS_W12,
  SYMBOLS_W13,
  SYMBOLS_W14,
  SYMBOLS_W15,
  SYMBOLS_W16,
  SYMBOLS_W17,
  SYMBOLS_W18,
  SYMBOLS_W19,
  SYMBOLS_W20,
  SYMBOLS_W21,
  SYMBOLS_W22,
  SYMBOLS_W23,
  SYMBOLS_W24,
  SYMBOLS_W25,
  SYMBOLS_W26,
  SYMBOLS_W27,
  SYMBOLS_W28,
  SYMBOLS_W29,
  SYMBOLS_W30,
  SYMBOLS_W31,
  SYMBOLS_W32,
  SYMBOLS_W33,
  SYMBOLS_W34,
  SYMBOLS_W35,
  SYMBOLS_W36,
  SYMBOLS_W37,
  SYMBOLS_W38,
  SYMBOLS_W39,
  SYMBOLS_W40,
  SYMBOLS_W41,
  SYMBOLS_W42,
  SYMBOLS_W43,
} = require("../src/services/game-service/primary/win-symbols");
const { betValues } = require("../src/services/game-service/paytable");
const {
  getPrimaryWin,
  isAnticipationActCase,
} = require("../src/services/game-service/primary");
const { flags } = require("../src/services/game-service");

describe("Wins Payout W01", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W01[0], SYMBOLS_W01[1], SYMBOLS_W01[2], 0, 0)
    ).toBe(WIN_PAYOUT_W01 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W01[0], SYMBOLS_W01[1], SYMBOLS_W01[2], 1, 0)
    ).toBe(WIN_PAYOUT_W01 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W01[0], SYMBOLS_W01[1], SYMBOLS_W01[2], 2, 0)
    ).toBe(WIN_PAYOUT_W01 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W01[0], SYMBOLS_W01[1], SYMBOLS_W01[2], 3, 0)
    ).toBe(WIN_PAYOUT_W01 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W01[0], SYMBOLS_W01[1], SYMBOLS_W01[2], 4, 0)
    ).toBe(WIN_PAYOUT_W01 * betValues[4][0]);
  });
});

describe("Wins Payout W02", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W02[0], SYMBOLS_W02[1], SYMBOLS_W02[2], 0, 0)
    ).toBe(
      WIN_PAYOUT_W02 * betValues[0][0] +
        WIN_PAYOUT_W13 * betValues[0][0] +
        WIN_PAYOUT_W38 * betValues[0][0]
    );
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W02[0], SYMBOLS_W02[1], SYMBOLS_W02[2], 1, 0)
    ).toBe(
      WIN_PAYOUT_W02 * betValues[1][0] +
        WIN_PAYOUT_W13 * betValues[1][0] +
        WIN_PAYOUT_W38 * betValues[1][0]
    );
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W02[0], SYMBOLS_W02[1], SYMBOLS_W02[2], 2, 0)
    ).toBe(
      WIN_PAYOUT_W02 * betValues[2][0] +
        WIN_PAYOUT_W13 * betValues[2][0] +
        WIN_PAYOUT_W38 * betValues[2][0]
    );
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W02[0], SYMBOLS_W02[1], SYMBOLS_W02[2], 3, 0)
    ).toBe(
      WIN_PAYOUT_W02 * betValues[3][0] +
        WIN_PAYOUT_W13 * betValues[3][0] +
        WIN_PAYOUT_W38 * betValues[3][0]
    );
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W02[0], SYMBOLS_W02[1], SYMBOLS_W02[2], 4, 0)
    ).toBe(
      WIN_PAYOUT_W02 * betValues[4][0] +
        WIN_PAYOUT_W13 * betValues[4][0] +
        WIN_PAYOUT_W38 * betValues[4][0]
    );
  });
});

describe("Wins Payout W03", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W03[0], SYMBOLS_W03[1], SYMBOLS_W03[2], 0, 0)
    ).toBe(
      WIN_PAYOUT_W03 * betValues[0][0] +
        WIN_PAYOUT_W16 * betValues[0][0] +
        WIN_PAYOUT_W39 * betValues[0][0]
    );
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W03[0], SYMBOLS_W03[1], SYMBOLS_W03[2], 1, 0)
    ).toBe(
      WIN_PAYOUT_W03 * betValues[1][0] +
        WIN_PAYOUT_W16 * betValues[1][0] +
        WIN_PAYOUT_W39 * betValues[1][0]
    );
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W03[0], SYMBOLS_W03[1], SYMBOLS_W03[2], 2, 0)
    ).toBe(
      WIN_PAYOUT_W03 * betValues[2][0] +
        WIN_PAYOUT_W16 * betValues[2][0] +
        WIN_PAYOUT_W39 * betValues[2][0]
    );
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W03[0], SYMBOLS_W03[1], SYMBOLS_W03[2], 3, 0)
    ).toBe(
      WIN_PAYOUT_W03 * betValues[3][0] +
        WIN_PAYOUT_W16 * betValues[3][0] +
        WIN_PAYOUT_W39 * betValues[3][0]
    );
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W03[0], SYMBOLS_W03[1], SYMBOLS_W03[2], 4, 0)
    ).toBe(
      WIN_PAYOUT_W03 * betValues[4][0] +
        WIN_PAYOUT_W16 * betValues[4][0] +
        WIN_PAYOUT_W39 * betValues[4][0]
    );
  });
});

describe("Wins Payout W04", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W04[0], SYMBOLS_W04[1], SYMBOLS_W04[2], 0, 0)
    ).toBe(
      WIN_PAYOUT_W04 * betValues[0][0] +
        WIN_PAYOUT_W24 * betValues[0][0] +
        WIN_PAYOUT_W40 * betValues[0][0]
    );
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W04[0], SYMBOLS_W04[1], SYMBOLS_W04[2], 1, 0)
    ).toBe(
      WIN_PAYOUT_W04 * betValues[1][0] +
        WIN_PAYOUT_W24 * betValues[1][0] +
        WIN_PAYOUT_W40 * betValues[1][0]
    );
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W04[0], SYMBOLS_W04[1], SYMBOLS_W04[2], 2, 0)
    ).toBe(
      WIN_PAYOUT_W04 * betValues[2][0] +
        WIN_PAYOUT_W24 * betValues[2][0] +
        WIN_PAYOUT_W40 * betValues[2][0]
    );
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W04[0], SYMBOLS_W04[1], SYMBOLS_W04[2], 3, 0)
    ).toBe(
      WIN_PAYOUT_W04 * betValues[3][0] +
        WIN_PAYOUT_W24 * betValues[3][0] +
        WIN_PAYOUT_W40 * betValues[3][0]
    );
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W04[0], SYMBOLS_W04[1], SYMBOLS_W04[2], 4, 0)
    ).toBe(
      WIN_PAYOUT_W04 * betValues[4][0] +
        WIN_PAYOUT_W24 * betValues[4][0] +
        WIN_PAYOUT_W40 * betValues[4][0]
    );
  });
});

describe("Wins Payout W05", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W05[0], SYMBOLS_W05[1], SYMBOLS_W05[2], 0, 0)
    ).toBe(WIN_PAYOUT_W05 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W05[0], SYMBOLS_W05[1], SYMBOLS_W05[2], 1, 0)
    ).toBe(WIN_PAYOUT_W05 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W05[0], SYMBOLS_W05[1], SYMBOLS_W05[2], 2, 0)
    ).toBe(WIN_PAYOUT_W05 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W05[0], SYMBOLS_W05[1], SYMBOLS_W05[2], 3, 0)
    ).toBe(WIN_PAYOUT_W05 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W05[0], SYMBOLS_W05[1], SYMBOLS_W05[2], 4, 0)
    ).toBe(WIN_PAYOUT_W05 * betValues[4][0]);
  });
});

describe("Wins Payout W06", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W06[0], SYMBOLS_W06[1], SYMBOLS_W06[2], 0, 0)
    ).toBe(WIN_PAYOUT_W06 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W06[0], SYMBOLS_W06[1], SYMBOLS_W06[2], 1, 0)
    ).toBe(WIN_PAYOUT_W06 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W06[0], SYMBOLS_W06[1], SYMBOLS_W06[2], 2, 0)
    ).toBe(WIN_PAYOUT_W06 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W06[0], SYMBOLS_W06[1], SYMBOLS_W06[2], 3, 0)
    ).toBe(WIN_PAYOUT_W06 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W06[0], SYMBOLS_W06[1], SYMBOLS_W06[2], 4, 0)
    ).toBe(WIN_PAYOUT_W06 * betValues[4][0]);
  });
});

describe("Wins Payout W07", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W07[0], SYMBOLS_W07[1], SYMBOLS_W07[2], 0, 0)
    ).toBe(WIN_PAYOUT_W07 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W07[0], SYMBOLS_W07[1], SYMBOLS_W07[2], 1, 0)
    ).toBe(WIN_PAYOUT_W07 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W07[0], SYMBOLS_W07[1], SYMBOLS_W07[2], 2, 0)
    ).toBe(WIN_PAYOUT_W07 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W07[0], SYMBOLS_W07[1], SYMBOLS_W07[2], 3, 0)
    ).toBe(WIN_PAYOUT_W07 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W07[0], SYMBOLS_W07[1], SYMBOLS_W07[2], 4, 0)
    ).toBe(WIN_PAYOUT_W07 * betValues[4][0]);
  });
});

describe("Wins Payout W08", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W08[0], SYMBOLS_W08[1], SYMBOLS_W08[2], 0, 0)
    ).toBe(WIN_PAYOUT_W08 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W08[0], SYMBOLS_W08[1], SYMBOLS_W08[2], 1, 0)
    ).toBe(WIN_PAYOUT_W08 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W08[0], SYMBOLS_W08[1], SYMBOLS_W08[2], 2, 0)
    ).toBe(WIN_PAYOUT_W08 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W08[0], SYMBOLS_W08[1], SYMBOLS_W08[2], 3, 0)
    ).toBe(WIN_PAYOUT_W08 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W08[0], SYMBOLS_W08[1], SYMBOLS_W08[2], 4, 0)
    ).toBe(WIN_PAYOUT_W08 * betValues[4][0]);
  });
});

describe("Wins Payout W09", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W09[0], SYMBOLS_W09[1], SYMBOLS_W09[2], 0, 0)
    ).toBe(WIN_PAYOUT_W09 * betValues[0][0] + WIN_PAYOUT_W33 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W09[0], SYMBOLS_W09[1], SYMBOLS_W09[2], 1, 0)
    ).toBe(WIN_PAYOUT_W09 * betValues[1][0] + WIN_PAYOUT_W33 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W09[0], SYMBOLS_W09[1], SYMBOLS_W09[2], 2, 0)
    ).toBe(WIN_PAYOUT_W09 * betValues[2][0] + WIN_PAYOUT_W33 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W09[0], SYMBOLS_W09[1], SYMBOLS_W09[2], 3, 0)
    ).toBe(WIN_PAYOUT_W09 * betValues[3][0] + WIN_PAYOUT_W33 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W09[0], SYMBOLS_W09[1], SYMBOLS_W09[2], 4, 0)
    ).toBe(WIN_PAYOUT_W09 * betValues[4][0] + WIN_PAYOUT_W33 * betValues[4][0]);
  });
});

describe("Wins Payout W10", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W10[0], SYMBOLS_W10[1], SYMBOLS_W10[2], 0, 0)
    ).toBe(WIN_PAYOUT_W10 * betValues[0][0] + WIN_PAYOUT_W37 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W10[0], SYMBOLS_W10[1], SYMBOLS_W10[2], 1, 0)
    ).toBe(WIN_PAYOUT_W10 * betValues[1][0] + WIN_PAYOUT_W37 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W10[0], SYMBOLS_W10[1], SYMBOLS_W10[2], 2, 0)
    ).toBe(WIN_PAYOUT_W10 * betValues[2][0] + WIN_PAYOUT_W37 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W10[0], SYMBOLS_W10[1], SYMBOLS_W10[2], 3, 0)
    ).toBe(WIN_PAYOUT_W10 * betValues[3][0] + WIN_PAYOUT_W37 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W10[0], SYMBOLS_W10[1], SYMBOLS_W10[2], 4, 0)
    ).toBe(WIN_PAYOUT_W10 * betValues[4][0] + WIN_PAYOUT_W37 * betValues[4][0]);
  });
});

describe("Wins Payout W11", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W11[0], SYMBOLS_W11[1], SYMBOLS_W11[2], 0, 0)
    ).toBe(WIN_PAYOUT_W11 * betValues[0][0] + WIN_PAYOUT_W33 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W11[0], SYMBOLS_W11[1], SYMBOLS_W11[2], 1, 0)
    ).toBe(WIN_PAYOUT_W11 * betValues[1][0] + WIN_PAYOUT_W33 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W11[0], SYMBOLS_W11[1], SYMBOLS_W11[2], 2, 0)
    ).toBe(WIN_PAYOUT_W11 * betValues[2][0] + WIN_PAYOUT_W33 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W11[0], SYMBOLS_W11[1], SYMBOLS_W11[2], 3, 0)
    ).toBe(WIN_PAYOUT_W11 * betValues[3][0] + WIN_PAYOUT_W33 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W11[0], SYMBOLS_W11[1], SYMBOLS_W11[2], 4, 0)
    ).toBe(WIN_PAYOUT_W11 * betValues[4][0] + WIN_PAYOUT_W33 * betValues[4][0]);
  });
});

describe("Wins Payout W12 FEATURE_SIX_OF_EIGHTEEN_ENABLED = false", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 0, 0)
    ).toBe(WIN_PAYOUT_W12 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 1, 0)
    ).toBe(WIN_PAYOUT_W12 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 2, 0)
    ).toBe(WIN_PAYOUT_W12 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 3, 0)
    ).toBe(WIN_PAYOUT_W12 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 4, 0)
    ).toBe(WIN_PAYOUT_W12 * betValues[4][0]);
  });
});
describe("Wins Payout W12 FEATURE_SIX_OF_EIGHTEEN_ENABLED = true", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 0, 0)
    ).toBe(0);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 1, 0)
    ).toBe(0);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 2, 0)
    ).toBe(0);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 3, 0)
    ).toBe(0);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W12[0], SYMBOLS_W12[1], SYMBOLS_W12[2], 4, 0)
    ).toBe(0);
  });
});

describe("Wins Payout W13", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W13[0], SYMBOLS_W13[1], SYMBOLS_W13[2], 0, 0)
    ).toBe(WIN_PAYOUT_W13 * betValues[0][0] + WIN_PAYOUT_W38 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W13[0], SYMBOLS_W13[1], SYMBOLS_W13[2], 1, 0)
    ).toBe(WIN_PAYOUT_W13 * betValues[1][0] + WIN_PAYOUT_W38 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W13[0], SYMBOLS_W13[1], SYMBOLS_W13[2], 2, 0)
    ).toBe(WIN_PAYOUT_W13 * betValues[2][0] + WIN_PAYOUT_W38 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W13[0], SYMBOLS_W13[1], SYMBOLS_W13[2], 3, 0)
    ).toBe(WIN_PAYOUT_W13 * betValues[3][0] + WIN_PAYOUT_W38 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W13[0], SYMBOLS_W13[1], SYMBOLS_W13[2], 4, 0)
    ).toBe(WIN_PAYOUT_W13 * betValues[4][0] + WIN_PAYOUT_W38 * betValues[4][0]);
  });
});

describe("Wins Payout W14", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W14[0], SYMBOLS_W14[1], SYMBOLS_W14[2], 0, 0)
    ).toBe(WIN_PAYOUT_W14 * betValues[0][0] + WIN_PAYOUT_W35 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W14[0], SYMBOLS_W14[1], SYMBOLS_W14[2], 1, 0)
    ).toBe(WIN_PAYOUT_W14 * betValues[1][0] + WIN_PAYOUT_W35 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W14[0], SYMBOLS_W14[1], SYMBOLS_W14[2], 2, 0)
    ).toBe(WIN_PAYOUT_W14 * betValues[2][0] + WIN_PAYOUT_W35 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W14[0], SYMBOLS_W14[1], SYMBOLS_W14[2], 3, 0)
    ).toBe(WIN_PAYOUT_W14 * betValues[3][0] + WIN_PAYOUT_W35 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W14[0], SYMBOLS_W14[1], SYMBOLS_W14[2], 4, 0)
    ).toBe(WIN_PAYOUT_W14 * betValues[4][0] + WIN_PAYOUT_W35 * betValues[4][0]);
  });
});

describe("Wins Payout W15", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W15[0], SYMBOLS_W15[1], SYMBOLS_W15[2], 0, 0)
    ).toBe(WIN_PAYOUT_W15 * betValues[0][0] + WIN_PAYOUT_W34 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W15[0], SYMBOLS_W15[1], SYMBOLS_W15[2], 1, 0)
    ).toBe(WIN_PAYOUT_W15 * betValues[1][0] + WIN_PAYOUT_W34 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W15[0], SYMBOLS_W15[1], SYMBOLS_W15[2], 2, 0)
    ).toBe(WIN_PAYOUT_W15 * betValues[2][0] + WIN_PAYOUT_W34 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W15[0], SYMBOLS_W15[1], SYMBOLS_W15[2], 3, 0)
    ).toBe(WIN_PAYOUT_W15 * betValues[3][0] + WIN_PAYOUT_W34 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W15[0], SYMBOLS_W15[1], SYMBOLS_W15[2], 4, 0)
    ).toBe(WIN_PAYOUT_W15 * betValues[4][0] + WIN_PAYOUT_W34 * betValues[4][0]);
  });
});

describe("Wins Payout W16", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W16[0], SYMBOLS_W16[1], SYMBOLS_W16[2], 0, 0)
    ).toBe(WIN_PAYOUT_W16 * betValues[0][0] + WIN_PAYOUT_W39 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W16[0], SYMBOLS_W16[1], SYMBOLS_W16[2], 1, 0)
    ).toBe(WIN_PAYOUT_W16 * betValues[1][0] + WIN_PAYOUT_W39 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W16[0], SYMBOLS_W16[1], SYMBOLS_W16[2], 2, 0)
    ).toBe(WIN_PAYOUT_W16 * betValues[2][0] + WIN_PAYOUT_W39 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W16[0], SYMBOLS_W16[1], SYMBOLS_W16[2], 3, 0)
    ).toBe(WIN_PAYOUT_W16 * betValues[3][0] + WIN_PAYOUT_W39 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W16[0], SYMBOLS_W16[1], SYMBOLS_W16[2], 4, 0)
    ).toBe(WIN_PAYOUT_W16 * betValues[4][0] + WIN_PAYOUT_W39 * betValues[4][0]);
  });
});

describe("Wins Payout W17", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W17[0], SYMBOLS_W17[1], SYMBOLS_W17[2], 0, 0)
    ).toBe(WIN_PAYOUT_W17 * betValues[0][0] + WIN_PAYOUT_W37 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W17[0], SYMBOLS_W17[1], SYMBOLS_W17[2], 1, 0)
    ).toBe(WIN_PAYOUT_W17 * betValues[1][0] + WIN_PAYOUT_W37 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W17[0], SYMBOLS_W17[1], SYMBOLS_W17[2], 2, 0)
    ).toBe(WIN_PAYOUT_W17 * betValues[2][0] + WIN_PAYOUT_W37 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W17[0], SYMBOLS_W17[1], SYMBOLS_W17[2], 3, 0)
    ).toBe(WIN_PAYOUT_W17 * betValues[3][0] + WIN_PAYOUT_W37 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W17[0], SYMBOLS_W17[1], SYMBOLS_W17[2], 4, 0)
    ).toBe(WIN_PAYOUT_W17 * betValues[4][0] + WIN_PAYOUT_W37 * betValues[4][0]);
  });
});

describe("Wins Payout W18", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W18[0], SYMBOLS_W18[1], SYMBOLS_W18[2], 0, 0)
    ).toBe(WIN_PAYOUT_W18 * betValues[0][0] + WIN_PAYOUT_W33 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W18[0], SYMBOLS_W18[1], SYMBOLS_W18[2], 1, 0)
    ).toBe(WIN_PAYOUT_W18 * betValues[1][0] + WIN_PAYOUT_W33 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W18[0], SYMBOLS_W18[1], SYMBOLS_W18[2], 2, 0)
    ).toBe(WIN_PAYOUT_W18 * betValues[2][0] + WIN_PAYOUT_W33 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W18[0], SYMBOLS_W18[1], SYMBOLS_W18[2], 3, 0)
    ).toBe(WIN_PAYOUT_W18 * betValues[3][0] + WIN_PAYOUT_W33 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W18[0], SYMBOLS_W18[1], SYMBOLS_W18[2], 4, 0)
    ).toBe(WIN_PAYOUT_W18 * betValues[4][0] + WIN_PAYOUT_W33 * betValues[4][0]);
  });
});

describe("Wins Payout W19", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W19[0], SYMBOLS_W19[1], SYMBOLS_W19[2], 0, 0)
    ).toBe(WIN_PAYOUT_W19 * betValues[0][0] + WIN_PAYOUT_W42 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W19[0], SYMBOLS_W19[1], SYMBOLS_W19[2], 1, 0)
    ).toBe(WIN_PAYOUT_W19 * betValues[1][0] + WIN_PAYOUT_W42 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W19[0], SYMBOLS_W19[1], SYMBOLS_W19[2], 2, 0)
    ).toBe(WIN_PAYOUT_W19 * betValues[2][0] + WIN_PAYOUT_W42 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W19[0], SYMBOLS_W19[1], SYMBOLS_W19[2], 3, 0)
    ).toBe(WIN_PAYOUT_W19 * betValues[3][0] + WIN_PAYOUT_W42 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W19[0], SYMBOLS_W19[1], SYMBOLS_W19[2], 4, 0)
    ).toBe(WIN_PAYOUT_W19 * betValues[4][0] + WIN_PAYOUT_W42 * betValues[4][0]);
  });
});

describe("Wins Payout W20", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W20[0], SYMBOLS_W20[1], SYMBOLS_W20[2], 0, 0)
    ).toBe(WIN_PAYOUT_W20 * betValues[0][0] + WIN_PAYOUT_W41 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W20[0], SYMBOLS_W20[1], SYMBOLS_W20[2], 1, 0)
    ).toBe(WIN_PAYOUT_W20 * betValues[1][0] + WIN_PAYOUT_W41 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W20[0], SYMBOLS_W20[1], SYMBOLS_W20[2], 2, 0)
    ).toBe(WIN_PAYOUT_W20 * betValues[2][0] + WIN_PAYOUT_W41 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W20[0], SYMBOLS_W20[1], SYMBOLS_W20[2], 3, 0)
    ).toBe(WIN_PAYOUT_W20 * betValues[3][0] + WIN_PAYOUT_W41 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W20[0], SYMBOLS_W20[1], SYMBOLS_W20[2], 4, 0)
    ).toBe(WIN_PAYOUT_W20 * betValues[4][0] + WIN_PAYOUT_W41 * betValues[4][0]);
  });
});

describe("Wins Payout W21", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W21[0], SYMBOLS_W21[1], SYMBOLS_W21[2], 0, 0)
    ).toBe(WIN_PAYOUT_W21 * betValues[0][0] + WIN_PAYOUT_W35 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W21[0], SYMBOLS_W21[1], SYMBOLS_W21[2], 1, 0)
    ).toBe(WIN_PAYOUT_W21 * betValues[1][0] + WIN_PAYOUT_W35 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W21[0], SYMBOLS_W21[1], SYMBOLS_W21[2], 2, 0)
    ).toBe(WIN_PAYOUT_W21 * betValues[2][0] + WIN_PAYOUT_W35 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W21[0], SYMBOLS_W21[1], SYMBOLS_W21[2], 3, 0)
    ).toBe(WIN_PAYOUT_W21 * betValues[3][0] + WIN_PAYOUT_W35 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W21[0], SYMBOLS_W21[1], SYMBOLS_W21[2], 4, 0)
    ).toBe(WIN_PAYOUT_W21 * betValues[4][0] + WIN_PAYOUT_W35 * betValues[4][0]);
  });
});

describe("Wins Payout W22", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W22[0], SYMBOLS_W22[1], SYMBOLS_W22[2], 0, 0)
    ).toBe(WIN_PAYOUT_W22 * betValues[0][0] + WIN_PAYOUT_W34 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W22[0], SYMBOLS_W22[1], SYMBOLS_W22[2], 1, 0)
    ).toBe(WIN_PAYOUT_W22 * betValues[1][0] + WIN_PAYOUT_W34 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W22[0], SYMBOLS_W22[1], SYMBOLS_W22[2], 2, 0)
    ).toBe(WIN_PAYOUT_W22 * betValues[2][0] + WIN_PAYOUT_W34 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W22[0], SYMBOLS_W22[1], SYMBOLS_W22[2], 3, 0)
    ).toBe(WIN_PAYOUT_W22 * betValues[3][0] + WIN_PAYOUT_W34 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W22[0], SYMBOLS_W22[1], SYMBOLS_W22[2], 4, 0)
    ).toBe(WIN_PAYOUT_W22 * betValues[4][0] + WIN_PAYOUT_W34 * betValues[4][0]);
  });
});

describe("Wins Payout W23 FEATURE_HIT_OR_MISS_ENABLED = false", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 0, 0)
    ).toBe(WIN_PAYOUT_W23 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 1, 0)
    ).toBe(WIN_PAYOUT_W23 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 2, 0)
    ).toBe(WIN_PAYOUT_W23 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 3, 0)
    ).toBe(WIN_PAYOUT_W23 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 4, 0)
    ).toBe(WIN_PAYOUT_W23 * betValues[4][0]);
  });
});
describe("Wins Payout W23 FEATURE_HIT_OR_MISS_ENABLED = true", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 0, 0)
    ).toBe(0);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 1, 0)
    ).toBe(0);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 2, 0)
    ).toBe(0);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 3, 0)
    ).toBe(0);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_HIT_OR_MISS_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W23[0], SYMBOLS_W23[1], SYMBOLS_W23[2], 4, 0)
    ).toBe(0);
  });
});

describe("Wins Payout W24", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W24[0], SYMBOLS_W24[1], SYMBOLS_W24[2], 0, 0)
    ).toBe(WIN_PAYOUT_W24 * betValues[0][0] + WIN_PAYOUT_W40 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W24[0], SYMBOLS_W24[1], SYMBOLS_W24[2], 1, 0)
    ).toBe(WIN_PAYOUT_W24 * betValues[1][0] + WIN_PAYOUT_W40 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W24[0], SYMBOLS_W24[1], SYMBOLS_W24[2], 2, 0)
    ).toBe(WIN_PAYOUT_W24 * betValues[2][0] + WIN_PAYOUT_W40 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W24[0], SYMBOLS_W24[1], SYMBOLS_W24[2], 3, 0)
    ).toBe(WIN_PAYOUT_W24 * betValues[3][0] + WIN_PAYOUT_W40 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W24[0], SYMBOLS_W24[1], SYMBOLS_W24[2], 4, 0)
    ).toBe(WIN_PAYOUT_W24 * betValues[4][0] + WIN_PAYOUT_W40 * betValues[4][0]);
  });
});

describe("Wins Payout W25", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W25[0], SYMBOLS_W25[1], SYMBOLS_W25[2], 0, 0)
    ).toBe(WIN_PAYOUT_W25 * betValues[0][0] + WIN_PAYOUT_W37 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W25[0], SYMBOLS_W25[1], SYMBOLS_W25[2], 1, 0)
    ).toBe(WIN_PAYOUT_W25 * betValues[1][0] + WIN_PAYOUT_W37 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W25[0], SYMBOLS_W25[1], SYMBOLS_W25[2], 2, 0)
    ).toBe(WIN_PAYOUT_W25 * betValues[2][0] + WIN_PAYOUT_W37 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W25[0], SYMBOLS_W25[1], SYMBOLS_W25[2], 3, 0)
    ).toBe(WIN_PAYOUT_W25 * betValues[3][0] + WIN_PAYOUT_W37 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W25[0], SYMBOLS_W25[1], SYMBOLS_W25[2], 4, 0)
    ).toBe(WIN_PAYOUT_W25 * betValues[4][0] + WIN_PAYOUT_W37 * betValues[4][0]);
  });
});

describe("Wins Payout W26", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W26[0], SYMBOLS_W26[1], SYMBOLS_W26[2], 0, 0)
    ).toBe(WIN_PAYOUT_W26 * betValues[0][0] + WIN_PAYOUT_W42 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W26[0], SYMBOLS_W26[1], SYMBOLS_W26[2], 1, 0)
    ).toBe(WIN_PAYOUT_W26 * betValues[1][0] + WIN_PAYOUT_W42 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W26[0], SYMBOLS_W26[1], SYMBOLS_W26[2], 2, 0)
    ).toBe(WIN_PAYOUT_W26 * betValues[2][0] + WIN_PAYOUT_W42 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W26[0], SYMBOLS_W26[1], SYMBOLS_W26[2], 3, 0)
    ).toBe(WIN_PAYOUT_W26 * betValues[3][0] + WIN_PAYOUT_W42 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W26[0], SYMBOLS_W26[1], SYMBOLS_W26[2], 4, 0)
    ).toBe(WIN_PAYOUT_W26 * betValues[4][0] + WIN_PAYOUT_W42 * betValues[4][0]);
  });
});

describe("Wins Payout W27", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W27[0], SYMBOLS_W27[1], SYMBOLS_W27[2], 0, 0)
    ).toBe(WIN_PAYOUT_W27 * betValues[0][0] + WIN_PAYOUT_W35 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W27[0], SYMBOLS_W27[1], SYMBOLS_W27[2], 1, 0)
    ).toBe(WIN_PAYOUT_W27 * betValues[1][0] + WIN_PAYOUT_W35 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W27[0], SYMBOLS_W27[1], SYMBOLS_W27[2], 2, 0)
    ).toBe(WIN_PAYOUT_W27 * betValues[2][0] + WIN_PAYOUT_W35 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W27[0], SYMBOLS_W27[1], SYMBOLS_W27[2], 3, 0)
    ).toBe(WIN_PAYOUT_W27 * betValues[3][0] + WIN_PAYOUT_W35 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W27[0], SYMBOLS_W27[1], SYMBOLS_W27[2], 4, 0)
    ).toBe(WIN_PAYOUT_W27 * betValues[4][0] + WIN_PAYOUT_W35 * betValues[4][0]);
  });
});

describe("Wins Payout 28", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W28[0], SYMBOLS_W28[1], SYMBOLS_W28[2], 0, 0)
    ).toBe(WIN_PAYOUT_W28 * betValues[0][0] + WIN_PAYOUT_W34 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W28[0], SYMBOLS_W28[1], SYMBOLS_W28[2], 1, 0)
    ).toBe(WIN_PAYOUT_W28 * betValues[1][0] + WIN_PAYOUT_W34 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W28[0], SYMBOLS_W28[1], SYMBOLS_W28[2], 2, 0)
    ).toBe(WIN_PAYOUT_W28 * betValues[2][0] + WIN_PAYOUT_W34 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W28[0], SYMBOLS_W28[1], SYMBOLS_W28[2], 3, 0)
    ).toBe(WIN_PAYOUT_W28 * betValues[3][0] + WIN_PAYOUT_W34 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W28[0], SYMBOLS_W28[1], SYMBOLS_W28[2], 4, 0)
    ).toBe(WIN_PAYOUT_W28 * betValues[4][0] + WIN_PAYOUT_W34 * betValues[4][0]);
  });
});

describe("Wins Payout W29", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W29[0], SYMBOLS_W29[1], SYMBOLS_W29[2], 0, 0)
    ).toBe(WIN_PAYOUT_W29 * betValues[0][0] + WIN_PAYOUT_W41 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W29[0], SYMBOLS_W29[1], SYMBOLS_W29[2], 1, 0)
    ).toBe(WIN_PAYOUT_W29 * betValues[1][0] + WIN_PAYOUT_W41 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W29[0], SYMBOLS_W29[1], SYMBOLS_W29[2], 2, 0)
    ).toBe(WIN_PAYOUT_W29 * betValues[2][0] + WIN_PAYOUT_W41 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W29[0], SYMBOLS_W29[1], SYMBOLS_W29[2], 3, 0)
    ).toBe(WIN_PAYOUT_W29 * betValues[3][0] + WIN_PAYOUT_W41 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W29[0], SYMBOLS_W29[1], SYMBOLS_W29[2], 4, 0)
    ).toBe(WIN_PAYOUT_W29 * betValues[4][0] + WIN_PAYOUT_W41 * betValues[4][0]);
  });
});

describe("Wins Payout W30", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W30[0], SYMBOLS_W30[1], SYMBOLS_W30[2], 0, 0)
    ).toBe(WIN_PAYOUT_W30 * betValues[0][0] + WIN_PAYOUT_W42 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W30[0], SYMBOLS_W30[1], SYMBOLS_W30[2], 1, 0)
    ).toBe(WIN_PAYOUT_W30 * betValues[1][0] + WIN_PAYOUT_W42 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W30[0], SYMBOLS_W30[1], SYMBOLS_W30[2], 2, 0)
    ).toBe(WIN_PAYOUT_W30 * betValues[2][0] + WIN_PAYOUT_W42 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W30[0], SYMBOLS_W30[1], SYMBOLS_W30[2], 3, 0)
    ).toBe(WIN_PAYOUT_W30 * betValues[3][0] + WIN_PAYOUT_W42 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W30[0], SYMBOLS_W30[1], SYMBOLS_W30[2], 4, 0)
    ).toBe(WIN_PAYOUT_W30 * betValues[4][0] + WIN_PAYOUT_W42 * betValues[4][0]);
  });
});

describe("Wins Payout W31", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W31[0], SYMBOLS_W31[1], SYMBOLS_W31[2], 0, 0)
    ).toBe(WIN_PAYOUT_W31 * betValues[0][0] + WIN_PAYOUT_W41 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W31[0], SYMBOLS_W31[1], SYMBOLS_W31[2], 1, 0)
    ).toBe(WIN_PAYOUT_W31 * betValues[1][0] + WIN_PAYOUT_W41 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W31[0], SYMBOLS_W31[1], SYMBOLS_W31[2], 2, 0)
    ).toBe(WIN_PAYOUT_W31 * betValues[2][0] + WIN_PAYOUT_W41 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W31[0], SYMBOLS_W31[1], SYMBOLS_W31[2], 3, 0)
    ).toBe(WIN_PAYOUT_W31 * betValues[3][0] + WIN_PAYOUT_W41 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W31[0], SYMBOLS_W31[1], SYMBOLS_W31[2], 4, 0)
    ).toBe(WIN_PAYOUT_W31 * betValues[4][0] + WIN_PAYOUT_W41 * betValues[4][0]);
  });
});

describe("Wins Payout W32 FEATURE_RANDOM_ENABLED = false", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_RANDOM_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 0, 0)
    ).toBe(WIN_PAYOUT_W32 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_RANDOM_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 1, 0)
    ).toBe(WIN_PAYOUT_W32 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_RANDOM_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 2, 0)
    ).toBe(WIN_PAYOUT_W32 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_RANDOM_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 3, 0)
    ).toBe(WIN_PAYOUT_W32 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_RANDOM_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 4, 0)
    ).toBe(WIN_PAYOUT_W32 * betValues[4][0]);
  });
});
describe("Wins Payout W32 FEATURE_RANDOM_ENABLED = true", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_RANDOM_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 0, 0)
    ).toBe(0);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_RANDOM_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 1, 0)
    ).toBe(0);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_RANDOM_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 2, 0)
    ).toBe(0);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_RANDOM_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 3, 0)
    ).toBe(0);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_RANDOM_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W32[0], SYMBOLS_W32[1], SYMBOLS_W32[2], 4, 0)
    ).toBe(0);
  });
});

describe("Wins Payout W36 FEATURE_ONE_OF_THREE_ENABLED = false", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 0, 0)
    ).toBe(WIN_PAYOUT_W36 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 1, 0)
    ).toBe(WIN_PAYOUT_W36 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 2, 0)
    ).toBe(WIN_PAYOUT_W36 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 3, 0)
    ).toBe(WIN_PAYOUT_W36 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 4, 0)
    ).toBe(WIN_PAYOUT_W36 * betValues[4][0]);
  });
});
describe("Wins Payout W36 FEATURE_ONE_OF_THREE_ENABLED = true", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 0, 0)
    ).toBe(0);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 1, 0)
    ).toBe(0);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 2, 0)
    ).toBe(0);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 3, 0)
    ).toBe(0);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_ONE_OF_THREE_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W36[0], SYMBOLS_W36[1], SYMBOLS_W36[2], 4, 0)
    ).toBe(0);
  });
});

describe("Wins Payout W38", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W38[0], SYMBOLS_W38[1], SYMBOLS_W38[2], 0, 0)
    ).toBe(WIN_PAYOUT_W38 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W38[0], SYMBOLS_W38[1], SYMBOLS_W38[2], 1, 0)
    ).toBe(WIN_PAYOUT_W38 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W38[0], SYMBOLS_W38[1], SYMBOLS_W38[2], 2, 0)
    ).toBe(WIN_PAYOUT_W38 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W38[0], SYMBOLS_W38[1], SYMBOLS_W38[2], 3, 0)
    ).toBe(WIN_PAYOUT_W38 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W38[0], SYMBOLS_W38[1], SYMBOLS_W38[2], 4, 0)
    ).toBe(WIN_PAYOUT_W38 * betValues[4][0]);
  });
});

describe("Wins Payout W39", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W39[0], SYMBOLS_W39[1], SYMBOLS_W39[2], 0, 0)
    ).toBe(WIN_PAYOUT_W39 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W39[0], SYMBOLS_W39[1], SYMBOLS_W39[2], 1, 0)
    ).toBe(WIN_PAYOUT_W39 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W39[0], SYMBOLS_W39[1], SYMBOLS_W39[2], 2, 0)
    ).toBe(WIN_PAYOUT_W39 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W39[0], SYMBOLS_W39[1], SYMBOLS_W39[2], 3, 0)
    ).toBe(WIN_PAYOUT_W39 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W39[0], SYMBOLS_W39[1], SYMBOLS_W39[2], 4, 0)
    ).toBe(WIN_PAYOUT_W39 * betValues[4][0]);
  });
});

describe("Wins Payout W40", () => {
  test("Bet Index 0", () => {
    expect(
      getPrimaryWin(SYMBOLS_W40[0], SYMBOLS_W40[1], SYMBOLS_W40[2], 0, 0)
    ).toBe(WIN_PAYOUT_W40 * betValues[0][0]);
  });
  test("Bet Index 1", () => {
    expect(
      getPrimaryWin(SYMBOLS_W40[0], SYMBOLS_W40[1], SYMBOLS_W40[2], 1, 0)
    ).toBe(WIN_PAYOUT_W40 * betValues[1][0]);
  });
  test("Bet Index 2", () => {
    expect(
      getPrimaryWin(SYMBOLS_W40[0], SYMBOLS_W40[1], SYMBOLS_W40[2], 2, 0)
    ).toBe(WIN_PAYOUT_W40 * betValues[2][0]);
  });
  test("Bet Index 3", () => {
    expect(
      getPrimaryWin(SYMBOLS_W40[0], SYMBOLS_W40[1], SYMBOLS_W40[2], 3, 0)
    ).toBe(WIN_PAYOUT_W40 * betValues[3][0]);
  });
  test("Bet Index 4", () => {
    expect(
      getPrimaryWin(SYMBOLS_W40[0], SYMBOLS_W40[1], SYMBOLS_W40[2], 4, 0)
    ).toBe(WIN_PAYOUT_W40 * betValues[4][0]);
  });
});

describe("Wins Payout W43 FEATURE_MONEY_WHEEL_ENABLED = false", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 0, 0)
    ).toBe(0);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 1, 0)
    ).toBe(0);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 2, 0)
    ).toBe(0);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 3, 0)
    ).toBe(0);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = false;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 4, 0)
    ).toBe(WIN_PAYOUT_W43 * betValues[4][0]);
  });
});

describe("Wins Payout W43 FEATURE_MONEY_WHEEL_ENABLED = true", () => {
  test("Bet Index 0", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 0, 0)
    ).toBe(0);
  });
  test("Bet Index 1", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 1, 0)
    ).toBe(0);
  });
  test("Bet Index 2", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 2, 0)
    ).toBe(0);
  });
  test("Bet Index 3", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 3, 0)
    ).toBe(0);
  });
  test("Bet Index 4", () => {
    flags.features.FEATURE_MONEY_WHEEL_ENABLED = true;

    expect(
      getPrimaryWin(SYMBOLS_W43[0], SYMBOLS_W43[1], SYMBOLS_W43[2], 4, 0)
    ).toBe(0);
  });
});
