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

const Reel3 = [];
Reel3[0] = "JD";
Reel3[1] = "RS";
Reel3[2] = "1B";
Reel3[3] = "2X";
Reel3[4] = "T6";
Reel3[5] = "3B";
Reel3[6] = "BE";
Reel3[7] = "BS";
Reel3[8] = "T5";
Reel3[9] = "2B";
Reel3[10] = "RU";
Reel3[11] = "T4";
Reel3[12] = "WI";
Reel3[13] = "SS";
Reel3[14] = "T2";
Reel3[15] = "1B";
Reel3[16] = "WH";
Reel3[17] = "T5";
Reel3[18] = "3B";
Reel3[19] = "2X";
Reel3[20] = "T1";
Reel3[21] = "BE";
Reel3[22] = "2B";
Reel3[23] = "CH";
Reel3[24] = "BS";
Reel3[25] = "T5";
Reel3[26] = "GC";
Reel3[27] = "1B";
Reel3[28] = "WI";
Reel3[29] = "T4";
Reel3[30] = "MA";
Reel3[31] = "T3";

const Reel3Coin1Map = new Map();
Reel3Coin1Map.set(0, [1, 2]); //2
Reel3Coin1Map.set(1, [3, 4, 5, 6, 7, 8]); //6
Reel3Coin1Map.set(2, [9, 10, 11, 12, 13, 14]); //6
Reel3Coin1Map.set(3, [15, 16]); //2
Reel3Coin1Map.set(4, [17, 18]); //2
Reel3Coin1Map.set(5, [19, 20, 21]); //3
Reel3Coin1Map.set(6, [22, 23, 24]); //3
Reel3Coin1Map.set(7, [25, 26, 27, 28, 29]); //5
Reel3Coin1Map.set(8, [30, 31, 32, 33, 34]); //5
Reel3Coin1Map.set(9, [35, 36, 37, 38, 39]); //5
Reel3Coin1Map.set(10, [40, 41, 42, 43, 44]); //5
Reel3Coin1Map.set(11, [45, 46, 47, 48, 49, 50]); //6
Reel3Coin1Map.set(12, [51, 52]); //2
Reel3Coin1Map.set(13, [53, 54, 55, 56, 57]); //5
Reel3Coin1Map.set(14, [58, 59, 60, 61]); //4
Reel3Coin1Map.set(15, [62, 63, 64, 65, 66, 67, 68]); //7
Reel3Coin1Map.set(16, [69]); //1
Reel3Coin1Map.set(17, [70, 71, 72]); //3
Reel3Coin1Map.set(18, [73, 74, 75]); //3
Reel3Coin1Map.set(19, [76, 77]); //2
Reel3Coin1Map.set(20, [78, 79, 80, 81]); //4
Reel3Coin1Map.set(21, [82, 83, 84]); //3
Reel3Coin1Map.set(22, [85, 86, 87, 88, 89]); //5
Reel3Coin1Map.set(23, [90, 91, 92, 93, 94]); //5
Reel3Coin1Map.set(24, [95, 96, 97, 98]); //4
Reel3Coin1Map.set(25, [99, 100, 101, 102]); //4
Reel3Coin1Map.set(26, [103, 104]); //2
Reel3Coin1Map.set(27, [105, 106, 107, 108, 109, 110, 111]); //7
Reel3Coin1Map.set(28, [112, 113]); //2
Reel3Coin1Map.set(29, [114, 115, 116, 117, 118, 119]); //6
Reel3Coin1Map.set(30, [120, 121, 122, 123, 124]); //5
Reel3Coin1Map.set(31, [125, 126, 127, 128]); //4

