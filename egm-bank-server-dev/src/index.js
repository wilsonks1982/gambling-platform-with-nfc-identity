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
 * |  01/06/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const express = require("express");
const http = require("http");

const app = express();

app.use(express.json());

//Modularization: The routes are modular and can be easily imported into your main Express application using require.
//The routes are defined in separate files and then imported into the main Express application.
//This makes the code more organized and easier to maintain.
const configRoute = require("./routes/configRoute.js");
const userRoute = require("./routes/userRoute.js");
const gameRoute = require("./routes/gameRoute.js");
const logRoute = require("./routes/logRoute.js");
const cageRoute = require("./routes/cageRoute.js");
const jackpotRoutes = require("./routes/jackpotRoute.js"); //Jackpot Routes
const employeeRoutes = require("./routes/employeeRoute.js");

//Web Socket Support
const { Initialize } = require("./services/websocket.js");
const { connectRabbitMQ } = require("./services/gateway-service");
const { initializeJackpotDhamaka } = require("./services/game-service");

configRoute(app);
gameRoute(app);
userRoute(app);
logRoute(app);
cageRoute(app);
jackpotRoutes(app);
employeeRoutes(app);

//For Math Test
const path = require("path");
const resultsDir = path.join(__dirname, "..", "math-test");
app.use("/results", express.static(resultsDir));

const server = http.createServer(app);
Initialize(server);

const PORT = process.env.PORT || 9001
server.listen(PORT, (err) => {
  connectRabbitMQ();
  console.log(`running version v25.01.23 on from port:::::::${PORT}`);

  setTimeout(() => {
    initializeJackpotDhamaka();
  }, 10000);
});
