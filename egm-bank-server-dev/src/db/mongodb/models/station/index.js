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
 * |  05/03/2025   | Wilson Sam   |     Created     |  SLOT-1473 CAD Report for all Stations - Accounting Meters
 * |  20/03/2025   | Wilson Sam   |     Updated     |  SLOT-1472 Daily Meter Report for all Stations
 * **********************************************************************************************************************************************************************
 * */
const { default: mongoose } = require("mongoose");
const { convertUTCToTimeStamp } = require("../../../../services/timestamp");

// Define User schema
const stationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  egmId: { type: String, required: true, unique: true },
  ipAddress: { type: String, required: false },
  isActive: { type: Boolean, required: false },
  shiftReset: { type: String, required: false },
  dailyReset: { type: String, required: false },
  monthlyReset: { type: String, required: false },
  createdAt: { type: String, required: false },
  updatedAt: { type: String, required: false },
});

// // Mongoose schemas can define middleware functions (pre and post hooks) that run at
// // different stages of the document lifecycle, such as before or after validation,
// // save, or remove operations.
// // Middleware functions are functions that have access to the document and can
// // modify the document before or after it is saved to the database.
stationSchema.pre("save", function (next) {
  this.updatedAt = convertUTCToTimeStamp(new Date());
  if (!this.createdAt) {
    this.createdAt = convertUTCToTimeStamp(new Date());
  }
  if (!this.shiftReset) {
    this.shiftReset = convertUTCToTimeStamp(new Date());
  }
  if (!this.dailyReset) {
    this.dailyReset = convertUTCToTimeStamp(new Date());
  }
  if (!this.monthlyReset) {
    this.monthlyReset = convertUTCToTimeStamp(new Date());
  }
  next();
});

stationSchema.pre("findOneAndUpdate", async function (next) {
  try {
    const docToUpdate = await this.model.findOne(this.getFilter());
    const updateOps = this.getUpdate();

    // Check if isActive is being updated
    if (updateOps.$set && updateOps.$set.isActive !== undefined) {
      const currentValue = docToUpdate?.isActive;
      const newValue = updateOps.$set.isActive;

      if (currentValue !== newValue) {
        updateOps.$set.updatedAt = convertUTCToTimeStamp(new Date());
        console.log(
          `Station ${updateOps.$set.egmId} status updated to: ${
            newValue ? "Active" : "Inactive"
          } `
        );
      }
    }
    // Check if egmId is being updated
    if (updateOps.$set && updateOps.$set.egmId !== undefined) {
      const currentValue = docToUpdate?.egmId;
      const newValue = updateOps.$set.egmId;

      if (currentValue !== newValue) {
        updateOps.$set.updatedAt = convertUTCToTimeStamp(new Date());
        console.log(`Station Id ${docToUpdate?.egmId} updated to: ${newValue}`);
      }
    }
    // Check if ipAddress is being updated
    if (updateOps.$set && updateOps.$set.ipAddress !== undefined) {
      const currentValue = docToUpdate?.ipAddress;
      const newValue = updateOps.$set.ipAddress;

      if (currentValue !== newValue) {
        updateOps.$set.updatedAt = convertUTCToTimeStamp(new Date());
        console.log(
          `Station ${updateOps.$set.egmId} IP updated to: ${newValue}`
        );
      }
    }
    // Check if shiftReset is being updated
    if (updateOps.$set && updateOps.$set.shiftReset !== undefined) {
      const currentValue = docToUpdate?.shiftReset;
      const newValue = updateOps.$set.shiftReset;

      if (currentValue !== newValue) {
        updateOps.$set.updatedAt = convertUTCToTimeStamp(new Date());
        console.log(
          `Station ${docToUpdate?.egmId} shiftReset updated to: ${newValue}`
        );
      }
    }
    // Check if dailyReset is being updated
    if (updateOps.$set && updateOps.$set.dailyReset !== undefined) {
      const currentValue = docToUpdate?.dailyReset;
      const newValue = updateOps.$set.dailyReset;

      if (currentValue !== newValue) {
        updateOps.$set.updatedAt = convertUTCToTimeStamp(new Date());
        console.log(
          `Station ${docToUpdate?.egmId} dailyReset updated to: ${newValue}`
        );
      }
    }
    // Check if monthlyReset is being updated
    if (updateOps.$set && updateOps.$set.monthlyReset !== undefined) {
      const currentValue = docToUpdate?.monthlyReset;
      const newValue = updateOps.$set.monthlyReset;

      if (currentValue !== newValue) {
        updateOps.$set.updatedAt = convertUTCToTimeStamp(new Date());
        console.log(
          `Station ${docToUpdate?.egmId} monthlyReset updated to: ${newValue}`
        );
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = stationSchema;
