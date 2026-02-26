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
 * |  25/12/2024   | Wilson Sam   |     Updated     |  Code Optimization
 * |  15/01/2025   | Wilson Sam   |     Updated     |  Code Refactoring for linked jackpot
 * **********************************************************************************************************************************************************************
 * */

const { default: axios } = require("axios");

const GAME_SERVER = process.env.ENV_GAME_SERVER || "localhost";

/******************************************************************************************************* */
//Handling API GET api/v1/spin
//query string parameters:
// MANDATORY
// - egmId
// - uid
// - betIndex
// - denomIndex
/******************************************************************************************************* */
async function handleGetTestSpinRequest(req, res) {
  try {
    const {
      egmId = "WAS-001",
      uid,
      betIndex,
      denomIndex,
      s1,
      s2,
      s3,
      isGaffingOn,
    } = req.query;

    const url = `http://${GAME_SERVER}:9001/api/v1/spin?egmId=${egmId}&uid=${uid}&betIndex=${betIndex}&denomIndex=${denomIndex}&s1=${s1}&s2=${s2}&s3=${s3}&isGaffingOn=${isGaffingOn}`;
    // Log the incoming request for debugging
    console.log(`<--${JSON.stringify(req.query)}`);
    console.log(`<--${url}`);

    // Make an API request to the backend using axios
    const response = await axios.get(url);

    console.log(`-->${JSON.stringify(response.data)}`);

    // Send back the result from the backend API to the caller
    return res.json(response.data);
  } catch (error) {
    // Handle errors and send a response back to the caller
    console.error("Error occurred while calling backend API:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
}

/******************************************************************************************************* */
//Handling API GET api/v1/history
//query string parameters:
// MANDATORY
// OPTIONAL
// - egmId
// - uid
/******************************************************************************************************* */
async function handleGetGameHistory(req, res) {
  try {
    const { egmId = "*", uid = "*" } = req.query;
    const url = `http://${GAME_SERVER}:9001/api/v1/history?egmId=${egmId}&uid=${uid}`;

    // Log the incoming request for debugging
    console.log(`<--${url}`);

    // Make an API request to the backend using axios
    const response = await axios.get(url);

    console.log(`-->${JSON.stringify(response.data)}`);

    // Send back the result from the backend API to the caller
    return res.json(response.data);
  } catch (error) {
    // Handle errors and send a response back to the caller
    console.error("Error occurred while calling backend API:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
}

module.exports = {
  handleGetTestSpinRequest,
  handleGetGameHistory,
};
