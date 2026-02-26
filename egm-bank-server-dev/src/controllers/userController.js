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
 * **********************************************************************************************************************************************************************
 * */

const {
  findOneUser,
  findUser,
  findUserTransaction,
  saveDepositTransaction,
  saveWithdrawTransaction,
  registerUserDeposit,
  registerUserWithdraw,
  saveProfileTransaction,
  registerChangeNickName,
  registerChangePinNumber,
  savePlayerSessionCloseTransaction,
  registerBuyInBalance,
  savePlayerWalletTransaction,
  registerBuyOutBalance,
  handleCardOnHoldService
} = require("../services/user-service");

async function handleGetTestUserWalletReq(req, res) {
  console.log(`${JSON.stringify(req.query)}`);
  const result = await findOneUser(req.query.uid);
  if (result.ok) {
    return res.json(result.user);
  } else {
    
    res.status(201).json({
      uid: req.query.uid,
      role: "",
      error: `Invalid Card`,
    });
  }
}

async function handleGetTestUsersReq(req, res) {
  const result = await findUser();
  return res.json(result);
}

async function handleGetWalletTransactionHistory(req, res) {
  const result = await findUserTransaction(req.query.uid);
  if (result.ok) {
    return res.json(result.transaction);
  } else {
    res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handlePostTestDepositCredits(req, res) {
  const result = await registerUserDeposit(req.body);
  if (result.ok) {
    const resultSave = await saveDepositTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handlePostTestWithdrawCredits(req, res) {
  const result = await registerUserWithdraw(req.body);
  if (result.ok) {
    const resultSave = await saveWithdrawTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handleChangeNickName(req, res) {
  const result = await registerChangeNickName(req.body);
  if (result.ok) {
    const resultSave = await saveProfileTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handleChangePinNumber(req, res) {
  const result = await registerChangePinNumber(req.body);
  if (result.ok) {
    const resultSave = await saveProfileTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handlePlayerSessionClose(req, res) {
  const result = await registerUserWithdraw(req.body);
  if (result.ok) {
    const resultSave = await savePlayerSessionCloseTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handleBuyInBalance(req, res) {
  const result = await registerBuyInBalance(req.body);
  if (result.ok) {
    const resultSave = await savePlayerWalletTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handleBuyOutBalance(req, res) {
  const result = await registerBuyOutBalance(req.body);
  if (result.ok) {
    const resultSave = await savePlayerWalletTransaction(req.body);
    if (resultSave.ok) {
      return res.json(resultSave);
    } else {
      return res.status(resultSave.statusCode).json({
        ...resultSave,
      });
    }
  } else {
    return res.status(result.statusCode).json({
      ...result,
    });
  }
}

async function handleOnHold(req, res) {
  const result = await handleCardOnHoldService(req.body);
  return result.ok ? res.status(200).json(result) : res.status(500).json(result) ;
}

module.exports = {
  handleGetTestUserWalletReq,
  handleGetTestUsersReq,
  handleGetWalletTransactionHistory,
  handlePostTestDepositCredits,
  handlePostTestWithdrawCredits,
  handleChangeNickName,
  handleChangePinNumber,
  handlePlayerSessionClose,
  handleBuyInBalance,
  handleBuyOutBalance,
  handleOnHold
};
