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
const { Reel3, GetReel3StripIndex } = require("../src/services/game-service");
const { getReel3Pos } = require("../src/services/game-service/reels/reel3");

describe("Reel3 Bet 1 Group", () => {
  test("Index 0-31", () => {
    expect(Reel3).toContain(getReel3Pos(0).reel3Symb);
    expect(Reel3[GetReel3StripIndex(1, 0)]).toBe("JD");
    expect(Reel3[GetReel3StripIndex(8, 0)]).toBe("RS");
    expect(Reel3[GetReel3StripIndex(14, 0)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(16, 0)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(18, 0)]).toBe("T6");
    expect(Reel3[GetReel3StripIndex(21, 0)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(24, 0)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(29, 0)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(34, 0)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(39, 0)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(44, 0)]).toBe("RU");
    expect(Reel3[GetReel3StripIndex(50, 0)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(52, 0)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(57, 0)]).toBe("SS");
    expect(Reel3[GetReel3StripIndex(61, 0)]).toBe("T2");
    expect(Reel3[GetReel3StripIndex(68, 0)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(69, 0)]).toBe("WH");
    expect(Reel3[GetReel3StripIndex(72, 0)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(75, 0)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(77, 0)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(81, 0)]).toBe("T1");
    expect(Reel3[GetReel3StripIndex(84, 0)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(89, 0)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(94, 0)]).toBe("CH");
    expect(Reel3[GetReel3StripIndex(98, 0)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(102, 0)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(104, 0)]).toBe("GC");
    expect(Reel3[GetReel3StripIndex(111, 0)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(113, 0)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(119, 0)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(124, 0)]).toBe("MA");
    expect(Reel3[GetReel3StripIndex(128, 0)]).toBe("T3");
  });
});

describe("Reel3 Bet 2 Group", () => {
  test("Index 0-31", () => {
    expect(Reel3[GetReel3StripIndex(1, 1)]).toBe("JD");
    expect(Reel3[GetReel3StripIndex(8, 1)]).toBe("RS");
    expect(Reel3[GetReel3StripIndex(14, 1)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(16, 1)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(18, 1)]).toBe("T6");
    expect(Reel3[GetReel3StripIndex(21, 1)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(24, 1)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(29, 1)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(34, 1)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(38, 1)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(43, 1)]).toBe("RU");
    expect(Reel3[GetReel3StripIndex(49, 1)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(51, 1)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(56, 1)]).toBe("SS");
    expect(Reel3[GetReel3StripIndex(60, 1)]).toBe("T2");
    expect(Reel3[GetReel3StripIndex(67, 1)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(68, 1)]).toBe("WH");
    expect(Reel3[GetReel3StripIndex(71, 1)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(74, 1)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(76, 1)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(80, 1)]).toBe("T1");
    expect(Reel3[GetReel3StripIndex(83, 1)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(88, 1)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(93, 1)]).toBe("CH");
    expect(Reel3[GetReel3StripIndex(97, 1)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(101, 1)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(103, 1)]).toBe("GC");
    expect(Reel3[GetReel3StripIndex(111, 1)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(113, 1)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(119, 1)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(124, 1)]).toBe("MA");
    expect(Reel3[GetReel3StripIndex(128, 1)]).toBe("T3");
  });
});

describe("Reel3 Bet 3 Group", () => {
  test("Index 0-31", () => {
    expect(Reel3[GetReel3StripIndex(1, 2)]).toBe("JD");
    expect(Reel3[GetReel3StripIndex(8, 2)]).toBe("RS");
    expect(Reel3[GetReel3StripIndex(14, 2)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(16, 2)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(18, 2)]).toBe("T6");
    expect(Reel3[GetReel3StripIndex(21, 2)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(24, 2)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(29, 2)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(34, 2)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(38, 2)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(43, 2)]).toBe("RU");
    expect(Reel3[GetReel3StripIndex(49, 2)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(51, 2)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(56, 2)]).toBe("SS");
    expect(Reel3[GetReel3StripIndex(60, 2)]).toBe("T2");
    expect(Reel3[GetReel3StripIndex(67, 2)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(68, 2)]).toBe("WH");
    expect(Reel3[GetReel3StripIndex(71, 2)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(74, 2)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(76, 2)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(80, 2)]).toBe("T1");
    expect(Reel3[GetReel3StripIndex(83, 2)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(88, 2)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(93, 2)]).toBe("CH");
    expect(Reel3[GetReel3StripIndex(97, 2)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(101, 2)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(103, 2)]).toBe("GC");
    expect(Reel3[GetReel3StripIndex(111, 2)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(113, 2)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(119, 2)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(124, 2)]).toBe("MA");
    expect(Reel3[GetReel3StripIndex(128, 2)]).toBe("T3");
  });
});

