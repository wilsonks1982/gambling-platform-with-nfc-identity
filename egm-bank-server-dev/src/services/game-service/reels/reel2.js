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

const Reel2 = [];
Reel2[0] = "RU";
Reel2[1] = "T2";
Reel2[2] = "1B";
Reel2[3] = "RS";
Reel2[4] = "BE";
Reel2[5] = "T3";
Reel2[6] = "SS";
Reel2[7] = "CH";
Reel2[8] = "MA";
Reel2[9] = "T4";
Reel2[10] = "BS";
Reel2[11] = "1B";
Reel2[12] = "T5";
Reel2[13] = "T1";
Reel2[14] = "T2";
Reel2[15] = "CH";
Reel2[16] = "3B";
Reel2[17] = "T3";
Reel2[18] = "2B";
Reel2[19] = "RU";
Reel2[20] = "BE";
Reel2[21] = "1B";
Reel2[22] = "SS";
Reel2[23] = "3B";
Reel2[24] = "RS";
Reel2[25] = "T1";
Reel2[26] = "T4";
Reel2[27] = "MA";
Reel2[28] = "BS";
Reel2[29] = "2B";
Reel2[30] = "T5";
Reel2[31] = "JD";

const Reel2Coin1Map = new Map();
Reel2Coin1Map.set(0, [1, 2]); //2
Reel2Coin1Map.set(1, [3, 4]); //2
Reel2Coin1Map.set(2, [5, 6, 7, 8, 9, 10, 11]); //7
Reel2Coin1Map.set(3, [12, 13, 14]); //3
Reel2Coin1Map.set(4, [15, 16, 17, 18, 19]); //5
Reel2Coin1Map.set(5, [20, 21]); //2
Reel2Coin1Map.set(6, [22, 23, 24]); //3
Reel2Coin1Map.set(7, [25, 26, 27]); //3
Reel2Coin1Map.set(8, [28, 29]); //2
Reel2Coin1Map.set(9, [30, 31, 32, 33, 34, 35, 36]); //7
Reel2Coin1Map.set(10, [37, 38, 39, 40, 41]); //5
Reel2Coin1Map.set(11, [42, 43, 44, 45, 46, 47, 48]); //7
Reel2Coin1Map.set(12, [49, 50, 51, 52, 53, 54, 55, 56]); //8
Reel2Coin1Map.set(13, [57]); //1
Reel2Coin1Map.set(14, [58, 59]); //2
Reel2Coin1Map.set(15, [60, 61, 62]); //3
Reel2Coin1Map.set(16, [63, 64, 65, 66]); //4
Reel2Coin1Map.set(17, [67, 68]); //2
Reel2Coin1Map.set(18, [69, 70, 71, 72, 73]); //5
Reel2Coin1Map.set(19, [74, 75]); //2
Reel2Coin1Map.set(20, [76, 77, 78, 79, 80]); //5
Reel2Coin1Map.set(21, [81, 82, 83, 84, 85, 86, 87, 88]); //8
Reel2Coin1Map.set(22, [89, 90]); //2
Reel2Coin1Map.set(23, [91, 92, 93, 94]); //4
Reel2Coin1Map.set(24, [95, 96, 97]); //3
Reel2Coin1Map.set(25, [98, 99]); //2
Reel2Coin1Map.set(26, [100, 101, 102, 103, 104, 105]); //6
Reel2Coin1Map.set(27, [106, 107, 108]); //3
Reel2Coin1Map.set(28, [109, 110, 111, 112, 113]); //5
Reel2Coin1Map.set(29, [114, 115, 116, 117, 118]); //5
Reel2Coin1Map.set(30, [119, 120, 121, 122, 123, 124, 125, 126]); //8
Reel2Coin1Map.set(31, [127, 128]); //2

