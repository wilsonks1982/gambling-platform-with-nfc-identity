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
 * |  21/01/2025   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const amqplib = require("amqplib");
const { generateTimeStamp } = require("../timestamp");
const { ProgressiveJackpot } = require("../../db/mongodb");
const AMQP_SERVER = process.env.ENV_AMQP_SERVER || "localhost";
const CONNECT_QUEUE_NAME = process.env.ENV_CONNECT_QUEUE_NAME || "connect";
const DISCONNECT_QUEUE_NAME =
  process.env.ENV_DISCONNECT_QUEUE_NAME || "disconnect";
const EGM1_QUEUE_NAME = process.env.ENV_EGM1_QUEUE_NAME || "WAS-1001";
const EGM2_QUEUE_NAME = process.env.ENV_EGM2_QUEUE_NAME || "WAS-1002";
const EGM3_QUEUE_NAME = process.env.ENV_EGM3_QUEUE_NAME || "WAS-1003";
const EGM4_QUEUE_NAME = process.env.ENV_EGM4_QUEUE_NAME || "WAS-1004";
const EGM5_QUEUE_NAME = process.env.ENV_EGM5_QUEUE_NAME || "WAS-1005";
const EGM6_QUEUE_NAME = process.env.ENV_EGM6_QUEUE_NAME || "WAS-1006";
const EGM7_QUEUE_NAME = process.env.ENV_EGM7_QUEUE_NAME || "WAS-1007";
const EGM8_QUEUE_NAME = process.env.ENV_EGM8_QUEUE_NAME || "WAS-1008";

let channel, connection;
let toppers = [];

