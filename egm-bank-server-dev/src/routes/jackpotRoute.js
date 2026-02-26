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
 * |  20/03/2025   | Wilson Sam   |     Created     |  File Creation - Sets up routes in an Express application for managing a Progressive Jackpot service
 * **********************************************************************************************************************************************************************
 * */

const {
  createJackpot,
  getAllJackpots,
  getJackpotById,
  updateJackpot,
  deleteJackpot,
  incrementJackpot,
  recordJackpotWin,
} = require("../services/jackpot-service");

module.exports = (app) => {
  // Create a new jackpot
  app.post("/api/v1/jackpot/service/jackpots", createJackpot);

  // Get all jackpots
  app.get("/api/v1/jackpot/service/jackpots", getAllJackpots);

  // Get a single jackpot by ID
  app.get("/api/v1/jackpot/service/jackpots/:id", getJackpotById);

  // Increment a jackpot
  app.put("/api/v1/jackpot/service/jackpots/increment", incrementJackpot);

  // Record a jackpot win
  app.put("/api/v1/jackpot/service/jackpots/win", recordJackpotWin);

  // Update a jackpot
  app.put("/api/v1/jackpot/service/jackpots/:id", updateJackpot);

  // Delete a jackpot
  app.delete("/api/v1/jackpot/service/jackpots/:id", deleteJackpot);
};
