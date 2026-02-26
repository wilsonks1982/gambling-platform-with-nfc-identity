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
const { getRandomInt, getRandomReelPos } = require("../../random");
const { findIndexOfReelStrip } = require("./util");
const Reel1 = [];
Reel1[0] = "T1";
Reel1[1] = "T4";
Reel1[2] = "CH";
Reel1[3] = "BS";
Reel1[4] = "T2";
Reel1[5] = "SS";
Reel1[6] = "3B";
Reel1[7] = "BE";
Reel1[8] = "T3";
Reel1[9] = "MA";
Reel1[10] = "T5";
Reel1[11] = "1B";
Reel1[12] = "BS";
Reel1[13] = "2B";
Reel1[14] = "RU";
Reel1[15] = "JD";
Reel1[16] = "SS";
Reel1[17] = "T1";
Reel1[18] = "RS";
Reel1[19] = "CH";
Reel1[20] = "3B";
Reel1[21] = "T2";
Reel1[22] = "BE";
Reel1[23] = "MA";
Reel1[24] = "T4";
Reel1[25] = "2B";
Reel1[26] = "BS";
Reel1[27] = "T5";
Reel1[28] = "1B";
Reel1[29] = "T3";
Reel1[30] = "RS";
Reel1[31] = "JD";

const Reel1Coin1Map = new Map();
Reel1Coin1Map.set(0, [1]); //1
Reel1Coin1Map.set(1, [2, 3, 4, 5, 6, 7]); //6
Reel1Coin1Map.set(2, [8, 9, 10]); //3
Reel1Coin1Map.set(3, [11, 12, 13, 14]); //4
Reel1Coin1Map.set(4, [15]); //1
Reel1Coin1Map.set(5, [16, 17, 18]); //3
Reel1Coin1Map.set(6, [19, 20, 21, 22]); //4
Reel1Coin1Map.set(7, [23, 24, 25, 26]); //4
Reel1Coin1Map.set(8, [27]); //1
Reel1Coin1Map.set(9, [28, 29, 30]); //3
Reel1Coin1Map.set(10, [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]); //10
Reel1Coin1Map.set(11, [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]); //10
Reel1Coin1Map.set(12, [51, 52, 53, 54]); //4
Reel1Coin1Map.set(13, [55, 56, 57, 58]); //4
Reel1Coin1Map.set(14, [59, 60, 61, 62]); //4
Reel1Coin1Map.set(15, [63, 64]); //2
Reel1Coin1Map.set(16, [65, 66, 67]); //3
Reel1Coin1Map.set(17, [68]); //1
Reel1Coin1Map.set(18, [69, 70, 71]); //3
Reel1Coin1Map.set(19, [72, 73, 74]); //3
Reel1Coin1Map.set(20, [75, 76, 77, 78]); //4
Reel1Coin1Map.set(21, [79]); //1
Reel1Coin1Map.set(22, [80, 81, 82, 83]); //4
Reel1Coin1Map.set(23, [84, 85]); //2
Reel1Coin1Map.set(24, [86, 87, 88, 89, 90, 91]); //6
Reel1Coin1Map.set(25, [92, 93, 94, 95, 96, 97]); //6
Reel1Coin1Map.set(26, [98, 99, 100, 101]); //4
Reel1Coin1Map.set(27, [102, 103, 104, 105, 106, 107, 108, 109, 110, 111]); //10
Reel1Coin1Map.set(28, [112, 113, 114, 115, 116, 117, 118, 119, 120, 121]); //10
Reel1Coin1Map.set(29, [122, 123]); //2
Reel1Coin1Map.set(30, [124, 125, 126]); //3
Reel1Coin1Map.set(31, [127, 128]); //2