const Reel3Coin2Map = new Map();
Reel3Coin2Map.set(0, [1, 2]); //2
Reel3Coin2Map.set(1, [3, 4, 5, 6, 7, 8]); //6
Reel3Coin2Map.set(2, [9, 10, 11, 12, 13, 14]); //6
Reel3Coin2Map.set(3, [15, 16]); //2
Reel3Coin2Map.set(4, [17, 18]); //2
Reel3Coin2Map.set(5, [19, 20, 21]); //3
Reel3Coin2Map.set(6, [22, 23, 24]); //3
Reel3Coin2Map.set(7, [25, 26, 27, 28, 29]); //5
Reel3Coin2Map.set(8, [30, 31, 32, 33, 34]); //5
Reel3Coin2Map.set(9, [35, 36, 37, 38]); //4------------
Reel3Coin2Map.set(10, [39, 40, 41, 42, 43]); //5
Reel3Coin2Map.set(11, [44, 45, 46, 47, 48, 49]); //6
Reel3Coin2Map.set(12, [50, 51]); //2
Reel3Coin2Map.set(13, [52, 53, 54, 55, 56]); //5
Reel3Coin2Map.set(14, [57, 58, 59, 60]); //4
Reel3Coin2Map.set(15, [61, 62, 63, 64, 65, 66, 67]); //7
Reel3Coin2Map.set(16, [68]); //1
Reel3Coin2Map.set(17, [69, 70, 71]); //3
Reel3Coin2Map.set(18, [72, 73, 74]); //3
Reel3Coin2Map.set(19, [75, 76]); //2
Reel3Coin2Map.set(20, [77, 78, 79, 80]); //4
Reel3Coin2Map.set(21, [81, 82, 83]); //3
Reel3Coin2Map.set(22, [84, 85, 86, 87, 88]); //5
Reel3Coin2Map.set(23, [89, 90, 91, 92, 93]); //5
Reel3Coin2Map.set(24, [94, 95, 96, 97]); //4
Reel3Coin2Map.set(25, [98, 99, 100, 101]); //4
Reel3Coin2Map.set(26, [102, 103]); //2
Reel3Coin2Map.set(27, [104, 105, 106, 107, 108, 109, 110, 111]); //8++++++++++++++
Reel3Coin2Map.set(28, [112, 113]); //2
Reel3Coin2Map.set(29, [114, 115, 116, 117, 118, 119]); //6
Reel3Coin2Map.set(30, [120, 121, 122, 123, 124]); //5
Reel3Coin2Map.set(31, [125, 126, 127, 128]); //4

const Reel3Coin3Map = new Map();
Reel3Coin3Map.set(0, [1, 2]); //2
Reel3Coin3Map.set(1, [3, 4, 5, 6, 7, 8]); //6
Reel3Coin3Map.set(2, [9, 10, 11, 12, 13, 14]); //6
Reel3Coin3Map.set(3, [15, 16]); //2
Reel3Coin3Map.set(4, [17, 18]); //2
Reel3Coin3Map.set(5, [19, 20, 21]); //3
Reel3Coin3Map.set(6, [22, 23, 24]); //3
Reel3Coin3Map.set(7, [25, 26, 27, 28, 29]); //5
Reel3Coin3Map.set(8, [30, 31, 32, 33, 34]); //5
Reel3Coin3Map.set(9, [35, 36, 37, 38]); //4------------
Reel3Coin3Map.set(10, [39, 40, 41, 42, 43]); //5
Reel3Coin3Map.set(11, [44, 45, 46, 47, 48, 49]); //6
Reel3Coin3Map.set(12, [50, 51]); //2
Reel3Coin3Map.set(13, [52, 53, 54, 55, 56]); //5
Reel3Coin3Map.set(14, [57, 58, 59, 60]); //4
Reel3Coin3Map.set(15, [61, 62, 63, 64, 65, 66, 67]); //7
Reel3Coin3Map.set(16, [68]); //1
Reel3Coin3Map.set(17, [69, 70, 71]); //3
Reel3Coin3Map.set(18, [72, 73, 74]); //3
Reel3Coin3Map.set(19, [75, 76]); //2
Reel3Coin3Map.set(20, [77, 78, 79, 80]); //4
Reel3Coin3Map.set(21, [81, 82, 83]); //3
Reel3Coin3Map.set(22, [84, 85, 86, 87, 88]); //5
Reel3Coin3Map.set(23, [89, 90, 91, 92, 93]); //5
Reel3Coin3Map.set(24, [94, 95, 96, 97]); //4
Reel3Coin3Map.set(25, [98, 99, 100, 101]); //4
Reel3Coin3Map.set(26, [102, 103]); //2
Reel3Coin3Map.set(27, [104, 105, 106, 107, 108, 109, 110, 111]); //8++++++++++++++
Reel3Coin3Map.set(28, [112, 113]); //2
Reel3Coin3Map.set(29, [114, 115, 116, 117, 118, 119]); //6
Reel3Coin3Map.set(30, [120, 121, 122, 123, 124]); //5
Reel3Coin3Map.set(31, [125, 126, 127, 128]); //4

