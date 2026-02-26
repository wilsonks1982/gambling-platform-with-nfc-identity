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

const { Log } = require("../../db/mongodb");
const { convertUTCToIST } = require("../timestamp");

async function logMessage(level, message, context = "backend") {
  const logEntry = new Log({ context, level, message });
  try {
    await logEntry.save();
  } catch (error) {
    console.error("Error saving log:", error);
  }
}

async function getLogs() {
  const logs = await Log.find({}, { __v: 0 }).sort({ _id: -1 });
  const count = await Log.countDocuments({});

  console.log(`getLogs called...count=${count}`);
  const convertedLogs = logs.map((log) => {
    return {
      ...log._doc,
      createdIST: convertUTCToIST(log.timestamp).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    };
  });
  return convertedLogs;
}

module.exports = {
  logMessage,
  getLogs,
};
