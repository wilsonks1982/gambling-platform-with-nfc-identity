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
 * |  15/01/2025   | Wilson Sam   |     Created     |  File Creation
 * |  03/02/2025   | Wilson Sam   |     Updated     |  SLOT-1411 Central Server: Game History Filter Support
 * **********************************************************************************************************************************************************************
 * */

const { validateOneUserSpinRequest } = require("../services/user-service");
const {
  computeOneUserSpinRequest,
  saveGameRecord,
  findGameRecords,
} = require("../services/game-service");
const {
  generateTimeStamp,
  generatePrimaryKey,
} = require("../services/timestamp");

async function handleGetTestSpinRequest(req, res) {
  const spinStart = generateTimeStamp();
  const spinNumber = generatePrimaryKey();

  const validSpin = await validateOneUserSpinRequest(req, spinNumber);

  if (!validSpin.ok) {
    const result = {
      ...validSpin,
      spinStart,
    };

    console.log(`INVALID SPIN REQ: ${JSON.stringify(result)}`);

    res.status(201).json({ ...result });
  } else {
    console.log(`VALID SPIN REQ: ${JSON.stringify(validSpin)}`);

    const computeSpin = await computeOneUserSpinRequest(req, validSpin);
    if (!computeSpin.ok) {
      const result = {
        ...computeSpin,
        spinStart,
      };

      console.log(`INVALID SPIN RESULT: ${JSON.stringify(result)}`);

      res.status(201).json({ ...result });
    } else {
      const result = {
        ...computeSpin,
        spinStart,
      };
      console.log(`VALID SPIN RESULT: ${JSON.stringify(result)}`);

      const resultSave = await saveGameRecord(result);
      if (resultSave.ok) {
        console.log("game record saved successfully");
        res.status(201).json({ ...result });
      } else {
        console.log("game record not saved successfully");
        res.status(201).json({ ...result });
      }
    }
  }
}

async function handleGetGameHistory(req, res) {
  const result = await findGameRecords(req);
  return res.json({ data: result });
}

module.exports = {
  handleGetTestSpinRequest,
  handleGetGameHistory,
};
