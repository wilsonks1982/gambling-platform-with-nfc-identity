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

const { update, tryCatch } = require("ramda");
const { Station } = require("../../db/mongodb");
const { fetchAccountingMeters } = require("../game-service");
const { convertUTCToTimeStamp } = require("../timestamp");
const { findStationTransaction } = require("../user-service");
const ping = require("ping");

async function saveStation(req, res) {
  try {
    const { id, egmId, ipAddress } = req.body || {};

    if (!id || !egmId || !ipAddress) {
      return res
        .status(400)
        .json({ error: "Missing required fields in request body" });
    }

    let isActive = false;
    try {
      const result = await ping.promise.probe(ipAddress);
      isActive = result.alive;

      if (typeof isActive !== "boolean") {
        throw new Error("Could not ping the given IP Address");
      }
    } catch (error) {
      console.error("Ping failed:", error);
      return res
        .status(400)
        .json({
          ok: 0,
          error: "Ping failed",
        });
    }

    // Save the station
    const station = new Station({
      id,
      egmId,
      ipAddress,
      isActive,
    });

    await station.save();
    return res.status(201).json(station);
  } catch (error) {
    console.error("Error saving station:", error);
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ error: "Validation error", message: error.message });
    } else {
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  }
}

async function findAllStations(req, res) {
  try {
    const stations = await Station.find();

    const updatedStations = await Promise.all(
      stations.map(async (station) => {
        const result = await ping.promise.probe(station.ipAddress);
        station.isActive = result.alive;
        await station.save();
        return station.toObject();
      })
    );
    res.status(200).json(updatedStations.map(({ _id, __v, ...rest }) => rest));
  } catch (error) {
    console.error("Error fetching stations:", error);
    res.status(500).json({ error: "Failed to fetch stations" });
  }
}

