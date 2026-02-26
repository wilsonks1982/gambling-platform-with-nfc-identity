import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  stations: [],
  loading: false,
};

const stationsSlice = createSlice({
  name: 'stations',
  initialState: INITIAL_STATE,
  reducers: {
    StationsRefresh(state, { payload }) {},
    StationsSet(state, { payload }) {
      state.stations = payload;
      state.loading = false;
    },
    StationsLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});

export const { StationsSet, StationsRefresh, StationsLoading } = stationsSlice.actions;

export default stationsSlice;
