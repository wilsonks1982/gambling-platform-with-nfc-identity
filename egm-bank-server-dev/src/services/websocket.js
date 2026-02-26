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
 * |  18/01/2025   | Wilson Sam   |     Updated     |  Linked Jackpot Feature.
 * **********************************************************************************************************************************************************************
 * */
const WebSocket = require("ws");

var unityWS = null;
var unityTopperWS = null;

function SendJackpotMeterReset(amount, egmId) {
  const jsonString = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_RESET",
    data: {
      egmId: egmId,
      amount: amount,
    },
  });
  console.log(jsonString);
  if (unityTopperWS) {
    unityTopperWS.send(jsonString);
  }
}

function SendJackpotMeterWin(amount, egmId) {
  const jsonString = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_WIN",
    data: {
      egmId: egmId,
      amount: amount,
    },
  });
  console.log(jsonString);

  if (unityTopperWS) {
    unityTopperWS.send(jsonString);
  }
}

function SendJackpotMeterRollup(amount, egmId) {
  const jsonString = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_ROLLUP",
    data: {
      egmId: egmId,
      amount: amount,
    },
  });
  console.log(jsonString);

  if (unityTopperWS) {
    unityTopperWS.send(jsonString);
  }
}

function Initialize(server) {
  const wss = new WebSocket.Server({ server });
  let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

  // Event listener for new connections
  wss.on("connection", function (ws) {
    ws.on("message", function (data) {
      if (typeof data === "string") {
        // client sent a string
      } else {
        // console.log("binary received from client -> " + Array.from(data).join(", ") + "");
        let u8arr = new Uint8Array(Array.from(data));
        let msgText = utf8decoder.decode(u8arr);
        if (msgText.includes("UNITY_TOPPER")) {
          unityTopperWS = ws;

          unityTopperWS.on("close", function () {
            console.log("topper client left.");
            unityTopperWS = null;
          });
        } else if (msgText.includes("UNITY")) {
          unityWS = ws;

          unityWS.on("close", function () {
            console.log("basegame client left.");
            unityWS = null;
          });
        }
      }
    });
  });
}

module.exports = {
  Initialize,
};
