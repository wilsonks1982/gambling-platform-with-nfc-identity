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
const { default: axios } = require("axios");


const BANK_SERVER = process.env.ENV_BANK_SERVER || "localhost";

/******************************************************************************************************* */
//Handling API GET api/v1/user
//query string parameters:
// MANDATORY
// - uid
/******************************************************************************************************* */
async function handleGetTestUserWalletReq(req, res) {
  try {
    const { uid } = req.query;
    const url = `http://${BANK_SERVER}:9001/api/v1/user?uid=${uid}`;
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

/******************************************************************************************************* */
//Handling API GET api/v1/user
//query string parameters:
// MANDATORY
// -
/******************************************************************************************************* */
async function handleGetTestUsersReq(req, res) {
  try {
    const url = `http://${BANK_SERVER}:9001/api/v1/users`;
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

async function handleGetWalletTransactionHistory(req, res) {
  try {
    const { uid, egmId = "*" } = req.query;
    const url = `http://${BANK_SERVER}:9001/api/v1/transaction?uid=${uid}&egmId=${egmId}`;
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

async function handlePostTestDepositCredits(req, res) {
  const url = `http://${BANK_SERVER}:9001/api/v1/deposit`;

  console.log(`<--${url}${JSON.stringify(req.body)}`);

  try {
    // Forward the request body to the backend API
    const response = await axios.post(url, req.body);

    console.log(`-->${JSON.stringify(response.data)}`);

    // Send back the response data from the backend API
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors and send appropriate response
    res
      .status(error.response ? error.response.status : 500)
      .send(error.message);
  }
}

async function handlePostTestWithdrawCredits(req, res) {
  const url = `http://${BANK_SERVER}:9001/api/v1/withdraw`;

  console.log(`<--${url}${JSON.stringify(req.body)}`);

  try {
    // Forward the request body to the backend API
    const response = await axios.post(url, req.body);

    console.log(`-->${JSON.stringify(response.data)}`);

    // Send back the response data from the backend API
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors and send appropriate response
    res
      .status(error.response ? error.response.status : 500)
      .send(error.message);
  }
}

module.exports = {
  handleGetTestUserWalletReq,
  handleGetTestUsersReq,
  handleGetWalletTransactionHistory,
  handlePostTestDepositCredits,
  handlePostTestWithdrawCredits,
};
