import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
// import { addExpense, updateExpense, removeExpense } from '../../../services/budgetApi';
// import shortid from 'shortid';

export const add = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: {
      categoryId,
      expense
    }
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: expense
});