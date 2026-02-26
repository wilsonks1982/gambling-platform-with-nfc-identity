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
 * **********************************************************************************************************************************************************************
 * */
const axios = require("axios");

const GAME_SERVER = process.env.ENV_GAME_SERVER || "localhost";

async function handleConfigReq(req, res) {
  try {
    const { egmId = "WAS-001", gameId = "UC-1" } = req.query;
    const url = `http://${GAME_SERVER}:9001/api/v1/config?egmId=${egmId}&gameId=${gameId}`;

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
  handleConfigReq,
};