describe("Reel3 Bet 4 Group", () => {
  test("Index 0-31", () => {
    expect(Reel3[GetReel3StripIndex(1, 3)]).toBe("JD");
    expect(Reel3[GetReel3StripIndex(8, 3)]).toBe("RS");
    expect(Reel3[GetReel3StripIndex(14, 3)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(16, 3)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(18, 3)]).toBe("T6");
    expect(Reel3[GetReel3StripIndex(21, 3)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(24, 3)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(29, 3)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(35, 3)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(40, 3)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(44, 3)]).toBe("RU");
    expect(Reel3[GetReel3StripIndex(47, 3)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(49, 3)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(54, 3)]).toBe("SS");
    expect(Reel3[GetReel3StripIndex(58, 3)]).toBe("T2");
    expect(Reel3[GetReel3StripIndex(65, 3)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(66, 3)]).toBe("WH");
    expect(Reel3[GetReel3StripIndex(72, 3)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(75, 3)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(77, 3)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(81, 3)]).toBe("T1");
    expect(Reel3[GetReel3StripIndex(84, 3)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(89, 3)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(94, 3)]).toBe("CH");
    expect(Reel3[GetReel3StripIndex(98, 3)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(104, 3)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(106, 3)]).toBe("GC");
    expect(Reel3[GetReel3StripIndex(114, 3)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(116, 3)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(119, 3)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(124, 3)]).toBe("MA");
    expect(Reel3[GetReel3StripIndex(128, 3)]).toBe("T3");
  });
});

describe("Reel3 Bet 5 Group", () => {
  test("Index 0-31", () => {
    expect(Reel3[GetReel3StripIndex(1, 4)]).toBe("JD");
    expect(Reel3[GetReel3StripIndex(8, 4)]).toBe("RS");
    expect(Reel3[GetReel3StripIndex(14, 4)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(16, 4)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(18, 4)]).toBe("T6");
    expect(Reel3[GetReel3StripIndex(21, 4)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(24, 4)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(29, 4)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(34, 4)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(39, 4)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(43, 4)]).toBe("RU");
    expect(Reel3[GetReel3StripIndex(49, 4)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(51, 4)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(56, 4)]).toBe("SS");
    expect(Reel3[GetReel3StripIndex(60, 4)]).toBe("T2");
    expect(Reel3[GetReel3StripIndex(67, 4)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(68, 4)]).toBe("WH");
    expect(Reel3[GetReel3StripIndex(71, 4)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(74, 4)]).toBe("3B");
    expect(Reel3[GetReel3StripIndex(76, 4)]).toBe("2X");
    expect(Reel3[GetReel3StripIndex(80, 4)]).toBe("T1");
    expect(Reel3[GetReel3StripIndex(83, 4)]).toBe("BE");
    expect(Reel3[GetReel3StripIndex(88, 4)]).toBe("2B");
    expect(Reel3[GetReel3StripIndex(93, 4)]).toBe("CH");
    expect(Reel3[GetReel3StripIndex(97, 4)]).toBe("BS");
    expect(Reel3[GetReel3StripIndex(101, 4)]).toBe("T5");
    expect(Reel3[GetReel3StripIndex(103, 4)]).toBe("GC");
    expect(Reel3[GetReel3StripIndex(111, 4)]).toBe("1B");
    expect(Reel3[GetReel3StripIndex(113, 4)]).toBe("WI");
    expect(Reel3[GetReel3StripIndex(119, 4)]).toBe("T4");
    expect(Reel3[GetReel3StripIndex(124, 4)]).toBe("MA");
    expect(Reel3[GetReel3StripIndex(128, 4)]).toBe("T3");
  });
});

describe("Reel 3 Other Tests", () => {
  test("Failures", () => {
    expect(getReel3Pos(5).reel3Symb).toBe("*");
  });
});
