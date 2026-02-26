# EGM Central Server

## Overview

This is an Electronic Gaming Machine (EGM) Bank Server - a sophisticated slot machine backend system built on Node.js with MongoDB and RabbitMQ. It manages player accounts, game mechanics, progressive jackpots, and real-time communication with gaming machines in a casino environment.

## Development Commands

### Prerequisites

- Bring up the database first: `docker compose -f mac-compose-mongo-standalone.yml up`
- Install dependencies: `npm install --force`

### Build Commands

- **Mac Development**: `npm run build-mac` or `npm run build-dev`
- **Linux Production**: `npm run build-linux`
- **Development**: `npm run build`

### Server Commands

- **Mac**: `npm run start-mac` or `npm run start-dev`
- **Linux**: `npm run start-linux`
- **General**: `npm start`

### Testing

- **Run Tests**: `npm test` (uses Jest with coverage)
- **Test Files**: Must match pattern `**/*.spec.js`

## Architecture Overview

### Service-Oriented Architecture

The system follows a modular service pattern with clear separation of concerns:

- **Game Service**: Core slot machine logic (primary/secondary games, reels, paytable)
- **User Service**: Player account and transaction management
- **Gateway Service**: RabbitMQ communication with gaming machines
- **Cage Service**: Gaming floor management and reporting
- **Jackpot Service**: Progressive jackpot system management
- **Config Service**: Game configuration and feature flags

### Key Directories

- `src/services/`: Core business logic services
- `src/controllers/`: HTTP request handlers
- `src/routes/`: Express route definitions
- `src/db/`: Database models and connection logic
- `mac/` and `linux/`: Platform-specific server entry points

### Game Service Structure

The game service implements a sophisticated two-tier system:

- **Primary Games** (`src/services/game-service/primary/`): Main slot game mechanics
- **Secondary Games** (`src/services/game-service/secondary/`): Bonus games (Money Wheel, Hit-or-Miss, etc.)
- **Reels** (`src/services/game-service/reels/`): Virtual reel strip definitions
- **Paytable** (`src/services/game-service/paytable/`): Betting configuration and payout tables

## Database Models

### Core Models (MongoDB with Mongoose)

- **User**: Player accounts, wallets, session state
- **Game**: Comprehensive spin records and financial tracking
- **Transaction**: Financial transaction log with audit trail
- **Station**: Gaming machine registry and status monitoring
- **ProgressiveJackpot**: Multi-level jackpot configuration
- **Employee**: Staff authentication and role management

### Database Configuration

- Supports both standalone and replica-set MongoDB configurations
- Connection logic in `src/db/mongodb/config/`
- Models defined in `src/db/mongodb/models/`

## Integration Patterns

### External Systems

- **RabbitMQ**: Message queue for real-time EGM communication
- **WebSocket**: Real-time client communication
- **MongoDB**: Primary data persistence
- **Docker**: Database and service orchestration

### Key Integration Points

- Gaming machines communicate via RabbitMQ message queues
- Progressive jackpot updates broadcast to all connected machines
- Network monitoring via ping-based connectivity checks
- Math test results served via static file endpoint at `/results`

## Development Patterns

### Code Style

- Functional programming approach using Ramda library
- Modular service imports with clear export patterns
- Comprehensive error handling and validation
- Proper audit trail logging for all transactions


## Docker Network Setup 

Manually Create Docker Network for Communication Between Containers (One-Time Setup)
Run the following command in the terminal to create a Docker network:

command - docker network create wildace-network
Update the configuration file to ensure the network is mentioned in each docker compose file :

networks:
  wildace-network:
    external: true
    name: wildace-network
