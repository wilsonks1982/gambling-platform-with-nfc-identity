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
const { Reel1, GetReel1StripIndex } = require("../src/services/game-service");
const { getReel1Pos } = require("../src/services/game-service/reels/reel1");
const { getRandomReelPos } = require("../src/services/random");

test("Reel1 Bet 1 Test", () => {
  expect(getRandomReelPos()).toBeGreaterThanOrEqual(1);
  expect(Reel1).toContain(getReel1Pos(0).reel1Symb);
  expect(Reel1[GetReel1StripIndex(1, 0)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(7, 0)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(10, 0)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(14, 0)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(15, 0)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(18, 0)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(22, 0)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(26, 0)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(27, 0)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(30, 0)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(40, 0)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(50, 0)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(54, 0)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(58, 0)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(62, 0)]).toBe("RU");
  expect(Reel1[GetReel1StripIndex(64, 0)]).toBe("JD");
  expect(Reel1[GetReel1StripIndex(67, 0)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(68, 0)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(71, 0)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(74, 0)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(78, 0)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(79, 0)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(83, 0)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(85, 0)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(91, 0)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(97, 0)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(101, 0)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(111, 0)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(121, 0)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(123, 0)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(126, 0)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(128, 0)]).toBe("JD");
});

test("Reel1 Bet 2 Test", () => {
  expect(Reel1[GetReel1StripIndex(1, 1)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(7, 1)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(10, 1)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(14, 1)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(16, 1)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(19, 1)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(23, 1)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(27, 1)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(28, 1)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(31, 1)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(41, 1)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(51, 1)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(55, 1)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(59, 1)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(63, 1)]).toBe("RU");
  expect(Reel1[GetReel1StripIndex(65, 1)]).toBe("JD");
  expect(Reel1[GetReel1StripIndex(68, 1)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(69, 1)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(72, 1)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(75, 1)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(79, 1)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(80, 1)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(84, 1)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(86, 1)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(92, 1)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(98, 1)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(102, 1)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(112, 1)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(122, 1)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(123, 1)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(126, 1)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(128, 1)]).toBe("JD");
});

test("Reel1 Bet 3 Test", () => {
  expect(Reel1[GetReel1StripIndex(1, 2)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(6, 2)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(9, 2)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(13, 2)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(15, 2)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(18, 2)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(22, 2)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(26, 2)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(27, 2)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(30, 2)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(40, 2)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(50, 2)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(54, 2)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(58, 2)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(62, 2)]).toBe("RU");
  expect(Reel1[GetReel1StripIndex(64, 2)]).toBe("JD");
  expect(Reel1[GetReel1StripIndex(67, 2)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(68, 2)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(71, 2)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(74, 2)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(78, 2)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(79, 2)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(83, 2)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(85, 2)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(91, 2)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(97, 2)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(101, 2)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(111, 2)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(121, 2)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(123, 2)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(126, 2)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(128, 2)]).toBe("JD");
});

test("Reel1 Bet 4 Test", () => {
  expect(Reel1[GetReel1StripIndex(1, 3)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(6, 3)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(9, 3)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(13, 3)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(15, 3)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(18, 3)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(22, 3)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(26, 3)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(28, 3)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(31, 3)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(41, 3)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(51, 3)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(55, 3)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(59, 3)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(62, 3)]).toBe("RU");
  expect(Reel1[GetReel1StripIndex(64, 3)]).toBe("JD");
  expect(Reel1[GetReel1StripIndex(67, 3)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(68, 3)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(71, 3)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(74, 3)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(78, 3)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(79, 3)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(83, 3)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(85, 3)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(91, 3)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(97, 3)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(101, 3)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(111, 3)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(121, 3)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(123, 3)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(126, 3)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(128, 3)]).toBe("JD");
});

test("Reel1 Bet 5 Test", () => {
  expect(Reel1[GetReel1StripIndex(1, 4)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(6, 4)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(9, 4)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(13, 4)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(15, 4)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(18, 4)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(22, 4)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(26, 4)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(28, 4)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(31, 4)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(41, 4)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(51, 4)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(55, 4)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(59, 4)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(62, 4)]).toBe("RU");
  expect(Reel1[GetReel1StripIndex(64, 4)]).toBe("JD");
  expect(Reel1[GetReel1StripIndex(67, 4)]).toBe("SS");
  expect(Reel1[GetReel1StripIndex(68, 4)]).toBe("T1");
  expect(Reel1[GetReel1StripIndex(71, 4)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(74, 4)]).toBe("CH");
  expect(Reel1[GetReel1StripIndex(78, 4)]).toBe("3B");
  expect(Reel1[GetReel1StripIndex(79, 4)]).toBe("T2");
  expect(Reel1[GetReel1StripIndex(83, 4)]).toBe("BE");
  expect(Reel1[GetReel1StripIndex(85, 4)]).toBe("MA");
  expect(Reel1[GetReel1StripIndex(91, 4)]).toBe("T4");
  expect(Reel1[GetReel1StripIndex(97, 4)]).toBe("2B");
  expect(Reel1[GetReel1StripIndex(101, 4)]).toBe("BS");
  expect(Reel1[GetReel1StripIndex(111, 4)]).toBe("T5");
  expect(Reel1[GetReel1StripIndex(121, 4)]).toBe("1B");
  expect(Reel1[GetReel1StripIndex(123, 4)]).toBe("T3");
  expect(Reel1[GetReel1StripIndex(126, 4)]).toBe("RS");
  expect(Reel1[GetReel1StripIndex(128, 4)]).toBe("JD");
});

test("Reel 1 Other Failures", () => {
  expect(getReel1Pos(5).reel1Symb).toBe("*");
});
