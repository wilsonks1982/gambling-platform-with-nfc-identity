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
 * Best Practices followed
 * - Used separate connection objects for different database contexts
 * - Flexibility on configurability for connection pool sizes
 * - Handle connection errors individually
 * - Exporting connection-specific models for modular usage
 *
 * Change History
 * **********************************************************************************************************************************************************************
 * |     Date      |     Name     |      Change     |      Details
 * |  01/06/2024   | Wilson Sam   |     Created     |  File Creation
 * |  18/12/2024   | Wilson Sam   |     Changed     |  Code Refactoring
 * **********************************************************************************************************************************************************************
 * */
const mongoose = require("mongoose");
const users = require("../../../users.json");
const userSchema = require("../../models/user");
const logSchema = require("../../models/log");
const gameSchema = require("../../models/game");
const transactionSchema = require("../../models/transaction");

const ADMINUSERNAME = process.env.ENV_MONGODB_ADMINUSERNAME_STANDALONE;
const ADMINPASSWORD = process.env.ENV_MONGODB_ADMINPASSWORD_STANDALONE;
const HOST_LIST = process.env.ENV_MONGODB_HOST_LIST_STANDALONE;
const DB_NAME = process.env.ENV_MONGODB_DB_STANDALONE;

const MONGODB_URI = `mongodb://${ADMINUSERNAME}:${ADMINPASSWORD}@${HOST_LIST}/${DB_NAME}?authSource=admin`;

console.log(`Trying to connect ${MONGODB_URI}`);

mongoose.connect(MONGODB_URI);

const User = mongoose.model("User", userSchema);
const Log = mongoose.model("Log", logSchema);
const Game = mongoose.model("Game", gameSchema);
const Transaction = mongoose.model("Transaction", transactionSchema);

// Event listeners for connection events
mongoose.connection.on("connected", () => {
  // users.forEach(async (element) => {
  //   const doesUserExist = await User.exists({ uid: element.uid });
  //   if (!doesUserExist) {
  //     const user = new User({ ...element });
  //     try {
  //       const savedUser = await user.save();
  //       console.log(`Added User ${savedUser.uid}`);
  //     } catch (error) {}
  //   } else {
  //     const user = await User.findOne({ uid: element.uid });
  //     if (user)
  //       console.log(`User exists ${user.uid} ${user.nickname} ${user.wallet}`);
  //   }
  // });
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});

// Function to close the connection gracefully
const gracefulExit = () => {
  mongoose.connection.close(() => {
    console.log("Mongoose connection closed due to application termination");
    process.exit(0);
  });
};

// Listen for SIGINT signal (Ctrl+C)
process.on("SIGINT", gracefulExit);

module.exports = {
  User,
  Log,
  Game,
  Transaction,
};