const Reel3Coin4Map = new Map();
Reel3Coin4Map.set(0, [1, 2]); //2
Reel3Coin4Map.set(1, [3, 4, 5, 6, 7, 8]); //6
Reel3Coin4Map.set(2, [9, 10, 11, 12, 13, 14]); //6
Reel3Coin4Map.set(3, [15, 16]); //2
Reel3Coin4Map.set(4, [17, 18]); //2
Reel3Coin4Map.set(5, [19, 20, 21]); //3
Reel3Coin4Map.set(6, [22, 23, 24]); //3
Reel3Coin4Map.set(7, [25, 26, 27, 28, 29]); //5
Reel3Coin4Map.set(8, [30, 31, 32, 33, 34, 35]); //6+++++++++++
Reel3Coin4Map.set(9, [36, 37, 38, 39, 40]); //5++++++++++
Reel3Coin4Map.set(10, [41, 42, 43, 44]); //4--------
Reel3Coin4Map.set(11, [45, 46, 47]); //3----------------
Reel3Coin4Map.set(12, [48, 49]); //2
Reel3Coin4Map.set(13, [50, 51, 52, 53, 54]); //5
Reel3Coin4Map.set(14, [55, 56, 57, 58]); //4
Reel3Coin4Map.set(15, [59, 60, 61, 62, 63, 64, 65]); //7
Reel3Coin4Map.set(16, [66]); //1
Reel3Coin4Map.set(17, [67, 68, 69, 70, 71, 72]); //6++++++++++++++++
Reel3Coin4Map.set(18, [73, 74, 75]); //3
Reel3Coin4Map.set(19, [76, 77]); //2
Reel3Coin4Map.set(20, [78, 79, 80, 81]); //4
Reel3Coin4Map.set(21, [82, 83, 84]); //3
Reel3Coin4Map.set(22, [85, 86, 87, 88, 89]); //5
Reel3Coin4Map.set(23, [90, 91, 92, 93, 94]); //5
Reel3Coin4Map.set(24, [95, 96, 97, 98]); //4
Reel3Coin4Map.set(25, [99, 100, 101, 102, 103, 104]); //6++++++++++++++++++
Reel3Coin4Map.set(26, [105, 106]); //2
Reel3Coin4Map.set(27, [107, 108, 109, 110, 111, 112, 113, 114]); //8
Reel3Coin4Map.set(28, [115, 116]); //2
Reel3Coin4Map.set(29, [117, 118, 119]); //3-------------------
Reel3Coin4Map.set(30, [120, 121, 122, 123, 124]); //5
Reel3Coin4Map.set(31, [125, 126, 127, 128]); //4

