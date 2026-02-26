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
 * |  15/01/2025   | Wilson Sam   |     Updated     |  API Gateway Refactoring
 * |  19/01/2025   | Wilson Sam   |     Updated     |  Linked Jackpot Feature - RabbitMQ service
 * **********************************************************************************************************************************************************************
 * */
const express = require("express");
const http = require("http");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

//Service Agents - Config, User, Slot Game, Logging...
const configRoute = require("./routes/configRoute.js");
const userRoute = require("./routes/userRoute.js");
const gameRoute = require("./routes/gameRoute.js");
const logRoute = require("./routes/logRoute.js");

//Platform Service Agents
const { Initialize, connectRabbitMQ } = require("./services/gateway-service");
const { InitializeNFCAgent } = require("./services/smartcard-service");

configRoute(app);
userRoute(app);
gameRoute(app);
logRoute(app);

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;
server.listen(PORT, (err) => {
  InitializeNFCAgent();
  connectRabbitMQ();
  Initialize(server);
  console.log(`running server version v25.01.23 on from port:::::::${PORT}`);
});
