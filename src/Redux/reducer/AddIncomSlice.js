import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incomeItems: localStorage.getItem('income')
    ? JSON.parse(localStorage.getItem('income'))
    : [],
};
const IncomeSlice = createSlice({
  name: 'Income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      const allIncome = { ...action.payload };
      state.incomeItems.push(allIncome);
      localStorage.setItem('income', JSON.stringify(state.incomeItems));
      return state;
    },
  },
});

export const { addIncome } = IncomeSlice.actions;

export default IncomeSlice.reducer;
