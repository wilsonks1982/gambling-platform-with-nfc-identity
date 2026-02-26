# EGM Bank Desktop App

Welcome to the EGM Bank Desktop App documentation. This guide will help you understand how to set up, use, and contribute to the project.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

The EGM Cage Desktop App is an Electron-based application designed to provide a seamless banking experience on your desktop.A single web application effectively serve multiple roles and role-based views.Instead of creating separate apps for each role, decided to use a single app with role-based views to provide a seamless experience for organization who may have multiple roles.As an Alpha version, Consolidated 3 roles (Attendant, Manager, Admin) into a single App - - Actions and Data Access is different for each role.The UI gets adapted to different Roles used centralized authentication mechanisms within a single application to streamline security management

## Features

- Role-based Access Control
- Customer Accounts management
- Transaction history
- Fund transfers
- Live Station Profit Reports
- Accounting Settlements - Daily/Monthly

## Installation

To install the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/egm-bank-desktop-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd egm-bank-desktop-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build main:
   ```bash
   npm run build:main
   ```
5. Build renderer:
   ```bash
   npm run build:renderer
   ```
6. Install prebuilt nfc-pcsc module:
   ```bash
   cd release/app
   npm install
   ```
7. Re-Build nfc-pcsc module locally:
   ```bash
   cd ../../
   npm run rebuild
   ```
8. Start the application:
   ```bash
   npm run start
   ```
9. Package the application:
   ```bash
   npm run package # Creates a desktop app in release/build directory
   ```


## Usage

Once the application is running, you can log in with your credentials and start managing your bank accounts.

