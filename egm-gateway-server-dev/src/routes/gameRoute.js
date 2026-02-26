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
  handleGetTestSpinRequest,
  handleGetGameHistory,
} = require("../controllers/gameController");

module.exports = (app) => {
  //TODO API URL change to /api/v1/spin
  app.get("/api/v1/spin", async (req, res) => {
    handleGetTestSpinRequest(req, res);
  });

  app.get("/GetTestSpinReq", async (req, res) => {
    handleGetTestSpinRequest(req, res);
  });
  //TODO API URL change to /api/v1/history
  app.get("/api/v1/history", async (req, res) => {
    handleGetGameHistory(req, res);
  });
};
