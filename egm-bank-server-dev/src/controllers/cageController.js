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
 * |  20/03/2025   | Wilson Sam   |     Updated     |  Added Station related services
 * |  22/03/2025   | Wilson Sam   |     Updated     |  Added Station Meters related services
 * **********************************************************************************************************************************************************************
 * */

const {
  saveStation,
  findAllStations,
  findOneStation,
  updateOneStation,
  deleteOneStation,
  handleResetEventsByAttendant,
  handleResetEventsByManager,
  handleResetEventsByAdmin,
  fetchCageServiceShiftMeters,
  fetchCageServiceDailyMeters,
  fetchCageServiceMonthlyMeters,
} = require("../services/cage-service");

async function postStation(req, res) {
  saveStation(req, res);
}
async function getAllStations(req, res) {
  findAllStations(req, res);
}

async function getOneStation(req, res) {
  findOneStation(req, res);
}

async function putOneStation(req, res) {
  updateOneStation(req, res);
}

async function removeOneStation(req, res) {
  deleteOneStation(req, res);
}

async function resetEventsByAttendant(req, res) {
  handleResetEventsByAttendant(req, res);
}

async function resetEventsByManager(req, res) {
  handleResetEventsByManager(req, res);
}

async function resetEventsByAdmin(req, res) {
  handleResetEventsByAdmin(req, res);
}

async function handleCageServiceShiftMeters(req, res) {
  const result = await fetchCageServiceShiftMeters(req);
  return res.json(result);
}

async function handleCageServiceDailyMeters(req, res) {
  const result = await fetchCageServiceDailyMeters(req);
  return res.json(result);
}

async function handleCageServiceMonthlyMeters(req, res) {
  const result = await fetchCageServiceMonthlyMeters(req);
  return res.json(result);
}

module.exports = {
  postStation,
  getAllStations,
  getOneStation,
  putOneStation,
  resetEventsByAttendant,
  resetEventsByManager,
  resetEventsByAdmin,
  removeOneStation,
  handleCageServiceShiftMeters,
  handleCageServiceDailyMeters,
  handleCageServiceMonthlyMeters,
};
