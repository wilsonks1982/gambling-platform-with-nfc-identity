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
 * |  18/12/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const { default: mongoose } = require("mongoose");

// txtGameNumber.text = "Game# : "+ 2224 + count;
// txtBetCount.text = "Bet : "+ 5;
// txtDenom.text = "Denom : "+ 20;
// txtPrimaryWin.text = "Primary Win : "+ 20;
// txtBonusWin.text = "Bonus Win : "+ 20;
// txtTotalWin.text = "Total Win : "+ 40;
// txtStartCash.text = "Start Cash : "+ 435.00;
// txtEndCash.text = "End Cash : "+ 455.00;
// txtGameStartTime.text = "12/12/2024 : 03:01:24";
// txtGameEndTime.text = "12/12/2024 : 03:03:24";

// Define Game schema
const gameSchema = new mongoose.Schema({
  egmId: { type: String, required: true },
  uid: { type: String, required: true },
  gameId: { type: String, required: true, unique: true },
  bet: { type: Number, required: true },
  denom: { type: Number, required: true },
  totalBet: { type: Number, required: true },
  primaryWin: { type: Number, required: true },
  bonusWin: { type: Number, required: true },
  totalWin: { type: Number, required: true },
  reelIndices: [Number],
  symbols: [String],
  startCash: { type: Number, required: true },
  endCash: { type: Number, required: true },
  gameStartTime: { type: String, required: true },
  gameEndTime: { type: String, required: true },
  gameTime: { type: String, required: true },
});

module.exports = gameSchema;
