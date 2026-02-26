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
 * |  01/06/2024   | Wilson Sam   |     Created     |  File Creation
 * |  25/08/2024   | Wilson Sam   |     Updated     |  QA Suits Version 1 Implementation
 * **********************************************************************************************************************************************************************
 * */

//
//
// 2001-W01	JD	JD	JD			  4,000 	  8,000 	  12,000 	  16,000 	  20,000
// 2001-W02	T1	T1	T1			  1,200 	  2,400 	  3,600 	  4,800 	  6,000
// 2001-W03	T2	T2	T2			  900 	  1,800 	  2,700 	  3,600 	  4,500
// 2001-W04	T3	T3	T3			  600 	  1,200 	  1,800 	  2,400 	  3,000
// 2001-W05	RU	RU	RU			  500 	  1,000 	  1,500 	  2,000 	  2,500
// 2001-W06	MA	MA	MA			  400 	  800 	  1,200 	  1,600 	  2,000
// 2001-W07	CH	CH	CH			  200 	  400 	  600 	  800 	  1,000
// 2001-W08	BE	BE	BE			  100 	  200 	  300 	  400 	  500
//

//
//
// 2001-W09	SS	SS	2X			  80 	  160 	  240 	  320 	  400
// 2001-W10	3B	3B	2X			  50 	  100 	  150 	  200 	  250
// 2001-W11	RS	RS	2X			  50 	  100 	  150 	  200 	  250
// 2001-W12	T4	T4	T4	SECG-5001		  50 	  100 	  150 	  200 	  250
// 2001-W13	T1	T1	  			  40 	  80 	  120 	  160 	  200
// 2001-W14	SS	SS	WI			  40 	  80 	  120 	  160 	  200
// 2001-W15	SS	SS	SS			  40 	  80 	  120 	  160 	  200
// 2001-W16	T2	T2	  			  30 	  60 	  90 	  120 	  150
// 2001-W17	2B	2B	2X			  30 	  60 	  90 	  120 	  150
// 2001-W18	BS	BS	2X			  30 	  60 	  90 	  120 	  150
// 2001-W19	3B	3B	WI			  25 	  50 	  75 	  100 	  125
// 2001-W20	3B	3B	3B			  25 	  50 	  75 	  100 	  125
// 2001-W21	RS	RS	WI			  25 	  50 	  75 	  100 	  125
// 2001-W22	RS	RS	RS			  25 	  50 	  75 	  100 	  125
// 2001-W23	T5	T5	T5	SECG-5002		  20 	  40 	  60 	  80 	  100
// 2001-W24	T3	T3	  			  20 	  40 	  60 	  80 	  100
// 2001-W25	1B	1B	2X			  20 	  40 	  60 	  80 	  100
// 2001-W26	2B	2B	WI			  15 	  30 	  45 	  60 	  75
// 2001-W27	BS	BS	WI			  15 	  30 	  45 	  60 	  75
// 2001-W28	BS	BS	BS			  15 	  30 	  45 	  60 	  75
// 2001-W29	2B	2B	2B			  15 	  30 	  45 	  60 	  75
// 2001-W30	1B	1B	WI			  10 	  20 	  30 	  40 	  50
// 2001-W31	1B	1B	1B			  10 	  20 	  30 	  40 	  50
// 2001-W32	  	  	GC	SECG-5003		  10 	  20 	  30 	  40 	  50
// 2001-W33	A7	A7	2X			  10 	  20 	  30 	  40 	  50
// 2001-W34	A7	A7	A7			  5 	  10 	  15 	  20 	  25
// 2001-W35	A7	A7	WI			  5 	  10 	  15 	  20 	  25
// 2001-W36	  	  	T6	SECG-5004		  5 	  10 	  15 	  20 	  25
// 2001-W37	AB	AB	2X			  4 	  8 	  12 	  16 	  20
// 2001-W38	T1	  	  			  4 	  8 	  12 	  16 	  20
// 2001-W39	T2	  	  			  3 	  6 	  9 	  12 	  15
// 2001-W40	T3	  	  			  2 	  4 	  6 	  8 	  10
// 2001-W41	AB	AB	AB			  2 	  4 	  6 	  8 	  10
// 2001-W42	AB	AB	WI			  2 	  4 	  6 	  8 	  10
// 2001-W43	  	  	WH	SECG-5005						  10

// 0	T1	RU	JD
// 1	T4	T2	RS
// 2	CH	1B	1B
// 3	BS	RS	2X
// 4	T2	BE	T6
// 5	SS	T3	3B
// 6	3B	SS	BE
// 7	BE	CH	BS
// 8	T3	MA	T5
// 9	MA	T4	2B
// 10	T5	BS	RU
// 11	1B	1B	T4
// 12	BS	T5	WI
// 13	2B	T1	SS
// 14	RU	T2	T2
// 15	JD	CH	1B
// 16	SS	3B	WH
// 17	T1	T3	T5
// 18	RS	2B	3B
// 19	CH	RU	2X
// 20	3B	BE	T1
// 21	T2	1B	BE
// 22	BE	SS	2B
// 23	MA	3B	CH
// 24	T4	RS	BS
// 25	2B	T1	T5
// 26	BS	T4	GC
// 27	T5	MA	1B
// 28	1B	BS	WI
// 29	T3	2B	T4
// 30	RS	T5	MA
// 31	JD	JD	T3