// Connect to RabbitMQ
async function connectRabbitMQ() {
  try {
    const amqpServer = `amqp://${AMQP_SERVER}:5672`;
    console.log(`Connecting to RabbitMQ - ${amqpServer}`);
    connection = await amqplib.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue(CONNECT_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(DISCONNECT_QUEUE_NAME, { durable: true }); // Declare the queue

    await channel.assertQueue(EGM1_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM2_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM3_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM4_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM5_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM6_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM7_QUEUE_NAME, { durable: true }); // Declare the queue
    await channel.assertQueue(EGM8_QUEUE_NAME, { durable: true }); // Declare the queue

    console.log("Connected to RabbitMQ");

    consumeClientConnectQueue();
    consumeClientDisConnectQueue();
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

async function consumeClientConnectQueue() {
  try {
    console.log(`Waiting for messages in ${CONNECT_QUEUE_NAME}...`);
    channel.consume(CONNECT_QUEUE_NAME, (msg) => {
      // Convert message content from Buffer to JSON
      const content = JSON.parse(msg.content.toString());
      console.log("Received message:", content);
      switch (true) {
        case content.MessageType === "INITIALIZE_UNITY_TOPPER":
          console.log(`Topper for ${content.egmId} is connected now`);
          toppers.push({ ...content });
          console.table(toppers);
          setTimeout(async () => {
            try {
              const jackpotDhamaka = await ProgressiveJackpot.findOne({
                id: 1,
              });
              const resetAmount = jackpotDhamaka?.currentAmount || 400000;
              console.log(
                `Resetting jackpot meter with amount: ${resetAmount}`
              );
              SendJackpotMeterResetForOne(resetAmount, content.egmId);
            } catch (error) {
              console.error("Error fetching ProgressiveJackpot:", error);
            }
          }, 2000);
          break;
        // Add more cases as needed
        default:
          console.log("Unknown message type");
          break;
      }
      channel.ack(msg); // Acknowledge message processing
    });
  } catch (error) {
    console.error("Error in consuming message:", error);
  }
}
async function consumeClientDisConnectQueue() {
  try {
    console.log(`Waiting for messages in ${DISCONNECT_QUEUE_NAME}...`);
    channel.consume(DISCONNECT_QUEUE_NAME, (msg) => {
      // Convert message content from Buffer to JSON
      const content = JSON.parse(msg.content.toString());
      console.log("Received message:", content);
      switch (true) {
        case content.MessageType === "TOPPER_DISCONNECTED":
          console.log(`Topper for ${content.egmId} is disconnected now`);
          toppers = toppers.filter((topper) => topper.egmId != content.egmId);
          console.table(toppers);
          break;
        // Add more cases as needed
        default:
          console.log("Unknown message type");
          break;
      }
      channel.ack(msg); // Acknowledge message processing
    });
  } catch (error) {
    console.error("Error in consuming message:", error);
  }
}

async function sendJsonStringToQueue(queueName, jsonString) {
  try {
    channel.sendToQueue(queueName, Buffer.from(jsonString), {
      persistent: true,
    });
    console.log(`Sent ${jsonString} to queue ${queueName}`);
  } catch (error) {
    console.error("Error in sending message:", error);
  }
}

/**
 * Regarding the  Reset, the inputs from spin are
 * - Contribution source egmId
 * - JDTicker Amount
 * Action is,
 * Loop through each connected toppers and send message to all
 */
function SendJackpotMeterReset(amount, egmId) {
  const jsonString = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_RESET",
    data: {
      egmId: egmId,
      amount: amount,
    },
  });

  toppers.forEach((topper, index, arr) => {
    arr[index] = { ...arr[index], updatedAt: generateTimeStamp() }; // Doubling each number
    sendJsonStringToQueue(topper.egmId, jsonString);
    console.log(`${topper.egmId}-->${jsonString}`);
  });
}

/**
 * Regarding the  Win, the inputs from spin are
 * - Contribution source egmId
 * - JDTicker Amount
 * Action is,
 * Loop through each connected toppers
 * - send jsonStringWin to only sourceEgmId
 * - send jsonStringLost to others
 */
function SendJackpotMeterWin(jdTicker, sourceEgmId) {
  const jsonStringWin = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_WIN",
    data: {
      amount: jdTicker,
      egmId: sourceEgmId,
      timestamp: generateTimeStamp(),
    },
  });
  const jsonStringLost = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_LOST",
    data: {
      amount: jdTicker,
      egmId: sourceEgmId,
      timestamp: generateTimeStamp(),
    },
  });

  toppers.forEach((topper, index, arr) => {
    arr[index] = { ...arr[index], updatedAt: generateTimeStamp() };
    if (topper.egmId == sourceEgmId) {
      sendJsonStringToQueue(topper.egmId, jsonStringWin);
      console.log(`${topper.egmId}-->${jsonStringWin}`);
    } else {
      sendJsonStringToQueue(topper.egmId, jsonStringLost);
      console.log(`${topper.egmId}-->${jsonStringLost}`);
    }
  });
}
/**
 * Regarding the  Rollup, the inputs from spin are
 * - Contribution source egmId
 * - JDTicker Amount
 * Action is,
 * Loop through each connected toppers and send message to all
 */
function SendJackpotMeterRollup(jdTicker, sourceEgmId) {
  const jsonString = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_ROLLUP",
    data: {
      amount: jdTicker,
      sourceEgmId: sourceEgmId,
      timestamp: generateTimeStamp(),
    },
  });

  toppers.forEach((topper, index, arr) => {
    arr[index] = { ...arr[index], updatedAt: generateTimeStamp() };
    sendJsonStringToQueue(topper.egmId, jsonString);
    console.log(`${topper.egmId}-->${jsonString}`);
  });
}

function SendJackpotMeterResetForOne(amount, egmId) {
  const jsonString = JSON.stringify({
    MessageType: "TOPIC_JACKPOT_RESET",
    data: {
      egmId: egmId,
      amount: amount,
      timestamp: generateTimeStamp(),
    },
  });
  sendJsonStringToQueue(egmId, jsonString);
  console.log(`${egmId}-->${jsonString}`);

  toppers.forEach((topper, index, arr) => {
    if (topper.egmId == egmId) {
      arr[index] = { ...arr[index], updatedAt: generateTimeStamp() }; // Doubling each number
    }
  });
}

module.exports = {
  connectRabbitMQ,
  SendJackpotMeterWin,
  SendJackpotMeterReset,
  SendJackpotMeterRollup,
};
