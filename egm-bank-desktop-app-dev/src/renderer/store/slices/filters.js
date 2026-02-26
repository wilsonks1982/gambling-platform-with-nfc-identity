import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  playerCardsUid: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    playerCardsUidSet(state, { payload }) {
      state.playerCardsUid = payload;
    },
    playerCardsUidReset(state, { payload }) {
      state.playerCardsUid = '';
    },
  },
});

export const {
  playerCardsUidSet,
  playerCardsUidReset,
} = filtersSlice.actions;
export default filtersSlice;
