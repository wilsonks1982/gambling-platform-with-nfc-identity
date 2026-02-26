import { createSlice } from '@reduxjs/toolkit';

function generateTimeStamp() {
  const now = new Date();

  const year = now.getFullYear().toString();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

const INITIAL_STATE = {
  uid: null,
  login: false,
  account: '',
  pin: '',
  lastReset: '2025/03/20 00:00:00.000',
};

const attendantSlice = createSlice({
  name: 'attendant',
  initialState: INITIAL_STATE,
  reducers: {
    AttendantLoginRequest(state, { payload }) {
      console.log(`AttendantLoginRequest: ${payload}`);
      state.login = false;
    },
    AttendantLoginSuccess(state, { payload }) {
      console.log(`AttendantLoginSuccess: ${payload}`);
      state.login = true;
    },
    AttendantLoginFailure(state, { payload }) {
      console.log(`AttendantLoginFailure: ${payload}`);
      state.login = false;
    },
    AttendantSet(state, { payload }) {
      return { ...state, ...payload };
    },
    AttendantUpdate(state, { payload }) {
      return { ...state, ...payload };
    },
    AttendantLastReset(state, { payload }) {
      return { ...state, lastReset: generateTimeStamp() };
    },
  },
});

export const {
  AttendantSet,
  AttendantUpdate,
  AttendantLoginRequest,
  AttendantLoginSuccess,
  AttendantLoginFailure,
  AttendantLastReset,
} = attendantSlice.actions;

export default attendantSlice;
