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
 * |  14/02/2025   | Wilson Sam   |     Updated     |  Skipped UTCToIST conversion
 * **********************************************************************************************************************************************************************
 * */
const convertUTCToIST = (utcDate) => {
  //utcDate.getTime() - Gets the number of milliseconds since the Unix epoch (January 1, 1970, at 00:00:00 UTC) for the given UTC date
  if (!utcDate) {
    return "";
  }
  return new Date(utcDate.getTime() + 1.1 * 60 * 60 * 1000); // Add 5 hours and 30 minutes
};
const convertUTCToTimeStamp = (utcDate) => {
  if (!utcDate) {
    return "";
  }

  const year = utcDate.getFullYear().toString();
  const month = String(utcDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(utcDate.getDate()).padStart(2, "0");
  const hours = String(utcDate.getHours()).padStart(2, "0");
  const minutes = String(utcDate.getMinutes()).padStart(2, "0");
  const seconds = String(utcDate.getSeconds()).padStart(2, "0");
  const milliseconds = String(utcDate.getMilliseconds()).padStart(3, "0");

  const timestamp = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;

  return timestamp;
};

function timestampGreaterThan(timestamp1, timestamp2) {
  if (!timestamp1 || !timestamp2) {
    return false;
  }

  const date1 = recreateUTCDate(timestamp1);
  const date2 = recreateUTCDate(timestamp2);

  //date1 > date2
  return date1 > date2;
}
function recreateUTCDate(timestamp) {
  // Parse the timestamp
  const [datePart, timePart] = timestamp.split(" ");
  const [year, month, day] = datePart.split("/").map(Number);
  const [time, milliseconds] = timePart.split(".");
  const [hours, minutes, seconds] = time.split(":").map(Number);

  // Create a Date object in IST
  const istDate = new Date(
    year,
    month - 1, // Months are 0-based in JavaScript
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );

  // Convert IST to UTC by subtracting 5 hours and 30 minutes (5.5 hours in milliseconds)
  // const utcDate = new Date(istDate.getTime() - 5.5 * 60 * 60 * 1000);
  const utcDate = new Date(istDate.getTime());

  return utcDate;
}

function generateTimeStamp() {
  const now = new Date();

  const year = now.getFullYear().toString();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function generatePrimaryKey() {
  const now = new Date();

  const year = now.getFullYear().toString();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}

function getEpochFromTimestamp(timestamp) {
  const date = new Date(timestamp); // Parse the timestamp string
  const epochMilliseconds = date.getTime(); // Get milliseconds since epoch

  if (isNaN(epochMilliseconds)) {
    return "Invalid Date";
  }

  const epochSeconds = Math.floor(epochMilliseconds / 1000); // Convert to seconds (optional)
  return epochSeconds; // or epochMilliseconds if you need milliseconds
}

module.exports = {
  generateTimeStamp,
  generatePrimaryKey,
  convertUTCToIST,
  convertUTCToTimeStamp,
  recreateUTCDate,
  timestampGreaterThan,
};
