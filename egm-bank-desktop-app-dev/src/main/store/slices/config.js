import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  uri: {
    playersUri: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/GetTestUsersReq',
      query: '',
      fragment: '',
    },
    ChangeNickName: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/ChangeNickName',
    },
    ChangePinNumber: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/ChangePinNumber',
    },
    PlayerSessionClose: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/PlayerSessionClose',
    },
    BuyInBalance: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/BuyInBalance',
    },
    BuyOutBalance: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/BuyOutBalance',
    },
    TransactionUri: {
      scheme: 'http',
      host: '192.168.1.127',
      port: '9001',
      path: '/api/v1/transaction',
    },
  },

  slots: [
    {
      id: '1',
      ipAddress: '192.168.1.152',
      egmId: 'WAS-1001',
      status: 'Active',
    },
    {
      id: '2',
      ipAddress: '192.168.1.234',
      egmId: 'WAS-1002',
      status: 'Active',
    },
    {
      id: '3',
      ipAddress: '192.168.1.151',
      egmId: 'WAS-1003',
      status: 'Active',
    },
    {
      id: '4',
      ipAddress: '192.168.1.142',
      egmId: 'WAS-1004',
      status: 'InActive',
    },
    {
      id: '5',
      ipAddress: '192.168.1.142',
      egmId: 'WAS-1005',
      status: 'InActive',
    },
    {
      id: '6',
      ipAddress: '192.168.1.142',
      egmId: 'WAS-1006',
      status: 'InActive',
    },
  ],
  status: {
    delivery: false,
    nfc: false,
    network: false,
  },
  developers: [],
  players: [
  ],
};

const configSlice = createSlice({
  name: 'config',
  initialState: INITIAL_STATE,
  reducers: {
    nfcReaderAttached(state, { payload }) {
      state.status.nfc = true;
    },
    nfcReaderDetached(state, { payload }) {
      state.status.nfc = false;
    },
  },
});

export const { nfcReaderAttached, nfcReaderDetached } = configSlice.actions;

export default configSlice;