const Reel2Coin2Map = new Map();
Reel2Coin2Map.set(0, [1, 2]); //2
Reel2Coin2Map.set(1, [3, 4]); //2
Reel2Coin2Map.set(2, [5, 6, 7, 8, 9, 10, 11, 12]); //8++++++++++++
Reel2Coin2Map.set(3, [13, 14, 15]); //3
Reel2Coin2Map.set(4, [16, 17, 18, 19]); //4------------
Reel2Coin2Map.set(5, [20, 21, 22]); //3++++++++++++
Reel2Coin2Map.set(6, [23, 24, 25]); //3
Reel2Coin2Map.set(7, [26, 27, 28]); //3
Reel2Coin2Map.set(8, [29, 30]); //2
Reel2Coin2Map.set(9, [31, 32, 33, 34, 35, 36, 37]); //7
Reel2Coin2Map.set(10, [38, 39, 40, 41, 42]); //5
Reel2Coin2Map.set(11, [43, 44, 45, 46, 47, 48, 49, 50]); //8++++++++++++
Reel2Coin2Map.set(12, [51, 52, 53, 54, 55, 56, 57]); //7---------
Reel2Coin2Map.set(13, [58]); //1
Reel2Coin2Map.set(14, [59, 60]); //2
Reel2Coin2Map.set(15, [61, 62, 63]); //3
Reel2Coin2Map.set(16, [64, 65, 66, 67]); //4
Reel2Coin2Map.set(17, [68, 69]); //2
Reel2Coin2Map.set(18, [70, 71, 72, 73]); //4-----------
Reel2Coin2Map.set(19, [74, 75]); //2
Reel2Coin2Map.set(20, [76, 77, 78, 79, 80]); //5
Reel2Coin2Map.set(21, [81, 82, 83, 84, 85, 86, 87, 88]); //8
Reel2Coin2Map.set(22, [89, 90]); //2
Reel2Coin2Map.set(23, [91, 92, 93, 94]); //4
Reel2Coin2Map.set(24, [95, 96, 97]); //3
Reel2Coin2Map.set(25, [98, 99]); //2
Reel2Coin2Map.set(26, [100, 101, 102, 103, 104, 105]); //6
Reel2Coin2Map.set(27, [106, 107, 108]); //3
Reel2Coin2Map.set(28, [109, 110, 111, 112, 113]); //5
Reel2Coin2Map.set(29, [114, 115, 116, 117, 118]); //5
Reel2Coin2Map.set(30, [119, 120, 121, 122, 123, 124, 125, 126]); //8
Reel2Coin2Map.set(31, [127, 128]); //2

const Reel2Coin3Map = new Map();
Reel2Coin3Map.set(0, [1, 2]); //2
Reel2Coin3Map.set(1, [3, 4]); //2
Reel2Coin3Map.set(2, [5, 6, 7, 8, 9, 10, 11, 12]); //8
Reel2Coin3Map.set(3, [13, 14, 15]); //3
Reel2Coin3Map.set(4, [16, 17, 18, 19]); //4
Reel2Coin3Map.set(5, [20, 21]); //2-------------
Reel2Coin3Map.set(6, [22, 23, 24]); //3
Reel2Coin3Map.set(7, [25, 26, 27]); //3
Reel2Coin3Map.set(8, [28, 29]); //2
Reel2Coin3Map.set(9, [30, 31, 32, 33, 34, 35, 36]); //7
Reel2Coin3Map.set(10, [37, 38, 39, 40, 41]); //5
Reel2Coin3Map.set(11, [42, 43, 44, 45, 46, 47, 48, 49]); //8
Reel2Coin3Map.set(12, [50, 51, 52, 53, 54, 55, 56, 57]); //8+++++++++++++++
Reel2Coin3Map.set(13, [58]); //1
Reel2Coin3Map.set(14, [59, 60]); //2
Reel2Coin3Map.set(15, [61, 62, 63]); //3
Reel2Coin3Map.set(16, [64, 65, 66, 67]); //4
Reel2Coin3Map.set(17, [68, 69]); //2
Reel2Coin3Map.set(18, [70, 71, 72, 73]); //4
Reel2Coin3Map.set(19, [74, 75]); //2
Reel2Coin3Map.set(20, [76, 77, 78, 79, 80]); //5
Reel2Coin3Map.set(21, [81, 82, 83, 84, 85, 86, 87, 88]); //8
Reel2Coin3Map.set(22, [89, 90]); //2
Reel2Coin3Map.set(23, [91, 92, 93, 94]); //4
Reel2Coin3Map.set(24, [95, 96, 97]); //3
Reel2Coin3Map.set(25, [98, 99]); //2
Reel2Coin3Map.set(26, [100, 101, 102, 103, 104, 105]); //6
Reel2Coin3Map.set(27, [106, 107, 108]); //3
Reel2Coin3Map.set(28, [109, 110, 111, 112, 113]); //5
Reel2Coin3Map.set(29, [114, 115, 116, 117, 118]); //5
Reel2Coin3Map.set(30, [119, 120, 121, 122, 123, 124, 125, 126]); //8
Reel2Coin3Map.set(31, [127, 128]); //2

