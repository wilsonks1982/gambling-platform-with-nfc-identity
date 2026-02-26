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
 * |  20/03/2025   | Wilson Sam   |     Created     |  File Creation
 * |  25/03/2025   | Wilson Sam   |     Updated     |  Added Jackpot Persistence Support
 * **********************************************************************************************************************************************************************
 * */
const { default: mongoose } = require("mongoose");
const { convertUTCToTimeStamp } = require("../../../../services/timestamp");

const progressiveJackpotSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  currentAmount: {
    type: Number,
    required: true,
    default: 0.0,
  },
  baseAmount: {
    type: Number,
    required: true,
    default: 0.0,
  },
  incrementRate: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  wonBy: {
    type: String,
    required: false,
    default: "",
  },
  wonAt: {
    type: String,
    required: false,
    default: "",
  },
  wonAmount: {
    type: Number,
    required: false,
    default: 0.0,
  },
  lastIncrementedAt: {
    type: String,
    required: false,
    default: "",
  },
  createdAt: {
    type: String,
    required: false,
    default: convertUTCToTimeStamp(new Date()),
  },
  updatedAt: {
    type: String,
    required: false,
    default: convertUTCToTimeStamp(new Date()),
  },
});

progressiveJackpotSchema.pre("save", function (next) {
  this.updatedAt = convertUTCToTimeStamp(new Date());
  if (!this.createdAt) {
    this.createdAt = convertUTCToTimeStamp(new Date());
  }
  next();
});

module.exports = progressiveJackpotSchema;
