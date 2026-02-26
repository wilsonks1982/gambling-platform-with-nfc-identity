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
 * |  03/02/2025   | Wilson Sam   |     Updated     |  SLOT-1357 Central Server: Persistence Support for Game History , Data should not be lost on Server restart.
 * |  04/02/2025   | Wilson Sam   |     Updated     |  SLOT-1411 Central Server: Game History Filter Support
 * |  20/03/2025   | Wilson Sam   |     Updated     |  SLOT-1411 Central Server: Game History Filter Support Extended with uid and egmId
 * |  22/03/2025   | Wilson Sam   |     Updated     |  Added Station Meters related services
 * |  25/03/2025   | Wilson Sam   |     Updated     |  Added Jackpot Persistence Support
 * **********************************************************************************************************************************************************************
 * */
//Ramda is a powerful library that facilitates functional programming in JavaScript by
//providing tools for immutability, currying, and function composition.

const R = require("ramda");
const {
  generatePrimaryKey,
  generateTimeStamp,
  timestampGreaterThan,
} = require("../timestamp");
const { updateOneUserSpinResult } = require("../user-service");
const {
  SendJackpotMeterWin,
  SendJackpotMeterReset,
  SendJackpotMeterRollup,
} = require("../gateway-service");
const { betsValues, denomValues } = require("./paytable");
const {
  getPrimaryWin,
  getPrimaryCyclicWinArr,
  isAnticipationActCase,
  isJackpot1Win,
  isJackpot2Win,
  isJackpot3Win,
  isJackpot4Win,
} = require("./primary");
const {
  Reel1,
  GetReel1StripIndex,
  getReel1Symbol,
  getReel1Index,
} = require("./reels/reel1");
const {
  Reel2,
  GetReel2StripIndex,
  getReel2Symbol,
  getReel2Index,
} = require("./reels/reel2");
const {
  Reel3,
  GetReel3StripIndex,
  getReel3Symbol,
  getReel3Index,
} = require("./reels/reel3");
const { getSecondaryWin } = require("./secondary");

const { wheelConfig } = require("./secondary/money-wheel");
const { Game, ProgressiveJackpot } = require("../../db/mongodb");
const {
  validateAndRecordJackpotWin,
  validateAndIncrementJackpot,
} = require("../jackpot-service");

var JDTicker = 400000;
var JDContrib = 0.005;

async function initializeJackpotDhamaka() {
  const jackpotDhamaka = await ProgressiveJackpot.findOne({ id: 1 });
  JDTicker = jackpotDhamaka.currentAmount;
  JDContrib = jackpotDhamaka.incrementRate;
}

function calculateTotalWinnings(secGame) {
  // Check if secGame exists and has winData
  if (!secGame || !secGame.winData) {
    return 0; // Return early for better readability
  }

  // Calculate total winnings using reduce
  return secGame.winData.reduce((accumulator, win) => {
    return accumulator + (win.winAmount || 0); // Safeguard against undefined winAmount
  }, 0);
}

