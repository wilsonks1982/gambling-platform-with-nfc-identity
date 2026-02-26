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
 * |  05/03/2025   | Wilson Sam   |     Changed     |  SLOT-1473 CAD Report for all Stations - Accounting Meters
 * |  20/03/2025   | Wilson Sam   |     Changed     |  SLOT-1917 Progressive Persistence
 * **********************************************************************************************************************************************************************
 * */
const mongoose = require("mongoose");
const users = require("../../../users.json");
const stations = require("../../../stations.json");
const jackpots = require("../../../jackpots.json");
const employees = require("../../../employees.json");

const userSchema = require("../../models/user");
const logSchema = require("../../models/log");
const gameSchema = require("../../models/game");
const transactionSchema = require("../../models/transaction");
const pTransactionSchema = require("../../models/pTransaction");
const stationSchema = require("../../models/station");
const progressiveJackpotSchema = require("../../models/progressive-jackpot");
const employeeSchema = require("../../models/employee");

const { generateTimeStamp } = require("../../../../services/timestamp");

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
const PTransaction = mongoose.model("PTransaction", pTransactionSchema);
const Station = mongoose.model("Station", stationSchema);
const ProgressiveJackpot = mongoose.model(
  "ProgressiveJackpot",
  progressiveJackpotSchema
);
const Employee = mongoose.model("Employee", employeeSchema);

// Event listeners for connection events
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
  stations.forEach(async (element) => {
    const doesStationExist = await Station.exists({ egmId: element.egmId });
    if (!doesStationExist) {
      const station = new Station({
        ...element,
        createdAt: generateTimeStamp(),
        updatedAt: generateTimeStamp(),
      });
      try {
        const savedStation = await station.save();
        console.log(
          `Added Station ${savedStation.egmId} at ${savedStation.createdAt}`
        );
      } catch (error) {}
    } else {
      const station = await Station.findOne({ egmId: element.egmId });
      if (station)
        console.log(
          `Station exists ${station.egmId} ${station.ipAddress} ${station.isActive} ${station.createdAt} ${station.updatedAt}`
        );
    }
  });
  users.forEach(async (element) => {
    const doesUserExist = await User.exists({ uid: element.uid });
    if (!doesUserExist) {
      const user = new User({
        ...element,
        createdAt: generateTimeStamp(),
        updatedAt: generateTimeStamp(),
      });
      try {
        const savedUser = await user.save();
        console.log(
          `Added User ${savedUser.nickname} at ${savedUser.createdAt}`
        );
      } catch (error) {}
    } else {
      const user = await User.findOne({ uid: element.uid });
      if (user)
        console.log(
          `User exists ${user.uid} ${user.nickname} ${user.wallet} ${user.createdAt} ${user.updatedAt}`
        );
    }
  });
  employees.forEach(async (element) => {
    const doesEmployeeExist = await Employee.exists({ uid: element.uid });
    if (!doesEmployeeExist) {
      const employee = new Employee({
        ...element,
        createdAt: generateTimeStamp(),
        updatedAt: generateTimeStamp(),
      });
      try {
        const savedEmployee = await employee.save();
        console.log(
          `Added Employee ${savedEmployee.account} at ${savedEmployee.createdAt}`
        );
      } catch (error) {}
    } else {
      const employee = await Employee.findOne({ uid: element.uid });
      if (employee)
        console.log(
          `Employee exists ${employee.uid} ${employee.account} ${employee.role} ${employee.createdAt} ${employee.updatedAt}`
        );
    }
  });
  jackpots.forEach(async (element) => {
    console.log("Found JD Element");
    console.log(element.id);
    const doesJackpotExist = await ProgressiveJackpot.exists({
      id: element.id,
    });
    if (!doesJackpotExist) {
      const jackpot = new ProgressiveJackpot({
        ...element,
        createdAt: generateTimeStamp(),
        updatedAt: generateTimeStamp(),
      });
      try {
        const savedJackpot = await jackpot.save();
        console.log(
          `Added Jackpot ${savedJackpot.name} at ${savedJackpot.createdAt}`
        );
      } catch (error) {}
    } else {
      const jackpot = await ProgressiveJackpot.findOne({ id: element.id });
      if (jackpot)
        console.log(
          `Jackpot exists ${jackpot.name} ${jackpot.currentAmount} ${jackpot.createdAt} ${jackpot.updatedAt}`
        );
    }
  });
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
  PTransaction,
  Station,
  ProgressiveJackpot,
  Employee,
};