const PayoutsArrW01 = [
  { reelIndices: [15, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000
  { reelIndices: [31, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000

  { reelIndices: [15, 31, 1] }, // const SYMBOLS_W01 = ["JD", "JD", "RS"];//0
  { reelIndices: [31, 31, 2] }, // const SYMBOLS_W01 = ["JD", "JD", "1B"];//0

  { reelIndices: [15, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000
  { reelIndices: [31, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000

  { reelIndices: [15, 31, 3] }, // const SYMBOLS_W01 = ["JD", "JD", "2X"];//0
  { reelIndices: [31, 31, 4] }, // const SYMBOLS_W01 = ["JD", "JD", "T6"];//0

  { reelIndices: [15, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000
  { reelIndices: [31, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000

  { reelIndices: [15, 31, 5] }, // const SYMBOLS_W01 = ["JD", "JD", "3B"];//0
  { reelIndices: [31, 31, 6] }, // const SYMBOLS_W01 = ["JD", "JD", "BE"];//0

  { reelIndices: [15, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000
  { reelIndices: [31, 31, 0] }, // const SYMBOLS_W01 = ["JD", "JD", "JD"];//  4,000 	  8,000 	  12,000 	  16,000 	  20,000

  { reelIndices: [15, 31, 7] }, // const SYMBOLS_W01 = ["JD", "JD", "BS"];//0
  { reelIndices: [31, 31, 8] }, // const SYMBOLS_W01 = ["JD", "JD", "T5"];//0
];

const PayoutsArrW02 = [
  { reelIndices: [0, 13, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000
  { reelIndices: [0, 25, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000
  { reelIndices: [17, 13, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000
  { reelIndices: [17, 25, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000

  { reelIndices: [0, 13, 21] }, // const SYMBOLS_W02 = ["T1", "T1", "BE"];//40 	  80 	  120 	  160 	  200
  { reelIndices: [0, 25, 21] }, // const SYMBOLS_W02 = ["T1", "T1", "BE"];//40 	  80 	  120 	  160 	  200
  { reelIndices: [17, 13, 21] }, // const SYMBOLS_W02 = ["T1", "T1", "BE"];//40 	  80 	  120 	  160 	  200
  { reelIndices: [17, 25, 21] }, // const SYMBOLS_W02 = ["T1", "T1", "BE"];//40 	  80 	  120 	  160 	  200

  { reelIndices: [0, 13, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000
  { reelIndices: [0, 25, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000
  { reelIndices: [17, 13, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000
  { reelIndices: [17, 25, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1,200 	  2,400 	  3,600 	  4,800 	  6,000

  { reelIndices: [0, 13, 19] }, // const SYMBOLS_W02 = ["T1", "T1", "2X"];//40 	  80 	  120 	  160 	  200
  { reelIndices: [0, 25, 19] }, // const SYMBOLS_W02 = ["T1", "T1", "2X"];//40 	  80 	  120 	  160 	  200
  { reelIndices: [17, 13, 19] }, // const SYMBOLS_W02 = ["T1", "T1", "2X"];//40 	  80 	  120 	  160 	  200
  { reelIndices: [17, 25, 19] }, // const SYMBOLS_W02 = ["T1", "T1", "2X"];//40 	  80 	  120 	  160 	  200
];

const PayoutsArrW03 = [
  { reelIndices: [4, 1, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500
  { reelIndices: [4, 14, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500
  { reelIndices: [21, 1, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500
  { reelIndices: [21, 14, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500

  { reelIndices: [4, 1, 15] }, // const SYMBOLS_W03 = ["T2", "T2", "1B"];//30 	  60 	  90 	  120 	  150
  { reelIndices: [4, 14, 15] }, // const SYMBOLS_W03 = ["T2", "T2", "1B"];//30 	  60 	  90 	  120 	  150
  { reelIndices: [21, 1, 15] }, // const SYMBOLS_W03 = ["T2", "T2", "1B"];//30 	  60 	  90 	  120 	  150
  { reelIndices: [21, 14, 15] }, // const SYMBOLS_W03 = ["T2", "T2", "1B"];//30 	  60 	  90 	  120 	  150

  { reelIndices: [4, 1, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500
  { reelIndices: [4, 14, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500
  { reelIndices: [21, 1, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500
  { reelIndices: [21, 14, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900 	  1,800 	  2,700 	  3,600 	  4,500

  { reelIndices: [4, 1, 13] }, // const SYMBOLS_W03 = ["T2", "T2", "SS"];//30 	  60 	  90 	  120 	  150
  { reelIndices: [4, 14, 13] }, // const SYMBOLS_W03 = ["T2", "T2", "SS"];//30 	  60 	  90 	  120 	  150
  { reelIndices: [21, 1, 13] }, // const SYMBOLS_W03 = ["T2", "T2", "SS"];//30 	  60 	  90 	  120 	  150
  { reelIndices: [21, 14, 13] }, // const SYMBOLS_W03 = ["T2", "T2", "SS"];//30 	  60 	  90 	  120 	  150
];

const PayoutsArrW04 = [
  { reelIndices: [8, 5, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000
  { reelIndices: [8, 17, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000
  { reelIndices: [29, 5, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000
  { reelIndices: [29, 17, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000

  { reelIndices: [8, 5, 30] }, // const SYMBOLS_W04 = ["T3", "T3", "MA"];20 	  40 	  60 	  80 	  100
  { reelIndices: [8, 17, 30] }, // const SYMBOLS_W04 = ["T3", "T3", "MA"];20 	  40 	  60 	  80 	  100
  { reelIndices: [29, 5, 30] }, // const SYMBOLS_W04 = ["T3", "T3", "MA"];20 	  40 	  60 	  80 	  100
  { reelIndices: [29, 17, 30] }, // const SYMBOLS_W04 = ["T3", "T3", "MA"];20 	  40 	  60 	  80 	  100

  { reelIndices: [8, 5, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000
  { reelIndices: [8, 17, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000
  { reelIndices: [29, 5, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000
  { reelIndices: [29, 17, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];600 	  1,200 	  1,800 	  2,400 	  3,000

  { reelIndices: [8, 5, 0] }, // const SYMBOLS_W04 = ["T3", "T3", "JD"];20 	  40 	  60 	  80 	  100
  { reelIndices: [8, 17, 0] }, // const SYMBOLS_W04 = ["T3", "T3", "JD"];20 	  40 	  60 	  80 	  100
  { reelIndices: [29, 5, 0] }, // const SYMBOLS_W04 = ["T3", "T3", "JD"];20 	  40 	  60 	  80 	  100
  { reelIndices: [29, 17, 0] }, // const SYMBOLS_W04 = ["T3", "T3", "JD"];20 	  40 	  60 	  80 	  100
];
const PayoutsArrW05 = [
  { reelIndices: [14, 0, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500
  { reelIndices: [14, 19, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500

  { reelIndices: [14, 0, 9] }, // const SYMBOLS_W05 = ["RU", "RU", "2B"];0
  { reelIndices: [14, 19, 9] }, // const SYMBOLS_W05 = ["RU", "RU", "2B"];0

  { reelIndices: [14, 0, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500
  { reelIndices: [14, 19, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500

  { reelIndices: [14, 0, 8] }, // const SYMBOLS_W05 = ["RU", "RU", "T5"];0
  { reelIndices: [14, 19, 8] }, // const SYMBOLS_W05 = ["RU", "RU", "T5"];0

  { reelIndices: [14, 0, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500
  { reelIndices: [14, 19, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500

  { reelIndices: [14, 0, 11] }, // const SYMBOLS_W05 = ["RU", "RU", "T4"];0
  { reelIndices: [14, 19, 11] }, // const SYMBOLS_W05 = ["RU", "RU", "T4"];0

  { reelIndices: [14, 0, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500
  { reelIndices: [14, 19, 10] }, // const SYMBOLS_W05 = ["RU", "RU", "RU"];500 	  1,000 	  1,500 	  2,000 	  2,500

  { reelIndices: [14, 0, 12] }, // const SYMBOLS_W05 = ["RU", "RU", "WI"];0
  { reelIndices: [14, 19, 12] }, // const SYMBOLS_W05 = ["RU", "RU", "WI"];0
];
const PayoutsArrW06 = [
  { reelIndices: [9, 8, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000
  { reelIndices: [9, 27, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000
  { reelIndices: [23, 8, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000
  { reelIndices: [23, 27, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000

  { reelIndices: [9, 8, 29] }, // const SYMBOLS_W06 = ["MA", "MA", "T4"];0
  { reelIndices: [9, 27, 29] }, // const SYMBOLS_W06 = ["MA", "MA", "T4"];0
  { reelIndices: [23, 8, 29] }, // const SYMBOLS_W06 = ["MA", "MA", "T4"];0
  { reelIndices: [23, 27, 29] }, // const SYMBOLS_W06 = ["MA", "MA", "T4"];

  { reelIndices: [9, 8, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000
  { reelIndices: [9, 27, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000
  { reelIndices: [23, 8, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000
  { reelIndices: [23, 27, 30] }, // const SYMBOLS_W06 = ["MA", "MA", "MA"];400 	  800 	  1,200 	  1,600 	  2,000

  { reelIndices: [9, 8, 31] }, // const SYMBOLS_W06 = ["MA", "MA", "T3"];0
  { reelIndices: [9, 27, 31] }, // const SYMBOLS_W06 = ["MA", "MA", "T3"];0
  { reelIndices: [23, 8, 31] }, // const SYMBOLS_W06 = ["MA", "MA", "T3"];0
  { reelIndices: [23, 27, 31] }, // const SYMBOLS_W06 = ["MA", "MA", "T3"];0
];
const PayoutsArrW07 = [
  { reelIndices: [2, 7, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000
  { reelIndices: [2, 15, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000
  { reelIndices: [19, 7, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000
  { reelIndices: [19, 15, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000

  { reelIndices: [2, 7, 22] }, // const SYMBOLS_W07 = ["CH", "CH", "2B"];0
  { reelIndices: [2, 15, 22] }, // const SYMBOLS_W07 = ["CH", "CH", "2B"];0
  { reelIndices: [19, 7, 22] }, // const SYMBOLS_W07 = ["CH", "CH", "2B"];0
  { reelIndices: [19, 15, 22] }, // const SYMBOLS_W07 = ["CH", "CH", "2B"];0

  { reelIndices: [2, 7, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000
  { reelIndices: [2, 15, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000
  { reelIndices: [19, 7, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000
  { reelIndices: [19, 15, 23] }, // const SYMBOLS_W07 = ["CH", "CH", "CH"];200 	  400 	  600 	  800 	  1,000

  { reelIndices: [2, 7, 24] }, // const SYMBOLS_W07 = ["CH", "CH", "BS"];0
  { reelIndices: [2, 15, 24] }, // const SYMBOLS_W07 = ["CH", "CH", "BS"];0
  { reelIndices: [19, 7, 24] }, // const SYMBOLS_W07 = ["CH", "CH", "BS"];0
  { reelIndices: [19, 15, 24] }, // const SYMBOLS_W07 = ["CH", "CH", "BS"];0
];

const PayoutsArrW08 = [
  { reelIndices: [7, 4, 6] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [7, 4, 21] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [7, 20, 6] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [7, 20, 21] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [22, 4, 6] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [22, 4, 21] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [22, 20, 6] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500
  { reelIndices: [22, 20, 21] }, // const SYMBOLS_W08 = ["BE", "BE", "BE"];100 	  200 	  300 	  400 	  500

  { reelIndices: [7, 4, 7] }, // const SYMBOLS_W08 = ["BE", "BE", "BS"];0
  { reelIndices: [7, 4, 22] }, // const SYMBOLS_W08 = ["BE", "BE", "2B"];0
  { reelIndices: [7, 20, 7] }, // const SYMBOLS_W08 = ["BE", "BE", "BS"];0
  { reelIndices: [7, 20, 22] }, // const SYMBOLS_W08 = ["BE", "BE", "2B"];0
  { reelIndices: [22, 4, 7] }, // const SYMBOLS_W08 = ["BE", "BE", "BS"];0
  { reelIndices: [22, 4, 22] }, // const SYMBOLS_W08 = ["BE", "BE", "2B"];0
  { reelIndices: [22, 20, 7] }, // const SYMBOLS_W08 = ["BE", "BE", "BS"];0
  { reelIndices: [22, 20, 22] }, // const SYMBOLS_W08 = ["BE", "BE", "2B"];0
];

const PayoutsArrW09 = [
  { reelIndices: [5, 6, 3] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];//80
  { reelIndices: [5, 22, 3] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
  { reelIndices: [5, 6, 19] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
  { reelIndices: [5, 22, 19] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
  { reelIndices: [16, 6, 3] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
  { reelIndices: [16, 22, 3] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
  { reelIndices: [16, 6, 19] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
  { reelIndices: [16, 22, 19] }, // const SYMBOLS_W09 = ["SS", "SS", "2X"];
];
const PayoutsArrW10 = [
  { reelIndices: [6, 16, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];//50
  { reelIndices: [6, 16, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [6, 23, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [6, 23, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 16, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 16, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 23, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 23, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
];
const PayoutsArrW11 = [
  { reelIndices: [18, 3, 3] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];//50
  { reelIndices: [18, 3, 19] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
  { reelIndices: [18, 24, 3] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
  { reelIndices: [18, 24, 19] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
  { reelIndices: [30, 3, 3] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
  { reelIndices: [30, 3, 19] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
  { reelIndices: [30, 24, 3] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
  { reelIndices: [30, 24, 19] }, // const SYMBOLS_W11 = ["RS", "RS", "2X"];
];
const PayoutsArrW12 = [
  { reelIndices: [1, 9, 11] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [1, 9, 29] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [1, 26, 11] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [1, 26, 29] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 9, 11] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 9, 29] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 26, 11] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 26, 29] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 9, 11] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 9, 29] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 26, 11] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
  { reelIndices: [24, 26, 29] }, // const SYMBOLS_W12 = ["T4", "T4", "T4"]; //50 SECG-5001["T4","T4","T4"] SIX OF EIGHTEEN
];
const PayoutsArrW13 = [
  { reelIndices: [0, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//40
  { reelIndices: [0, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [0, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//40
  { reelIndices: [0, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [0, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//40
  { reelIndices: [0, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [0, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//40
  { reelIndices: [0, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
];
const PayoutsArrW14 = [
  { reelIndices: [5, 6, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];//40
  { reelIndices: [5, 22, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 6, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 22, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [5, 6, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [5, 22, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 6, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 22, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [5, 6, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];//40
  { reelIndices: [5, 22, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 6, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 22, 12] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [5, 6, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [5, 22, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 6, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
  { reelIndices: [16, 22, 28] }, // const SYMBOLS_W14 = ["SS", "SS", "WI"];
];
const PayoutsArrW15 = [
  { reelIndices: [5, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];//40
  { reelIndices: [5, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [5, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];//40
  { reelIndices: [5, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [5, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];//40
  { reelIndices: [5, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [5, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];//40
  { reelIndices: [5, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [5, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];//40
  { reelIndices: [5, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 6, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
  { reelIndices: [16, 22, 13] }, // const SYMBOLS_W15 = ["SS", "SS", "SS"];
];
const PayoutsArrW16 = [
  { reelIndices: [4, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];//30
  { reelIndices: [4, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [4, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];//30
  { reelIndices: [4, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [4, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];//30
  { reelIndices: [4, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [4, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];//30
  { reelIndices: [4, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
];
const PayoutsArrW17 = [
  { reelIndices: [13, 18, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];//30
  { reelIndices: [13, 18, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [13, 29, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [13, 29, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [25, 18, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];//30
  { reelIndices: [25, 18, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [25, 29, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [25, 29, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [13, 18, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];//30
  { reelIndices: [13, 18, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [13, 29, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [13, 29, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [25, 18, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];//30
  { reelIndices: [25, 18, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [25, 29, 3] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
  { reelIndices: [25, 29, 19] }, // const SYMBOLS_W17 = ["2B", "2B", "2X"];
];
const PayoutsArrW18 = [
  { reelIndices: [3, 10, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [3, 10, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [3, 28, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [3, 28, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [12, 10, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [12, 10, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [12, 28, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [12, 28, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [26, 10, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [26, 10, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [26, 28, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [26, 28, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [26, 10, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [26, 10, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
  { reelIndices: [26, 28, 3] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];//30
  { reelIndices: [26, 28, 19] }, // const SYMBOLS_W18 = ["BS", "BS", "2X"];
];
const PayoutsArrW19 = [
  { reelIndices: [6, 16, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];//25
  { reelIndices: [6, 16, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [6, 23, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [6, 23, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 16, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 16, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 23, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 23, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [6, 16, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];//25
  { reelIndices: [6, 16, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [6, 23, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [6, 23, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 16, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 16, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 23, 12] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
  { reelIndices: [20, 23, 28] }, // const SYMBOLS_W19 = ["3B", "3B", "WI"];
];
const PayoutsArrW20 = [
  { reelIndices: [6, 16, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];//25
  { reelIndices: [6, 16, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 23, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 23, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 16, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 16, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 23, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 23, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 16, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];//25
  { reelIndices: [6, 16, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 23, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 23, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 16, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 16, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 23, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 23, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
];
const PayoutsArrW21 = [
  { reelIndices: [18, 3, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];//25
  { reelIndices: [18, 3, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [18, 24, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [18, 24, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 3, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 3, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 24, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 24, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [18, 3, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];//25
  { reelIndices: [18, 3, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [18, 24, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [18, 24, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 3, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 3, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 24, 12] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
  { reelIndices: [30, 24, 28] }, // const SYMBOLS_W21 = ["RS", "RS", "WI"];
];
const PayoutsArrW22 = [
  { reelIndices: [18, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//25
  { reelIndices: [18, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [18, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//25
  { reelIndices: [18, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [18, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//25
  { reelIndices: [18, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [18, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//25
  { reelIndices: [18, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 3, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
  { reelIndices: [30, 24, 1] }, // const SYMBOLS_W22 = ["RS", "RS", "RS"];//
];
const PayoutsArrW23 = [
  { reelIndices: [10, 12, 8] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [10, 12, 17] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [10, 12, 25] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [10, 30, 8] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [10, 30, 17] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [10, 30, 25] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [27, 12, 8] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [27, 12, 17] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [27, 12, 25] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [27, 30, 8] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [27, 30, 17] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
  { reelIndices: [27, 30, 25] }, // const SYMBOLS_W23 = ["T5", "T5", "T5"]; //20 SECG-5002["T5","T5","T5"] HIT OR MISS
];
const PayoutsArrW24 = [
  { reelIndices: [8, 5, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];//20
  { reelIndices: [8, 17, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];
  { reelIndices: [29, 5, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];
  { reelIndices: [29, 17, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];
];
const PayoutsArrW25 = [
  { reelIndices: [11, 2, 3] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];//20
  { reelIndices: [11, 2, 19] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [11, 11, 3] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [11, 11, 19] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [11, 21, 3] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [11, 21, 19] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [28, 2, 3] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [28, 2, 19] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [28, 11, 3] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [28, 11, 19] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [28, 21, 3] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
  { reelIndices: [28, 21, 19] }, // const SYMBOLS_W25 = ["1B", "1B", "2X"];
];
const PayoutsArrW26 = [
  { reelIndices: [13, 18, 12] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];//15
  { reelIndices: [13, 18, 28] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
  { reelIndices: [13, 29, 12] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
  { reelIndices: [13, 29, 28] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
  { reelIndices: [25, 18, 12] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
  { reelIndices: [25, 18, 28] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
  { reelIndices: [25, 29, 12] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
  { reelIndices: [25, 29, 28] }, // const SYMBOLS_W26 = ["2B", "2B", "WI"];
];
const PayoutsArrW27 = [
  { reelIndices: [3, 10, 12] }, // const SYMBOLS_W27 = ["BS", "BS", "WI"];//15
  { reelIndices: [3, 28, 28] }, // const SYMBOLS_W27 = ["BS", "BS", "WI"];
  { reelIndices: [12, 10, 12] }, // const SYMBOLS_W27 = ["BS", "BS", "WI"];
  { reelIndices: [12, 28, 28] }, // const SYMBOLS_W27 = ["BS", "BS", "WI"];
  { reelIndices: [26, 10, 12] }, // const SYMBOLS_W27 = ["BS", "BS", "WI"];
  { reelIndices: [26, 28, 28] }, // const SYMBOLS_W27 = ["BS", "BS", "WI"];
];
const PayoutsArrW28 = [
  { reelIndices: [3, 10, 7] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];//15
  { reelIndices: [3, 10, 24] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [3, 28, 7] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [3, 28, 24] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [12, 10, 7] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [12, 10, 24] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [12, 28, 7] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [12, 28, 24] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [26, 10, 7] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [26, 10, 24] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [26, 28, 7] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
  { reelIndices: [26, 28, 24] }, // const SYMBOLS_W28 = ["BS", "BS", "BS"];
];
const PayoutsArrW29 = [
  { reelIndices: [13, 18, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];//15
  { reelIndices: [13, 18, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [13, 29, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [13, 29, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 18, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 18, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 29, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 29, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
];
const PayoutsArrW30 = [
  { reelIndices: [11, 2, 12] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];//10
  { reelIndices: [11, 2, 28] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [11, 11, 12] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [11, 11, 28] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [11, 21, 12] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [11, 21, 28] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [28, 2, 12] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [28, 2, 28] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [28, 11, 12] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [28, 11, 28] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [28, 21, 12] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
  { reelIndices: [28, 21, 28] }, // const SYMBOLS_W30 = ["1B", "1B", "WI"];
];
const PayoutsArrW31 = [
  { reelIndices: [11, 2, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];//10
  { reelIndices: [11, 2, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 2, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 11, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 11, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 11, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 21, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 21, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 21, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 2, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 2, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 2, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 11, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 11, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 11, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 21, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 21, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 21, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
];
const PayoutsArrW32 = [
  //10 Rupees
  { reelIndices: [0, 0, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [1, 1, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [2, 2, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [3, 3, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [4, 4, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [5, 5, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [6, 6, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [7, 7, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [8, 8, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [9, 9, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [10, 10, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
  { reelIndices: [11, 10, 26] }, // const SYMBOLS_W32 = ["*", "*", "GC"]; //[5,10,20,50] SECG-5003["*","*","GC"] RANDOM
];
const PayoutsArrW33 = [
  { reelIndices: [5, 6, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];//10
  { reelIndices: [5, 22, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [16, 6, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [16, 22, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [18, 3, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [18, 24, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [30, 3, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [30, 24, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [3, 10, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [3, 28, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [12, 10, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [12, 28, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [26, 10, 3] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
  { reelIndices: [26, 28, 19] }, // const SYMBOLS_W33 = ["A7", "A7", "2X"];
];
const PayoutsArrW34 = [
  { reelIndices: [5, 6, 7] }, // const SYMBOLS_W34 = ["A7", "A7", "A7"];//5
  { reelIndices: [5, 6, 24] }, // const SYMBOLS_W34 = ["A7", "A7", "A7"];//5
  { reelIndices: [5, 22, 7] }, // const SYMBOLS_W34 = ["A7", "A7", "A7"];//5
  { reelIndices: [5, 22, 24] }, // const SYMBOLS_W34 = ["A7", "A7", "A7"];//5
];
const PayoutsArrW35 = [
  { reelIndices: [3, 10, 12] }, // const SYMBOLS_W35 = ["A7", "A7", "WI"];//5
  { reelIndices: [3, 28, 28] }, // const SYMBOLS_W35 = ["A7", "A7", "WI"];//5
  { reelIndices: [12, 10, 12] }, // const SYMBOLS_W35 = ["A7", "A7", "WI"];//5
  { reelIndices: [12, 28, 28] }, // const SYMBOLS_W35 = ["A7", "A7", "WI"];//5
  { reelIndices: [26, 10, 12] }, // const SYMBOLS_W35 = ["A7", "A7", "WI"];//5
  { reelIndices: [26, 28, 28] }, // const SYMBOLS_W35 = ["A7", "A7", "WI"];//5
];
const PayoutsArrW36 = [
  { reelIndices: [0, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [1, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [2, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [3, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [4, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [5, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [6, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [7, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [8, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [9, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [10, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
  { reelIndices: [11, 0, 4] }, // const SYMBOLS_W36 = ["*", "*", "T6"]; //5 SECG-5004["*","*","T6"] ONE OF THREE
];
const PayoutsArrW37 = [
  { reelIndices: [23, 27, 3] }, // const SYMBOLS_W37 = ["AB", "AB", "2X"];//4
  { reelIndices: [23, 27, 19] }, // const SYMBOLS_W37 = ["AB", "AB", "2X"];//4

  { reelIndices: [6, 16, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];//50
  { reelIndices: [6, 16, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [6, 23, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [6, 23, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 16, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 16, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 23, 3] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
  { reelIndices: [20, 23, 19] }, // const SYMBOLS_W10 = ["3B", "3B", "2X"];
];
const PayoutsArrW38 = [
  { reelIndices: [0, 12, 19] }, // const SYMBOLS_W38 = ["T1", "*", "*"];//4
  { reelIndices: [0, 14, 21] }, // const SYMBOLS_W38 = ["T1", "*", "*"];//4
  { reelIndices: [17, 12, 19] }, // const SYMBOLS_W38 = ["T1", "*", "*"];//4
  { reelIndices: [17, 14, 21] }, // const SYMBOLS_W38 = ["T1", "*", "*"];//4

  { reelIndices: [0, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//40
  { reelIndices: [0, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 13, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//
  { reelIndices: [17, 25, 0] }, // const SYMBOLS_W13 = ["T1", "T1", "*"];//

  { reelIndices: [0, 13, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];//1200
  { reelIndices: [0, 25, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];
  { reelIndices: [17, 13, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];
  { reelIndices: [17, 25, 20] }, // const SYMBOLS_W02 = ["T1", "T1", "T1"];
];
const PayoutsArrW39 = [
  { reelIndices: [4, 0, 13] }, // const SYMBOLS_W39 = ["T2", "*", "*"];//3
  { reelIndices: [4, 13, 13] }, // const SYMBOLS_W39 = ["T2", "*", "*"];//3
  { reelIndices: [21, 0, 13] }, // const SYMBOLS_W39 = ["T2", "*", "*"];//3
  { reelIndices: [21, 13, 13] }, // const SYMBOLS_W39 = ["T2", "*", "*"];//3

  { reelIndices: [4, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];//30
  { reelIndices: [4, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 1, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];
  { reelIndices: [21, 14, 0] }, // const SYMBOLS_W16 = ["T2", "T2", "*"];

  { reelIndices: [4, 1, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];//900
  { reelIndices: [4, 14, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];
  { reelIndices: [21, 1, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];
  { reelIndices: [21, 14, 14] }, // const SYMBOLS_W03 = ["T2", "T2", "T2"];
];
const PayoutsArrW40 = [
  { reelIndices: [8, 4, 30] }, // const SYMBOLS_W40 = ["T3", "*", "*"];//2
  { reelIndices: [8, 16, 30] }, // const SYMBOLS_W40 = ["T3", "*", "*"];//2
  { reelIndices: [29, 4, 30] }, // const SYMBOLS_W40 = ["T3", "*", "*"];//2
  { reelIndices: [29, 16, 30] }, // const SYMBOLS_W40 = ["T3", "*", "*"];//2

  { reelIndices: [8, 5, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];//20
  { reelIndices: [8, 17, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];
  { reelIndices: [29, 5, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];
  { reelIndices: [29, 17, 0] }, // const SYMBOLS_W24 = ["T3", "T3", "*"];

  { reelIndices: [8, 5, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];//600
  { reelIndices: [8, 17, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];
  { reelIndices: [29, 5, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];
  { reelIndices: [29, 17, 31] }, // const SYMBOLS_W04 = ["T3", "T3", "T3"];
];
const PayoutsArrW41 = [
  { reelIndices: [23, 27, 30] }, // const SYMBOLS_W41 = ["AB", "AB", "AB"];//2

  { reelIndices: [6, 16, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];//25
  { reelIndices: [6, 16, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 23, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [6, 23, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 16, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 16, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 23, 5] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];
  { reelIndices: [20, 23, 18] }, // const SYMBOLS_W20 = ["3B", "3B", "3B"];

  { reelIndices: [13, 18, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];//15
  { reelIndices: [13, 18, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [13, 29, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [13, 29, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 18, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 18, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 29, 9] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];
  { reelIndices: [25, 29, 22] }, // const SYMBOLS_W29 = ["2B", "2B", "2B"];

  { reelIndices: [11, 2, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];//10
  { reelIndices: [11, 2, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 2, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 11, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 11, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 11, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 21, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 21, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [11, 21, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 2, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 2, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 2, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 11, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 11, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 11, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 21, 2] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 21, 15] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
  { reelIndices: [28, 21, 27] }, // const SYMBOLS_W31 = ["1B", "1B", "1B"];
];
const PayoutsArrW42 = [
  { reelIndices: [23, 27, 30] }, // const SYMBOLS_W42 = ["AB", "AB", "WI"];//2
];
const PayoutsArrW43 = [
  //10 Rupees
  { reelIndices: [0, 0, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //[5,10,25,50,100,250,500]SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [1, 1, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [2, 2, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [3, 3, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [4, 4, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [5, 5, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [6, 6, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [7, 7, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [8, 8, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [9, 9, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [10, 10, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
  { reelIndices: [11, 11, 16] }, // const SYMBOLS_W43 = ["*", "*", "WH"]; //SECG-5005["*","*","WH"] MONEY WHEEL
];

const QATheme = [
  ...PayoutsArrW02, //3T1
  ...PayoutsArrW03, //3T2
  ...PayoutsArrW04, //3T3
  ...PayoutsArrW12, //3T4
  ...PayoutsArrW13, //2T1
  ...PayoutsArrW16, //2T2
  ...PayoutsArrW23, //3T5
  ...PayoutsArrW24, //2T3
  ...PayoutsArrW36, //T6
  ...PayoutsArrW38, //T1
  ...PayoutsArrW39, //T2
  ...PayoutsArrW40, //T3
];

const QAFeatures = [
  ...PayoutsArrW12, //SIX OF EIGHTEEN
  ...PayoutsArrW23, //HIT OR MISS
  ...PayoutsArrW32, //RANDOM
  ...PayoutsArrW36, //ONE OF THREE
  ...PayoutsArrW43, //WHEEL
];

const QACommon = [
  ...PayoutsArrW01, //JD
  ...PayoutsArrW05, //RU
  ...PayoutsArrW06, //MA
  ...PayoutsArrW07, //CH
  ...PayoutsArrW08, //BE
];

const QASeven = [
  ...PayoutsArrW09, //SS
  ...PayoutsArrW11, //RS
  ...PayoutsArrW14, //SS
  ...PayoutsArrW15, //SS
  ...PayoutsArrW18, //BS
  ...PayoutsArrW21, //RS
  ...PayoutsArrW22, //RS
  ...PayoutsArrW27, //BS
  ...PayoutsArrW28, //BS
  ...PayoutsArrW33, //A7
  ...PayoutsArrW34, //A7
  ...PayoutsArrW35, //A7
];

const QABar = [
  ...PayoutsArrW10, //3B
  ...PayoutsArrW17, //2B
  ...PayoutsArrW19, //3B
  ...PayoutsArrW20, //3B
  ...PayoutsArrW25, //1B
  ...PayoutsArrW26, //2B
  ...PayoutsArrW29, //2B
  ...PayoutsArrW30, //1B
  ...PayoutsArrW31, //1B
  ...PayoutsArrW37, //AB
  ...PayoutsArrW41, //AB
  ...PayoutsArrW42, //AB
];

const PayoutsArr = [
  ...QATheme,
  ...QAFeatures,
  ...QACommon,
  ...QASeven,
  ...QABar,
];
const QAThemePayoutsArr = [...QATheme];
const QAFeaturesArr = [...QAFeatures];
const QASixOfEighteenArr = [...PayoutsArrW12]; //SIX OF EIGHTEEN
const QAHitOrMissArr = [...PayoutsArrW23]; //HIT OR MISS
const QARandomArr = [...PayoutsArrW32]; //RANDOM
const QAOneOfThreeArr = [...PayoutsArrW36]; //ONE OF THREE
const QAWheelArr = [...PayoutsArrW43]; //WHEEL
const QACommonArr = [...QACommon];
const QASevenArr = [...QASeven];
const QABarArr = [...QABar];

module.exports = {
  PayoutsArr,
  QAThemePayoutsArr,
  QAFeaturesArr,
  QASixOfEighteenArr,
  QAHitOrMissArr,
  QARandomArr,
  QAOneOfThreeArr,
  QAWheelArr,
  QACommonArr,
  QASevenArr,
  QABarArr,
};