const Reel3Coin5Map = new Map();
Reel3Coin5Map.set(0, [1, 2]); //2
Reel3Coin5Map.set(1, [3, 4, 5, 6, 7, 8]); //6
Reel3Coin5Map.set(2, [9, 10, 11, 12, 13, 14]); //6
Reel3Coin5Map.set(3, [15, 16]); //2
Reel3Coin5Map.set(4, [17, 18]); //2
Reel3Coin5Map.set(5, [19, 20, 21]); //3
Reel3Coin5Map.set(6, [22, 23, 24]); //3
Reel3Coin5Map.set(7, [25, 26, 27, 28, 29]); //5
Reel3Coin5Map.set(8, [30, 31, 32, 33, 34]); //5(1-)
Reel3Coin5Map.set(9, [35, 36, 37, 38, 39]); //5
Reel3Coin5Map.set(10, [40, 41, 42, 43]); //4
Reel3Coin5Map.set(11, [44, 45, 46, 47, 48, 49]); //6(3+)
Reel3Coin5Map.set(12, [50, 51]); //2
Reel3Coin5Map.set(13, [52, 53, 54, 55, 56]); //5
Reel3Coin5Map.set(14, [57, 58, 59, 60]); //4
Reel3Coin5Map.set(15, [61, 62, 63, 64, 65, 66, 67]); //7
Reel3Coin5Map.set(16, [68]); //1
Reel3Coin5Map.set(17, [69, 70, 71]); //(3-)
Reel3Coin5Map.set(18, [72, 73, 74]); //3
Reel3Coin5Map.set(19, [75, 76]); //2
Reel3Coin5Map.set(20, [77, 78, 79, 80]); //4
Reel3Coin5Map.set(21, [81, 82, 83]); //3
Reel3Coin5Map.set(22, [84, 85, 86, 87, 88]); //5
Reel3Coin5Map.set(23, [89, 90, 91, 92, 93]); //5
Reel3Coin5Map.set(24, [94, 95, 96, 97]); //4
Reel3Coin5Map.set(25, [98, 99, 100, 101]); //4(2-)
Reel3Coin5Map.set(26, [102, 103]); //2
Reel3Coin5Map.set(27, [104, 105, 106, 107, 108, 109, 110, 111]); //8
Reel3Coin5Map.set(28, [112, 113]); //2
Reel3Coin5Map.set(29, [114, 115, 116, 117, 118, 119]); //6(3+)
Reel3Coin5Map.set(30, [120, 121, 122, 123, 124]); //5
Reel3Coin5Map.set(31, [125, 126, 127, 128]); //4

const GetReel3StripIndex = (reelRng, betIndex) => {
  let Reel3StripIndex = -1;
  switch (betIndex) {
    case 0:
      Reel3StripIndex = findIndexOfReelStrip(reelRng, Reel3Coin1Map);
      break;
    case 1:
      Reel3StripIndex = findIndexOfReelStrip(reelRng, Reel3Coin2Map);
      break;
    case 2:
      Reel3StripIndex = findIndexOfReelStrip(reelRng, Reel3Coin3Map);
      break;
    case 3:
      Reel3StripIndex = findIndexOfReelStrip(reelRng, Reel3Coin4Map);
      break;
    case 4:
      Reel3StripIndex = findIndexOfReelStrip(reelRng, Reel3Coin5Map);
      break;
    default:
      break;
  }
  return Reel3StripIndex;
};

function getReel3Pos(betIndex) {
  const reelRng = getRandomReelPos();
  const reel3Index = GetReel3StripIndex(reelRng, betIndex);
  const reel3Symb =
    reel3Index > -1 && reel3Index < 32 ? Reel3[reel3Index] : "*";
  return {
    reel3Index,
    reel3Symb,
  };
}

function getReel3Index(betIndex) {
  const reelRng = getRandomReelPos();
  const reel3Index = GetReel3StripIndex(reelRng, betIndex);
  return reel3Index;
}

function getReel3Symbol(reel3Index) {
  const reel3Symb =
    reel3Index > -1 && reel3Index < 32 ? Reel3[reel3Index] : "*";
  return reel3Symb;
}

module.exports = {
  Reel3,
  Reel3Coin1Map,
  Reel3Coin2Map,
  Reel3Coin3Map,
  Reel3Coin4Map,
  Reel3Coin5Map,
  GetReel3StripIndex,
  getReel3Pos,
  getReel3Symbol,
  getReel3Index,
};
