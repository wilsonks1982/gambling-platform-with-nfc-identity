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

// Define Profile Transaction schema
const pTransactionSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  transId: { type: String, required: true, unique: true },
  transType: { type: String, required: true },
  transBy: { type: String, required: true },
  transField: { type: String, required: false },
  oldValue: { type: String, required: false },
  newValue: { type: String, required: false },
  transTime: { type: String, required: false },
});

module.exports = pTransactionSchema;
