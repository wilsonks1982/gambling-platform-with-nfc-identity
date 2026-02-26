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
 * |  04/02/2025   | Wilson Sam   |     Updated     |  SLOT-1357 Central Server: Persistence Support for Game History , Data should not be lost on Server restart.
 * **********************************************************************************************************************************************************************
 * */
const { default: mongoose } = require("mongoose");

// Define Game schema for a game - slot gambling application (Mongoose ODM)
// This schema outlines the structure of the documents that will be stored in the MongoDB collection associated with this model.
// This schema provides a comprehensive structure for storing detailed information about each game spin,including player actions,
// financial transactions, and game outcomes. It supports tracking various aspects of gameplay, which can be critical for analytics,
// reporting, and ensuring fair play in gaming applications.
const gameSchema = new mongoose.Schema({
  // Basic Fields:
  ok: { type: Number, required: true }, //A number indicating success or status.
  id: { type: String, required: true }, //A unique identifier for the game instance.
  uid: { type: String, required: true }, //A user identifier.
  spinNumber: { type: String, required: true, unique: true }, //A unique string representing the spin number.
  gameId: { type: String, required: true }, //Identifiers for the game
  GameId: { type: String, required: true },
  egmId: { type: String, required: true }, //Identifier for the electronic gaming machine.

  //Gameplay Data:
  reelIndices: [Number],
  symbols: [String],
  rotationTime: [Number],

  //Financial Information:
  coin: { type: Number, required: true },
  bet: { type: Number, required: true },
  betIndex: { type: Number, required: true },
  denom: { type: Number, required: true },
  denomIndex: { type: Number, required: true },
  win: { type: Number, required: true },

  //Win Tracking:
  anticipation: { type: Boolean, required: true },
  cyclicWinArr: [
    {
      id: { type: String, required: true },
      win: { type: Number, required: true },
      winBox: [Boolean],
    },
  ],

  //Total Win Calculations:
  totalSecWinAmount: { type: Number, required: true },
  totalWin: { type: Number, required: true },

  //Wallet and Credit Management:
  wallet: { type: Number, required: true }, //Current wallet balance.
  oldCredit: { type: Number, required: true }, //Credit values before the spin.
  betAmount: { type: Number, required: true }, //Specific amounts related to betting and winning.
  winAmount: { type: Number, required: true },
  newCredit: { type: Number, required: true }, //Credit values before the spin.

  //Jackpot Information
  jackpotContrib: { type: Number, required: true },
  isJackpot1Win: { type: Boolean, required: true },
  isJackpot2Win: { type: Boolean, required: true },
  isJackpot3Win: { type: Boolean, required: true },
  isJackpot4Win: { type: Boolean, required: true },

  //Game Status:
  isGaffingOn: { type: String, required: true },
  spinStart: { type: String, required: true },
  spinEnd: { type: String, required: true },
  statusCode: { type: Number, required: true },
});

module.exports = gameSchema;
