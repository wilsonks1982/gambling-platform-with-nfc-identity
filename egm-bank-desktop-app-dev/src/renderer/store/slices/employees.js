import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  employees: []
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState: INITIAL_STATE,
  reducers: {
    EmployeesRefresh(state, { payload }) {},
    EmployeesSet(state, { payload }) {
      state.employees = payload;
    },
  },
});

export const { EmployeesSet, EmployeesRefresh } = employeesSlice.actions;

export default employeesSlice;
