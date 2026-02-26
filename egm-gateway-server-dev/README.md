# EGM Gateway Server

## Project Overview

EGM Gateway Server is a dual-protocol API/WebSocket gateway for slot machine systems. It serves as a unified entry point for client requests to various backend gaming services and enables real-time communication for progressive jackpot features.

## Core Architecture

- **Express HTTP Server**: Handles RESTful API requests and routes them to backend services
- **WebSocket Server**: Manages real-time bidirectional communication for jackpot notifications
- **RabbitMQ Integration**: Message queue system for push notifications and inter-service communication
- **NFC/Smartcard Service**: MIFARE Classic IC chip integration for electronic wallet functionality
- **Multi-Database Support**: MongoDB configurations for standalone and replica-set deployments

## Development Commands

### Build and Run

```bash
# Install dependencies (force flag handles PCSC module conflicts)
npm install --force

# Build for production (Linux)
npm run build

# Build for development (Mac)
npm run build-dev

# Start production server (Linux)
npm start

# Start development server (Mac)
npm run start-dev
```

### Testing

```bash
# Run all tests with coverage
npm test

# Test files are located in __tests__/ directory with .spec.js extension
```

## Service Architecture

### Controllers

- `configController.js` - Configuration management
- `gameController.js` - Game API proxy to backend game math service
- `userController.js` - User management operations
- `loggingController.js` - Centralized logging service

### Services

- `gateway-service/` - WebSocket server and RabbitMQ message handling
- `smartcard-service/` - NFC card reader integration (MIFARE Classic)
- `logging-service/` - Structured logging with context support
- `rng-service/` - Random number generation service interface

### Database Layer

The system supports multiple MongoDB configurations:

- Standalone deployment (default)
- Replica-set deployment (commented out in `/src/db/mongodb/index.js`)

Switch between configurations by uncommenting the appropriate require statement.

## Environment Variables

Key environment variables:

- `PORT` - Server port (default: 9000)
- `ENV_GAME_SERVER` - Game math backend server host
- `ENV_AMQP_SERVER` - RabbitMQ server host
- `ENV_CONNECT_QUEUE_NAME` - Connection queue name
- `ENV_DISCONNECT_QUEUE_NAME` - Disconnection queue name

## Platform-Specific Builds

The project maintains separate builds for different platforms:

- `linux/` - Production Linux deployment
- `mac/` - Development Mac deployment

Use the appropriate build and start commands based on your target platform.

## Key Integration Points

### WebSocket Message Types

- `INITIALIZE_UNITY_TOPPER` - Topper client initialization
- `TOPIC_JACKPOT_RESET` - Jackpot meter reset
- `TOPIC_JACKPOT_ROLLUP` - Jackpot amount increment
- `TOPIC_JACKPOT_WIN` - Jackpot win notification

### Game API Endpoints

- `GET /api/v1/spin` - Proxy to game math backend for spin requests
- `GET /api/v1/history` - Game history retrieval

Required query parameters for spin requests: `egmId`, `uid`, `betIndex`, `denomIndex`

## Docker Considerations

Docker deployment is pending due to PCSC module compatibility issues in containerized environments. Development should be done in native Node.js environments for now.
