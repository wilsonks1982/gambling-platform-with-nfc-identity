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
 * |  18/12/2024   | Wilson Sam   |     Changed     |  Logging Cards Info that not part of DB
 * **********************************************************************************************************************************************************************
 * */
//NFC is an event based library
const os = require("os");
const fs = require("fs");
const { NFC } = require("nfc-pcsc");
const { default: axios } = require("axios");

const { sendText } = require("../../services/gateway-service");

const nfc = new NFC(); // optionally you can pass logger

const BANK_SERVER = process.env.ENV_BANK_SERVER || "localhost";

async function handleCardInsert(uid, cardType) {
  try {
    const url = `http://${BANK_SERVER}:9001/api/v1/user?uid=${uid}`;
    // Log the incoming request for debugging
    console.log(`<--${url}`);

    // Make an API request to the backend using axios
    const response = await axios.get(url);

    console.log(`-->${JSON.stringify(response.data)}`);
    if(!response.data.role) {
      console.log(`Unknown ${cardType} Card Inserted with ${uid}`)
    } else {
      console.log(`Informing BaseGame - Card ${uid} ${response.data.role}`)

      sendText(
        JSON.stringify({
          MessageType: "CardOn",
          data: {
            uid: uid,
            role: response.data.role,
          },
        })
      );
    }

  } catch (error) {
    // Handle errors and send a response back to the caller
    console.error("Error occurred while calling backend API:", error);
  }

}

async function handleCardRemove(uid, cardType) {

  try {
    const url = `http://${BANK_SERVER}:9001/api/v1/user?uid=${uid}`;
    // Log the incoming request for debugging
    console.log(`<--${url}`);

    // Make an API request to the backend using axios
    const response = await axios.get(url);

    console.log(`-->${JSON.stringify(response.data)}`);
    if(!response.data.role) {
    } else {

    sendText(
      JSON.stringify({
        MessageType: "CardOff",
        data: {
          uid: uid,
          role: response.data.role,
        },
      })
    );
  }
  } catch (error) {
    // Handle errors and send a response back to the caller
    console.error("Error occurred while calling backend API:", error);
  }

}

function InitializeNFCAgent() {
  console.log(`InitializeNFCAgent...`);
  nfc.on("reader", (reader) => {
    console.log(`${reader.reader.name}  device attached`);

    reader.on("card", (card) => {
      let cardType = "Unknown";
      switch (card.type) {
        case "TAG_ISO_14443_3":
          cardType = "MIFARE Classic";
          if (card.uid) handleCardInsert(card.uid, cardType);
          break;

        case "TAG_ISO_14443_4":
          cardType = "MIFARE Classic EV1 1K";
          if (card.uid) handleCardInsert(card.uid, cardType);
          break;
        default:
          console.log(`${card.type} card type ignored`);
          break;
      }
    });

    reader.on("card.off", (card) => {
      let cardType = "Unknown";
      switch (card.type) {
        case "TAG_ISO_14443_3":
          cardType = "MIFARE Classic";
          if (card.uid) handleCardRemove(card.uid, cardType);
          break;

        case "TAG_ISO_14443_4":
          cardType = "MIFARE Classic EV1 1K";
          if (card.uid) handleCardRemove(card.uid, cardType);
          break;
        default:
          break;
      }
    });

    reader.on("error", (err) => {
      console.log(`${reader.reader.name}  an error occurred`, err);
    });

    reader.on("end", () => {
      console.log(`${reader.reader.name}  device removed`);
    });
  });
}

module.exports = {
  InitializeNFCAgent,
};