const Reel1Coin2Map = new Map();
Reel1Coin2Map.set(0, [1]); //1
Reel1Coin2Map.set(1, [2, 3, 4, 5, 6, 7]); //6
Reel1Coin2Map.set(2, [8, 9, 10]); //3
Reel1Coin2Map.set(3, [11, 12, 13, 14]); //4
Reel1Coin2Map.set(4, [15, 16]); //2++++++++++++++++
Reel1Coin2Map.set(5, [17, 18, 19]); //3
Reel1Coin2Map.set(6, [20, 21, 22, 23]); //4
Reel1Coin2Map.set(7, [24, 25, 26, 27]); //4
Reel1Coin2Map.set(8, [28]); //1
Reel1Coin2Map.set(9, [29, 30, 31]); //3
Reel1Coin2Map.set(10, [32, 33, 34, 35, 36, 37, 38, 39, 40, 41]); //10
Reel1Coin2Map.set(11, [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]); //10
Reel1Coin2Map.set(12, [52, 53, 54, 55]); //4
Reel1Coin2Map.set(13, [56, 57, 58, 59]); //4
Reel1Coin2Map.set(14, [60, 61, 62, 63]); //4
Reel1Coin2Map.set(15, [64, 65]); //2
Reel1Coin2Map.set(16, [66, 67, 68]); //3
Reel1Coin2Map.set(17, [69]); //1
Reel1Coin2Map.set(18, [70, 71, 72]); //3
Reel1Coin2Map.set(19, [73, 74, 75]); //3
Reel1Coin2Map.set(20, [76, 77, 78, 79]); //4
Reel1Coin2Map.set(21, [80]); //1
Reel1Coin2Map.set(22, [81, 82, 83, 84]); //4
Reel1Coin2Map.set(23, [85, 86]); //2
Reel1Coin2Map.set(24, [87, 88, 89, 90, 91, 92]); //6
Reel1Coin2Map.set(25, [93, 94, 95, 96, 97, 98]); //6
Reel1Coin2Map.set(26, [99, 100, 101, 102]); //4
Reel1Coin2Map.set(27, [103, 104, 105, 106, 107, 108, 109, 110, 111, 112]); //10
Reel1Coin2Map.set(28, [113, 114, 115, 116, 117, 118, 119, 120, 121, 122]); //10
Reel1Coin2Map.set(29, [123]); //1--------------
Reel1Coin2Map.set(30, [124, 125, 126]); //3
Reel1Coin2Map.set(31, [127, 128]); //2

const Reel1Coin3Map = new Map();
Reel1Coin3Map.set(0, [1]); //1
Reel1Coin3Map.set(1, [2, 3, 4, 5, 6]); //5-------------
Reel1Coin3Map.set(2, [7, 8, 9]); //3
Reel1Coin3Map.set(3, [10, 11, 12, 13]); //4
Reel1Coin3Map.set(4, [14, 15]); //2
Reel1Coin3Map.set(5, [16, 17, 18]); //3
Reel1Coin3Map.set(6, [19, 20, 21, 22]); //4
Reel1Coin3Map.set(7, [23, 24, 25, 26]); //4
Reel1Coin3Map.set(8, [27]); //1
Reel1Coin3Map.set(9, [28, 29, 30]); //3
Reel1Coin3Map.set(10, [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]); //10
Reel1Coin3Map.set(11, [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]); //10
Reel1Coin3Map.set(12, [51, 52, 53, 54]); //4
Reel1Coin3Map.set(13, [55, 56, 57, 58]); //4
Reel1Coin3Map.set(14, [59, 60, 61, 62]); //4
Reel1Coin3Map.set(15, [63, 64]); //2
Reel1Coin3Map.set(16, [65, 66, 67]); //3
Reel1Coin3Map.set(17, [68]); //1
Reel1Coin3Map.set(18, [69, 70, 71]); //3
Reel1Coin3Map.set(19, [72, 73, 74]); //3
Reel1Coin3Map.set(20, [75, 76, 77, 78]); //4
Reel1Coin3Map.set(21, [79]); //1
Reel1Coin3Map.set(22, [80, 81, 82, 83]); //4
Reel1Coin3Map.set(23, [84, 85]); //2
Reel1Coin3Map.set(24, [86, 87, 88, 89, 90, 91]); //6
Reel1Coin3Map.set(25, [92, 93, 94, 95, 96, 97]); //6
Reel1Coin3Map.set(26, [98, 99, 100, 101]); //4
Reel1Coin3Map.set(27, [102, 103, 104, 105, 106, 107, 108, 109, 110, 111]); //10
Reel1Coin3Map.set(28, [112, 113, 114, 115, 116, 117, 118, 119, 120, 121]); //10
Reel1Coin3Map.set(29, [122, 123]); //2+++++++++++++++
Reel1Coin3Map.set(30, [124, 125, 126]); //3
Reel1Coin3Map.set(31, [127, 128]); //2

