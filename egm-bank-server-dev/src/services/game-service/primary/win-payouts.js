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
 * |  28/02/2025   | Wilson Sam   |     Updated     |  SLOT-1762 - An Update on Paytable for RS mode
 * |  01/03/2025   | Wilson Sam   |     Updated     |  SLOT-1918 Cadillac: Paytable Changes for JD payout to 2.5L
 * **********************************************************************************************************************************************************************
 * */
const WIN_PAYOUT_W01 = 2500; //["JD","JD","JD"]
const WIN_PAYOUT_W02 = 1200;
const WIN_PAYOUT_W03 = 900;
const WIN_PAYOUT_W04 = 600;
const WIN_PAYOUT_W05 = 500;
const WIN_PAYOUT_W06 = 400;
const WIN_PAYOUT_W07 = 200;
const WIN_PAYOUT_W08 = 100;
const WIN_PAYOUT_W09 = 60; // PAYTABLE CHANGE 80 => 60

const WIN_PAYOUT_W10 = 50;
const WIN_PAYOUT_W11 = 50;
const WIN_PAYOUT_W12 = 50; //SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN

const WIN_PAYOUT_W13 = 30; // PAYTABLE CHANGE 40 => 30
const WIN_PAYOUT_W14 = 30; // PAYTABLE CHANGE 40 => 30
const WIN_PAYOUT_W15 = 30; // PAYTABLE CHANGE 40 => 30

const WIN_PAYOUT_W16 = 25; // PAYTABLE CHANGE 30 => 25
const WIN_PAYOUT_W17 = 24; // PAYTABLE CHANGE 30 => 24
const WIN_PAYOUT_W18 = 30;

const WIN_PAYOUT_W19 = 25;
const WIN_PAYOUT_W20 = 25;
const WIN_PAYOUT_W21 = 25;
const WIN_PAYOUT_W22 = 25;

const WIN_PAYOUT_W23 = 20; //SECG-5002["T5","T5","T5"] HIT OR MISS
const WIN_PAYOUT_W24 = 20;
const WIN_PAYOUT_W25 = 16; // PAYTABLE CHANGE 20 => 16

const WIN_PAYOUT_W26 = 12; // PAYTABLE CHANGE 15 => 12
const WIN_PAYOUT_W27 = 15;
const WIN_PAYOUT_W28 = 15;
const WIN_PAYOUT_W29 = 12; // PAYTABLE CHANGE 15 => 12

const WIN_PAYOUT_W30 = 8; // PAYTABLE CHANGE 10 => 8
const WIN_PAYOUT_W31 = 8; // PAYTABLE CHANGE 10 => 8
const WIN_PAYOUT_W32 = 10; //SECG-5003["*","*","GC"] RANDOM
const WIN_PAYOUT_W33 = 8; // PAYTABLE CHANGE 10 => 8

const WIN_PAYOUT_W34 = 4; // PAYTABLE CHANGE 5 => 4
const WIN_PAYOUT_W35 = 4; // PAYTABLE CHANGE 5 => 4
const WIN_PAYOUT_W36 = 5; //SECG-5004["*","*","T6"] ONE OF THREE

const WIN_PAYOUT_W37 = 2; // PAYTABLE CHANGE 4 => 2
const WIN_PAYOUT_W38 = 3; // PAYTABLE CHANGE 4 => 3

const WIN_PAYOUT_W39 = 2; // PAYTABLE CHANGE 3 => 2
const WIN_PAYOUT_W40 = 1; // PAYTABLE CHANGE 2 => 1
const WIN_PAYOUT_W41 = 1; // PAYTABLE CHANGE 2 => 1
const WIN_PAYOUT_W42 = 1; // PAYTABLE CHANGE 2 => 1
const WIN_PAYOUT_W43 = 2; //SECG-5005["*","*","WH"] MONEY WHEEL

module.exports = {
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
};
