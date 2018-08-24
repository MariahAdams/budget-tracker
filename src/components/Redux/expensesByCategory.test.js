import { 
  expenses,
  EXPENSE_ADD } from './expensesByCategory';
import { 
/* categories, */
/* CATEGORY_LOAD, */
/*  CATEGORY_ADD, */
/* CATEGORY_REMOVE */  } from './reducers';

describe('Expense Reducers', () => {

  it('initializes to an empty array', () => {
    const state = expenses(undefined, {});
    expect(state).toEqual([]);
  });

  it('adds an expense', () => {
    const expense1 = { name: '1' };
    const expense2 = { name: '2' };
    const expense3 = { name: '3' };

    const state = expenses([expense1, expense2], {
      type: EXPENSE_ADD,
      payload: expense3
    });

    expect(state).toEqual([expense1, expense2, expense3]);
  });
});