const Reel1Coin4Map = new Map();
Reel1Coin4Map.set(0, [1]); //1
Reel1Coin4Map.set(1, [2, 3, 4, 5, 6]); //5
Reel1Coin4Map.set(2, [7, 8, 9]); //3
Reel1Coin4Map.set(3, [10, 11, 12, 13]); //4
Reel1Coin4Map.set(4, [14, 15]); //2
Reel1Coin4Map.set(5, [16, 17, 18]); //3
Reel1Coin4Map.set(6, [19, 20, 21, 22]); //4
Reel1Coin4Map.set(7, [23, 24, 25, 26]); //4
Reel1Coin4Map.set(8, [27, 28]); //2+++++++++++++
Reel1Coin4Map.set(9, [29, 30, 31]); //3
Reel1Coin4Map.set(10, [32, 33, 34, 35, 36, 37, 38, 39, 40, 41]); //10
Reel1Coin4Map.set(11, [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]); //10
Reel1Coin4Map.set(12, [52, 53, 54, 55]); //4
Reel1Coin4Map.set(13, [56, 57, 58, 59]); //4
Reel1Coin4Map.set(14, [60, 61, 62]); //------------
Reel1Coin4Map.set(15, [63, 64]); //2
Reel1Coin4Map.set(16, [65, 66, 67]); //3
Reel1Coin4Map.set(17, [68]); //1
Reel1Coin4Map.set(18, [69, 70, 71]); //3
Reel1Coin4Map.set(19, [72, 73, 74]); //3
Reel1Coin4Map.set(20, [75, 76, 77, 78]); //4
Reel1Coin4Map.set(21, [79]); //1
Reel1Coin4Map.set(22, [80, 81, 82, 83]); //4
Reel1Coin4Map.set(23, [84, 85]); //2
Reel1Coin4Map.set(24, [86, 87, 88, 89, 90, 91]); //6
Reel1Coin4Map.set(25, [92, 93, 94, 95, 96, 97]); //6
Reel1Coin4Map.set(26, [98, 99, 100, 101]); //4
Reel1Coin4Map.set(27, [102, 103, 104, 105, 106, 107, 108, 109, 110, 111]); //10
Reel1Coin4Map.set(28, [112, 113, 114, 115, 116, 117, 118, 119, 120, 121]); //10
Reel1Coin4Map.set(29, [122, 123]); //2
Reel1Coin4Map.set(30, [124, 125, 126]); //3
Reel1Coin4Map.set(31, [127, 128]); //2

