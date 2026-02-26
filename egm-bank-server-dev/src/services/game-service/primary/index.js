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

const flags = {
  features: {
    FEATURE_GRAFFING_ON: true,
    FEATURE_SIX_OF_EIGHTEEN_ENABLED: true,
    FEATURE_HIT_OR_MISS_ENABLED: true,
    FEATURE_RANDOM_ENABLED: true,
    FEATURE_ONE_OF_THREE_ENABLED: true,
    FEATURE_MONEY_WHEEL_ENABLED: true,
  },
  feature: {
    FEATURE_GRAFFING_ON: true,
    FEATURE_UI_CASHIN_PANEL_SNAPPING: false,
    FEATURE_UI_CASHIN_PANEL_KEYPAD: true,
    FEATURE_UI_CASHIN_PANEL_SLIDER: false,
  },
};
const { betValues } = require("../paytable");

const {
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
} = require("./win-payouts");

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
} = require("./win-symbols");

function primaryWinW01(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W01[0]:
      switch (reel2Symb) {
        case SYMBOLS_W01[1]:
          switch (reel3Symb) {
            case SYMBOLS_W01[2]:
              payout = WIN_PAYOUT_W01 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW01Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W01", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W01[0]:
      switch (reel2Symb) {
        case SYMBOLS_W01[1]:
          switch (reel3Symb) {
            case SYMBOLS_W01[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W01 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW02(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W02[0]:
      switch (reel2Symb) {
        case SYMBOLS_W02[1]:
          switch (reel3Symb) {
            case SYMBOLS_W02[2]:
              payout = WIN_PAYOUT_W02 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW02Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W02", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W02[0]:
      switch (reel2Symb) {
        case SYMBOLS_W02[1]:
          switch (reel3Symb) {
            case SYMBOLS_W02[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W02 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW03(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W03[0]:
      switch (reel2Symb) {
        case SYMBOLS_W03[1]:
          switch (reel3Symb) {
            case SYMBOLS_W03[2]:
              payout = WIN_PAYOUT_W03 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW03Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W03", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W03[0]:
      switch (reel2Symb) {
        case SYMBOLS_W03[1]:
          switch (reel3Symb) {
            case SYMBOLS_W03[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W03 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW04(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W04[0]:
      switch (reel2Symb) {
        case SYMBOLS_W04[1]:
          switch (reel3Symb) {
            case SYMBOLS_W04[2]:
              payout = WIN_PAYOUT_W04 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW04Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W04", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W04[0]:
      switch (reel2Symb) {
        case SYMBOLS_W04[1]:
          switch (reel3Symb) {
            case SYMBOLS_W04[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W04 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW05(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W05[0]:
      switch (reel2Symb) {
        case SYMBOLS_W05[1]:
          switch (reel3Symb) {
            case SYMBOLS_W05[2]:
              payout = WIN_PAYOUT_W05 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW05Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W05", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W05[0]:
      switch (reel2Symb) {
        case SYMBOLS_W05[1]:
          switch (reel3Symb) {
            case SYMBOLS_W05[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W05 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return result;
}

function primaryWinW06(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W06[0]:
      switch (reel2Symb) {
        case SYMBOLS_W06[1]:
          switch (reel3Symb) {
            case SYMBOLS_W06[2]:
              payout = WIN_PAYOUT_W06 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW06Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W06", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W06[0]:
      switch (reel2Symb) {
        case SYMBOLS_W06[1]:
          switch (reel3Symb) {
            case SYMBOLS_W06[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W06 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW07(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W07[0]:
      switch (reel2Symb) {
        case SYMBOLS_W07[1]:
          switch (reel3Symb) {
            case SYMBOLS_W07[2]:
              payout = WIN_PAYOUT_W07 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
function primaryWinW07Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W07", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W07[0]:
      switch (reel2Symb) {
        case SYMBOLS_W07[1]:
          switch (reel3Symb) {
            case SYMBOLS_W07[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W07 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW08(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W08[0]:
      switch (reel2Symb) {
        case SYMBOLS_W08[1]:
          switch (reel3Symb) {
            case SYMBOLS_W08[2]:
              payout = WIN_PAYOUT_W08 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW08Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W08", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W08[0]:
      switch (reel2Symb) {
        case SYMBOLS_W08[1]:
          switch (reel3Symb) {
            case SYMBOLS_W08[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W08 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW09(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W09[0]:
      switch (reel2Symb) {
        case SYMBOLS_W09[1]:
          switch (reel3Symb) {
            case SYMBOLS_W09[2]:
              payout = WIN_PAYOUT_W09 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW09Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W09", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W09[0]:
      switch (reel2Symb) {
        case SYMBOLS_W09[1]:
          switch (reel3Symb) {
            case SYMBOLS_W09[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W09 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW10(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W10[0]:
      switch (reel2Symb) {
        case SYMBOLS_W10[1]:
          switch (reel3Symb) {
            case SYMBOLS_W10[2]:
              payout = WIN_PAYOUT_W10 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW10Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let payout = 0;
  let result = { id: "W10", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W10[0]:
      switch (reel2Symb) {
        case SYMBOLS_W10[1]:
          switch (reel3Symb) {
            case SYMBOLS_W10[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W10 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW11(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W11[0]:
      switch (reel2Symb) {
        case SYMBOLS_W11[1]:
          switch (reel3Symb) {
            case SYMBOLS_W11[2]:
              payout = WIN_PAYOUT_W11 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW11Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let payout = 0;
  let result = { id: "W11", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W11[0]:
      switch (reel2Symb) {
        case SYMBOLS_W11[1]:
          switch (reel3Symb) {
            case SYMBOLS_W11[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W11 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW12(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W12[0]:
      switch (reel2Symb) {
        case SYMBOLS_W12[1]:
          switch (reel3Symb) {
            case SYMBOLS_W12[2]:
              payout = WIN_PAYOUT_W12 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW12Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let payout = 0;
  let result = { id: "W12", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W12[0]:
      switch (reel2Symb) {
        case SYMBOLS_W12[1]:
          switch (reel3Symb) {
            case SYMBOLS_W12[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W12 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}
//Consider Minus Cases W13 - W02
function primaryWinW13(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W13[0]:
      switch (reel2Symb) {
        case SYMBOLS_W13[1]:
          switch (reel3Symb) {
            case SYMBOLS_W02[2]:
              payout = 0;
              break;
            default:
              payout = WIN_PAYOUT_W13 * betValues[betIndex][denomIndex];
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

//Consider Minus Cases W13 - W02
function primaryWinW13Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W13", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W13[0]:
      switch (reel2Symb) {
        case SYMBOLS_W13[1]:
          switch (reel3Symb) {
            case SYMBOLS_W02[2]:
              break;
            default:
              result = {
                ...result,
                win: WIN_PAYOUT_W13 * betValues[betIndex][denomIndex],
                winBox: [true, true, false],
              };
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW14(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W14[0]:
      switch (reel2Symb) {
        case SYMBOLS_W14[1]:
          switch (reel3Symb) {
            case SYMBOLS_W14[2]:
              payout = WIN_PAYOUT_W14 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW14Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W14", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W14[0]:
      switch (reel2Symb) {
        case SYMBOLS_W14[1]:
          switch (reel3Symb) {
            case SYMBOLS_W14[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W14 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW15(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W15[0]:
      switch (reel2Symb) {
        case SYMBOLS_W15[1]:
          switch (reel3Symb) {
            case SYMBOLS_W15[2]:
              payout = WIN_PAYOUT_W15 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW15Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W15", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W15[0]:
      switch (reel2Symb) {
        case SYMBOLS_W15[1]:
          switch (reel3Symb) {
            case SYMBOLS_W15[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W15 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

//Consider Minus Cases W16 - W03
function primaryWinW16(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W16[0]:
      switch (reel2Symb) {
        case SYMBOLS_W16[1]:
          switch (reel3Symb) {
            case SYMBOLS_W03[2]:
              payout = 0;
              break;
            default:
              payout = WIN_PAYOUT_W16 * betValues[betIndex][denomIndex];
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

//Consider Minus Cases W16 - W03
function primaryWinW16Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W16", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W16[0]:
      switch (reel2Symb) {
        case SYMBOLS_W16[1]:
          switch (reel3Symb) {
            case SYMBOLS_W03[2]:
              break;
            default:
              result = {
                ...result,
                win: WIN_PAYOUT_W16 * betValues[betIndex][denomIndex],
                winBox: [true, true, false],
              };
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW17(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W17[0]:
      switch (reel2Symb) {
        case SYMBOLS_W17[1]:
          switch (reel3Symb) {
            case SYMBOLS_W17[2]:
              payout = WIN_PAYOUT_W17 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW17Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W17", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W17[0]:
      switch (reel2Symb) {
        case SYMBOLS_W17[1]:
          switch (reel3Symb) {
            case SYMBOLS_W17[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W17 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW18(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W18[0]:
      switch (reel2Symb) {
        case SYMBOLS_W18[1]:
          switch (reel3Symb) {
            case SYMBOLS_W18[2]:
              payout = WIN_PAYOUT_W18 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW18Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W18", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W18[0]:
      switch (reel2Symb) {
        case SYMBOLS_W18[1]:
          switch (reel3Symb) {
            case SYMBOLS_W18[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W18 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW19(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W19[0]:
      switch (reel2Symb) {
        case SYMBOLS_W19[1]:
          switch (reel3Symb) {
            case SYMBOLS_W19[2]:
              payout = WIN_PAYOUT_W19 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW19Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W19", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W19[0]:
      switch (reel2Symb) {
        case SYMBOLS_W19[1]:
          switch (reel3Symb) {
            case SYMBOLS_W19[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W19 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW20(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W20[0]:
      switch (reel2Symb) {
        case SYMBOLS_W20[1]:
          switch (reel3Symb) {
            case SYMBOLS_W20[2]:
              payout = WIN_PAYOUT_W20 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW20Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W20", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W20[0]:
      switch (reel2Symb) {
        case SYMBOLS_W20[1]:
          switch (reel3Symb) {
            case SYMBOLS_W20[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W20 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW21(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W21[0]:
      switch (reel2Symb) {
        case SYMBOLS_W21[1]:
          switch (reel3Symb) {
            case SYMBOLS_W21[2]:
              payout = WIN_PAYOUT_W21 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW21Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W21", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W21[0]:
      switch (reel2Symb) {
        case SYMBOLS_W21[1]:
          switch (reel3Symb) {
            case SYMBOLS_W21[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W21 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW22(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W22[0]:
      switch (reel2Symb) {
        case SYMBOLS_W22[1]:
          switch (reel3Symb) {
            case SYMBOLS_W22[2]:
              payout = WIN_PAYOUT_W22 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW22Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W22", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W22[0]:
      switch (reel2Symb) {
        case SYMBOLS_W22[1]:
          switch (reel3Symb) {
            case SYMBOLS_W22[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W22 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW23(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W23[0]:
      switch (reel2Symb) {
        case SYMBOLS_W23[1]:
          switch (reel3Symb) {
            case SYMBOLS_W23[2]:
              payout = WIN_PAYOUT_W23 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW23Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W23", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W23[0]:
      switch (reel2Symb) {
        case SYMBOLS_W23[1]:
          switch (reel3Symb) {
            case SYMBOLS_W23[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W23 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

//Consider Minus Cases W24 - W04
function primaryWinW24(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W24[0]:
      switch (reel2Symb) {
        case SYMBOLS_W24[1]:
          switch (reel3Symb) {
            case SYMBOLS_W04[2]:
              payout = 0;
              break;
            default:
              payout = WIN_PAYOUT_W24 * betValues[betIndex][denomIndex];
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

//Consider Minus Cases W24 - W04
function primaryWinW24Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W24", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W24[0]:
      switch (reel2Symb) {
        case SYMBOLS_W24[1]:
          switch (reel3Symb) {
            case SYMBOLS_W04[2]:
              break;
            default:
              result = {
                ...result,
                win: WIN_PAYOUT_W24 * betValues[betIndex][denomIndex],
                winBox: [true, true, false],
              };
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW25(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W25[0]:
      switch (reel2Symb) {
        case SYMBOLS_W25[1]:
          switch (reel3Symb) {
            case SYMBOLS_W25[2]:
              payout = WIN_PAYOUT_W25 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW25Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W25", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W25[0]:
      switch (reel2Symb) {
        case SYMBOLS_W25[1]:
          switch (reel3Symb) {
            case SYMBOLS_W25[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W25 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW26(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W26[0]:
      switch (reel2Symb) {
        case SYMBOLS_W26[1]:
          switch (reel3Symb) {
            case SYMBOLS_W26[2]:
              payout = WIN_PAYOUT_W26 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW26Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W26", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W26[0]:
      switch (reel2Symb) {
        case SYMBOLS_W26[1]:
          switch (reel3Symb) {
            case SYMBOLS_W26[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W26 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW27(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W27[0]:
      switch (reel2Symb) {
        case SYMBOLS_W27[1]:
          switch (reel3Symb) {
            case SYMBOLS_W27[2]:
              payout = WIN_PAYOUT_W27 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW27Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W27", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W27[0]:
      switch (reel2Symb) {
        case SYMBOLS_W27[1]:
          switch (reel3Symb) {
            case SYMBOLS_W27[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W27 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW28(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W28[0]:
      switch (reel2Symb) {
        case SYMBOLS_W28[1]:
          switch (reel3Symb) {
            case SYMBOLS_W28[2]:
              payout = WIN_PAYOUT_W28 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW28Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W28", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W28[0]:
      switch (reel2Symb) {
        case SYMBOLS_W28[1]:
          switch (reel3Symb) {
            case SYMBOLS_W28[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W28 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW29(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W29[0]:
      switch (reel2Symb) {
        case SYMBOLS_W29[1]:
          switch (reel3Symb) {
            case SYMBOLS_W29[2]:
              payout = WIN_PAYOUT_W29 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW29Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W29", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W29[0]:
      switch (reel2Symb) {
        case SYMBOLS_W29[1]:
          switch (reel3Symb) {
            case SYMBOLS_W29[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W29 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW30(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W30[0]:
      switch (reel2Symb) {
        case SYMBOLS_W30[1]:
          switch (reel3Symb) {
            case SYMBOLS_W30[2]:
              payout = WIN_PAYOUT_W30 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW30Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W30", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W30[0]:
      switch (reel2Symb) {
        case SYMBOLS_W30[1]:
          switch (reel3Symb) {
            case SYMBOLS_W30[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W30 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW31(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W31[0]:
      switch (reel2Symb) {
        case SYMBOLS_W31[1]:
          switch (reel3Symb) {
            case SYMBOLS_W31[2]:
              payout = WIN_PAYOUT_W31 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}

function primaryWinW31Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W31", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W31[0]:
      switch (reel2Symb) {
        case SYMBOLS_W31[1]:
          switch (reel3Symb) {
            case SYMBOLS_W31[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W31 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW32(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel3Symb) {
    case SYMBOLS_W32[2]:
      payout = WIN_PAYOUT_W32 * betValues[betIndex][denomIndex];
      break;
    default:
      break;
  }

  return payout;
}

function primaryWinW32Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W32", win: 0, winBox: [false, false, false] };
  switch (reel3Symb) {
    case SYMBOLS_W32[2]:
      result = {
        ...result,
        win: WIN_PAYOUT_W32 * betValues[betIndex][denomIndex],
        winBox: [false, false, true],
      };
      break;
    default:
      break;
  }

  return result;
}

// const SYMBOLS_W33 = ["A7", "A7", "2X"];
// Consider Minus Cases W33 -
function primaryWinW33(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case "SS":
      switch (reel2Symb) {
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W33[2]:
              payout = WIN_PAYOUT_W33 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "RS":
      switch (reel2Symb) {
        case "SS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W33[2]:
              payout = WIN_PAYOUT_W33 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "BS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
          switch (reel3Symb) {
            case SYMBOLS_W33[2]:
              payout = WIN_PAYOUT_W33 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
// const SYMBOLS_W33 = ["A7", "A7", "2X"];
// Consider Minus Cases W33 -
function primaryWinW33Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W33", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case "SS":
      switch (reel2Symb) {
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W33[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W33 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "RS":
      switch (reel2Symb) {
        case "SS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W33[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W33 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "BS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
          switch (reel3Symb) {
            case SYMBOLS_W33[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W33 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

//const SYMBOLS_W34 = ["A7", "A7", "A7"];
//Consider Minus Cases W34 -
function primaryWinW34(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case "SS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case "SS":
              switch (reel2Symb) {
                case "RS":
                case "BS":
                  payout = WIN_PAYOUT_W34 * betValues[betIndex][denomIndex];
                  break;
                default:
                  break;
              }
              break;
            case "RS":
            case "BS":
              payout = WIN_PAYOUT_W34 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "RS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case "RS":
              switch (reel2Symb) {
                case "SS":
                case "BS":
                  payout = WIN_PAYOUT_W34 * betValues[betIndex][denomIndex];
                  break;
                default:
                  break;
              }
              break;
            case "SS":
            case "BS":
              payout = WIN_PAYOUT_W34 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "BS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case "BS":
              switch (reel2Symb) {
                case "SS":
                case "RS":
                  payout = WIN_PAYOUT_W34 * betValues[betIndex][denomIndex];
                  break;
                default:
                  break;
              }
              break;
            case "SS":
            case "RS":
              payout = WIN_PAYOUT_W34 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
//const SYMBOLS_W34 = ["A7", "A7", "A7"];
//Consider Minus Cases W34 -
function primaryWinW34Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W34", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case "SS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case "SS":
              switch (reel2Symb) {
                case "RS":
                case "BS":
                  result = {
                    ...result,
                    win: WIN_PAYOUT_W34 * betValues[betIndex][denomIndex],
                    winBox: [true, true, true],
                  };
                  break;
                default:
                  break;
              }
              break;
            case "RS":
            case "BS":
              result = {
                ...result,
                win: WIN_PAYOUT_W34 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "RS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case "RS":
              switch (reel2Symb) {
                case "SS":
                case "BS":
                  result = {
                    ...result,
                    win: WIN_PAYOUT_W34 * betValues[betIndex][denomIndex],
                    winBox: [true, true, true],
                  };
                  break;
                default:
                  break;
              }
              break;
            case "SS":
            case "BS":
              result = {
                ...result,
                win: WIN_PAYOUT_W34 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "BS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case "BS":
              switch (reel2Symb) {
                case "SS":
                case "RS":
                  result = {
                    ...result,
                    win: WIN_PAYOUT_W34 * betValues[betIndex][denomIndex],
                    winBox: [true, true, true],
                  };
                  break;
                default:
                  break;
              }
              break;
            case "SS":
            case "RS":
              result = {
                ...result,
                win: WIN_PAYOUT_W34 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

//const SYMBOLS_W35 = ["A7", "A7", "WI"];
//Consider Minus Cases W35 -
function primaryWinW35(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case "SS":
      switch (reel2Symb) {
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W35[2]:
              payout = WIN_PAYOUT_W35 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "RS":
      switch (reel2Symb) {
        case "SS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W35[2]:
              payout = WIN_PAYOUT_W35 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "BS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
          switch (reel3Symb) {
            case SYMBOLS_W35[2]:
              payout = WIN_PAYOUT_W35 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
//const SYMBOLS_W35 = ["A7", "A7", "WI"];
//Consider Minus Cases W35 -
function primaryWinW35Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W35", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case "SS":
      switch (reel2Symb) {
        case "RS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W35[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W35 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "RS":
      switch (reel2Symb) {
        case "SS":
        case "BS":
          switch (reel3Symb) {
            case SYMBOLS_W35[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W35 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "BS":
      switch (reel2Symb) {
        case "SS":
        case "RS":
          switch (reel3Symb) {
            case SYMBOLS_W35[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W35 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW36(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel3Symb) {
    case SYMBOLS_W36[2]:
      payout = WIN_PAYOUT_W36 * betValues[betIndex][denomIndex];
      break;
    default:
      break;
  }

  return payout;
}

function primaryWinW36Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W36", win: 0, winBox: [false, false, false] };
  switch (reel3Symb) {
    case SYMBOLS_W36[2]:
      result = {
        ...result,
        win: WIN_PAYOUT_W36 * betValues[betIndex][denomIndex],
        winBox: [false, false, true],
      };
      break;
    default:
      break;
  }

  return result;
}

// const SYMBOLS_W37 = ["AB", "AB", "2X"];
//Consider Minus Cases W37 -
function primaryWinW37(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case "3B":
      switch (reel2Symb) {
        case "2B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W37[2]:
              payout = WIN_PAYOUT_W37 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "2B":
      switch (reel2Symb) {
        case "3B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W37[2]:
              payout = WIN_PAYOUT_W37 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "1B":
      switch (reel2Symb) {
        case "3B":
        case "2B":
          switch (reel3Symb) {
            case SYMBOLS_W37[2]:
              payout = WIN_PAYOUT_W37 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
// const SYMBOLS_W37 = ["AB", "AB", "2X"];
//Consider Minus Cases W37 -
function primaryWinW37Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W37", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case "3B":
      switch (reel2Symb) {
        case "2B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W37[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W37 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "2B":
      switch (reel2Symb) {
        case "3B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W37[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W37 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "1B":
      switch (reel2Symb) {
        case "3B":
        case "2B":
          switch (reel3Symb) {
            case SYMBOLS_W37[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W37 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

// const SYMBOLS_W38 = ["T1", "*", "*"];
//Consider Minus Cases
function primaryWinW38(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W38[0]:
      switch (reel2Symb) {
        case SYMBOLS_W38[0]:
          break;
        default:
          payout = WIN_PAYOUT_W38 * betValues[betIndex][denomIndex];
          break;
      }
      break;
    default:
      break;
  }

  return payout;
}

// const SYMBOLS_W38 = ["T1", "*", "*"];
//Consider Minus Cases
function primaryWinW38Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W38", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W38[0]:
      switch (reel2Symb) {
        case SYMBOLS_W38[0]:
          break;
        default:
          result = {
            ...result,
            win: WIN_PAYOUT_W38 * betValues[betIndex][denomIndex],
            winBox: [true, false, false],
          };
          break;
      }
      break;
    default:
      break;
  }

  return result;
}

// const SYMBOLS_W39 = ["T2", "*", "*"];
//Consider Minus Cases
function primaryWinW39(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W39[0]:
      switch (reel2Symb) {
        case SYMBOLS_W39[0]:
          break;
        default:
          payout = WIN_PAYOUT_W39 * betValues[betIndex][denomIndex];
          break;
      }
      break;
    default:
      break;
  }

  return payout;
}

// const SYMBOLS_W39 = ["T2", "*", "*"];
//Consider Minus Cases
function primaryWinW39Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W39", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W39[0]:
      switch (reel2Symb) {
        case SYMBOLS_W39[0]:
          break;
        default:
          result = {
            ...result,
            win: WIN_PAYOUT_W39 * betValues[betIndex][denomIndex],
            winBox: [true, false, false],
          };
          break;
      }
      break;
    default:
      break;
  }

  return result;
}

// const SYMBOLS_W40 = ["T3", "*", "*"];
//Consider Minus Cases
function primaryWinW40(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case SYMBOLS_W40[0]:
      switch (reel2Symb) {
        case SYMBOLS_W40[0]:
          break;
        default:
          payout = WIN_PAYOUT_W40 * betValues[betIndex][denomIndex];
          break;
      }
      break;
    default:
      break;
  }

  return payout;
}

// const SYMBOLS_W40 = ["T3", "*", "*"];
//Consider Minus Cases
function primaryWinW40Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W40", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case SYMBOLS_W40[0]:
      switch (reel2Symb) {
        case SYMBOLS_W40[0]:
          break;
        default:
          result = {
            ...result,
            win: WIN_PAYOUT_W40 * betValues[betIndex][denomIndex],
            winBox: [true, false, false],
          };
          break;
      }
      break;
    default:
      break;
  }

  return result;
}

//const SYMBOLS_W41 = ["AB", "AB", "AB"];
//Consider Minus Cases
function primaryWinW41(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case "3B":
      switch (reel2Symb) {
        case "3B":
          switch (reel3Symb) {
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        case "2B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        case "1B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "2B":
      switch (reel2Symb) {
        case "3B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        case "2B":
          switch (reel3Symb) {
            case "3B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        case "1B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "1B":
      switch (reel2Symb) {
        case "3B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        case "2B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        case "1B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
              payout = WIN_PAYOUT_W41 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
//const SYMBOLS_W41 = ["AB", "AB", "AB"];
//Consider Minus Cases
function primaryWinW41Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W41", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case "3B":
      switch (reel2Symb) {
        case "3B":
          switch (reel3Symb) {
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        case "2B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        case "1B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "2B":
      switch (reel2Symb) {
        case "3B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        case "2B":
          switch (reel3Symb) {
            case "3B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        case "1B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "1B":
      switch (reel2Symb) {
        case "3B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        case "2B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
            case "1B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        case "1B":
          switch (reel3Symb) {
            case "3B":
            case "2B":
              result = {
                ...result,
                win: WIN_PAYOUT_W41 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

//const SYMBOLS_W42 = ["AB", "AB", "WI"];
//Consider Minus Cases
function primaryWinW42(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel1Symb) {
    case "3B":
      switch (reel2Symb) {
        case "2B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W42[2]:
              payout = WIN_PAYOUT_W42 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "2B":
      switch (reel2Symb) {
        case "3B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W42[2]:
              payout = WIN_PAYOUT_W42 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "1B":
      switch (reel2Symb) {
        case "3B":
        case "2B":
          switch (reel3Symb) {
            case SYMBOLS_W42[2]:
              payout = WIN_PAYOUT_W42 * betValues[betIndex][denomIndex];
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return payout;
}
//const SYMBOLS_W42 = ["AB", "AB", "WI"];
//Consider Minus Cases
function primaryWinW42Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W42", win: 0, winBox: [false, false, false] };
  switch (reel1Symb) {
    case "3B":
      switch (reel2Symb) {
        case "2B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W42[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W42 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "2B":
      switch (reel2Symb) {
        case "3B":
        case "1B":
          switch (reel3Symb) {
            case SYMBOLS_W42[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W42 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "1B":
      switch (reel2Symb) {
        case "3B":
        case "2B":
          switch (reel3Symb) {
            case SYMBOLS_W42[2]:
              result = {
                ...result,
                win: WIN_PAYOUT_W42 * betValues[betIndex][denomIndex],
                winBox: [true, true, true],
              };
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return result;
}

function primaryWinW43(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let payout = 0;
  switch (reel3Symb) {
    case SYMBOLS_W43[2]:
      payout =
        betIndex == 4 ? WIN_PAYOUT_W43 * betValues[betIndex][denomIndex] : 0;
      break;
    default:
      break;
  }

  return payout;
}

function primaryWinW43Obj(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let result = { id: "W43", win: 0, winBox: [false, false, false] };
  switch (reel3Symb) {
    case SYMBOLS_W43[2]:
      result = {
        ...result,
        win:
          betIndex == 4 ? WIN_PAYOUT_W43 * betValues[betIndex][denomIndex] : 0,
        winBox: [false, false, true],
      };

      break;
    default:
      break;
  }

  return result;
}

function getPrimaryWin(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  let win = 0;
  win += primaryWinW01(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW02(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW03(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW04(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW05(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW06(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW07(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW08(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW09(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW10(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW11(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += flags.features.FEATURE_SIX_OF_EIGHTEEN_ENABLED
    ? 0
    : primaryWinW12(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW13(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW14(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW15(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW16(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW17(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW18(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW19(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW20(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW21(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW22(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += flags.features.FEATURE_HIT_OR_MISS_ENABLED
    ? 0
    : primaryWinW23(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW24(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW25(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW26(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW27(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW28(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW29(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW30(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW31(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += flags.features.FEATURE_RANDOM_ENABLED
    ? 0
    : primaryWinW32(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW33(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW34(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW35(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += flags.features.FEATURE_ONE_OF_THREE_ENABLED
    ? 0
    : primaryWinW36(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW37(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW38(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW39(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW40(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW41(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += primaryWinW42(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);
  win += flags.features.FEATURE_MONEY_WHEEL_ENABLED
    ? 0
    : primaryWinW43(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex);

  return win;
}

function isJackpot1Win(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  var isJackpotWin = false;
  switch (reel1Symb) {
    case SYMBOLS_W01[0]:
      switch (reel2Symb) {
        case SYMBOLS_W01[1]:
          switch (reel3Symb) {
            case SYMBOLS_W01[2]:
              betIndex == 4 ? (isJackpotWin = true) : (isJackpotWin = false);
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return isJackpotWin;
}

function isJackpot2Win(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  var isJackpotWin = false;
  switch (reel1Symb) {
    case SYMBOLS_W02[0]:
      switch (reel2Symb) {
        case SYMBOLS_W02[1]:
          switch (reel3Symb) {
            case SYMBOLS_W02[2]:
              // betIndex == 4 ? (isJackpotWin = true) : (isJackpotWin = false);
              isJackpotWin = true;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return isJackpotWin;
}

function isJackpot3Win(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  var isJackpotWin = false;
  switch (reel1Symb) {
    case SYMBOLS_W03[0]:
      switch (reel2Symb) {
        case SYMBOLS_W03[1]:
          switch (reel3Symb) {
            case SYMBOLS_W03[2]:
              // betIndex == 4 ? (isJackpotWin = true) : (isJackpotWin = false);
              isJackpotWin = true;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return isJackpotWin;
}

function isJackpot4Win(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex) {
  var isJackpotWin = false;
  switch (reel1Symb) {
    case SYMBOLS_W04[0]:
      switch (reel2Symb) {
        case SYMBOLS_W04[1]:
          switch (reel3Symb) {
            case SYMBOLS_W04[2]:
              // betIndex == 4 ? (isJackpotWin = true) : (isJackpotWin = false);
              isJackpotWin = true;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return isJackpotWin;
}

function isAnticipationActCase(reel1Symb, reel2Symb) {
  let anticipationAct = false;
  switch (reel1Symb) {
    case SYMBOLS_W01[0]:
      switch (reel2Symb) {
        case SYMBOLS_W01[1]:
          anticipationAct = true;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  switch (reel1Symb) {
    case SYMBOLS_W02[0]:
      switch (reel2Symb) {
        case SYMBOLS_W02[1]:
          anticipationAct = true;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  switch (reel1Symb) {
    case SYMBOLS_W03[0]:
      switch (reel2Symb) {
        case SYMBOLS_W03[1]:
          anticipationAct = true;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  switch (reel1Symb) {
    case SYMBOLS_W04[0]:
      switch (reel2Symb) {
        case SYMBOLS_W04[1]:
          anticipationAct = true;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return anticipationAct;
}

function getPrimaryCyclicWinArr(
  reel1Symb,
  reel2Symb,
  reel3Symb,
  betIndex,
  denomIndex
) {
  let cyclicWinArr = [];
  if (
    primaryWinW01Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW01Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW02Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW02Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW03Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW03Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW04Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW04Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW05Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW05Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW06Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW06Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW07Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW07Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW08Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW08Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW09Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW09Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW10Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW10Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW11Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW11Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW12Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW12Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW13Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW13Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW14Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW14Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW15Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW15Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW16Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW16Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW17Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW17Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW18Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW18Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW19Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW19Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW20Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW20Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW21Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW21Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW22Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW22Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW23Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW23Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW24Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW24Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW25Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW25Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW26Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW26Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW27Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW27Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW28Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW28Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW29Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW29Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW30Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW30Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW31Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW31Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW32Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW32Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW33Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW33Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW34Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW34Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW35Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW35Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW36Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW36Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW37Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW37Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW38Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW38Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW39Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW39Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW40Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW40Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW41Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW41Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }
  if (
    primaryWinW42Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW42Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }

  if (
    primaryWinW43Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
      .win > 0
  ) {
    cyclicWinArr.push(
      primaryWinW43Obj(reel1Symb, reel2Symb, reel3Symb, betIndex, denomIndex)
    );
  }

  return cyclicWinArr;
}

module.exports = {
  getPrimaryWin,
  getPrimaryCyclicWinArr,
  isAnticipationActCase,
  isJackpot1Win,
  isJackpot2Win,
  isJackpot3Win,
  isJackpot4Win,
};
