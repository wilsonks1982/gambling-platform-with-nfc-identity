import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

import App from './App';
import { store, actions } from './store/index.js';

const mountApp = () => {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
mountApp();

const handleStoreState = (StoreState) => {
  store.dispatch(actions.config.configSet(StoreState.config));
};

if (window.ipcRenderer) {
  console.log('Electron IPC available');
  window.ipcRenderer.invoke('server:InitialStoreRequest').then((StoreState) => {
    console.log('Sending server:InitialStoreRequest');
    handleStoreState(StoreState);
  });

  window.ipcRenderer.on('server:UpdateStore', (e, StoreState) => {
    console.log('Handling server:UpdateStore');
    handleStoreState(StoreState);
  });

  window.ipcRenderer.on('nfc:handleMifareCardInsert', (e, uid) => {
    console.log('nfc:handleMifareCardInsert', uid);
    store.dispatch(actions.filters.playerCardsUidSet(uid.slice(3)));
    store.dispatch(actions.card.cardSet({uid: uid}));
  });

  window.ipcRenderer.on('nfc:handleMifareCardRemove', (e, uid) => {
    console.log('nfc:handleMifareCardRemove', uid);
    store.dispatch(actions.filters.playerCardsUidReset());
    store.dispatch(actions.card.cardReset());
  });

  window.ipcRenderer.on('nfc:handleMifareAttendantCardInsert', (e, uid) => {
    console.log('nfc:handleMifareAttendantCardInsert', uid);
  });

  window.ipcRenderer.on('nfc:handleMifareManagerCardInsert', (e, uid) => {
    console.log('nfc:handleMifareManagerCardInsert', uid);
  });
}
