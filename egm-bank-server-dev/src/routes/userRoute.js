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
 * |  31/08/2024   | Wilson Sam   |     Updated     |  Refactoring
 * **********************************************************************************************************************************************************************
 * */

const {
  handleGetTestUserWalletReq,
  handleGetTestUsersReq,
  handlePostTestDepositCredits,
  handlePostTestWithdrawCredits,
  handleGetWalletTransactionHistory,
  handleChangeNickName,
  handleChangePinNumber,
  handlePlayerSessionClose,
  handleBuyInBalance,
  handleBuyOutBalance,
  handleOnHold
} = require("../controllers/userController");

module.exports = (app) => {
  //SAS/Cage Releated API Suit
  //**************************************************** */
  app.get("/api/v1/users", async (req, res) => {
    handleGetTestUsersReq(req, res);
  });
  app.get("/GetTestUsersReq", async (req, res) => {
    handleGetTestUsersReq(req, res);
  });
  app.post("/api/v1/ChangeNickName", (req, res) => {
    console.log("/api/v1/ChangeNickName");
    handleChangeNickName(req, res);
  });
  app.post("/api/v1/ChangePinNumber", (req, res) => {
    console.log("/api/v1/ChangePinNumber");
    handleChangePinNumber(req, res);
  });
  app.post("/api/v1/PlayerSessionClose", (req, res) => {
    console.log("/api/v1/PlayerSessionClose");
    handlePlayerSessionClose(req, res);
  });
  app.post("/api/v1/BuyInBalance", (req, res) => {
    console.log("/api/v1/BuyInBalance");
    handleBuyInBalance(req, res);
  });
  app.post("/api/v1/BuyOutBalance", (req, res) => {
    console.log("/api/v1/BuyOutBalance");
    handleBuyOutBalance(req, res);
  });

  //**************************************************** */

  //(GET) to request transfer of a presumed hypertext document identified by a given pathname.
  //The "origin" for a given URI is the triple of scheme, host, and port after normalizing the
  //scheme and host to lowercase and normalizing the port to remove any leading zeros.
  app.get("/api/v1/user", async (req, res) => {
    handleGetTestUserWalletReq(req, res);
  });

  app.post("/api/v1/deposit", (req, res) => {
    handlePostTestDepositCredits(req, res);
  });

  app.post("/api/v1/withdraw", (req, res) => {
    handlePostTestWithdrawCredits(req, res);
  });

  app.get("/api/v1/transaction", (req, res) => {
    handleGetWalletTransactionHistory(req, res);
  });

  app.put("/api/v1/putonhold", (req, res) => {
    handleOnHold(req,res);
  })
};
