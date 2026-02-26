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
 * |  18/12/2024   | Wilson Sam   |     Created     |  File Creation
 * **********************************************************************************************************************************************************************
 * */
const { default: mongoose } = require("mongoose");

// txtId.text = transactionItemData.Id.ToString();
// txtTransType.text = transactionItemData.TransBy.ToString();
// txtTransBy.text = transactionItemData.TransBy.ToString();
// txtDepositAmount.ShowCredits(transactionItemData.DepositAmount);
// txtWithdrawAmount.ShowCredits(transactionItemData.WithdrawAmount);
// txtPrevCredit.ShowCredits(transactionItemData.PrevCredit);
// txtThenCredit.ShowCredits(transactionItemData.ThenCredit);
// txtDateTime.text = transactionItemData.DateTime.ToString();

// Define Transaction schema
const transactionSchema = new mongoose.Schema({
  egmId: { type: String, required: true },
  uid: { type: String, required: true },
  transId: { type: String, required: true, unique: true },
  transType: { type: String, required: true },
  transBy: { type: String, required: true },
  depositAmount: { type: Number, required: true },
  withdrawAmount: { type: Number, required: true },
  prevCredit: { type: Number, required: true },
  thenCredit: { type: Number, required: true },
  transStartTime: { type: String, required: false },
  transEndTime: { type: String, required: false },
});

module.exports = transactionSchema;
