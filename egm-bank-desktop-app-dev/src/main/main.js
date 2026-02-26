/**
 * Name: main.js
 * Author: Wilson Sam
 * Description: Electron Side of the application
 * - Application life cycle
 * - Creating Window
 * - Creating a Menu
 *
 */

import {
  app,
  BrowserWindow,
  globalShortcut,
  ipcMain,
  screen,
  net,
} from 'electron';

import pretty from './pretty-logger';
import { config, which, exec } from 'shelljs';
import path from 'path';

import MenuBuilder from './menu.js';
import { NFC } from 'nfc-pcsc';
import { store, actions } from './store/index.js';
import {
  handleServerChange,
  handleShuffleDeck52,
  handleCardDrawn,
  handleDrawRandomCard,
  handleMifareCardInsert,
} from './ipc';
const nfc = new NFC();

let primaryWindow;

function createPrimaryWindow(
  defaultWidth,
  defaultHeight,
  screenWidth,
  screenHeight,
  display = null
) {
  primaryWindow = new BrowserWindow({
    width: defaultWidth,
    height: defaultHeight,
    minWidth: defaultWidth,
    minHeight: defaultHeight,
    maxWidth: screenWidth,
    maxHeight: screenHeight,
    x: display
      ? display.bounds.x +
        Math.floor((display.workAreaSize.width - defaultWidth) / 2)
      : undefined,
    y: display
      ? display.bounds.y +
        Math.floor((display.workAreaSize.height - defaultHeight) / 2)
      : undefined,
    center: !display,
    resizable: true,
    maximizable: true,
    minimizable: true,
    fullscreenable: false,
    frame: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  primaryWindow.on('will-resize', (e) => {
    if (!primaryWindow.isMaximized()) e.preventDefault();
  });

  let isAdjustingBounds = false;

  primaryWindow.on('maximize', () => {
    if (isAdjustingBounds) return;
    isAdjustingBounds = true;

    primaryWindow.setSize(screenWidth, screenHeight);
    primaryWindow.center();

    setTimeout(() => (isAdjustingBounds = false), 100);
  });

  primaryWindow.on('unmaximize', () => {
    if (isAdjustingBounds) return;
    isAdjustingBounds = true;

    primaryWindow.setSize(defaultWidth, defaultHeight);
    primaryWindow.center();

    setTimeout(() => (isAdjustingBounds = false), 100);
  });

  primaryWindow.loadURL(
    `file://${path.resolve(__dirname, '../renderer/', 'index.html')}`
  );

  // primaryWindow.webContents.openDevTools(true);

  const menuBuilder = new MenuBuilder(primaryWindow);
  menuBuilder.buildMenu();

  primaryWindow.on('closed', () => {
    primaryWindow = null;
  });

  primaryWindow.webContents.on('did-finish-load', () => {
    store.subscribe(() => {
      pretty.debug(`Sending server:UpdateStore`);
      primaryWindow.webContents.send('server:UpdateStore', store.getState());
    });
  });
}

app.on('ready', () => {
  const { width: screenWidth, height: screenHeight } =
    screen.getPrimaryDisplay().workAreaSize;
  const defaultWidth = Math.floor(screenWidth * 0.95);
  const defaultHeight = Math.floor(screenHeight * 0.95);

  const displays = screen.getAllDisplays();
  const externalDisplay = displays.find(
    (display) => display.bounds.x !== 0 || display.bounds.y !== 0
  );

  createPrimaryWindow(
    defaultWidth,
    defaultHeight,
    screenWidth,
    screenHeight,
    externalDisplay
  );

  globalShortcut.unregisterAll();
});

exec('lsb_release -d', { silent: true }, function (code, stdout, stderr) {
  console.log(`Ubuntu ${stdout.trim()}`);
});
exec('node -v', { silent: true }, function (code, stdout, stderr) {
  console.log(`Node: ${stdout.trim()}`);
});

nfc.on('reader', (reader) => {
  console.log(`Device Attached: ${reader.name}`);
  store.dispatch(actions.shoe.nfcReaderAttached());

  reader.on('card', async (card) => {
    let cardType = 'Unknown';
    switch (card.type) {
      case 'TAG_ISO_14443_3':
        cardType = 'MIFARE Classic';
        break;
      case 'TAG_ISO_14443_4':
        cardType = 'MIFARE Classic EV1 1K';
        break;
      default:
        break;
    }

    pretty.info(`${cardType} Card: ${card.uid} Inserted`);
    if (card?.uid) {
      pretty.debug(`handleMifareCardInsert:Player Card ${card?.uid}`);
      primaryWindow.webContents.send('nfc:handleMifareCardInsert', card.uid);
    }
  });

  reader.on('card.off', (card) => {
    pretty.info(`Card ${card.uid} Removed.`);
    primaryWindow.webContents.send('nfc:handleMifareCardRemove', card.uid);
  });

  reader.on('error', (err) => {
    console.log(`${reader.reader.name}  an error occurred`, err);
  });

  reader.on('end', () => {
    console.log(`${reader.reader.name}  device removed`);
    store.dispatch(actions.shoe.nfcReaderDetached());
  });
});

nfc.on('error', (err) => {
  console.log('an error occurred', err);
});

store.dispatch(actions.shoe.shuffleDeck52());

/* 
    Handle IPC messages from Renderer
    - Card Drawn
    - Deck Shuffle
    - Config Update
*/

ipcMain.handle('server:InitialStoreRequest', (e, args) => {
  pretty.info(`Handling server:InitialStoreRequest`);
  return store.getState();
});

ipcMain.on('shoe:CardDrawn', (e, { suit, rank }) => {
  console.log('shoe:CardDrawn', suit, rank);
  handleCardDrawn(suit, rank);
});

ipcMain.on('shoe:DrawRandomCard', (e, args) => {
  console.log('shoe:DrawRandomCard', args);
  handleDrawRandomCard();
});

ipcMain.on('shoe:ShuffleDeck52', (e, args) => {
  console.log('shoe:ShuffleDeck52', args);
  handleShuffleDeck52();
});

ipcMain.on('shoe:ServerChange', (e, args) => {
  console.log('shoe:ServerChange', args);
  handleServerChange(args);
});
