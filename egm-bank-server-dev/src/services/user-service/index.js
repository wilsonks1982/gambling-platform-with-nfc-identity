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
 * |  31/08/2024   | Wilson Sam   |     Created     |  File Creation
 * |  22/03/2025   | Wilson Sam   |     Updated     |  Added Station Meters related services
 * |  14/05/2025   | Wilson Sam   |     Updated     |  Added Deposit and Withdraw Transaction wallet mismatch check
 * **********************************************************************************************************************************************************************
 * */
//Ramda is a powerful library that facilitates functional programming in JavaScript by
//providing tools for immutability, currying, and function composition.
const R = require("ramda");
const { isInteger, isPresent } = require("ramda-validations");

// const { User } = require("../../db/jsonfile");
const { logMessage } = require("../logging-service");
const { User, Transaction } = require("../../db/mongodb");
const { betsValues, denomValues } = require("../game-service/paytable");
const { PTransaction } = require("../../db/mongodb/config/standalone");
const {
  generateTimeStamp,
  generatePrimaryKey,
  timestampGreaterThan,
} = require("../timestamp");

const isLength = (length) => R.pipe(R.length, R.equals(length));
const validateUidLength = isLength(8);

const inRange = R.curry((min, max, val) => {
  return R.gte(val, min) && R.lte(val, max);
});

const getWallet = R.prop("wallet");

function makeRecord(
  uid, //Player Id
  transType, //Attempt, Successful, Failed
  transBy, //Red, Black, Key
  amount,
  wallet,
  isDeposit
) {
  const primaryKey = generatePrimaryKey();
  const timestamp = generateTimeStamp();
  const depositAmount = isDeposit == true ? amount : 0;
  const withdrawAmount = isDeposit == false ? amount : 0;
  const prevCredit = wallet;
  const thenCredit = isDeposit == true ? wallet + amount : wallet - amount;

  return {
    primaryKey: { S: primaryKey },
    uid: { S: uid },
    id: { S: primaryKey },
    transType: { S: transType },
    transBy: { S: transBy },
    depositAmount: { N: depositAmount },
    withdrawAmount: { N: withdrawAmount },
    prevCredit: { N: prevCredit },
    thenCredit: { N: thenCredit },
    timestamp: { S: timestamp },
  };
}

async function findOneUser(uid = "") {
  try {
    const user = await User.findOne({ uid: uid });
    if (!user) {
      return {
        ok: 0,
        uid: uid,
        msg: `Invalid uid provided uid: ${uid}`,
      };
    } else {
      logMessage("info", `findOneUser success ${uid} with ${user.wallet}`);

      return {
        ok: 1,
        user,
        msg: "ok",
      };
    }
  } catch (error) {
    return {
      ok: 0,
      user: { uid },
      msg: error,
    };
  }
}

async function findUser() {
  const users = await User.find();
  return users;
}

