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
 * |  20/03/2025   | Wilson Sam   |     Created     |  File Creation - Handle various CRUD operations and business logic for the progressive jackpot system.
 * |  25/03/2025   | Wilson Sam   |     Updated     |  Added Jackpot Persistence Support
 * **********************************************************************************************************************************************************************
 * */

const { ProgressiveJackpot } = require("../../db/mongodb");
const { convertUTCToTimeStamp } = require("../timestamp");

// Create a new jackpot
const createJackpot = async (req, res) => {
  try {
    const { id, name, baseAmount, incrementRate, isActive = true } = req.body;
    const jackpot = new ProgressiveJackpot({
      id,
      name,
      baseAmount,
      incrementRate,
      currentAmount: baseAmount,
      isActive,
      updatedAt: convertUTCToTimeStamp(new Date()),
      createdAt: convertUTCToTimeStamp(new Date()),
    });
    await jackpot.save();
    res.status(201).json(jackpot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all jackpots
const getAllJackpots = async (req, res) => {
  try {
    const jackpots = await ProgressiveJackpot.find().select({
      _id: 0,
      __v: 0,
    });
    res.status(200).json(jackpots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single jackpot by ID
const getJackpotById = async (req, res) => {
  try {
    const { id } = req.params;
    const jackpot = await ProgressiveJackpot.findOne({
      id: parseInt(id),
    }).select({ _id: 0, __v: 0 });
    if (!jackpot) {
      return res.status(404).json({ error: "Jackpot not found" });
    }
    res.status(200).json(jackpot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const validateAndIncrementJackpot = async (id, betAmount) => {
  if (isNaN(id) || id <= 0) {
    throw new Error("Invalid id");
  }

  const jackpot = await ProgressiveJackpot.findOne({ id: parseInt(id, 10) });

  if (!jackpot) {
    throw new Error("Jackpot not found");
  }

  if (isNaN(betAmount) || betAmount <= 0) {
    throw new Error("Invalid bet amount");
  }

  jackpot.currentAmount += jackpot.incrementRate * parseFloat(betAmount);
  jackpot.lastIncrementedAt = convertUTCToTimeStamp(new Date());

  await jackpot.save();
  return jackpot;
};

// Increment a jackpot
const incrementJackpot = async (req, res) => {
  try {
    const { id, betAmount } = req.body;

    const jackpot = await validateAndIncrementJackpot(id, betAmount);

    res.status(200).json(jackpot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const validateAndRecordJackpotWin = async (id, uid) => {
  if (isNaN(id) || id <= 0) {
    throw new Error("Invalid id");
  }

  if (!uid) {
    throw new Error("Invalid uid");
  }

  const jackpot = await ProgressiveJackpot.findOne({ id: parseInt(id, 10) });

  if (!jackpot) {
    throw new Error("Jackpot not found");
  }

  jackpot.wonBy = uid;
  jackpot.wonAmount = jackpot.currentAmount;
  jackpot.wonAt = convertUTCToTimeStamp(new Date());
  jackpot.currentAmount = jackpot.baseAmount;

  await jackpot.save();
  return jackpot;
};

// Record a jackpot win
const recordJackpotWin = async (req, res) => {
  try {
    const { id, uid } = req.body;

    const jackpot = await validateAndRecordJackpotWin(id, uid);

    // Respond with the updated jackpot
    res.status(200).json(jackpot);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a jackpot
const updateJackpot = async (req, res) => {
  try {
    const { id, name, baseAmount, incrementRate, isActive } = req.body;
    const jackpot = await ProgressiveJackpot.findOneAndUpdate(
      { id: parseInt(id) },
      {
        $set: {
          name,
          baseAmount,
          incrementRate,
          isActive,
          updatedAt: convertUTCToTimeStamp(new Date()),
        },
      },
      { new: true }
    );
    if (!jackpot) {
      return res.status(404).json({ error: "Jackpot not found" });
    }
    res.status(200).json(jackpot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a jackpot
const deleteJackpot = async (req, res) => {
  try {
    const { id } = req.params;
    const jackpot = await ProgressiveJackpot.findOneAndDelete({
      id: parseInt(id),
    });
    if (!jackpot) {
      return res.status(404).json({ error: "Jackpot not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createJackpot,
  getAllJackpots,
  getJackpotById,
  updateJackpot,
  deleteJackpot,
  incrementJackpot,
  validateAndIncrementJackpot,
  recordJackpotWin,
  validateAndRecordJackpotWin,
};