async function findOneStation(req, res) {
  try {
    const { id } = req.params;
    const station = await Station.findOne({ id }).select({
      _id: 0,
      __v: 0,
    });
    if (!station) {
      res.status(404).json({ error: "Station not found" });
    } else {
      res.status(200).json(station);
    }
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateOneStation(req, res) {
  try {
    const { id, egmId, ipAddress } = req.body;

    if (!id || !egmId || !ipAddress) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    let isActive = false;

    try {
      const result = await ping.promise.probe(ipAddress);
      isActive = result.alive;
      if (typeof isActive !== "boolean") {
        throw new Error("Invalid ping result");
      }
    } catch (e) {
      console.error("Ping failed:", e);
      return res.status(400).json({
        ok: 0,
        error: "Ping failed",
      });
    }

    const updatedStation = await Station.findOneAndUpdate(
      { id },
      { $set: { egmId, ipAddress, isActive } },
      { new: true }
    );

    if (!updatedStation) {
      return res.status(404).json({ error: "Station not found" });
    }

    return res.status(200).json(updatedStation);
  } catch (error) {
    console.error("Update error:", error);
    return res
      .status(500)
      .json({ error: "Server error", message: error.message });
  }
}

async function deleteOneStation(req, res) {
  try {
    const { id } = req.params;
    await Station.deleteOne({ id });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleResetEventsByAttendant(req, res) {
  try {
    const stations = await Station.find();
    await Promise.all(
      stations.map(async (station) => {
        await Station.findOneAndUpdate(
          { id: station.id },
          { $set: { shiftReset: convertUTCToTimeStamp(new Date()) } },
          { new: true }
        );
      })
    );

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleResetEventsByManager(req, res) {
  try {
    const stations = await Station.find();
    await Promise.all(
      stations.map(async (station) => {
        await Station.findOneAndUpdate(
          { id: station.id },
          { $set: { dailyReset: convertUTCToTimeStamp(new Date()) } },
          { new: true }
        );
      })
    );

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleResetEventsByAdmin(req, res) {
  try {
    const stations = await Station.find();
    await Promise.all(
      stations.map(async (station) => {
        await Station.findOneAndUpdate(
          { id: station.id },
          { $set: { monthlyReset: convertUTCToTimeStamp(new Date()) } },
          { new: true }
        );
      })
    );

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function fetchCageServiceShiftMeters(req) {
  const stations = await Station.find();

  const stationsWithData = await Promise.all(
    stations.map(async (station) => {
      const egmId = station.egmId;
      const lastReset = station.shiftReset;

      const accountingMeters = await fetchAccountingMeters(egmId, lastReset);
      const transactions = await findStationTransaction(egmId, lastReset);

      const totalCoinIn = transactions
        .filter((trans) => trans.transType == "Deposit")
        .reduce((acc, transaction) => {
          return acc + transaction.depositAmount;
        }, 0);

      const totalCoinOut = transactions
        .filter((trans) => trans.transType == "Withdraw")
        .reduce((acc, transaction) => {
          return acc + transaction.withdrawAmount;
        }, 0);

      return {
        id: station.id,
        egmId: station.egmId,
        coinIn: totalCoinIn,
        coinOut: totalCoinOut,
        creditsBet: accountingMeters.totalCreditsBet,
        creditsWon: accountingMeters.totalCreditsWon,
        creditsLost: accountingMeters.totalCreditsLost,
        gamesPlayed: accountingMeters.totalGamesPlayed,
        gamesWon: accountingMeters.totalGamesWon,
        gamesLost: accountingMeters.totalGamesLost,
      };
    })
  );

  return stationsWithData;
}

async function fetchCageServiceDailyMeters(req) {
  const stations = await Station.find();

  const stationsWithData = await Promise.all(
    stations.map(async (station) => {
      const egmId = station.egmId;
      const lastReset = station.dailyReset;

      const accountingMeters = await fetchAccountingMeters(egmId, lastReset);
      const transactions = await findStationTransaction(egmId, lastReset);

      const totalCoinIn = transactions
        .filter((trans) => trans.transType == "Deposit")
        .reduce((acc, transaction) => {
          return acc + transaction.depositAmount;
        }, 0);

      const totalCoinOut = transactions
        .filter((trans) => trans.transType == "Withdraw")
        .reduce((acc, transaction) => {
          return acc + transaction.withdrawAmount;
        }, 0);

      return {
        id: station.id,
        egmId: station.egmId,
        coinIn: totalCoinIn,
        coinOut: totalCoinOut,
        creditsBet: accountingMeters.totalCreditsBet,
        creditsWon: accountingMeters.totalCreditsWon,
        creditsLost: accountingMeters.totalCreditsLost,
        gamesPlayed: accountingMeters.totalGamesPlayed,
        gamesWon: accountingMeters.totalGamesWon,
        gamesLost: accountingMeters.totalGamesLost,
      };
    })
  );

  return stationsWithData;
}

async function fetchCageServiceMonthlyMeters(req) {
  const stations = await Station.find();

  const stationsWithData = await Promise.all(
    stations.map(async (station) => {
      const egmId = station.egmId;
      const lastReset = station.monthlyReset;

      const accountingMeters = await fetchAccountingMeters(egmId, lastReset);
      const transactions = await findStationTransaction(egmId, lastReset);

      const totalCoinIn = transactions
        .filter((trans) => trans.transType == "Deposit")
        .reduce((acc, transaction) => {
          return acc + transaction.depositAmount;
        }, 0);

      const totalCoinOut = transactions
        .filter((trans) => trans.transType == "Withdraw")
        .reduce((acc, transaction) => {
          return acc + transaction.withdrawAmount;
        }, 0);

      return {
        id: station.id,
        egmId: station.egmId,
        coinIn: totalCoinIn,
        coinOut: totalCoinOut,
        creditsBet: accountingMeters.totalCreditsBet,
        creditsWon: accountingMeters.totalCreditsWon,
        creditsLost: accountingMeters.totalCreditsLost,
        gamesPlayed: accountingMeters.totalGamesPlayed,
        gamesWon: accountingMeters.totalGamesWon,
        gamesLost: accountingMeters.totalGamesLost,
      };
    })
  );

  return stationsWithData;
}

module.exports = {
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
};