const Reel1Coin5Map = new Map();
Reel1Coin5Map.set(0, [1]); //1
Reel1Coin5Map.set(1, [2, 3, 4, 5, 6]); //5
Reel1Coin5Map.set(2, [7, 8, 9]); //3
Reel1Coin5Map.set(3, [10, 11, 12, 13]); //4
Reel1Coin5Map.set(4, [14, 15]); //2
Reel1Coin5Map.set(5, [16, 17, 18]); //3
Reel1Coin5Map.set(6, [19, 20, 21, 22]); //4
Reel1Coin5Map.set(7, [23, 24, 25, 26]); //4
Reel1Coin5Map.set(8, [27, 28]); //2+++++++++++++
Reel1Coin5Map.set(9, [29, 30, 31]); //3
Reel1Coin5Map.set(10, [32, 33, 34, 35, 36, 37, 38, 39, 40, 41]); //10
Reel1Coin5Map.set(11, [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]); //10
Reel1Coin5Map.set(12, [52, 53, 54, 55]); //4
Reel1Coin5Map.set(13, [56, 57, 58, 59]); //4
Reel1Coin5Map.set(14, [60, 61, 62]); //------------
Reel1Coin5Map.set(15, [63, 64]); //2
Reel1Coin5Map.set(16, [65, 66, 67]); //3
Reel1Coin5Map.set(17, [68]); //1
Reel1Coin5Map.set(18, [69, 70, 71]); //3
Reel1Coin5Map.set(19, [72, 73, 74]); //3
Reel1Coin5Map.set(20, [75, 76, 77, 78]); //4
Reel1Coin5Map.set(21, [79]); //1
Reel1Coin5Map.set(22, [80, 81, 82, 83]); //4
Reel1Coin5Map.set(23, [84, 85]); //2
Reel1Coin5Map.set(24, [86, 87, 88, 89, 90, 91]); //6
Reel1Coin5Map.set(25, [92, 93, 94, 95, 96, 97]); //6
Reel1Coin5Map.set(26, [98, 99, 100, 101]); //4
Reel1Coin5Map.set(27, [102, 103, 104, 105, 106, 107, 108, 109, 110, 111]); //10
Reel1Coin5Map.set(28, [112, 113, 114, 115, 116, 117, 118, 119, 120, 121]); //10
Reel1Coin5Map.set(29, [122, 123]); //2
Reel1Coin5Map.set(30, [124, 125, 126]); //3
Reel1Coin5Map.set(31, [127, 128]); //2

const GetReel1StripIndex = (reelRng, betIndex) => {
  let Reel1StripIndex = -1;
  switch (betIndex) {
    case 0:
      Reel1StripIndex = findIndexOfReelStrip(reelRng, Reel1Coin1Map);
      break;
    case 1:
      Reel1StripIndex = findIndexOfReelStrip(reelRng, Reel1Coin2Map);
      break;
    case 2:
      Reel1StripIndex = findIndexOfReelStrip(reelRng, Reel1Coin3Map);
      break;
    case 3:
      Reel1StripIndex = findIndexOfReelStrip(reelRng, Reel1Coin4Map);
      break;
    case 4:
      Reel1StripIndex = findIndexOfReelStrip(reelRng, Reel1Coin5Map);
      break;
    default:
      break;
  }
  return Reel1StripIndex;
};

function getReel1Pos(betIndex) {
  const reelRng = getRandomReelPos();
  const reel1Index = GetReel1StripIndex(reelRng, betIndex);
  const reel1Symb =
    reel1Index > -1 && reel1Index < 32 ? Reel1[reel1Index] : "*";
  return {
    reel1Index,
    reel1Symb,
  };
}

function getReel1Pos(betIndex) {
  const reelRng = getRandomReelPos();
  const reel1Index = GetReel1StripIndex(reelRng, betIndex);
  const reel1Symb =
    reel1Index > -1 && reel1Index < 32 ? Reel1[reel1Index] : "*";
  return {
    reel1Index,
    reel1Symb,
  };
}

function getReel1Index(betIndex) {
  const reelRng = getRandomReelPos();
  const reel1Index = GetReel1StripIndex(reelRng, betIndex);
  return reel1Index;
}

function getReel1Symbol(reel1Index) {
  const reel1Symb =
    reel1Index > -1 && reel1Index < 32 ? Reel1[reel1Index] : "*";
  return reel1Symb;
}

module.exports = {
  Reel1,
  Reel1Coin1Map,
  Reel1Coin2Map,
  Reel1Coin3Map,
  Reel1Coin4Map,
  Reel1Coin5Map,
  GetReel1StripIndex,
  getReel1Pos,
  getReel1Symbol,
  getReel1Index,
};
