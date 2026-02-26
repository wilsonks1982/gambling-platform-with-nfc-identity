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

// function generateTimeStamp() {
//   const now = new Date();

//   const year = now.getFullYear().toString();
//   const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
//   const day = String(now.getDate()).padStart(2, "0");
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const seconds = String(now.getSeconds()).padStart(2, "0");
//   const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

//   return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
// }

// // Mongoose schemas can define middleware functions (pre and post hooks) that run at
// // different stages of the document lifecycle, such as before or after validation,
// // save, or remove operations.
// // Middleware functions are functions that have access to the document and can
// // modify the document before or after it is saved to the database.
// userSchema.pre("save", function (next) {
//   this.updatedAt = generateTimeStamp();
//   next();
// });

// Define User schema
const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  id: { type: Number, required: false },
  role: { type: String, required: false },
  nickname: { type: String, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  wallet: { type: Number, required: false },
  onHold: { type: Boolean, required: false },
  pin: { type: Number, required: false },
  isPlaying: { type: Boolean, required: false },
  createdAt: { type: String, required: false },
  updatedAt: { type: String, required: false },
});

module.exports = userSchema;
