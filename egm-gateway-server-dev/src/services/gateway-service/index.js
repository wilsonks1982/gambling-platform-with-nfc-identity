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
 * |  19/01/2025   | Wilson Sam   |     Updated     |  Added RabbitMQ - Queue Service for Push Notifications
 * **********************************************************************************************************************************************************************
 * */
const WebSocket = require("ws");
const amqplib = require("amqplib");
const AMQP_SERVER = process.env.ENV_AMQP_SERVER || "localhost";
const CONNECT_QUEUE_NAME = process.env.ENV_CONNECT_QUEUE_NAME || "connect";
const DISCONNECT_QUEUE_NAME =
  process.env.ENV_DISCONNECT_QUEUE_NAME || "disconnect";

const { logMessage } = require("../logging-service");

var channel, connection;
var unityWS = null;
var unityTopperWS = null;
var unityTopperEgmId = "";

function sendText(text) {
  if (unityWS) {
    unityWS.send(text);
  }
}

function SendJackpotMeterReset(jsonString) {
  console.log(jsonString);

  if (unityTopperWS) {
    unityTopperWS.send(jsonString);
  }
}

function SendJackpotMeterWin(jsonString) {
  console.log(jsonString);

  if (unityTopperWS) {
    unityTopperWS.send(jsonString);
  }
}

function SendJackpotMeterRollup(jsonString) {
  console.log(jsonString);

  if (unityTopperWS) {
    unityTopperWS.send(jsonString);
  }
}

function Initialize(server) {
  const wss = new WebSocket.Server({ server });
  let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

  wss.on("connection", function (ws) {
    ws.on("message", function (data) {
      if (typeof data === "string") {
        // client sent a string
      } else {
        // console.log("binary received from client -> " + Array.from(data).join(", ") + "");
        let u8arr = new Uint8Array(Array.from(data));
        let msgText = utf8decoder.decode(u8arr);
        if (msgText.includes("basegame")) {
          const context = JSON.parse(msgText).context;
          const level = JSON.parse(msgText).level;
          const message = JSON.parse(msgText).message;
          // console.log(`Client Log: ${context} ${level} ${message}`);
          logMessage(level, message, context);
        } else if (msgText.includes("INITIALIZE_UNITY_TOPPER")) {
          const initMsg = JSON.parse(msgText);
          console.log(msgText);
          unityTopperWS = ws;
          unityTopperEgmId = initMsg.egmId;
          console.log(
            `unity topper client ${initMsg.egmId} connected successsfully :-)`
          );

          if (!!unityTopperEgmId) {
            sendToConnectQueue(msgText);
            consumeClientQueue((egmId = unityTopperEgmId));
          }

          unityTopperWS.on("close", function () {
            console.log("topper client left.");
            if (!!unityTopperEgmId) {
              sendToDisConnectQueue(unityTopperEgmId);
              cancelconsumeClientQueue((egmId = unityTopperEgmId));
            }
            unityTopperWS = null;
            unityTopperEgmId = "";
          });
        } else if (msgText.includes("UNITY")) {
          console.log("unity basegame client connected successsfully :-)");

          setTimeout(() => {
            sendText(
              JSON.stringify({
                MessageType: "CardOn",
                data: {
                  uid: "23869508",
                  role: "player",
                },
              })
            );
            console.log("Sent Dummy User Card Insert");
          }, 1000);

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

// Connect to RabbitMQ
async function connectRabbitMQ() {
  try {
    const amqpServer = `amqp://${AMQP_SERVER}:5672`;
    console.log(`Connecting to RabbitMQ - ${amqpServer}`);
    connection = await amqplib.connect(amqpServer);
    channel = await connection.createChannel();
    console.log("Connected to RabbitMQ");
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

async function sendToConnectQueue(msgText) {
  try {
    //This method requires two main parameters: the name of the queue
    // and the message content, which must be in Buffer format
    channel.sendToQueue(CONNECT_QUEUE_NAME, Buffer.from(msgText), {
      persistent: true,
    });
    console.log(`Sent ${msgText} to queue ${CONNECT_QUEUE_NAME}`);
  } catch (error) {
    console.error("Error in sending message:", error);
  }
}

async function sendToDisConnectQueue(egmId) {
  try {
    const msg = JSON.stringify({
      MessageType: "TOPPER_DISCONNECTED",
      egmId: egmId,
    });

    //This method requires two main parameters: the name of the queue
    // and the message content, which must be in Buffer format
    channel.sendToQueue(DISCONNECT_QUEUE_NAME, Buffer.from(msg), {
      persistent: true,
    });
    console.log(`Sent ${msg} to queue ${DISCONNECT_QUEUE_NAME}`);
  } catch (error) {
    console.error("Error in sending message:", error);
  }
}

const consumerTag = "websocket";

async function consumeClientQueue(egmId) {
  try {
    console.log(`Waiting for messages in ${egmId}...`);

    await channel.assertQueue(egmId, { durable: true }); // Declare the queue

    channel.consume(
      egmId,
      (msg) => {
        if (msg !== null) {
          // Convert message content from Buffer to JSON
          const jsonString = msg.content.toString();
          const content = JSON.parse(jsonString);
          console.log("Received message:", jsonString);
          switch (true) {
            case content.MessageType === "TOPIC_JACKPOT_RESET":
              //{"MessageType":"TOPIC_JACKPOT_RESET","data":{"egmId":"WAS-1001","amount":400000}}
              SendJackpotMeterReset(jsonString);
              break;
            case content.MessageType === "TOPIC_JACKPOT_ROLLUP":
              //{"MessageType":"TOPIC_JACKPOT_ROLLUP","data":{"egmId":"WAS-1001","amount":400000.1}}
              SendJackpotMeterRollup(jsonString);
              break;
            case content.MessageType === "TOPIC_JACKPOT_WIN":
              //{"MessageType":"TOPIC_JACKPOT_WIN","data":{"egmId":"WAS-1001","amount":400000.1}}
              SendJackpotMeterWin(jsonString);
              break;
            case content.MessageType === "TOPIC_JACKPOT_LOST":
              //{"MessageType":"TOPIC_JACKPOT_WIN","data":{"egmId":"WAS-1001","amount":400000.1}}
              SendJackpotMeterWin(jsonString);
              break;
            default:
              console.log("Unknown message type");
              break;
          }
          channel.ack(msg); // Acknowledge message processing
        }
      },
      { consumerTag }
    );
  } catch (error) {
    console.error("Error in consuming message:", error);
  }
}

async function cancelconsumeClientQueue(egmId) {
  try {
    console.log(`Cancelling a consumer of queue ${egmId}...`);
    channel
      .cancel(consumerTag)
      .then(() => {
        console.log(`Cancelled a consumer of queue ${egmId}...`);
        return 0;
      })
      .catch(console.error);
  } catch (error) {
    console.error("Error in cancel consumer:", error);
  }
}

module.exports = {
  Initialize,
  sendText,
  connectRabbitMQ,
};
