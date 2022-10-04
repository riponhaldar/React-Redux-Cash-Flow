import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incomeItems: localStorage.getItem('income')
    ? JSON.parse(localStorage.getItem('income'))
    : [],
  expensesList: localStorage.getItem('expense')
    ? JSON.parse(localStorage.getItem('expense'))
    : [],
  incomeShow: false,
  expensesShow: false,
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
    addExpenses: (state, action) => {
      const allExpense = { ...action.payload };
      state.expensesList.push(allExpense);
      localStorage.setItem('expense', JSON.stringify(state.expensesList));
      return state;
    },
    toggleIncome: (state, action) => {
      state.incomeShow = action.payload;
      return state;
    },
    toggleEpenses: (state, action) => {
      state.expensesShow = action.payload;
      return state;
    },
  },
});

export const { addIncome, addExpenses, toggleIncome, toggleEpenses } =
  IncomeSlice.actions;

export default IncomeSlice.reducer;
