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
 * Best Practices followed
 * - Exporting connection-specific models for modular usage
 *
 * Change History
 * **********************************************************************************************************************************************************************
 * |     Date      |     Name     |      Change     |      Details
 * |  01/06/2024   | Wilson Sam   |     Created     |  File Creation
 * |  18/12/2024   | Wilson Sam   |     Changed     |  Code Refactoring
 * |  20/03/2025   | Wilson Sam   |     Changed     |  SLOT-1917 Progressive Persistence
 * **********************************************************************************************************************************************************************
 * */

const {
  User,
  Log,
  Game,
  Transaction,
  Station,
  ProgressiveJackpot,
  Employee
} = require("./config/standalone");

module.exports = {
  User,
  Log,
  Game,
  Transaction,
  Station,
  ProgressiveJackpot,
  Employee
};
