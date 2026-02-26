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
 * |  05/03/2025   | Wilson Sam   |     Created     |  File Creation
 * |  20/03/2025   | Wilson Sam   |     Updated     |  Added Station related services
 * |  22/03/2025   | Wilson Sam   |     Updated     |  Added Station Meters related services
 * **********************************************************************************************************************************************************************
 * */

const {
  postStation,
  getAllStations,
  getOneStation,
  putOneStation,
  removeOneStation,
  resetEventsByAttendant,
  resetEventsByManager,
  resetEventsByAdmin,
  handleCageServiceShiftMeters,
  handleCageServiceDailyMeters,
  handleCageServiceMonthlyMeters,
} = require("../controllers/cageController");

module.exports = (app) => {
  //Create a new station
  app.post("/api/v1/cage/service/stations", postStation);

  // Get all stations
  app.get("/api/v1/cage/service/stations", getAllStations);

  // Get a single station by ID
  app.get("/api/v1/cage/service/stations/:id", getOneStation);

  // Update a station
  app.put("/api/v1/cage/service/stations", putOneStation);

  //Delete a station
  app.delete("/api/v1/cage/service/stations/:id", removeOneStation);

  app.post("/api/v1/cage/service/attendant/reset", resetEventsByAttendant);
  app.post("/api/v1/cage/service/manager/reset", resetEventsByManager);
  app.post("/api/v1/cage/service/admin/reset", resetEventsByAdmin);

  app.get("/api/v1/cage/service/meter/shift", handleCageServiceShiftMeters);

  app.get("/api/v1/cage/service/meter/daily", handleCageServiceDailyMeters);

  app.get("/api/v1/cage/service/meter/monthly", handleCageServiceMonthlyMeters);
};
