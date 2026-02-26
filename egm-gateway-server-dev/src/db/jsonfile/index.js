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
// Requiring users json file
var users = require("../users");

const User = {
  find: function () {
    console.log("find ** from json file");
    return users;
  },
  findOne: function ({ uid }) {
    const result = users.find((user) => user.uid == uid);
    if (result) {
      console.log("findOne ** from json");
      return result;
    } else {
      console.log(`user with uid ${uid} is not present in the array`);
      return {
        uid: uid,
        nickname: uid,
        wallet: 0,
        firstName: uid,
        lastName: uid,
      };
    }
  },
  updateOne: function ({ uid }, { wallet }) {
    console.log("updateOne ** from json file");
    //Find index of specific object using findIndex method.
    userIndex = users.findIndex((user) => user.uid == uid);
    if (userIndex > -1) {
      users = [
        ...users.filter((u) => u.uid != uid),
        Object.assign({}, { ...users[userIndex], wallet: wallet }),
      ];
    }
    return {
      uid,
      wallet,
      nModified: 1,
    };
  },
};

module.exports = {
  User,
};
