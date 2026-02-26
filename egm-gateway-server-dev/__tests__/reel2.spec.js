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
const { Reel2, GetReel2StripIndex } = require("../src/services/game-service");
const { getReel2Pos } = require("../src/services/game-service/reels/reel2");

test("Reel2 Bet 1 Test", () => {
  expect(Reel2).toContain(getReel2Pos(0).reel2Symb);
  expect(Reel2[GetReel2StripIndex(1, 0)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(4, 0)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(11, 0)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(14, 0)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(19, 0)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(21, 0)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(24, 0)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(27, 0)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(29, 0)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(36, 0)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(41, 0)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(48, 0)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(56, 0)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(57, 0)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(59, 0)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(62, 0)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(66, 0)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(68, 0)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(73, 0)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(75, 0)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(80, 0)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(88, 0)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(90, 0)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(94, 0)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(97, 0)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(99, 0)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(105, 0)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(108, 0)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(113, 0)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(118, 0)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(126, 0)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(128, 0)]).toBe("JD");
});

test("Reel2 Bet 2 Test", () => {
  expect(Reel2[GetReel2StripIndex(1, 1)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(4, 1)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(12, 1)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(15, 1)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(19, 1)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(22, 1)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(25, 1)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(28, 1)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(30, 1)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(37, 1)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(42, 1)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(50, 1)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(57, 1)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(58, 1)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(60, 1)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(63, 1)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(67, 1)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(69, 1)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(73, 1)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(75, 1)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(80, 1)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(88, 1)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(90, 1)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(94, 1)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(97, 1)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(99, 1)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(105, 1)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(108, 1)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(113, 1)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(118, 1)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(126, 1)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(128, 1)]).toBe("JD");
});

test("Reel2 Bet 3 Test", () => {
  expect(Reel2[GetReel2StripIndex(1, 2)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(4, 2)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(12, 2)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(15, 2)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(19, 2)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(21, 2)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(24, 2)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(27, 2)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(29, 2)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(36, 2)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(41, 2)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(49, 2)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(57, 2)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(58, 2)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(60, 2)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(63, 2)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(67, 2)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(69, 2)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(73, 2)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(75, 2)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(80, 2)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(88, 2)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(90, 2)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(94, 2)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(97, 2)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(99, 2)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(105, 2)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(108, 2)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(113, 2)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(118, 2)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(126, 2)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(128, 2)]).toBe("JD");
});

test("Reel2 Bet 4 Test", () => {
  expect(Reel2[GetReel2StripIndex(1, 3)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(4, 3)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(12, 3)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(15, 3)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(19, 3)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(21, 3)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(24, 3)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(27, 3)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(29, 3)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(36, 3)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(41, 3)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(49, 3)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(57, 3)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(58, 3)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(60, 3)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(63, 3)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(67, 3)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(69, 3)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(73, 3)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(75, 3)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(80, 3)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(88, 3)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(90, 3)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(94, 3)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(97, 3)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(99, 3)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(105, 3)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(108, 3)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(113, 3)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(118, 3)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(126, 3)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(128, 3)]).toBe("JD");
});

test("Reel2 Bet 5 Test", () => {
  expect(Reel2[GetReel2StripIndex(1, 4)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(4, 4)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(12, 4)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(15, 4)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(19, 4)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(21, 4)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(24, 4)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(27, 4)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(29, 4)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(37, 4)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(42, 4)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(50, 4)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(56, 4)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(57, 4)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(59, 4)]).toBe("T2");
  expect(Reel2[GetReel2StripIndex(62, 4)]).toBe("CH");
  expect(Reel2[GetReel2StripIndex(66, 4)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(68, 4)]).toBe("T3");
  expect(Reel2[GetReel2StripIndex(72, 4)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(74, 4)]).toBe("RU");
  expect(Reel2[GetReel2StripIndex(79, 4)]).toBe("BE");
  expect(Reel2[GetReel2StripIndex(87, 4)]).toBe("1B");
  expect(Reel2[GetReel2StripIndex(89, 4)]).toBe("SS");
  expect(Reel2[GetReel2StripIndex(93, 4)]).toBe("3B");
  expect(Reel2[GetReel2StripIndex(96, 4)]).toBe("RS");
  expect(Reel2[GetReel2StripIndex(98, 4)]).toBe("T1");
  expect(Reel2[GetReel2StripIndex(106, 4)]).toBe("T4");
  expect(Reel2[GetReel2StripIndex(109, 4)]).toBe("MA");
  expect(Reel2[GetReel2StripIndex(114, 4)]).toBe("BS");
  expect(Reel2[GetReel2StripIndex(119, 4)]).toBe("2B");
  expect(Reel2[GetReel2StripIndex(126, 4)]).toBe("T5");
  expect(Reel2[GetReel2StripIndex(128, 4)]).toBe("JD");
});

test("Reel 2 Other Failures", () => {
  expect(getReel2Pos(5).reel2Symb).toBe("*");
});