async function findStationTransaction(egmId, lastReset) {
  try {
    const filter = R.isNil(egmId) ? {} : { egmId: egmId };
    const transactionResults = (await Transaction.find(filter)).filter(
      (transaction) =>
        timestampGreaterThan(transaction.transStartTime, lastReset) // Filter transaction after the last reset
    );

    return transactionResults || [];
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}

async function findUserTransaction(uid) {
  try {
    const filter = R.isNil(uid) ? {} : { uid: uid };

    const transactionResults = await Transaction.find(filter);
    const count = await Transaction.countDocuments(filter);

    if (!transactionResults) {
      return {
        ok: 0,
        transaction: [],
        msg: `Invalid uid provided uid: ${uid}`,
        statusCode: 404, //404 Not Found: The requested information was not found
      };
    } else {
      return {
        ok: 1,
        transaction: transactionResults,
        msg: "ok",
        statusCode: 200,
      };
    }
  } catch (error) {
    return {
      ok: 0,
      transaction: [],
      msg: error,
      statusCode: 500,
    };
  }
}

async function saveDepositTransaction(body) {
  try {
    const transId = generatePrimaryKey();
    const egmId = body.egmId || "egmId";
    const uid = body.uid || "uid";
    const transBy = body.transBy || "System"; //"Player" || "Admin" || "System"
    const transType = "Deposit";
    const depositAmount = parseInt(body.credits);

    if (!Number.isInteger(depositAmount)) {
      console.error(`Invalid data provided credits: ${body.credits}`);
      return {
        ok: 0,
        transaction: {},
        msg: `Invalid data provided credits: ${body.credits}`,
        statusCode: 400,
      };
    }
    const transactionDocument = new Transaction({
      egmId: egmId,
      uid: uid,
      transId: transId,
      transType: transType,
      transBy: transBy,
      depositAmount: depositAmount,
      withdrawAmount: 0,
      prevCredit: depositAmount,
      thenCredit: 0,
      transStartTime: generateTimeStamp(),
      transEndTime: "",
    });

    try {
      await transactionDocument.save();

      return {
        ok: 1,
        msg: "ok",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error saving log:", error);
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

async function saveWithdrawTransaction(body) {
  try {
    const transId = generatePrimaryKey();
    const egmId = body.egmId || "egmId";
    const uid = body.uid || "uid";
    const transBy = body.transBy || "System"; //"Player" || "Admin" || "System"
    const transType = "Withdraw";
    const withdrawAmount = parseInt(body.credits);

    if (!Number.isInteger(withdrawAmount)) {
      console.error(`Invalid data provided credits: ${body.credits}`);
      return {
        ok: 0,
        transaction: {},
        msg: `Invalid data provided credits: ${body.credits}`,
        statusCode: 400,
      };
    }
    const transactionDocument = new Transaction({
      egmId: egmId,
      uid: uid,
      transId: transId,
      transType: transType,
      transBy: transBy,
      depositAmount: 0,
      withdrawAmount: withdrawAmount,
      prevCredit: 0,
      thenCredit: withdrawAmount,
      transStartTime: generateTimeStamp(),
      transEndTime: "",
    });
    try {
      await transactionDocument.save();
      return {
        ok: 1,
        msg: "Ok",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error saving log:", error);
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

async function saveGameTransaction(
  uid,
  transType,
  transBy,
  parsedAmount,
  wallet,
  isWin
) {
  try {
    const newWallet = isWin ? wallet + parsedAmount : wallet - parsedAmount;

    const filter = { id: id };
    const update = { wallet: newWallet };
    const opts = { new: true, upsert: true, includeResultMetadata: true };

    const user = await User.findOneAndUpdate(filter, update, opts);

    if (user) {
      console.log("User updated successfully");

      const dbWallet = user?.wallet;

      if (isWin) {
        const record = makeRecord(
          uid,
          transType,
          transBy,
          parsedAmount,
          dbWallet,
          true
        );
        putItemHistory("transactionHistory", record);
      } else {
        const record = makeRecord(
          uid,
          transType,
          transBy,
          dbWallet,
          wallet,
          false
        );
        putItemHistory("transactionHistory", record);
      }

      res.status(200).json({
        id: uid,
        wallet: dbWallet,
        name: "Updated Resource",
      });
    } else {
      console.log("User not found or already updated");
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

// The 201 (Created) status code indicates that the request has been fulfilled and has resulted
// in one or more new resources being created.

// The 4xx (Client Error) class of status code indicates that the client seems to have erred.
// Except when responding to a HEAD request, the server SHOULD send a representation containing
// an explanation of the error situation, and whether it is a temporary or permanent condition.
// These status codes are applicable to any request method. User agents SHOULD display any included
// representation to the user.
//
// The 400 (Bad Request) status code indicates that the server cannot or will not process the
// request due to something that is perceived to be a client error (e.g., malformed request syntax,
// invalid request message framing.
//
//
//

async function validateOneUserSpinRequest(req, spinNumber) {
  const hasUid = R.has("uid", req.query);
  const hasBetIndex = R.has("betIndex", req.query);
  const hasDenomIndex = R.has("denomIndex", req.query);

  if (hasUid && hasBetIndex && hasDenomIndex) {
    const { uid, betIndex, denomIndex } = req.query;

    const betNumber = Number(betIndex); //Query strings are strings by default
    const denomNumber = Number(denomIndex); //Query strings are strings by default
    //Validate Inputs
    //1. betIndex
    if (!isInteger(betNumber) || !inRange(0, 4, betNumber)) {
      console.error(`Invalid betIndex : ${JSON.stringify(req.query)}`);
      return {
        ok: 0,
        spinNumber: spinNumber,
        uid: uid,
        betAmount: 0,
        wallet: 0,
        query: req.query,
        msg: `Invalid betIndex : ${JSON.stringify(req.query)}`,
        spinEnd: generateTimeStamp(),
        statusCode: 422, // 422 Unprocessable Entity
      };
    }
    //2. denomIndex
    if (!isInteger(denomNumber) || !inRange(0, 8, denomNumber)) {
      console.error(`Invalid denomIndex : ${JSON.stringify(req.query)}`);
      return {
        ok: 0,
        spinNumber: spinNumber,
        uid: uid,
        betAmount: 0,
        wallet: 0,
        query: req.query,
        msg: `Invalid denomIndex : ${JSON.stringify(req.query)}`,
        spinEnd: generateTimeStamp(),
        statusCode: 422, // 422 Unprocessable Entity
      };
    }
    //3. uid
    const bet = betsValues[betNumber];
    const denom = denomValues[denomNumber];
    const betAmount = bet * denom;

    // Model.findOne(conditions, [projection], [options], [callback])
    const user = await User.findOne({ uid });
    const hasEnoughWallet = R.propSatisfies(
      (wallet) => wallet >= betAmount,
      "wallet"
    );
    if (
      validateUidLength(uid) &&
      isPresent(getWallet(user)) &&
      hasEnoughWallet(user)
    ) {
      logMessage("info", `Valid Bet ${uid} ${betAmount} ${getWallet(user)}`);
      return {
        ok: 1,
        spinNumber: spinNumber,
        uid: uid,
        betAmount: betAmount,
        wallet: getWallet(user),
        query: req.query,
        msg: `Valid Bet Amount ${uid} ${betAmount}`,
        spinEnd: generateTimeStamp(),
        statusCode: 201, // the request has been fulfilled
      };
    } else {
      if (!validateUidLength(uid)) {
        logMessage("error", `Invalid uid : ${uid}`);

        return {
          ok: 0,
          spinNumber: spinNumber,
          uid: uid,
          betAmount: betAmount,
          wallet: 0,
          query: req.query,
          msg: `Invalid uid : ${uid}`,
          spinEnd: generateTimeStamp(),
          statusCode: 422, // 422 Unprocessable Entity
        };
      }
      if (!isPresent(getWallet(user))) {
        logMessage("error", `DB Read Fail : ${uid}`);

        return {
          ok: 0,
          spinNumber: spinNumber,
          uid: uid,
          betAmount: betAmount,
          wallet: getWallet(user),
          query: req.query,
          msg: `DB Read Fail: ${uid}`,
          spinEnd: generateTimeStamp(),
          statusCode: 422, // 422 Unprocessable Entity
        };
      }
      if (!hasEnoughWallet(user)) {
        logMessage("error", `Wallet :${betAmount} ${getWallet(user)} ${uid}`);

        return {
          ok: 0,
          spinNumber: spinNumber,
          uid: uid,
          betAmount: betAmount,
          wallet: getWallet(user),
          query: req.query,
          msg: `Insufficient Wallet Balance for ${uid}:${getWallet(user)}`,
          spinEnd: generateTimeStamp(),
          statusCode: 422, // 422 Unprocessable Entity
        };
      }
    }
  } else {
    console.error(`Insufficient Query params: ${JSON.stringify(req.query)}`);
    return {
      ok: 0,
      spinNumber: spinNumber,
      uid: "",
      betAmount: 0,
      wallet: 0,
      query: JSON.stringify(req.query),
      msg: `Insufficient Query params by client: ${JSON.stringify(req.query)}`,
      spinEnd: generateTimeStamp(),
      statusCode: 422, // 422 Unprocessable Entity
    };
  }
}

async function updateOneUserSpinResult(uid, wallet, betAmount, winAmount) {
  try {
    const updateResult = await User.updateOne(
      { uid },
      { $set: { wallet: wallet - betAmount + winAmount } },
      { $set: { updatedAt: generateTimeStamp() } }
    );

    if (updateResult.acknowledged) {
      logMessage(
        "info",
        `Wallet Updated ${wallet} ${wallet - betAmount + winAmount}`
      );

      return {
        ok: 1,
        oldCredit: wallet,
        newCredit: wallet - betAmount + winAmount,
        betAmount: betAmount,
        winAmount: winAmount,
        msg: `Wallet Updated ${wallet} ${wallet - betAmount + winAmount}`,
      };
    } else {
      return {
        ok: 0,
        oldCredit: wallet,
        newCredit: wallet,
        betAmount: betAmount,
        winAmount: winAmount,
        msg: `Internal Server Error: DB User updateOne Fail`,
      };
    }
  } catch (error) {
    return {
      ok: 0,
      oldCredit: wallet,
      newCredit: wallet,
      betAmount: betAmount,
      winAmount: winAmount,
      msg: `Internal Server Error: ${error}`,
    };
  }
}

async function registerUserDeposit(body) {
  const hasUid = R.has("uid", body);
  if (hasUid) {
    const uid = body.uid;
    const depositAmount = parseInt(body.credits);

    const user = await User.findOne({ uid: uid });
    if (validateUidLength(uid) && isPresent(getWallet(user))) {
      if (!Number.isInteger(depositAmount)) {
        console.error(`Invalid data provided credits: ${body.credits}`);
        return {
          ok: 0,
          msg: `Invalid data provided credits: ${body.credits}`,
          statusCode: 400,
        };
      }
      const hasEnoughWallet = R.propSatisfies(
        (wallet) => wallet >= depositAmount,
        "wallet"
      );
      if (!hasEnoughWallet(user)) {
        console.error(
          `Insufficient Wallet Balance for ${uid}:${getWallet(user)}`
        );
        return {
          ok: 0,
          msg: `Insufficient Wallet Balance for ${uid}:${getWallet(user)}`,
          statusCode: 422, // 422 Unprocessable Entity
        };
      }
      // Update the user's wallet
      const result = await User.updateOne(
        { uid: uid },
        { $set: { isPlaying: true } },
        { $set: { updatedAt: generateTimeStamp() } }
      );

      if (result.matchedCount > 0) {
        return {
          ok: 1,
          msg: "ok",
          statusCode: 200,
        };
      } else {
        return {
          ok: 0,
          msg: "registerUserDeposit failed",
          statusCode: 400,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "registerUserDeposit failed",
        statusCode: 400,
      };
    }
  } else {
    return {
      ok: 0,
      msg: "registerUserDeposit failed",
      statusCode: 400,
    };
  }
}

async function registerUserWithdraw(body) {
  const hasUid = R.has("uid", body);
  if (hasUid) {
    const uid = body.uid;
    const withdrawAmount = parseInt(body.credits);

    const user = await User.findOne({ uid: uid });
    if (validateUidLength(uid) && isPresent(getWallet(user))) {
      if (!Number.isInteger(withdrawAmount)) {
        console.error(`Invalid data provided credits: ${body.credits}`);
        return {
          ok: 0,
          msg: `Invalid data provided credits: ${body.credits}`,
          statusCode: 400,
        };
      }
      const hasEnoughWallet = R.propSatisfies(
        (wallet) => wallet >= withdrawAmount,
        "wallet"
      );
      if (!hasEnoughWallet(user)) {
        console.error(
          `Insufficient Wallet Balance for ${uid}:${getWallet(user)}`
        );
        return {
          ok: 0,
          msg: `Insufficient Wallet Balance for ${uid}:${getWallet(user)}`,
          statusCode: 422, // 422 Unprocessable Entity
        };
      }
      const result = await User.updateOne(
        { uid: uid },
        { $set: { isPlaying: false } },
        { $set: { updatedAt: generateTimeStamp() } }
      );
      if (result.matchedCount > 0) {
        return {
          ok: 1,
          msg: "ok",
          statusCode: 200,
        };
      } else {
        return {
          ok: 0,
          msg: "registerUserWithdraw failed",
          statusCode: 400,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "registerUserWithdraw failed",
        statusCode: 400,
      };
    }
  } else {
    return {
      ok: 0,
      msg: "registerUserWithdraw failed",
      statusCode: 400,
    };
  }
}

async function registerChangeNickName(body) {
  const hasUid = R.has("uid", body);
  const hasNickname = R.has("nickname", body);
  if (hasUid && hasNickname) {
    const uid = body.uid;
    const nickname = body.nickname;

    const user = await User.findOne({ uid: uid });
    if (validateUidLength(uid) && isPresent(getWallet(user))) {
      const result = await User.updateOne(
        { uid: uid },
        { $set: { nickname: nickname } },
        { $set: { updatedAt: generateTimeStamp() } }
      );
      if (result.matchedCount > 0) {
        return {
          ok: 1,
          msg: "ok",
          statusCode: 200,
        };
      } else {
        return {
          ok: 0,
          msg: "registerChangeNickName failed",
          statusCode: 400,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "registerChangeNickName failed",
        statusCode: 400,
      };
    }
  } else {
    return {
      ok: 0,
      msg: "registerChangeNickName failed",
      statusCode: 400,
    };
  }
}
async function registerBuyInBalance(body) {
  const hasUid = R.has("uid", body);
  const hasWallet = R.has("wallet", body);
  if (hasUid && hasWallet) {
    const uid = body.uid;
    const wallet = body.wallet;

    const user = await User.findOne({ uid: uid });
    if (validateUidLength(uid) && isPresent(getWallet(user))) {
      const result = await User.updateOne(
        { uid: uid },
        { $set: { wallet: wallet } },
        { $set: { updatedAt: generateTimeStamp() } }
      );
      if (result.matchedCount > 0) {
        return {
          ok: 1,
          msg: "ok",
          statusCode: 200,
        };
      } else {
        return {
          ok: 0,
          msg: "registerBuyInBalance failed",
          statusCode: 400,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "registerBuyInBalance failed",
        statusCode: 400,
      };
    }
  } else {
    return {
      ok: 0,
      msg: "registerBuyInBalance failed",
      statusCode: 400,
    };
  }
}
async function registerBuyOutBalance(body) {
  const hasUid = R.has("uid", body);
  const hasWallet = R.has("wallet", body);
  if (hasUid && hasWallet) {
    const uid = body.uid;
    const wallet = body.wallet;

    const user = await User.findOne({ uid: uid });
    if (validateUidLength(uid) && isPresent(getWallet(user))) {
      const result = await User.updateOne(
        { uid: uid },
        { $set: { wallet: wallet } },
        { $set: { updatedAt: generateTimeStamp() } }
      );
      if (result.matchedCount > 0) {
        return {
          ok: 1,
          msg: "ok",
          statusCode: 200,
        };
      } else {
        return {
          ok: 0,
          msg: "registerBuyOutBalance failed",
          statusCode: 400,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "registerBuyOutBalance failed",
        statusCode: 400,
      };
    }
  } else {
    return {
      ok: 0,
      msg: "registerBuyOutBalance failed",
      statusCode: 400,
    };
  }
}

async function registerChangePinNumber(body) {
  const hasUid = R.has("uid", body);
  const hasPinNumber = R.has("pin", body);
  if (hasUid && hasPinNumber) {
    const uid = body.uid;
    const pin = body.pin;

    const user = await User.findOne({ uid: uid });
    if (validateUidLength(uid) && isPresent(getWallet(user))) {
      const result = await User.updateOne(
        { uid: uid },
        { $set: { pin: pin } },
        { $set: { updatedAt: generateTimeStamp() } }
      );
      if (result.matchedCount > 0) {
        return {
          ok: 1,
          msg: "ok",
          statusCode: 200,
        };
      } else {
        return {
          ok: 0,
          msg: "registerChangePinNumber failed",
          statusCode: 400,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "registerChangePinNumber failed",
        statusCode: 400,
      };
    }
  } else {
    return {
      ok: 0,
      msg: "registerChangePinNumber failed",
      statusCode: 400,
    };
  }
}

async function saveProfileTransaction(body) {
  try {
    const transId = generatePrimaryKey();
    const uid = body.uid || "uid";
    const transBy = body.transBy || "System"; //"Player" || "Admin" || "System"
    const transType = "Change";
    const transField = body.transField || "nickname";
    const oldValue = body.oldValue || "";
    const newValue = body.newValue || "";

    const transactionDocument = new PTransaction({
      uid: uid,
      transId: transId,
      transType: transType,
      transBy: transBy,
      transField: transField,
      oldValue: oldValue,
      newValue: newValue,
      transTime: generateTimeStamp(),
    });
    try {
      await transactionDocument.save();
      return {
        ok: 1,
        msg: "Ok",
        statusCode: 200,
      };
    } catch (error) {
      console.error("Error saving log:", error);
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

async function savePlayerSessionCloseTransaction(body) {
  try {
    const transId = generatePrimaryKey();
    const egmId = "";
    const uid = body.uid || "uid";
    const transBy = "Attender"; //"Player" || "Admin" || "System"
    const transType = "Withdraw";

    const user = await User.findOne({ uid: uid });
    if (isPresent(getWallet(user))) {
      const transactionDocument = new Transaction({
        egmId: egmId,
        uid: uid,
        transId: transId,
        transType: transType,
        transBy: transBy,
        depositAmount: 0,
        withdrawAmount: getWallet(user),
        prevCredit: 0,
        thenCredit: getWallet(user),
        transStartTime: generateTimeStamp(),
        transEndTime: "",
      });
      try {
        await transactionDocument.save();
        return {
          ok: 1,
          msg: "Ok",
          statusCode: 200,
        };
      } catch (error) {
        console.error("Error saving log:", error);
        return {
          ok: 0,
          msg: error,
          statusCode: 500,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "Wallet info not available ",
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

async function savePlayerWalletTransaction(body) {
  try {
    const egmId = "";
    const uid = body.uid || "uid";
    const transId = generatePrimaryKey();
    const transType = body.transType || "";
    const transBy = body.transBy || "Attender"; //"Player" || "Admin" || "System"
    const depositAmount = body.depositAmount || "";
    const withdrawAmount = body.withdrawAmount || "";
    const prevCredit = body.prevCredit || "";
    const thenCredit = body.thenCredit || "";

    const user = await User.findOne({ uid: uid });
    if (isPresent(getWallet(user))) {
      const transactionDocument = new Transaction({
        egmId: egmId,
        uid: uid,
        transId: transId,
        transType: transType,
        transBy: transBy,
        depositAmount: depositAmount,
        withdrawAmount: withdrawAmount,
        prevCredit: prevCredit,
        thenCredit: thenCredit,
        transStartTime: generateTimeStamp(),
        transEndTime: "",
      });
      try {
        await transactionDocument.save();
        return {
          ok: 1,
          msg: "Ok",
          statusCode: 200,
        };
      } catch (error) {
        console.error("Error saving log:", error);
        return {
          ok: 0,
          msg: error,
          statusCode: 500,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "Wallet info not available ",
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

async function handleCardOnHoldService(body) {
  try {
    const hasUid = R.has("uid", body);
    if (hasUid) {
      const user = await User.findOne({ uid: body.uid });
      if (user) {
        try {
          const result = await User.updateOne(
            { uid: body.uid },
            { $set: { onHold: body.onHold, updatedAt: generateTimeStamp() } }
          );
          return {
            ok: 1,
            msg: "handleCardOnHoldService success - user updated",
            statusCode: 200,
          };
        } catch (error) {
          return {
            ok: 0,
            msg: error,
            statusCode: 500,
          };
        }
      } else {
        return {
          ok: 0,
          msg: "handleCardOnHoldService failed - no such user exits",
          statusCode: 404,
        };
      }
    } else {
      return {
        ok: 0,
        msg: "handleCardOnHoldService failed - no uid",
        statusCode: 400,
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

module.exports = {
  findOneUser, //User Controller
  findUser, //User Controller
  findUserTransaction, //User Controller
  saveDepositTransaction, //User Controller
  saveWithdrawTransaction, //User Controller
  registerUserWithdraw, //User Controller
  registerUserDeposit, //User Controller
  registerChangeNickName,
  registerChangePinNumber,
  registerBuyInBalance,
  registerBuyOutBalance,
  saveProfileTransaction,
  savePlayerSessionCloseTransaction,
  savePlayerWalletTransaction,
  findStationTransaction, //Cage Module
  handleCardOnHoldService, //Cage Module
  validateOneUserSpinRequest, //Game Service
  updateOneUserSpinResult, //Game Service
};
