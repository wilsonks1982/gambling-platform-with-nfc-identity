import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  uid: '',
  nickNameFormOn: false,
  pinNumberFormOn: false,
};

const cardSlice = createSlice({
  name: 'card',
  initialState: INITIAL_STATE,
  reducers: {
    cardSet(state, { payload }) {
      //Using INITIAL_STATE also to keep other fields if we only send for example: uid (other fields will be taken from initial)
      return { ...INITIAL_STATE, ...payload };
    },
    cardUpdate(state, { payload }) {
      return { ...state, ...payload };
    },
    cardReset(state, { payload }) {
      return INITIAL_STATE;
    },
  },
});

export const { cardSet, cardUpdate, cardReset } = cardSlice.actions;
export default cardSlice;
