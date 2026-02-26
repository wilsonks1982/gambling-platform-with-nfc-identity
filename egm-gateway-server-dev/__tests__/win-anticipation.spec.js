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
 * |  11/07/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */

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
const {
  isAnticipationActCase,
} = require("../src/services/game-service/primary");

describe("Win Anticipation Tests", () => {
  test("SYMBOLS_W01", () => {
    expect(isAnticipationActCase(SYMBOLS_W01[0], SYMBOLS_W01[1])).toBe(true);
  });
  test("SYMBOLS_W02", () => {
    expect(isAnticipationActCase(SYMBOLS_W02[0], SYMBOLS_W02[1])).toBe(true);
  });
  test("SYMBOLS_W03", () => {
    expect(isAnticipationActCase(SYMBOLS_W03[0], SYMBOLS_W03[1])).toBe(true);
  });
  test("SYMBOLS_W04", () => {
    expect(isAnticipationActCase(SYMBOLS_W04[0], SYMBOLS_W04[1])).toBe(true);
  });
  test("SYMBOLS_W05", () => {
    expect(isAnticipationActCase(SYMBOLS_W05[0], SYMBOLS_W05[1])).toBe(false);
  });
  test("SYMBOLS_W06", () => {
    expect(isAnticipationActCase(SYMBOLS_W06[0], SYMBOLS_W06[1])).toBe(false);
  });
});
