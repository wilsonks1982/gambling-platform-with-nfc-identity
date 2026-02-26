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
 * |  15/01/2025   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const SYMBOLS_W01 = ["JD", "JD", "JD"]; //31,31,0
const SYMBOLS_W02 = ["T1", "T1", "T1"]; //0,13,20
const SYMBOLS_W03 = ["T2", "T2", "T2"]; //21,1,14
const SYMBOLS_W04 = ["T3", "T3", "T3"]; //8,5,31
const SYMBOLS_W05 = ["RU", "RU", "RU"]; //
const SYMBOLS_W06 = ["MA", "MA", "MA"];
const SYMBOLS_W07 = ["CH", "CH", "CH"];
const SYMBOLS_W08 = ["BE", "BE", "BE"];
const SYMBOLS_W09 = ["SS", "SS", "2X"];

const SYMBOLS_W10 = ["3B", "3B", "2X"];
const SYMBOLS_W11 = ["RS", "RS", "2X"];
const SYMBOLS_W12 = ["T4", "T4", "T4"]; //SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN - (1, 9, 11)

const SYMBOLS_W13 = ["T1", "T1", "*"];
const SYMBOLS_W14 = ["SS", "SS", "WI"];
const SYMBOLS_W15 = ["SS", "SS", "SS"];

const SYMBOLS_W16 = ["T2", "T2", "*"];
const SYMBOLS_W17 = ["2B", "2B", "2X"];
const SYMBOLS_W18 = ["BS", "BS", "2X"];

const SYMBOLS_W19 = ["3B", "3B", "WI"];
const SYMBOLS_W20 = ["3B", "3B", "3B"];
const SYMBOLS_W21 = ["RS", "RS", "WI"];
const SYMBOLS_W22 = ["RS", "RS", "RS"];

const SYMBOLS_W23 = ["T5", "T5", "T5"]; //SECG-5002["T5","T5","T5"] HIT OR MISS - (10,12,8)
const SYMBOLS_W24 = ["T3", "T3", "*"];
const SYMBOLS_W25 = ["1B", "1B", "2X"];

const SYMBOLS_W26 = ["2B", "2B", "WI"];
const SYMBOLS_W27 = ["BS", "BS", "WI"];
const SYMBOLS_W28 = ["BS", "BS", "BS"];
const SYMBOLS_W29 = ["2B", "2B", "2B"];

const SYMBOLS_W30 = ["1B", "1B", "WI"];
const SYMBOLS_W31 = ["1B", "1B", "1B"];
const SYMBOLS_W32 = ["*", "*", "GC"]; //SECG-5003["*","*","GC"] RANDOM - (0,0,26)

const SYMBOLS_W33 = ["A7", "A7", "2X"];
const SYMBOLS_W34 = ["A7", "A7", "A7"];
const SYMBOLS_W35 = ["A7", "A7", "WI"];
const SYMBOLS_W36 = ["*", "*", "T6"]; //SECG-5004["*","*","T6"] ONE OF THREE - (0,0,4)
const SYMBOLS_W37 = ["AB", "AB", "2X"];
const SYMBOLS_W38 = ["T1", "*", "*"];
const SYMBOLS_W39 = ["T2", "*", "*"];
const SYMBOLS_W40 = ["T3", "*", "*"];
const SYMBOLS_W41 = ["AB", "AB", "AB"];
const SYMBOLS_W42 = ["AB", "AB", "WI"];
const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL - (0,0,16)

module.exports = {
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
};