const Reel2Coin4Map = new Map();
Reel2Coin4Map.set(0, [1, 2]); //2
Reel2Coin4Map.set(1, [3, 4]); //2
Reel2Coin4Map.set(2, [5, 6, 7, 8, 9, 10, 11, 12]); //8
Reel2Coin4Map.set(3, [13, 14, 15]); //3
Reel2Coin4Map.set(4, [16, 17, 18, 19]); //4
Reel2Coin4Map.set(5, [20, 21]); //2
Reel2Coin4Map.set(6, [22, 23, 24]); //3
Reel2Coin4Map.set(7, [25, 26, 27]); //3
Reel2Coin4Map.set(8, [28, 29]); //2
Reel2Coin4Map.set(9, [30, 31, 32, 33, 34, 35, 36]); //7
Reel2Coin4Map.set(10, [37, 38, 39, 40, 41]); //5
Reel2Coin4Map.set(11, [42, 43, 44, 45, 46, 47, 48, 49]); //8
Reel2Coin4Map.set(12, [50, 51, 52, 53, 54, 55, 56, 57]); //8
Reel2Coin4Map.set(13, [58]); //1
Reel2Coin4Map.set(14, [59, 60]); //2
Reel2Coin4Map.set(15, [61, 62, 63]); //3
Reel2Coin4Map.set(16, [64, 65, 66, 67]); //4
Reel2Coin4Map.set(17, [68, 69]); //2
Reel2Coin4Map.set(18, [70, 71, 72, 73]); //4
Reel2Coin4Map.set(19, [74, 75]); //2
Reel2Coin4Map.set(20, [76, 77, 78, 79, 80]); //5
Reel2Coin4Map.set(21, [81, 82, 83, 84, 85, 86, 87, 88]); //8
Reel2Coin4Map.set(22, [89, 90]); //2
Reel2Coin4Map.set(23, [91, 92, 93, 94]); //4
Reel2Coin4Map.set(24, [95, 96, 97]); //3
Reel2Coin4Map.set(25, [98, 99]); //2
Reel2Coin4Map.set(26, [100, 101, 102, 103, 104, 105]); //6
Reel2Coin4Map.set(27, [106, 107, 108]); //3
Reel2Coin4Map.set(28, [109, 110, 111, 112, 113]); //5
Reel2Coin4Map.set(29, [114, 115, 116, 117, 118]); //5
Reel2Coin4Map.set(30, [119, 120, 121, 122, 123, 124, 125, 126]); //8
Reel2Coin4Map.set(31, [127, 128]); //2

