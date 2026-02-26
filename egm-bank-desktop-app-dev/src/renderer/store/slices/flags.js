import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  nickNameFormOn: false,
  pinNumberFormOn: false,
};

const flagsSlice = createSlice({
  name: 'flags',
  initialState: INITIAL_STATE,
  reducers: {
    cardNickNameFormOn(state, { payload }) {
      state.nickNameFormOn = true;
    },
    cardNickNameFormOff(state, { payload }) {
      state.nickNameFormOn = false;
    },
    cardPinNumberChangeFormOn(state, { payload }) {
      state.pinNumberFormOn = true;
    },
    cardPinNumberChangeFormOff(state, { payload }) {
      state.pinNumberFormOn = false;
    },
  },
});

export const {
  cardNickNameFormOn,
  cardNickNameFormOff,
  cardPinNumberChangeFormOn,
  cardPinNumberChangeFormOff,
} = flagsSlice.actions;
export default flagsSlice;