async function computeOneUserSpinRequest(req, validSpin) {
  const {
    uid,
    betIndex,
    denomIndex,
    egmId = "",
    GameId = "WAS-01",
    s1 = "0",
    s2 = "0",
    s3 = "0",
    isGaffingOn = "False",
  } = req.query;

  const betNumber = Number(betIndex); //Query strings are strings by default
  const denomNumber = Number(denomIndex); //Query strings are strings by default

  var reel1Index;
  var reel2Index;
  var reel3Index;

  if (isGaffingOn === "True") {
    reel1Index = +s1;
    reel2Index = +s2;
    reel3Index = +s3;
  } else {
    reel1Index = getReel1Index(betNumber);
    reel2Index = getReel2Index(betNumber);
    reel3Index = getReel3Index(betNumber);
  }

  const reel1Symb = getReel1Symbol(reel1Index);
  const reel2Symb = getReel2Symbol(reel2Index);
  const reel3Symb = getReel3Symbol(reel3Index);

  const primaryGameWin = getPrimaryWin(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const primaryCyclicWinArr = getPrimaryCyclicWinArr(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const secondaryGameWin = getSecondaryWin(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const isAnticipation = isAnticipationActCase(reel1Symb, reel2Symb);

  const isJp1Win = isJackpot1Win(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const isJp2Win = isJackpot2Win(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const isJp3Win = isJackpot3Win(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const isJp4Win = isJackpot4Win(
    reel1Symb,
    reel2Symb,
    reel3Symb,
    betNumber,
    denomNumber
  );

  const primaryKey = generatePrimaryKey();
  const reelIndices = [reel1Index, reel2Index, reel3Index];
  const symbols = [reel1Symb, reel2Symb, reel3Symb];
  const jackpotContrib = validSpin.betAmount * JDContrib; //calculates 0.5% of a given value
  var totalSecWinAmount = 0;
  var totalWin = 0;
  var result = null;

  if (isJp1Win) {
    //JACKPOT DHAMAKA WIN
    totalWin = Math.floor(JDTicker + jackpotContrib);
  } else {
    //NORMAL WIN
    totalSecWinAmount = calculateTotalWinnings(secondaryGameWin);
    totalWin = primaryGameWin + totalSecWinAmount;
  }

  const spinResult = await updateOneUserSpinResult(
    uid,
    validSpin.wallet,
    validSpin.betAmount,
    totalWin
  );

  if (!spinResult.ok) {
    console.log(`INVALID SPIN: ${spinResult.msg}`);

    result = {
      ok: 0,
      uid: uid,
      spinNumber: validSpin.spinNumber,
      gameId: validSpin.spinNumber,
      GameId: GameId,
      egmId: egmId,
      reelIndices: reelIndices,
      symbols: symbols,
      rotationTime: [2, 3, 4],
      coin: betsValues[betNumber],
      bet: betsValues[betNumber],
      betIndex: betNumber,
      denom: denomValues[denomNumber],
      denomIndex: denomNumber,
      win: totalWin,
      secWin: {},
      anticipation: isAnticipation,
      cyclicWinArr: [],
      totalSecWinAmount: 0,
      totalWin: totalWin,
      wallet: validSpin.wallet,
      betAmount: validSpin.betAmount,
      winAmount: validSpin.betAmount,
      oldCredit: validSpin.wallet,
      newCredit: validSpin.wallet,
      jackpotContrib: jackpotContrib,
      isJackpot1Win: isJp1Win,
      isJackpot2Win: isJp2Win,
      isJackpot3Win: isJp3Win,
      isJackpot4Win: isJp4Win,
      isGaffingOn: isGaffingOn,
      msg: spinResult.msg,
      spinEnd: generateTimeStamp(),
      statusCode: 400, // 400 (Bad Request) status code
    };
    return result;
  } else {
    if (isJp1Win) {
      //Tigger Point for Jackpot Win
      await validateAndRecordJackpotWin("1", uid);

      JDTicker = JDTicker + jackpotContrib;
      SendJackpotMeterWin(JDTicker, egmId);

      const jackpotDhamaka = await ProgressiveJackpot.findOne({ id: 1 });

      JDTicker = jackpotDhamaka.baseAmount || 400000;
      JDContrib = jackpotDhamaka.incrementRate || 0.005;

      setTimeout(() => {
        SendJackpotMeterReset(JDTicker, egmId);
      }, 20000);

      result = {
        ok: 1,
        id: primaryKey,
        uid: uid,
        spinNumber: validSpin.spinNumber,
        gameId: validSpin.spinNumber,
        GameId: GameId,
        egmId: egmId,
        reelIndices: reelIndices,
        symbols: symbols,
        rotationTime: [2, 3, 4],
        coin: betsValues[betNumber],
        bet: betsValues[betNumber],
        betIndex: betNumber,
        denom: denomValues[denomNumber],
        denomIndex: denomNumber,
        win: totalWin,
        secWin: {},
        anticipation: isAnticipation,
        cyclicWinArr: [],
        totalSecWinAmount: 0,
        totalWin: totalWin,
        wallet: validSpin.wallet,
        betAmount: spinResult.betAmount,
        winAmount: spinResult.winAmount,
        oldCredit: spinResult.oldCredit,
        newCredit: spinResult.newCredit,
        jackpotContrib: jackpotContrib,
        isJackpot1Win: isJp1Win,
        isJackpot2Win: isJp2Win,
        isJackpot3Win: isJp3Win,
        isJackpot4Win: isJp4Win,
        isGaffingOn: isGaffingOn,
        msg: spinResult.msg,
        spinEnd: generateTimeStamp(),
        statusCode: 201, // the request has been fulfilled
      };
      return result;
    } else {
      await validateAndIncrementJackpot("1", spinResult.betAmount);
      //Tigger Point for Normal Win
      JDTicker = JDTicker + jackpotContrib;
      SendJackpotMeterRollup(JDTicker, egmId);

      result = {
        ok: 1,
        id: primaryKey,
        uid: uid,
        spinNumber: validSpin.spinNumber,
        gameId: validSpin.spinNumber,
        GameId: GameId,
        egmId: egmId,
        reelIndices: reelIndices,
        symbols: symbols,
        rotationTime: [2, 3, 4],
        coin: betsValues[betNumber],
        bet: betsValues[betNumber],
        betIndex: betNumber,
        denom: denomValues[denomNumber],
        denomIndex: denomNumber,
        win: primaryGameWin,
        secWin: secondaryGameWin,
        anticipation: isAnticipation,
        cyclicWinArr: primaryCyclicWinArr,
        totalSecWinAmount: totalSecWinAmount,
        totalWin: totalWin,
        wallet: validSpin.wallet,
        betAmount: spinResult.betAmount,
        winAmount: spinResult.winAmount,
        oldCredit: spinResult.oldCredit,
        newCredit: spinResult.newCredit,
        jackpotContrib: jackpotContrib,
        isJackpot1Win: isJp1Win,
        isJackpot2Win: isJp2Win,
        isJackpot3Win: isJp3Win,
        isJackpot4Win: isJp4Win,
        isGaffingOn: isGaffingOn,
        spinEnd: generateTimeStamp(),
        statusCode: 201, // the request has been fulfilled
      };

      return result;
    }
  }
}

async function saveGameRecord(record) {
  try {
    const gameRecordDocument = new Game({
      ok: record.ok,
      id: record.id,
      uid: record.uid,
      spinNumber: record.spinNumber,
      gameId: record.gameId,
      GameId: record.GameId,
      egmId: record.egmId,
      reelIndices: record.reelIndices,
      symbols: record.symbols,
      rotationTime: record.rotationTime,
      coin: record.coin,
      bet: record.bet,
      betIndex: record.betIndex,
      denom: record.denom,
      denomIndex: record.denomIndex,
      win: record.win,
      anticipation: record.anticipation,
      totalSecWinAmount: record.totalSecWinAmount,
      totalWin: record.totalWin,
      wallet: record.wallet,
      betAmount: record.betAmount,
      winAmount: record.winAmount,
      oldCredit: record.oldCredit,
      newCredit: record.newCredit,
      jackpotContrib: record.jackpotContrib,
      isJackpot1Win: record.isJackpot1Win,
      isJackpot2Win: record.isJackpot2Win,
      isJackpot3Win: record.isJackpot3Win,
      isJackpot4Win: record.isJackpot4Win,
      isGaffingOn: record.isGaffingOn,
      spinStart: record.spinStart,
      spinEnd: record.spinEnd,
      statusCode: record.statusCode,
    });

    try {
      await gameRecordDocument.save();

      return {
        ok: 1,
        msg: "ok",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error saving game record:", error);
      return {
        ok: 0,
        msg: error,
        statusCode: 500,
      };
    }
  } catch (error) {
    return {
      ok: 0,
      msg: error,
      statusCode: 500,
    };
  }
}

async function findGameRecords(req) {
  const hasEgmId = R.has("egmId", req.query);
  const hasUid = R.has("uid", req.query);

  if (hasEgmId & hasUid) {
    const { uid, egmId } = req.query;

    const games = await Game.find({ egmId: egmId, uid: uid });
    return games.reverse();
  } else if (hasEgmId && !hasUid) {
    const { egmId } = req.query;

    const games = await Game.find({ egmId: egmId });
    return games.reverse();
  } else if (hasUid && !hasEgmId) {
    const { uid } = req.query;

    const games = await Game.find({
      uid: uid,
    });
    return games.reverse();
  } else {
    const games = await Game.find();
    return games.reverse();
  }
}

async function fetchAccountingMeters(egmId, lastReset) {
  try {
    const games = (await Game.find({ egmId: egmId })).filter(
      (game) => timestampGreaterThan(game.spinStart, lastReset) // Filter games after the last reset
    );

    if (!games || games.length === 0) {
      return {
        totalCreditsBet: 0,
        totalCreditsWon: 0,
        totalCreditsLost: 0,
        totalGamesPlayed: 0,
        totalGamesWon: 0,
        totalGamesLost: 0,
      };
    }

    const creditsBet = [];
    const creditsWon = [];
    const creditsLost = [];
    const gamesPlayed = [];
    const gamesWon = [];
    const gamesLost = [];

    games.forEach((game) => {
      creditsBet.push(game.betAmount);
      creditsWon.push(game.totalWin);
      creditsLost.push(game.betAmount - game.totalWin);
      gamesPlayed.push(1);
      gamesWon.push(game.totalWin > 0 ? 1 : 0);
      gamesLost.push(game.totalWin === 0 ? 1 : 0);
    });

    const totalCreditsBet = creditsBet.reduce((acc, credit) => acc + credit, 0);
    const totalCreditsWon = creditsWon.reduce((acc, credit) => acc + credit, 0);
    const totalCreditsLost = creditsLost.reduce(
      (acc, credit) => acc + credit,
      0
    );
    const totalGamesPlayed = gamesPlayed.reduce((acc, game) => acc + game, 0);
    const totalGamesWon = gamesWon.reduce((acc, game) => acc + game, 0);
    const totalGamesLost = gamesLost.reduce((acc, game) => acc + game, 0);

    return {
      totalCreditsBet,
      totalCreditsWon,
      totalCreditsLost,
      totalGamesPlayed,
      totalGamesWon,
      totalGamesLost,
    };
  } catch (error) {
    console.error("Error fetching accounting meters:", error);
    throw error; // Re-throw to propagate the error
  }
}

module.exports = {
  Reel1,
  GetReel1StripIndex,
  Reel2,
  GetReel2StripIndex,
  Reel3,
  GetReel3StripIndex,
  wheelConfig,
  computeOneUserSpinRequest,
  saveGameRecord,
  findGameRecords,
  fetchAccountingMeters,
  initializeJackpotDhamaka,
};
