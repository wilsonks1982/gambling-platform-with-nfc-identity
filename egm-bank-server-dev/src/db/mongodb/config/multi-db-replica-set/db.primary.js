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
 * Best Practices used
 * - A dedicated module for database connection
 * - Environment based connection URI
 * - Configurable connection pool
 * - Robust error handling
 * - Graceful connection management
 *
 * Change History
 * **********************************************************************************************************************************************************************
 * |     Date      |     Name     |      Change     |      Details
 * |  18/06/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const mongoose = require("mongoose");

const userSchema = require("../../models/user");
const logSchema = require("../../models/log");
const users = require("../../../users.json");

const ADMINUSERNAME = process.env.ENV_MONGODB_ADMINUSERNAME_PRIMARY;
const ADMINPASSWORD = process.env.ENV_MONGODB_ADMINPASSWORD_PRIMARY;
const HOST_LIST = process.env.ENV_MONGODB_HOST_LIST_PRIMARY;
const DB_NAME = process.env.ENV_MONGODB_DB_PRIMARY;
const RS_NAME = process.env.ENV_MONGODB_RS_NAME;

const MONGODB_URI = `mongodb://${ADMINUSERNAME}:${ADMINPASSWORD}@${HOST_LIST}/${DB_NAME}?authSource=admin`;

const connectionOptions = {
  replicaSet: RS_NAME,
  useUnifiedTopology: true, //Enables advanced reconnection capabilities
  minPoolSize: 5,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 30000, //Time to wait for server selection
  socketTimeoutMS: 45000, //Socket connection timeout
  heartbeatFrequencyMS: 10000, //Connection health check interval
};

//Mongoose automatically attempts to reconnect to replica sets by default, with built-in
//retry mechanisms for maintaining database connectivity.
//No manual reconnectTries configuration needed, Driver handles reconnection automatically.
const primaryCon = mongoose.createConnection(MONGODB_URI, connectionOptions);

const User = primaryCon.model("User", userSchema, "Users");
const Log = primaryCon.model("Log", logSchema, "Logs");

primaryCon.on("connecting", () => {
  console.log(`Initial Connection Attempt: ${RS_NAME}`);
  console.log(`${HOST_LIST}/${DB_NAME}`);
});
primaryCon.on("connected", () => {
  console.log(`Successfully Connected to primary node: ${RS_NAME}`);
  users.forEach(async (element) => {
    const doesUserExist = await User.exists({ uid: element.uid });
    if (!doesUserExist) {
      const user = new User({ ...element });
      try {
        const savedUser = await user.save();
        console.log(`Added User ${savedUser.uid}`);
      } catch (error) {}
    } else {
      const user = await User.findOne({ uid: element.uid });
      if (user)
        console.log(`User exists ${user.uid} ${user.nickname} ${user.wallet}`);
    }
  });
});
primaryCon.on("disconnected", () => {
  console.log(`Lost connectivity to all servers: ${RS_NAME}`);
});
primaryCon.on("fullsetup", () => {
  console.log(`Successfully Connected to first and sec nodes: ${RS_NAME}`);
});
primaryCon.on("all", () => {
  console.log(`Successfully Connected to all nodes: ${RS_NAME}`);
});
primaryCon.on("error", (err) => {
  console.error(`Replica set ${RS_NAME} connection error:`, err);
});

//Graceful Shutdown: Ensure that you close connections properly when your
//application exits or when they are no longer needed.
process.on("SIGINT", async () => {
  await primaryCon.close();
  console.log("MongoDB primary connection closed");
  process.exit(0);
});

module.exports = {
  User,
  Log,
};
