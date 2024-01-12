// actions/budgetActions.js
export const addBudget = (budget) => ({
  type: 'ADD_BUDGET',
  payload: budget,
});

export const deleteBudget = (id) => ({
  type: 'DELETE_BUDGET',
  payload: id,
});

export const updateBudget = (id, newAmount) => ({
  type: 'UPDATE_BUDGET',
  payload: { id, newAmount },
});

export const updateBudgetFields = (id, updatedFields) => ({
  type: 'UPDATE_BUDGET_FIELDS',
  payload: { id, updatedFields },
});
