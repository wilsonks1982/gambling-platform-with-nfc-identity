# Details

Date : 2025-03-14 16:29:18

Directory /Users/whynew/0_Wildace/egm-bank-server/src

Total : 47 files,  9308 codes, 1011 comments, 539 blanks, all 10858 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [src/controllers/cageController.js](/src/controllers/cageController.js) | JavaScript | 17 | 17 | 5 | 39 |
| [src/controllers/configController.js](/src/controllers/configController.js) | JavaScript | 8 | 17 | 3 | 28 |
| [src/controllers/gameController.js](/src/controllers/gameController.js) | JavaScript | 56 | 18 | 13 | 87 |
| [src/controllers/loggingController.js](/src/controllers/loggingController.js) | JavaScript | 8 | 17 | 4 | 29 |
| [src/controllers/userController.js](/src/controllers/userController.js) | JavaScript | 174 | 17 | 14 | 205 |
| [src/db/mongodb/config/multi-db-replica-set/db.primary.js](/src/db/mongodb/config/multi-db-replica-set/db.primary.js) | JavaScript | 64 | 29 | 10 | 103 |
| [src/db/mongodb/config/multi-db-replica-set/db.secondary.js](/src/db/mongodb/config/multi-db-replica-set/db.secondary.js) | JavaScript | 0 | 0 | 1 | 1 |
| [src/db/mongodb/config/replica-set/index.js](/src/db/mongodb/config/replica-set/index.js) | JavaScript | 65 | 29 | 11 | 105 |
| [src/db/mongodb/config/standalone/index.js](/src/db/mongodb/config/standalone/index.js) | JavaScript | 91 | 28 | 14 | 133 |
| [src/db/mongodb/index.js](/src/db/mongodb/index.js) | JavaScript | 14 | 21 | 3 | 38 |
| [src/db/mongodb/models/game/index.js](/src/db/mongodb/models/game/index.js) | JavaScript | 44 | 31 | 10 | 85 |
| [src/db/mongodb/models/log/index.js](/src/db/mongodb/models/log/index.js) | JavaScript | 32 | 17 | 3 | 52 |
| [src/db/mongodb/models/pTransaction/index.js](/src/db/mongodb/models/pTransaction/index.js) | JavaScript | 12 | 18 | 3 | 33 |
| [src/db/mongodb/models/station/index.js](/src/db/mongodb/models/station/index.js) | JavaScript | 13 | 38 | 7 | 58 |
| [src/db/mongodb/models/transaction/index.js](/src/db/mongodb/models/transaction/index.js) | JavaScript | 15 | 26 | 4 | 45 |
| [src/db/mongodb/models/user/index.js](/src/db/mongodb/models/user/index.js) | JavaScript | 15 | 38 | 7 | 60 |
| [src/db/stations.json](/src/db/stations.json) | JSON | 68 | 0 | 1 | 69 |
| [src/db/users.json](/src/db/users.json) | JSON | 1,237 | 0 | 1 | 1,238 |
| [src/index.js](/src/index.js) | JavaScript | 23 | 19 | 8 | 50 |
| [src/routes/cageRoute.js](/src/routes/cageRoute.js) | JavaScript | 14 | 17 | 3 | 34 |
| [src/routes/configRoute.js](/src/routes/configRoute.js) | JavaScript | 7 | 18 | 1 | 26 |
| [src/routes/gameRoute.js](/src/routes/gameRoute.js) | JavaScript | 12 | 17 | 4 | 33 |
| [src/routes/logRoute.js](/src/routes/logRoute.js) | JavaScript | 6 | 19 | 3 | 28 |
| [src/routes/userRoute.js](/src/routes/userRoute.js) | JavaScript | 52 | 24 | 8 | 84 |
| [src/services/cage-service/index.js](/src/services/cage-service/index.js) | JavaScript | 53 | 17 | 14 | 84 |
| [src/services/config-service/index.js](/src/services/config-service/index.js) | JavaScript | 488 | 42 | 10 | 540 |
| [src/services/game-service/index.js](/src/services/game-service/index.js) | JavaScript | 418 | 29 | 45 | 492 |
| [src/services/game-service/paytable/index.js](/src/services/game-service/paytable/index.js) | JavaScript | 18 | 18 | 4 | 40 |
| [src/services/game-service/primary/index.js](/src/services/game-service/primary/index.js) | JavaScript | 3,667 | 62 | 108 | 3,837 |
| [src/services/game-service/primary/win-payouts.js](/src/services/game-service/primary/win-payouts.js) | JavaScript | 88 | 18 | 12 | 118 |
| [src/services/game-service/primary/win-symbols.js](/src/services/game-service/primary/win-symbols.js) | JavaScript | 88 | 17 | 10 | 115 |
| [src/services/game-service/reels/reel1.js](/src/services/game-service/reels/reel1.js) | JavaScript | 265 | 17 | 12 | 294 |
| [src/services/game-service/reels/reel2.js](/src/services/game-service/reels/reel2.js) | JavaScript | 255 | 17 | 12 | 284 |
| [src/services/game-service/reels/reel3.js](/src/services/game-service/reels/reel3.js) | JavaScript | 255 | 17 | 12 | 284 |
| [src/services/game-service/reels/util.js](/src/services/game-service/reels/util.js) | JavaScript | 10 | 17 | 2 | 29 |
| [src/services/game-service/secondary/hit-or-miss.js](/src/services/game-service/secondary/hit-or-miss.js) | JavaScript | 62 | 18 | 8 | 88 |
| [src/services/game-service/secondary/index.js](/src/services/game-service/secondary/index.js) | JavaScript | 83 | 17 | 7 | 107 |
| [src/services/game-service/secondary/money-wheel.js](/src/services/game-service/secondary/money-wheel.js) | JavaScript | 77 | 18 | 9 | 104 |
| [src/services/game-service/secondary/one-of-three.js](/src/services/game-service/secondary/one-of-three.js) | JavaScript | 76 | 18 | 7 | 101 |
| [src/services/game-service/secondary/random.js](/src/services/game-service/secondary/random.js) | JavaScript | 53 | 18 | 8 | 79 |
| [src/services/game-service/secondary/six-of-eighteen.js](/src/services/game-service/secondary/six-of-eighteen.js) | JavaScript | 133 | 18 | 8 | 159 |
| [src/services/gateway-service/index.js](/src/services/gateway-service/index.js) | JavaScript | 176 | 45 | 16 | 237 |
| [src/services/logging-service/index.js](/src/services/logging-service/index.js) | JavaScript | 28 | 17 | 6 | 51 |
| [src/services/random.js](/src/services/random.js) | JavaScript | 11 | 17 | 4 | 32 |
| [src/services/timestamp.js](/src/services/timestamp.js) | JavaScript | 39 | 19 | 11 | 69 |
| [src/services/user-service/index.js](/src/services/user-service/index.js) | JavaScript | 847 | 39 | 61 | 947 |
| [src/services/websocket.js](/src/services/websocket.js) | JavaScript | 71 | 21 | 12 | 104 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)