const Reel2Coin5Map = new Map();
Reel2Coin5Map.set(0, [1, 2]); //2
Reel2Coin5Map.set(1, [3, 4]); //2
Reel2Coin5Map.set(2, [5, 6, 7, 8, 9, 10, 11, 12]); //8
Reel2Coin5Map.set(3, [13, 14, 15]); //3
Reel2Coin5Map.set(4, [16, 17, 18, 19]); //4
Reel2Coin5Map.set(5, [20, 21]); //2
Reel2Coin5Map.set(6, [22, 23, 24]); //3
Reel2Coin5Map.set(7, [25, 26, 27]); //3
Reel2Coin5Map.set(8, [28, 29]); //2
Reel2Coin5Map.set(9, [30, 31, 32, 33, 34, 35, 36, 37]); //8+++++++++
Reel2Coin5Map.set(10, [38, 39, 40, 41, 42]); //5
Reel2Coin5Map.set(11, [43, 44, 45, 46, 47, 48, 49, 50]); //8
Reel2Coin5Map.set(12, [51, 52, 53, 54, 55, 56]); //6---------------------
Reel2Coin5Map.set(13, [57]); //1
Reel2Coin5Map.set(14, [58, 59]); //2
Reel2Coin5Map.set(15, [60, 61, 62]); //3
Reel2Coin5Map.set(16, [63, 64, 65, 66]); //4
Reel2Coin5Map.set(17, [67, 68]); //2
Reel2Coin5Map.set(18, [69, 70, 71, 72]); //4
Reel2Coin5Map.set(19, [73, 74]); //2
Reel2Coin5Map.set(20, [75, 76, 77, 78, 79]); //5
Reel2Coin5Map.set(21, [80, 81, 82, 83, 84, 85, 86, 87]); //8
Reel2Coin5Map.set(22, [88, 89]); //2
Reel2Coin5Map.set(23, [90, 91, 92, 93]); //4
Reel2Coin5Map.set(24, [94, 95, 96]); //3
Reel2Coin5Map.set(25, [97, 98]); //2
Reel2Coin5Map.set(26, [99, 100, 101, 102, 103, 104, 105, 106]); //8+++++++++++++++++++++++++
Reel2Coin5Map.set(27, [107, 108, 109]); //3
Reel2Coin5Map.set(28, [110, 111, 112, 113, 114]); //5
Reel2Coin5Map.set(29, [115, 116, 117, 118, 119]); //5
Reel2Coin5Map.set(30, [120, 121, 122, 123, 124, 125, 126]); //7-----------
Reel2Coin5Map.set(31, [127, 128]); //2

const GetReel2StripIndex = (reelRng, betIndex) => {
  let Reel2StripIndex = -1;
  switch (betIndex) {
    case 0:
      Reel2StripIndex = findIndexOfReelStrip(reelRng, Reel2Coin1Map);
      break;
    case 1:
      Reel2StripIndex = findIndexOfReelStrip(reelRng, Reel2Coin2Map);
      break;
    case 2:
      Reel2StripIndex = findIndexOfReelStrip(reelRng, Reel2Coin3Map);
      break;
    case 3:
      Reel2StripIndex = findIndexOfReelStrip(reelRng, Reel2Coin4Map);
      break;
    case 4:
      Reel2StripIndex = findIndexOfReelStrip(reelRng, Reel2Coin5Map);
      break;
    default:
      break;
  }
  return Reel2StripIndex;
};

function getReel2Pos(betIndex) {
  const reelRng = getRandomReelPos();
  const reel2Index = GetReel2StripIndex(reelRng, betIndex);
  const reel2Symb =
    reel2Index > -1 && reel2Index < 32 ? Reel2[reel2Index] : "*";
  return {
    reel2Symb,
    reel2Index,
  };
}

function getReel2Index(betIndex) {
  const reelRng = getRandomReelPos();
  const reel2Index = GetReel2StripIndex(reelRng, betIndex);
  return reel2Index;
}

function getReel2Symbol(reel2Index) {
  const reel2Symb =
    reel2Index > -1 && reel2Index < 32 ? Reel2[reel2Index] : "*";
  return reel2Symb;
}

module.exports = {
  Reel2,
  Reel2Coin1Map,
  Reel2Coin2Map,
  Reel2Coin3Map,
  Reel2Coin4Map,
  Reel2Coin5Map,
  GetReel2StripIndex,
  getReel2Pos,
  getReel2Symbol,
  getReel2Index,
};
